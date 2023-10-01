import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { deletePoints, savePoints } from "../helpers/localPoints";

export default function LoginButton() {
  const { data: session } = useSession();

  const handleLogin = async () => {
    try {
      await savePoints();
      signIn("google", { callbackUrl: "/trivia/points" });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      await deletePoints();
      signOut("google", { callbackUrl: "/" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!session ? (
        <>
          <p className="mt-4 text-sm">
            <span className="text-red-500">* </span>Inicia sesión con Google
            para subir el puntaje
          </p>
          <button
            className="flex justify-center items-center mx-auto my-4 font-bold uppercase w-full md:w-2/4 py-2 px-8 rounded-xl bg-white text-grayButton"
            onClick={handleLogin}
          >
            <Image
              src="/google.svg"
              alt="Logo de Google"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Google
          </button>
        </>
      ) : (
        <>
          <button
            className="flex justify-center items-center mx-auto my-4 font-bold uppercase w-full md:w-2/4 py-2 px-8 rounded-xl bg-white text-grayButton"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}
