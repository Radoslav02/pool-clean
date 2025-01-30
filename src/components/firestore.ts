import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjlJ4RE9ns8FM_XrWSxgx8wCnfHCuJWBw",
  authDomain: "pool-clean-99.firebaseapp.com",
  projectId: "pool-clean-99",
  storageBucket: "pool-clean-99.firebasestorage.app",
  messagingSenderId: "977716944623",
  appId: "1:977716944623:web:0538f22df8ed6d81ee051a",
  measurementId: "G-6CDPT0JTY6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 
export const analytics = getAnalytics(app); 