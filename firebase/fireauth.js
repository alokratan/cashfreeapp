// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUcDBDq2Pyyx9JX9icT7R9Lfp-Li6diEE",
  authDomain: "cashf-807ba.firebaseapp.com",
  projectId: "cashf-807ba",
  storageBucket: "cashf-807ba.appspot.com",
  messagingSenderId: "298844071118",
  appId: "1:298844071118:web:0561adc1e9d49f48891c9f"
};


export const app = initializeApp(firebaseConfig);


export const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();