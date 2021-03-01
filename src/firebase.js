import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7QItT-MA_b8nqiqBiY6eFsGF5OvwFOVk",
  authDomain: "chloe-video-ss.firebaseapp.com",
  projectId: "chloe-video-ss",
  storageBucket: "chloe-video-ss.appspot.com",
  messagingSenderId: "417599227733",
  appId: "1:417599227733:web:8f0c948d65b481d40411dc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
