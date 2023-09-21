"use client";
import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ session }) {
  return (
    <div>
      {!session ? (
        <>
          <p className="text-white">
            Por favor, inicia sesión para subir el puntaje
          </p>
          <button className="text-white" onClick={signIn()}>
            Iniciar sesión
          </button>
        </>
      ) : (
        <>
          <button className="text-white" onClick={signOut}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}
