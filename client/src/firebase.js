// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KET,
  authDomain: "mern-estate-b300d.firebaseapp.com",
  projectId: "mern-estate-b300d",
  storageBucket: "mern-estate-b300d.appspot.com",
  messagingSenderId: "546387879289",
  appId: "1:546387879289:web:7618c4364dae95af36fba8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KET,
//   authDomain: "mern-estate-c0603.firebaseapp.com",
//   projectId: "mern-estate-c0603",
//   storageBucket: "mern-estate-c0603.appspot.com",
//   messagingSenderId: "516170972484",
//   appId: "1:327166046831:web:06a7328ec9e86e720f939a"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);