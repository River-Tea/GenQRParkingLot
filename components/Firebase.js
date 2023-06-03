// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwEucGJIQgC5YvKECYkvjlImIJ9oiOSzA",
  authDomain: "genqrparking.firebaseapp.com",
  projectId: "genqrparking",
  storageBucket: "genqrparking.appspot.com",
  messagingSenderId: "251439008785",
  appId: "1:251439008785:web:b0eb34e0f8b59b3b8df5b0",
  measurementId: "G-BJVJTZWFXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
