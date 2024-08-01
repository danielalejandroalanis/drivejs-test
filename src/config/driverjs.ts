import { driver } from "driver.js";

export const driverObj = driver({
  showProgress: true,
  steps: [
    {
        element: "#theme-mode-info",
        popover: {
          title: "Cambiar el tema",
          description: "Haz clic en el icono de la luna para cambiar el tema, puedes elegir entre claro y oscuro",
        },
      },
    {
      element: "#card-info",
      popover: {
        title: "Cada personaje es único",
        description: "Haz clic en cada tarjeta para ver más detalles",
      },
    },
    {
      element: "#fav-info",
      popover: {
        title: "Agregalo a tus favoritos",
        description: "Haz clic en el corazón para agregarlo a tus favoritos",
      },
    },
  ],
});


export function startTheMagicShow() {
    driverObj.drive();
  }