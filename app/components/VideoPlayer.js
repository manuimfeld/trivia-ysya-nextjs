export const VideoPlayer = ({ id }) => {
  return (
    <iframe
      width="1360"
      height="605"
      src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;modestbranding=1&amp;autohide=1&amp;mute=0&amp;showinfo=0&amp;autoplay=1&amp;start=30&amp;vq=hd360`}
      title="05 - YSY A - A POR TODO (PROD. ONIRIA)"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
      className="w-full h-full"
    ></iframe>
  );
};
