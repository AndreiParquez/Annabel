// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhceIgx8DZwSX45x1sEljXUY46xYrbnqY",
  authDomain: "websitenimahal.firebaseapp.com",
  projectId: "websitenimahal",
  storageBucket: "websitenimahal.firebasestorage.app",
  messagingSenderId: "648843621520",
  appId: "1:648843621520:web:49d6512ba69c3923741415",
  measurementId: "G-LWZDL30KSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };