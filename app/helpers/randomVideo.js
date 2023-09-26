// Importo el array de videos, titulo y respuestas desde un archivo JSON
import videosArray from "../../videos.json";

export const randomVideo = () => {
  let randomIndex;

  // Generamos un índice aleatorio dentro del rango de la longitud del array de videos
  randomIndex = Math.floor(Math.random() * videosArray.length);

  // Retorno un objeto con la data aleatoria copiando el objeto del array para evitar modificarlo
  return { ...videosArray[randomIndex] };
};
