"use client";
import LoginButton from "../../components/LoginButton";
import { useAnswerStore } from "../../store/answerStore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AnswersResults from "../../components/AnswersResults";
import { postPoints } from "../../helpers/api";
import Leaderboard from "../../components/Leaderboard";
import { useEffect } from "react";

const Points = () => {
  const answerData = useAnswerStore((state) => state.answerData);
  const { data: session } = useSession();

  useEffect(() => {
    if (answerData.totalQuestions < 11) {
    }
  }, []);

  const handlePostPoints = async () => {
    try {
      await postPoints(correctAnswers);
    } catch (error) {
      console.error("Error al subir la puntuación:", error);
    }
  };

  return (
    <section className="text-white text-center z-10 bg-darkBackground h-screen w-screen p-8 mx-auto">
      <div className="mx-auto w-full sm:w-3/6 lg:w-2/6 h-full flex flex-col items-center justify-center">
        {!session ? (
          <>
            <AnswersResults answerData={answerData} />
            <Leaderboard />
            <LoginButton />
            <Link
              href="/trivia"
              className="mt-2 text-primary font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl bg-white"
            >
              Volver a intentar
            </Link>
          </>
        ) : (
          <>
            <p className="text-white">
              ¡Hola, {session.user.name}! Tus resultados son:
            </p>
            <AnswersResults answerData={answerData} />
            <Leaderboard />
            <button
              onClick={handlePostPoints}
              className="mt-2 text-white font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl bg-primary"
            >
              Subir puntuación
            </button>
            <LoginButton />
          </>
        )}
      </div>
    </section>
  );
};
export default Points;
