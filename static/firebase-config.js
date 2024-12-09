import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0rxeDc6lxiI_qvkMqRe7LoesRuMV3fAw",
  authDomain: "flask-firebase-starter.firebaseapp.com",
  projectId: "flask-firebase-starter",
  storageBucket: "flask-firebase-starter.firebasestorage.app",
  messagingSenderId: "851604245153",
  appId: "1:851604245153:web:d8ccb410fdaabb38c7fee0",
  measurementId: "G-758KTN1LVZ"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };