import videosArray from "../../videos.json";

export const randomVideo = () => {
  let randomIndex;
  randomIndex = Math.floor(Math.random() * videosArray.length);
  return { ...videosArray[randomIndex] };
};
//
