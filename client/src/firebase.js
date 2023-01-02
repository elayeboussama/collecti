import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "collecti-5e1c6.firebaseapp.com",
    projectId: "collecti-5e1c6",
    storageBucket: "collecti-5e1c6.appspot.com",
    messagingSenderId: "1043190284432",
    appId: "1:1043190284432:web:a9541ac499ce3c4962d815"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);