// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD25KSw2bil2NfhLOzPnQhVYvZa_0pDVcU",
  authDomain: "expense-tracker-9ff0a.firebaseapp.com",
  projectId: "expense-tracker-9ff0a",
  storageBucket: "expense-tracker-9ff0a.appspot.com",
  messagingSenderId: "447290516063",
  appId: "1:447290516063:web:837c535ac531df943171ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);