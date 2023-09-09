"use client";
import { VideoPlayer } from "../components/VideoPlayer";
import { TriviaAnswers } from "../components/TriviaAnswers";
import { ContinueButton } from "../components/ContinueButton";
import { BlackScreen } from "../components/BlackScreen";
import { Timer } from "../components/Timer";
import { useEffect } from "react";
import { randomVideo } from "../helpers/randomVideo";
import { redirect } from "next/navigation";
import { useAnswerStore } from "../store/answerStore";
import removeClasses from "../helpers/removeClasses";

const Trivia = () => {
  const answerData = useAnswerStore((state) => state.answerData);
  const { currentQuestion } = useAnswerStore((state) => state.answerData);
  const setCurrentQuestion = useAnswerStore(
    (state) => state.setCurrentQuestion
  );

  useEffect(() => {
    if (currentQuestion !== null && answerData.totalQuestions === 11) {
      redirect("/trivia/puntaje");
    }

    if (currentQuestion === null) {
      setCurrentQuestion(randomVideo());
    }

    removeClasses();
  }, [currentQuestion]);

  if (currentQuestion !== null) {
    return (
      <div className="z-10 flex flex-col items-center justify-start h-screen w-screen">
        <h1>{answerData.totalQuestions}/11</h1>
        <div className="mt-24 relative h-1/3 w-3/4  rounded-md">
          <BlackScreen />
          <VideoPlayer id={currentQuestion.id} />
        </div>
        <div className="w-3/4  flex flex-col md:flex-row flex-wrap justify-start items-center  md:justify-between md:items-center">
          <Timer />
          {currentQuestion.options.map((answer, index) => {
            return <TriviaAnswers key={index} answer={answer} />;
          })}
          <ContinueButton />
        </div>
      </div>
    );
  }
};
export default Trivia;
