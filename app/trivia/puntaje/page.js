"use client";
import LoginButton from "../../components/LoginButton";
import { answersStore } from "../../store/answersStore";

const Points = () => {
  const answerResults = answersStore((state) => state.answerResults);

  return (
    <main className="h-screen w-screen bg-[url('/bg-antezana.webp')] bg-no-repeat bg-center bg-cover">
      <div className="h-full w-3/4 mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-white bg-orange-300">
          ¡Gracias por jugar a nuestra trivia! ¿Quieres mostrar tus habilidades
          y compararte con otros jugadores? Inicia sesión para publicar tu
          puntuación en la página y competir en nuestro ranking de trivia.
          ¡Demuestra que eres el mejor!
        </h1>
        <p className="text-white">
          Respuestas correctas:{" "}
          <span className="text-green-400">{answerResults.correctAnswers}</span>
        </p>
        <p className="text-white">
          Respuestas incorrectas:{" "}
          <span className="text-red-400">{answerResults.incorrectAnswers}</span>
        </p>
        <button className="text-white font-bold uppercase w-full py-2 px-4 rounded-xl bg-[#fc6812] ">
          Subir puntuación
        </button>
        <LoginButton />
      </div>
    </main>
  );
};
export default Points;
