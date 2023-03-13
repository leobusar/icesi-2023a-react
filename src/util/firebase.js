// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYV4MN-a4WRrBOfIAOucztj8AVPydmK6c",
  authDomain: "react-icesi-2023a.firebaseapp.com",
  projectId: "react-icesi-2023a",
  storageBucket: "react-icesi-2023a.appspot.com",
  messagingSenderId: "766730787797",
  appId: "1:766730787797:web:a0b817ab0c1f51fdedfb5c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const  firebaseDb = getFirestore(app)

export default firebaseDb