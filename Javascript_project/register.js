// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIRIoByTTUlnP24md7EeklgFqp1i_Vifs",
  authDomain: "routestories-8c66c.firebaseapp.com",
  projectId: "routestories-8c66c",
  storageBucket: "routestories-8c66c.firebasestorage.app",
  messagingSenderId: "428213198326",
  appId: "1:428213198326:web:6c1bc2f5121e57d5383bd7",
  measurementId: "G-DR3RM47JLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const auth = getAuth();

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    return;
  }

  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account Created Successfully");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
