import { timerStore } from "../store/timerStore";

export const BlackScreen = () => {
  const isPlaying = timerStore((state) => state.isPlaying);

  return (
    <div
      className={`absolute z-2 top-0 w-full h-full ${
        isPlaying === true ? "bg-black" : "bg-none"
      }`}
    ></div>
  );
};
