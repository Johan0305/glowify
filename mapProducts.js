const products = [
  {
    name: "Paleta de Sombras",
    description: "Una variedad de sombras para crear looks increíbles.",
    price: "$20.00",
    image: "./assets/1.png", // Añade la URL de la imagen aquí
  },
  {
    name: "Kit Brochas",
    description: "Kit completo de brochas para maquillaje profesional.",
    price: "$10.00",
    image: "./assets/2.png", // Añade la URL de la imagen aquí
  },
  {
    name: "Splash",
    description: "Fragancia refrescante para todo el día.",
    price: "$5.00",
    image: "./assets/3.png", // Añade la URL de la imagen aquí
  },
  {
    name: "Brillo Dior",
    description: "Brillo labial de alta calidad para un look deslumbrante.",
    price: "$20.00",
    image: "./assets/4.png", // Añade la URL de la imagen aquí
  },
  {
    name: "Fijador Maquillaje",
    description: "Fijador para mantener tu maquillaje intacto todo el día.",
    price: "$8.00",
    image: "./assets/5.png", // Añade la URL de la imagen aquí
  },
  {
    name: "3 en 1 HudaMoji",
    description: "Paleta multifuncional para ojos, mejillas y labios.",
    price: "$15.00",
    image: "./assets/6.png", // Añade la URL de la imagen aquí
  },
  {
    name: "Pestañina",
    description: "Rímel para unas pestañas largas y voluminosas.",
    price: "$3.00",
    image: "./assets/7.png", // Añade la URL de la imagen aquí
  },
  {
    name: "Kit depilación",
    description: "Kit completo para una depilación profesional en casa.",
    price: "$50.00",
    image: "./assets/8.png", // Añade la URL de la imagen aquí
  },
];

const productsContainer = document.getElementById("container-products");

products.map((product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product d-flex flex-column align-items-center gap-2";

  const containerImage = document.createElement("div");
  containerImage.style = "width: 200px; height: 200px;";
  containerImage.className =
    "containerImageProduct rounded-3 p-1 d-flex justify-content-center";
  productDiv.appendChild(containerImage);

  const figure = document.createElement("figure");
  figure.className = "w-75 d-flex";
  containerImage.appendChild(figure);

  const image = document.createElement("img");
  image.src = product.image;
  image.className = "w-100 object-fit-contain";
  figure.appendChild(image);

  const containerText = document.createElement("div");
  productDiv.appendChild(containerText);

  const productName = document.createElement("h3");
  productName.className = "fs-5 text-center mb-0";
  productName.textContent = product.name;
  containerText.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;
  productPrice.className = "fs-5 text-center";
  containerText.appendChild(productPrice);

  productsContainer.appendChild(productDiv);
});
