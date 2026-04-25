// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbaFsKkyPu5BQmthy58YeQGkRG2pO5XV8",
  authDomain: "login-page-642f2.firebaseapp.com",
  projectId: "login-page-642f2",
  storageBucket: "login-page-642f2.firebasestorage.app",
  messagingSenderId: "1087817540675",
  appId: "1:1087817540675:web:ca136c3026ea5d0807a0f6",
  measurementId: "G-JWCZY7NJ85"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const auth = getAuth();

const submit = document.getElementById("submit")
submit.addEventListener("click",function(event){
  event.preventDefault()

 const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account created Successfully!");
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})

