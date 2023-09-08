"use client";
import { VideoPlayer } from "../components/VideoPlayer";
import { TriviaAnswers } from "../components/TriviaAnswers";
import { ContinueButton } from "../components/ContinueButton";
import { BlackScreen } from "../components/BlackScreen";
import { Timer } from "../components/Timer";
import { useEffect, useState } from "react";
import { randomVideo } from "../helpers/randomVideo";
import { redirect } from "next/navigation";
import { answersStore } from "../store/answersStore";

const Page = () => {
  const [video, setVideo] = useState(null);
  const answers = answersStore((state) => state.answers);

  useEffect(() => {
    if (answers === 11) {
      redirect("/trivia/puntaje");
    }

    if (video === null) {
      setVideo(randomVideo);
    }

    // Elimino las clases de los botones cada nuevo vídeo
    const buttonsToRemoveClasses = document.querySelectorAll(
      ".incorrect-answer, .correct-answer"
    );
    buttonsToRemoveClasses.forEach((button) => {
      button.classList.remove(
        "incorrect-answer",
        "correct-answer",
        "selected-answer"
      );
    });
  }, [video]);

  return (
    <>
      {video !== null ? (
        <main className="flex flex-col items-center justify-start h-screen w-screen bg-[url('/bg-antezana.webp')] bg-no-repeat bg-center bg-cover">
          <h1>{answers}/11</h1>
          <div className="mt-24 relative h-1/3 w-3/4  rounded-md">
            <BlackScreen />
            <VideoPlayer id={video.id} />
          </div>
          <div className="w-3/4  flex flex-col md:flex-row flex-wrap justify-start items-center  md:justify-between md:items-center">
            <Timer />
            {video.options.map((answer, index) => {
              return (
                <TriviaAnswers
                  key={index}
                  title={video.title}
                  answer={answer}
                />
              );
            })}
            <ContinueButton setVideo={setVideo} />
          </div>
        </main>
      ) : null}
    </>
  );
};
export default Page;
//
