// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
// import * as FireStore from 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlifUK6FaYnW3IcnqMdMlTO0uFG80VfEI",
    authDomain: "iot-baiguixe.firebaseapp.com",
    databaseURL: "https://iot-baiguixe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iot-baiguixe",
    storageBucket: "iot-baiguixe.appspot.com",
    messagingSenderId: "54812646578",
    appId: "1:54812646578:web:74c7c0f2914c666735fdab"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default { firebase };


