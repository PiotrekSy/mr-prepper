// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_JoNm-LQF10etoMwTOF9zmAMeJJBg0Ns",
    authDomain: "mr-prepper-f88cc.firebaseapp.com",
    databaseURL: "https://mr-prepper-f88cc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mr-prepper-f88cc",
    storageBucket: "mr-prepper-f88cc.appspot.com",
    messagingSenderId: "317577419487",
    appId: "1:317577419487:web:7101727d13eac902f7e76a",
    measurementId: "G-PJMKJD54RQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore()