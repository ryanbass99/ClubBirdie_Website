import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzUn3GGVS6O-IKc5iTkhshyvf0P9ZDzCM",
  authDomain: "club-birdie-3d535.firebaseapp.com",
  projectId: "club-birdie-3d535",
  storageBucket: "club-birdie-3d535.firebasestorage.app",
  messagingSenderId: "827162560779",
  appId: "1:827162560779:web:1330e7f57e0b6d02b77a0e",
  measurementId: "G-6V842W2F0F",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);