// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAtyiwg4v1i6ekQuCc79Eu6IF3dPigyVs",
  authDomain: "fir-storage-c6644.firebaseapp.com",
  databaseURL: "https://fir-storage-c6644-default-rtdb.firebaseio.com",
  projectId: "fir-storage-c6644",
  storageBucket: "fir-storage-c6644.firebasestorage.app",
  messagingSenderId: "671735344510",
  appId: "1:671735344510:web:527fbca45ca036d11a972f"
};
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);