import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDooWVTuy9-pO0wKvA9oHS2XEAh2b1fEA4",
  authDomain: "chat-app-2f3e4.firebaseapp.com",
  projectId: "chat-app-2f3e4",
  storageBucket: "chat-app-2f3e4.appspot.com",
  messagingSenderId: "57611988261",
  appId: "1:57611988261:web:2fd5944d99e5c1e4523ecc",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
