import { useTimerStore } from "../store/timerStore";

export const VideoPlayer = ({ id }) => {
  const isPlaying = useTimerStore((state) => state.isPlaying);
  return (
    <div className="relative h-1/3 w-3/4  rounded-md">
      {/* Contenedor que oculta el vìdeo*/}
      <div
        className={`absolute z-2 top-0 w-full h-full ${
          isPlaying && "bg-black"
        }`}
      ></div>

      <iframe
        width="1360"
        height="605"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1&amp;autohide=1&amp;mute=0&amp;showinfo=0&amp;autoplay=1&amp;start=30&amp;vq=small`}
        title="05 - YSY A - A POR TODO (PROD. ONIRIA)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        className={`pointer-events-none duration-200 w-full h-full ${
          isPlaying && "blur-2xl"
        }`}
      ></iframe>
    </div>
  );
};
