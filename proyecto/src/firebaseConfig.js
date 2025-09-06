import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFkBrvchgtts2kEcVQlZ_DSFoK-56TI1M",
  authDomain: "pokeapi-16415.firebaseapp.com",
  projectId: "pokeapi-16415",
  storageBucket: "pokeapi-16415.firebasestorage.app",
  messagingSenderId: "771030533442",
  appId: "1:771030533442:web:48f6bf8066c4bce490b4db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };