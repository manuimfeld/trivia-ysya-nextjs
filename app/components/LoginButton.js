import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  return (
    <div>
      {!session ? (
        <>
          <p className="text-white">
            Por favor, inicia sesión para subir el puntaje
          </p>
          <button className="text-white" onClick={() => signIn()}>
            Iniciar sesión
          </button>
        </>
      ) : (
        <>
          <button className="text-white" onClick={() => signOut()}>
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}
