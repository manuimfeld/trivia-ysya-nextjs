import Swal from "sweetalert2";

export const showSucessAlert = (callback) => {
  return Swal.fire({
    title: "Éxito",
    text: "Puntuación enviada con éxito",
    icon: "sucess",
    showCancelButton: true,
    confirmButtonText: "Ver la tabla de puntos",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      callback(); // Llama al callback cuando se hace clic en "Aceptar"
    }
  });
};

export const showErrorAlert = (message, callback) => {
  return Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    showCancelButton: true,
    confirmButtonText: "Volver a jugar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      callback(); // Llama al callback cuando se hace clic en "Aceptar"
    }
  });
};
