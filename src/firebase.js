// import firebase from "./firebase";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBu5f9fol7-8ZeNXyWbDK5Vk9oa05KQNB0",
    authDomain: "disneyplus-clon1.firebaseapp.com",
    projectId: "disneyplus-clon1",
    storageBucket: "disneyplus-clon1.appspot.com",
    messagingSenderId: "253488437960",
    appId: "1:253488437960:web:c897aa1addf82ee7de23fd",
    measurementId: "G-1BSE7MGKMK"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;

