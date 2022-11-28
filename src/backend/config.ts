import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import firebase from "firebase/app"

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: "AIzaSyDspNsY1WBMYuYAfHeMlAEgLR_0XCjn6tA",
//     authDomain: "next-crud-b4aa3.firebaseapp.com",
//     projectId: "next-crud-b4aa3",
//     storageBucket: "next-crud-b4aa3.appspot.com",
//     messagingSenderId: "480048418989",
//     appId: "1:480048418989:web:e039b511fec194144e7624",
//   });
// }

// export default firebase;




const firebaseConfig = {
  apiKey: "AIzaSyDspNsY1WBMYuYAfHeMlAEgLR_0XCjn6tA",
  authDomain: "next-crud-b4aa3.firebaseapp.com",
  projectId: "next-crud-b4aa3",
  storageBucket: "next-crud-b4aa3.appspot.com",
  messagingSenderId: "480048418989",
  appId: "1:480048418989:web:e039b511fec194144e7624"
};

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore();




