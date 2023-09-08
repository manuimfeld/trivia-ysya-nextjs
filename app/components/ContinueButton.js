import { randomVideo } from "../helpers/randomVideo";
import { timerStore } from "../store/timerStore";
import { playingStore } from "../store/playingStore";
import { useEffect } from "react";
import { answersStore } from "../store/answersStore";

export const ContinueButton = ({ setVideo }) => {
  const timer = timerStore((state) => state.timer);
  const reset = timerStore((state) => state.reset);
  const playing = playingStore((state) => state.playing);
  const toggle = playingStore((state) => state.toggle);

  const nextVideo = () => {
    reset();
    toggle();
    setVideo(randomVideo);
  };

  useEffect(() => {
    const buttonsToRemoveClasses = document.querySelectorAll(
      ".incorrect-answer, .correct-answer"
    );

    buttonsToRemoveClasses.forEach((button) => {
      button.classList.remove("incorrect-answer", "correct-answer");
    });
  }, []);

  return (
    (playing === false || timer === 0) && (
      <button
        onClick={nextVideo}
        className="text-white font-bold uppercase w-full py-2 px-4 rounded-xl bg-[#fc6812] disabled:bg-[#b46638] disabled:text-gray-400"
      >
        Siguiente
      </button>
    )
  );
};
