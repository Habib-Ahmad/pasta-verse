import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOqlsCsqJ-X6Zuce6Avn1Oqc45NeH3AL0",
  authDomain: "pasta-verse.firebaseapp.com",
  projectId: "pasta-verse",
  storageBucket: "pasta-verse.appspot.com",
  messagingSenderId: "981989030341",
  appId: "1:981989030341:web:6e50862a4ba72cb7c4b3ac",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
