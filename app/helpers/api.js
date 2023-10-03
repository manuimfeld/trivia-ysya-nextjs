import axios from "axios";
import { showErrorAlert, showSucessAlert } from "./showAlert";

export const postPoints = async (localPoints, answerData, router) => {
  try {
    if (localPoints !== null && localPoints > 0) {
      // Si se encontraron puntos locales, envíalos al servidor
      await axios.post(
        "/api/leaderboard",
        { points: localPoints },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      deletePoints(); // Elimina los puntos locales después de enviarlos al servidor
      showSucessAlert(() => {
        router.push("/trivia/leaderboard");
      });
    } else {
      if (answerData.correctAnswers === 0) {
        showErrorAlert("No puedes subir una puntuación que sea 0", () => {
          router.push("/trivia");
        });
      } else {
        // Si no hay puntos locales, envía los puntos de answerData.correctAnswers al servidor
        await axios.post(
          "/api/leaderboard",
          { points: answerData.correctAnswers },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        showSuccessAlert(() => {
          router.push("/trivia/leaderboard");
        });
      }
    }
  } catch (error) {
    showErrorAlert("Tienes que iniciar sesión para subir la puntuación", () => {
      router.push("/trivia");
    });
  }
};
