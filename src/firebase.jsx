import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCskCU9NKOCI9zLNn4CarWp0E2ZOpJLg-E",
  authDomain: "collegecrux-49050.firebaseapp.com",
  projectId: "collegecrux-49050",
  storageBucket: "collegecrux-49050.appspot.com",
  messagingSenderId: "1044235692568",
  appId: "1:1044235692568:web:778ec3142f960463c1716d",
  measurementId: "G-1J4RM33ZXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);