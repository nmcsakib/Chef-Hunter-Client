// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ReicU8ydu4YwfEXgrrsf6IMtEFSpBz0",
  authDomain: "chef-hunter-5ddb4.firebaseapp.com",
  projectId: "chef-hunter-5ddb4",
  storageBucket: "chef-hunter-5ddb4.appspot.com",
  messagingSenderId: "800750149536",
  appId: "1:800750149536:web:75965b3213dd02c5d48ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app