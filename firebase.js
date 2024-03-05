// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGoDC9Wp9Dw1xO4G6sLhlGw7wKE8hARA",
  authDomain: "flixapp-99edd.firebaseapp.com",
  projectId: "flixapp-99edd",
  storageBucket: "flixapp-99edd.appspot.com",
  messagingSenderId: "272917627400",
  appId: "1:272917627400:web:676ed822b7eb62599c47bd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
