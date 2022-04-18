// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBep_tsZeAz3CLP_bxaFpc2DFTLUrZ19h0",
    authDomain: "tax-laywer-bangladesh.firebaseapp.com",
    projectId: "tax-laywer-bangladesh",
    storageBucket: "tax-laywer-bangladesh.appspot.com",
    messagingSenderId: "461323241498",
    appId: "1:461323241498:web:ce1cb588a9f26e357b29a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;