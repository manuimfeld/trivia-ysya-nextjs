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
  const { data: session } = useSession();

  useEffect(() => {
    if (answerData.totalQuestions < 11) {
      redirect("/trivia");
    }
  }, []);

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
            <div className="bg-gray-500  w-full border-[3px] p-3 mb-8 rounded-md">
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
            </div>
            <Leaderboard />
            <LoginButton />
            <Link
              onClick={handleRetry}
              href="/trivia"
              className="mt-2 bg-[#fc6812] font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl  text-white  "
            >
              Volver a jugar
            </Link>
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
            <LoginButton />
          </>
        )}
      </div>
    </section>
  );
};
export default Points;
