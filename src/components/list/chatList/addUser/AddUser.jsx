import './addUser.css'
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';
import { useState } from 'react';
import { useUserStore } from '../../../../lib/userStore.'
import { toast } from 'react-toastify';

const AddUser = ({ setAddMode }) => {

    const [user, setUser] = useState(null);

    const { currentUser } = useUserStore();

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');

        try {
            const useRef = collection(db, "users");
            const q = query(useRef, where("username", "==", username));

            const querySnapShot = await getDocs(q);

            if (!querySnapShot.empty) {
                setUser(querySnapShot.docs[0].data());
            }

        } catch (err) {
            console.log(err);
        }
    }

    const handleAdd = async () => {
        const userChatsRefs = doc(db, "userchats", currentUser.id);
        const userChatsSnap = await getDoc(userChatsRefs);

        if (userChatsSnap.exists()) {
            const userChatsData = userChatsSnap.data();
            const userAlreadyAdded = userChatsData.chats?.some(chat => chat.receiverId === user.id);

            if (userAlreadyAdded) {
                console.log("User already added");
                toast.warn("User already added");
                return;
            }
        }


        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats")


        try {
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                message: [],
            })

            await updateDoc(doc(userChatsRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                })
            });

            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                })
            });


        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="addUser">
            <div className="close" onClick={() => setAddMode(false)}>X</div>
            <h2>Add User</h2>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder='Username' name='username' />
                <button>Search</button>
            </form>
            <div className="listUsers">
                {
                    user &&
                    <div className="user">
                        <div className="detail">
                            <img src={user.avatar || "./avatar.png"} alt="" />
                            <span>{user.username}</span>
                        </div>
                        <button onClick={handleAdd}>Add user</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default AddUser;
