let shop = document.getElementById('shop');

let shopItemsData = [{
     id: "001",
     name: "Manicura Express (esmalte opcional)",
     price: 60,
     description: "Proceso de manicura mas rápida que la tradicional.",
     //image: ""
},
{
     id: "002",
     name: "Retiro exterior",
     price: 110,
     description: "Retiro de acrilico previo a una nueva aplicación.",
     //image: ""
},
{
     id: "003",
     name: "Retiro interior",
     price: 60,
     description: "Retiro de acrilico interior previo a una nueva aplicación.",
     //image: ""
},
{
     id: "004",
     name: "Retoque mismo diseño",
     price: 190,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena.",
     //image: ""
},
{
     id: "005",
     name: "Retoque diseño nuevo",
     price: 210,
     description: "",
     //image: ""
},
{
     id: "006",
     name: "Pedicure sencillo (esmalte opcional)",
     price: 210,
     description: "La manicura Express es recomendada cuando no tienes tiempo que perder pero no quieres sacrificar calidad. Tus manitas lucirán espectaculares y llegarás a tiempo a esa boda, XV o evento importante.",
     //image: ""
},
{
     id: "007",
     name: "Pedicure especial (esmalte opcional)",
     price: 260,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena",
     //image: ""
},
{
     id: "008",
     name: "Pedicure spa (semipermanente 1 tono)",
     price: 310,
     description: "Retiro de acr",
     //image: ""
},
{
     id: "009",
     name: "Manicure (esmalte opcional)",
     price: 160,
     description: "La manicura Express es recomendada cuando no tienes tiempo que perder pero no quieres sacrificar calidad. Tus manitas lucirán espectaculares y llegarás a tiempo a esa boda, XV o evento importante.",
     //image: ""
},
{
     id: "010",
     name: "Nivelación con Rubber",
     price: 60,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena",
     //image: ""
},
{
     id: "011",
     name: "Reconstrucción de Acrílico pre-aplicación",
     price: 90,
     description: "La manicura Express es recomendada cuando no tienes tiempo que perder pero no quieres sacrificar calidad. Tus manitas lucirán espectaculares y llegarás a tiempo a esa boda, XV o evento importante.",
     //image: ""
},
{
     id: "012",
     name: "Tratamiento Onicofagia",
     price: 300,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena",
     //image: ""
},
{
     id: "013",
     name: "Gel Semipermanente (Manicura Express)",
     price: 160,
     description: "Máximo 3 tonos.",
     //image: ""
},
{
     id: "014",
     name: "Gel Semipermanente (Manicura Express)",
     price: 180,
     description: "Tonos a elegir.",
     //image: ""
},
{
     id: "015",
     name: "Gel Semipermanente (Manicura Express)",
     price: 190,
     description: "Dipping.",
     //image: ""
},
{
     id: "016",
     name: "Gel Semipermanente (Manicura Express)",
     price: 260,
     description: "Calidad Premium.",
     //image: ""
}
]
let generateYeriShop = () => {
     return (shop.innerHTML = shopItemsData.map((x) => {
          let { id, name, price, description, image } = x;
          return `
          <div id=service-id-${id} class="services">
               <img width="200" src=${image} alt="">
                    <div class="details">
                    <h3>${name}</h3>
                    <p>${description}</p>
                         <div class="price-quantity">
                              <h2>${price}</h2>
                              <div class="buttons">
                              <i class="bi bi-dash-square"></i>
                              <div id=${id}class="quantity">0</div>
                              <i class="bi bi-plus-square"></i>
                         </div>
                    </div>
               </div>
          </div>
          `;
     })
     .join(""));
};

generateYeriShop();