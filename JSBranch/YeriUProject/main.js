let shop = document.getElementById('shop');

let shopItemsData = [
{
     id: "001",
     name: "Manicura Express (esmalte opcional)",
     price: 60,
     description: "Proceso de manicura mas rápida que la tradicional.",
     image: "Media/esculturales.jpeg"
},
{
     id: "002",
     name: "Retiro exterior",
     price: 110,
     description: "Retiro de acrilico previo a una nueva aplicación.",
     image: "Media/esculturales.jpeg"
},
{
     id: "003",
     name: "Retiro interior",
     price: 60,
     description: "Retiro de acrilico interior previo a una nueva aplicación.",
     image: "Media/esculturales.jpeg"
},
{
     id: "004",
     name: "Retoque mismo diseño",
     price: 190,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena.",
     image: "Media/esculturales.jpeg"
},
{
     id: "005",
     name: "Retoque diseño nuevo",
     price: 210,
     description: "",
     image: "Media/esculturales.jpeg"
},
{
     id: "006",
     name: "Pedicure sencillo (esmalte opcional)",
     price: 210,
     description: "La manicura Express es recomendada cuando no tienes tiempo que perder pero no quieres sacrificar calidad. Tus manitas lucirán espectaculares y llegarás a tiempo a esa boda, XV o evento importante.",
     image: "Media/esculturales.jpeg"
},
{
     id: "007",
     name: "Pedicure especial (esmalte opcional)",
     price: 260,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena",
     image: "Media/esculturales.jpeg"
},
{
     id: "008",
     name: "Pedicure spa (semipermanente 1 tono)",
     price: 310,
     description: "Retiro de acr",
     image: "Media/esculturales.jpeg"
},
{
     id: "009",
     name: "Manicure (esmalte opcional)",
     price: 160,
     description: "La manicura Express es recomendada cuando no tienes tiempo que perder pero no quieres sacrificar calidad. Tus manitas lucirán espectaculares y llegarás a tiempo a esa boda, XV o evento importante.",
     image: "Media/esculturales.jpeg"
},
{
     id: "010",
     name: "Nivelación con Rubber",
     price: 60,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena",
     image: "Media/esculturales.jpeg"
},
{
     id: "011",
     name: "Reconstrucción de Acrílico pre-aplicación",
     price: 90,
     description: "La manicura Express es recomendada cuando no tienes tiempo que perder pero no quieres sacrificar calidad. Tus manitas lucirán espectaculares y llegarás a tiempo a esa boda, XV o evento importante.",
     image: "Media/esculturales.jpeg"
},
{
     id: "012",
     name: "Tratamiento Onicofagia",
     price: 300,
     description: "Uñas creadas mediante un cuidadoso proceso artesanal, el precio vale toda la pena",
     image: "Media/esculturales.jpeg"
},
{
     id: "013",
     name: "Gel Semipermanente (Manicura Express)",
     price: 160,
     description: "Máximo 3 tonos.",
     image: "Media/esculturales.jpeg"
},
{
     id: "014",
     name: "Gel Semipermanente (Manicura Express)",
     price: 180,
     description: "Tonos a elegir.",
     image: "Media/esculturales.jpeg"
},
{
     id: "015",
     name: "Gel Semipermanente (Manicura Express)",
     price: 190,
     description: "Dipping.",
     image: "Media/esculturales.jpeg"
},
{
     id: "016",
     name: "Gel Semipermanente (Manicura Express)",
     price: 260,
     description: "Calidad Premium.",
     image: "Media/esculturales.jpeg"
}
];

let yeriBasket = [];
let generateYeriShop = () => {
     return (shop.innerHTML = shopItemsData.map((yeriThings) => {
          let { id, name, price, description, image } = yeriThings;
          return `
          <div id=service-id-${id} class="services">
               <img width="200" src=${image} alt="">
                    <div class="details">
                    <h3>${name}</h3>
                    <p>${description}</p>
                         <div class="price-quantity">
                              <h2>${price}</h2>
                              <div class="buttons">
                              <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
                              <div id=${id}class="quantity">0</div>
                              <i onclick="increment(${id})"class="bi bi-plus-square"></i>
                         </div>
                    </div>
               </div>
          </div>
          `;
     })
     .join(""));
};

generateYeriShop();

let increment = (id) => {
     let selectedItem = id; 
     let search = yeriBasket.find((yeriThings) => yeriThings.id === selectedItem.id);

     if (search === undefined) {
          yeriBasket.push({
               id: selectedItem.id,
               item: 1,
     
          });
     }

     else{
          search.item += 1;
     }

     //console.log(yeriBasket);
     update(selectedItem.id);
}; // Increase the number of items 
let decrement = (id)=>{
     let selectedItem = id; 
     let search = yeriBasket.find((yeriThings) => yeriThings.id === selectedItem.id);

     if (search.item === 0) 
          return;
     else {
          search.item -= 1;
     }
     //console.log(yeriBasket);
     update();
}; // Decrease the number of items 
let update = (id) => {
     let search = yeriBasket.find((yeriThings) => yeriThings.id === id);
     console.log(search.item);
     document.getElementById(id).innerHTML = search.item;
}; // Updates the quantity displayed in numbers