import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: "reactchat-493ed.firebaseapp.com",
//   projectId: "reactchat-493ed",
//   storageBucket: "reactchat-493ed.appspot.com",
//   messagingSenderId: "773231292833",
//   appId: "1:773231292833:web:a0d9b4b478e28221a39be0"
// };



const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();