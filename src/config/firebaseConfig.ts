// Importa Firebase y los servicios que necesitas
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

// Configuración de Firebase
const firebaseConfig = {
  apiKey,
  authDomain: "formulario-fb258.firebaseapp.com",
  databaseURL: "https://formulario-fb258-default-rtdb.firebaseio.com",
  projectId: "formulario-fb258",
  storageBucket: "formulario-fb258.firebasestorage.app",
  messagingSenderId: "751860040582",
  appId: "1:751860040582:web:a4a6cecf9245d79ecf6207",
  measurementId: "G-PTCFWS5XMC",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

// Hacer que la sesión se mantenga guardada
setPersistence(auth, browserLocalPersistence);

export default app;
