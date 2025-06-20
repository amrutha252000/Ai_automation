// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsxWqqmQwdVy4HvcDyDcQUUr_PIr27PpE",
  authDomain: "ai-automation-labs.firebaseapp.com",
  projectId: "ai-automation-labs",
  storageBucket: "ai-automation-labs.firebasestorage.app",
  messagingSenderId: "632432567713",
  appId: "1:632432567713:web:c7cbd0730c21fedc5857e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;