import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-MJzjTXe_nHxVU2iVxHZ5TJpPud4rT_g",
  authDomain: "acadeoai.firebaseapp.com",
  projectId: "acadeoai",
  storageBucket: "acadeoai.firebasestorage.app",
  messagingSenderId: "107086358156",
  appId: "1:107086358156:web:c9f98156b77fa6f164bda9",
  measurementId: "G-Z3QMDYHT7F"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
