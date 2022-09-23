import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtowEb9ZY5EOPoBon0u3SlKbsInqf6h3A",
  authDomain: "signal-rn-clone-f9063.firebaseapp.com",
  projectId: "signal-rn-clone-f9063",
  storageBucket: "signal-rn-clone-f9063.appspot.com",
  messagingSenderId: "1093901887599",
  appId: "1:1093901887599:web:231768fa683891fd82059a",
};

let myApp = initializeApp(firebaseConfig);

const auth = getAuth(myApp);
const db = getFirestore(myApp);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
};
