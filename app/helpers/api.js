import axios from "axios";

export const postPoints = async (points) => {
  try {
    const response = await axios.post(
      "/api/leaderboard",
      { points: points },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;

    if (response.status === 200) {
      // Axios devuelve un status en lugar de "ok"
      console.log(data);
    } else {
      console.error("Error al subir la puntuación:", data.error);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};
