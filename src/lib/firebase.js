import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "hellomassenger-d5d48.firebaseapp.com",
  projectId: "hellomassenger-d5d48",
  storageBucket: "hellomassenger-d5d48.appspot.com",
  messagingSenderId: "329035207111",
  appId: "1:329035207111:web:984b4a98af7b6112b849e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
