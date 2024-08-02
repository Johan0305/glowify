const services = [
  {
    title: "Basic",
    description: "Comienza con el cuidado esencial",
    bg: "#CDC4FB",
    titleColor: "#2700EF",
    color: "#0B2131",
    svg: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3772 6.80317C24.762 7.14954 24.7932 7.74231 24.4469 8.12716L14.7749 18.8738C13.5567 20.2274 11.4944 20.3961 10.0724 19.2585L5.66438 15.7321C5.26007 15.4086 5.19452 14.8187 5.51797 14.4144C5.84142 14.01 6.43138 13.9445 6.83569 14.2679L11.2437 17.7944C11.8901 18.3114 12.8275 18.2348 13.3812 17.6195L23.0532 6.87285C23.3996 6.488 23.9923 6.4568 24.3772 6.80317Z" fill="#2700EF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.81256 22.5C7.81256 21.9822 8.23229 21.5625 8.75006 21.5625H16.2501C16.7678 21.5625 17.1876 21.9822 17.1876 22.5C17.1876 23.0178 16.7678 23.4375 16.2501 23.4375H8.75006C8.23229 23.4375 7.81256 23.0178 7.81256 22.5Z" fill="#2700EF"/></svg>',
    points: [
      {
        title: "Cuidado Diario",
        description:
          "Recibe los productos básicos para mantener tu piel radiante todos los días.",
      },
      {
        title: "Tratamiento Semanal",
        description:
          "Incluye exfoliantes y mascarillas para un tratamiento más profundo una vez por semana.",
      },
      {
        title: "Asesoría Personalizada",
        description:
          "Accede a consejos de nuestros expertos para sacar el máximo provecho de tus productos.",
      },
      {
        title: "Envío Gratuito",
        description:
          "Disfruta de envío gratuito en todos tus pedidos mensuales.",
      },
    ],
    buttonText: "Lo quiero",
  },
  {
    title: "Pro",
    description: "Lleva tu cuidado al siguiente nivel",
    bg: "#FB998A",
    titleColor: "#D62308",
    color: "#0B2131",
    svg: '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3772 6.80317C24.762 7.14954 24.7932 7.74231 24.4469 8.12716L14.7749 18.8738C13.5567 20.2274 11.4944 20.3961 10.0724 19.2585L5.66438 15.7321C5.26007 15.4086 5.19452 14.8187 5.51797 14.4144C5.84142 14.01 6.43138 13.9445 6.83569 14.2679L11.2437 17.7944C11.8901 18.3114 12.8275 18.2348 13.3812 17.6195L23.0532 6.87285C23.3996 6.488 23.9923 6.4568 24.3772 6.80317Z" fill="#D62308"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.81253 22.5C7.81253 21.9822 8.23227 21.5625 8.75003 21.5625H16.25C16.7678 21.5625 17.1875 21.9822 17.1875 22.5C17.1875 23.0178 16.7678 23.4375 16.25 23.4375H8.75003C8.23227 23.4375 7.81253 23.0178 7.81253 22.5Z" fill="#D62308"/></svg>',
    points: [
      {
        title: "Cuidado Diario Premium",
        description: "Productos avanzados para un cuidado diario superior.",
      },
      {
        title: "Tratamiento Completo",
        description:
          "Incluye exfoliantes, mascarillas y serums para un tratamiento completo y efectivo.",
      },
      {
        title: "Asesoría VIP",
        description:
          "Consultas personalizadas con nuestros expertos para un cuidado de la piel óptimo.",
      },
      {
        title: "Envío Gratuito y Prioritario",
        description:
          "Recibe tus productos antes que nadie con nuestro envío prioritario.",
      },
    ],
    buttonText: "Lo quiero",
  },
];

const servicesContainer = document.getElementById("container-monthly");

services.map((service) => {
  const productDiv = document.createElement("div");
  productDiv.className = "w-50 gap-5 d-flex";
  productDiv.innerHTML = `<div class="container-service rounded-2" style="background-color:${
    service.bg
  }">
              <div class="border-2 border-secondary px-5 pt-5 pb-2 border-bottom">
                <div class="d-flex flex-column gap-2">
                  <p class="fw-bold fs-5" style="color:${service.color};">${
    service.title
  }</p>
                  <p style="color:${service.color};">
                    ${service.description}
                  </p>
                </div>
              </div>
              <div
                class="d-flex flex-column p-5 gap-4"
                id="container-info-services"
              >
              ${service.points
                .map(
                  (point) => `<div class="d-flex">
                  ${service.svg}
                  <div class="d-flex flex-column pt-1">
                    <p class="mb-0 fw-bold" style="color:${service.titleColor};">${point.title}</p>
                    <p style="color:${service.color};">
                      ${point.description}
                    </p>
                  </div>
                </div>`
                )
                .join("")}
              </div>
              <div class="w-100 d-flex justify-content-center mb-5">
                <button class="bg-transparent p-2 w-50 border-1 button-shadow">${
                  service.buttonText
                }</button>
              </div>
            </div>`;

  servicesContainer.appendChild(productDiv);
});
