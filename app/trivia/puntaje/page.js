"use client";
import { redirect } from "next/navigation";
import LoginButton from "../../components/LoginButton";
import { useAnswerStore } from "../../store/answerStore";
import { useEffect } from "react";
import Leaderboard from "../../components/Leaderboard";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Points = () => {
  const answerData = useAnswerStore((state) => state.answerData);

  useEffect(() => {
    if (answerData.totalQuestions < 11) {
      redirect("/trivia");
    }
  }, []);

  const { data: session } = useSession();

  const handleRetry = () => {
    restartGame();
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-full w-3/4 mx-auto flex flex-col justify-center items-center text-center">
        {!session ? (
          <>
            <h1 className="text-white bg-orange-300">
              ¡Gracias por jugar a nuestra trivia! ¿Quieres mostrar tus
              habilidades y compararte con otros jugadores? Inicia sesión para
              publicar tu puntuación en la página y competir en nuestro ranking
              de trivia. ¡Demuestra que eres el mejor!
            </h1>
            <p className="text-white">
              Respuestas correctas:{" "}
              <span className="text-green-400">
                {answerData.correctAnswers}
              </span>
            </p>
            <p className="text-white">
              Respuestas incorrectas:{" "}
              <span className="text-red-400">
                {answerData.incorrectAnswers}
              </span>
            </p>
            <LoginButton />
          </>
        ) : (
          <>
            <p className="text-white">
              Respuestas correctas:{" "}
              <span className="text-green-400">
                {answerData.correctAnswers}
              </span>
            </p>
            <p className="text-white">
              Respuestas incorrectas:{" "}
              <span className="text-red-400">
                {answerData.incorrectAnswers}
              </span>
            </p>
            <Leaderboard />
            <button className="mt-2 text-white font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl bg-[#fc6812] ">
              Subir puntuación
            </button>
            <Link
              onClick={handleRetry}
              href="/trivia"
              className="mt-2 text-[#fc6812] font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl  bg-white  "
            >
              Volver a intentar
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Points;
//
