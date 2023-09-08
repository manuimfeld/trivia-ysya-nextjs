import { useEffect } from "react";
import { playingStore } from "../store/playingStore";

export const BlackScreen = () => {
  const playing = playingStore((state) => state.playing);
  console.log(playing);

  return (
    <div
      className={`absolute z-2 top-0 w-full h-full ${
        playing === true ? "bg-black" : "bg-none"
      }`}
    ></div>
  );
};
