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

  const postPoints = async (points) => {
    try {
      const response = await fetch("/api/leaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ points: points }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data);
      } else {
        console.error("Error al subir la puntuación:", data.error);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <section className="text-white text-center  z-10  h-screen w-screen p-8 mx-auto">
      <div className="mx-auto w-full sm:w-3/6 lg:w-2/6 h-full flex flex-col items-center justify-center">
        {!session ? (
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
            <h1 className="text-white bg-orange-300">
              ¡Gracias por jugar a nuestra trivia! ¿Quieres mostrar tus
              habilidades y compararte con otros jugadores? Inicia sesión para
              publicar tu puntuación en la página y competir en nuestro ranking
              de trivia. ¡Demuestra que eres el mejor!
            </h1>
            <Leaderboard />
            <LoginButton />
          </>
        ) : (
          <>
            <p className="text-white">
              ¡Hola, {session.user.name}! Tus resultados son:
            </p>
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
            <button
              onClick={() => postPoints(answerData.correctAnswers)}
              className="mt-2 text-white font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl bg-[#fc6812] "
            >
              Subir puntuación
            </button>
            <Link
              onClick={handleRetry}
              href="/trivia"
              className="mt-2 text-[#fc6812] font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl  bg-white  "
            >
              Volver a intentar
            </Link>
            <LoginButton session={session} />
          </>
        )}
      </div>
    </section>
  );
};
export default Points;
//
