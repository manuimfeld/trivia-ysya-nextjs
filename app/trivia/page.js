"use client";
import { VideoPlayer } from "../components/VideoPlayer";
import { TriviaAnswers } from "../components/TriviaAnswers";
import { ContinueButton } from "../components/ContinueButton";
import { Timer } from "../components/Timer";
import { useEffect } from "react";
import { randomVideo } from "../helpers/randomVideo";
import { redirect } from "next/navigation";
import { useAnswerStore } from "../store/answerStore";
import removeClasses from "../helpers/removeClasses";
import ResultMessage from "../components/ResultMessage";

const Trivia = () => {
  // Obtener la pregunta y las respuestas actuales, las respondidas, y la funcion para setear la pregunta
  const {
    answerData: { currentQuestion, totalQuestions },
    setCurrentQuestionData,
  } = useAnswerStore();

  // Efecto que se ejecuta cuando cambia la pregunta actual
  useEffect(() => {
    // Redirigir a la página de puntuación si ya se respondieron todas las preguntas
    if (currentQuestion !== null && totalQuestions === 11) {
      redirect("/trivia/puntaje");
    }

    // Si no hay una pregunta actual, seleccionar una pregunta aleatoria
    if (currentQuestion === null) {
      setCurrentQuestionData(randomVideo());
    }

    removeClasses();
  }, [currentQuestion]);

  if (currentQuestion !== null) {
    return (
      <section className="text-white text-center z-10  h-screen w-screen p-8 mx-auto">
        <div className="mx-auto w-full sm:w-5/6 lg:w-4/6 h-full flex flex-col items-center justify-center">
          <h1 className="py-2 px-4 m-2 bg-gradient-to-r from-[rgba(255,_87,_51,1)] to-[rgba(255,_87,_51,0.75)] rounded-[20px]">
            {totalQuestions}/11
          </h1>
          <VideoPlayer id={currentQuestion.id} />
          <div className="w-3/4  flex flex-col md:flex-row flex-wrap justify-start items-center  md:justify-between md:items-center">
            <Timer />
            {currentQuestion.options.map((answer, index) => {
              return (
                <TriviaAnswers
                  key={index}
                  answer={answer}
                  currentQuestion={currentQuestion.title}
                />
              );
            })}
            <ResultMessage />
            <ContinueButton />
          </div>
        </div>
      </section>
    );
  }
};
export default Trivia;
