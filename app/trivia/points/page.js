"use client";
import LoginButton from "../../components/LoginButton";
import { useAnswerStore } from "../../store/answerStore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import AnswersResults from "../../components/AnswersResults";
import { postPoints } from "../../helpers/api";
import Leaderboard from "../../components/Leaderboard";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { deletePoints, getLocalPoints } from "../../helpers/localPoints";

const Points = () => {
  const answerData = useAnswerStore((state) => state.answerData);
  const { data: session } = useSession();

  useEffect(() => {
    if (answerData.totalQuestions < 11) {
    }
  }, []);

  const handlePostPoints = async () => {
    try {
      if (getLocalPoints !== undefined) {
        await postPoints(getLocalPoints);
        deletePoints();
      } else {
        await postPoints(answerData.correctAnswers);
      }
    } catch (error) {
      console.error("Error al subir la puntuación:", error);
    }
  };

  return (
    <motion.section
      initial={{ backgroundColor: "rgba(0,0,0,0.0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      transition={{ duration: 0.5 }}
      className="text-white text-center z-10 bg-darkBackground h-screen w-screen p-8 mx-auto"
    >
      <div className="mx-auto w-full sm:w-3/6 lg:w-2/6 h-full flex flex-col items-center justify-center">
        {!session ? (
          <>
            <AnswersResults answerData={answerData} />
            <Leaderboard />
            <LoginButton />
            <Link
              href="/trivia"
              className="mt-2 hover:text-white hover:bg-primary duration-200 text-primary font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl bg-white"
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
              className="mt-2 hover:text-white hover:bg-primary duration-200 text-white font-bold uppercase w-full md:w-2/4 py-2 px-4 rounded-xl bg-primary"
            >
              Subir puntuación
            </button>
            <LoginButton />
          </>
        )}
      </div>
    </motion.section>
  );
};
export default Points;
