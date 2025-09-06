import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig.js"; // ajusta la ruta si es diferente

export default function mostrarRegistro() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <h1>📝 Registro</h1>
    <form id="formRegistro">
      <input id="nombre" type="text" placeholder="Nombre completo" required /><br><br>
      <input id="correo" type="email" placeholder="Correo" required /><br><br>
      <input id="password" type="password" placeholder="Contraseña" required /><br><br>
      <input id="fecha" type="date" required /><br><br>
      <input id="telefono" type="tel" placeholder="Teléfono" required /><br><br>
      <button type="submit">Registrarse</button>
    </form>
    <p id="mensaje"></p>
  `;

  const form = document.getElementById("formRegistro");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const fecha = document.getElementById("fecha").value;
    const telefono = document.getElementById("telefono").value;

    try {
      // 👉 Crear usuario en Firebase con correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, correo, password);
      const user = userCredential.user;

      // 👉 Guardar el nombre en el perfil de Firebase Auth
      await updateProfile(user, {
        displayName: nombre,
      });

      // 👉 Mostrar mensaje de éxito
      mensaje.textContent = "✅ Usuario registrado correctamente";

      console.log("Usuario creado:", {
        uid: user.uid,
        nombre,
        correo,
        fecha,
        telefono
      });

      // ⚡ Aquí podrías guardar fecha y teléfono en Firestore si lo necesitas
      // import { setDoc, doc } from "firebase/firestore";
      // await setDoc(doc(db, "usuarios", user.uid), { nombre, correo, fecha, telefono });

    } catch (error) {
      console.error("Error al registrar:", error.message);
      mensaje.textContent = "❌ Error: " + error.message;
    }
  });
}
