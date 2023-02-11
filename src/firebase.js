import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import key from "./key";
const firebaseConfig = {
    apiKey: key,
    authDomain: "chatapp-f7b44.firebaseapp.com",
    projectId: "chatapp-f7b44",
    storageBucket: "chatapp-f7b44.appspot.com",
    messagingSenderId: "790187646894",
    appId: "1:790187646894:web:5e73c26502193774e4b23f",
    measurementId: "G-5XPKPETJY2"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);