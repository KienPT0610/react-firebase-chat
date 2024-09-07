import { useState } from 'react';
import './chatList.css'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);

    return (
        <div className='chatlist'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt=""
                    className='add'
                    onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((items, index) => (
                    <div key={index} className="item">
                        <img src="./avatar.png" alt="" />
                        <div className="texts">
                            <span>John Belus</span>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ChatList;
