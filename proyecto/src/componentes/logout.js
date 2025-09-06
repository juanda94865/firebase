import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig.js";

export default function mostrarLogout() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h1>👋 Cerrar sesión</h1>
    <button id="btnLogout">Salir</button>
  `;

  document.getElementById("btnLogout").addEventListener("click", async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada correctamente ✅");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  });
}
