// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDbwbyhxzV-yajuL_gtl1fQFVq-5xgws1o",
  authDomain: "linkedin-clone-yt-90ad1.firebaseapp.com",
  projectId: "linkedin-clone-yt-90ad1",
  storageBucket: "linkedin-clone-yt-90ad1.appspot.com",
  messagingSenderId: "493622845080",
  appId: "1:493622845080:web:ac6264cb4b316dc141faed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const db = getFirestore()
export {auth,storage,db};
export default app;