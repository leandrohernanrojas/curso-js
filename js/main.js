const productos = [
    {
        id: 1,
        img: "./img/cartera-beige.jpg",
        nombre: "cartera beige",
        precio: 5200
    },
    {
        id: 2,
        img: "./img/cartera-gris.jpg",
        nombre: "cartera gris",
        precio: 5000
    },
    {
        id: 3,
        img: "./img/cartera-negra-tira-roja.jpg",
        nombre: "Cartera negra tira roja",
        precio: 5000
    },
    {
        id: 4,
        img: "./img/cartuchera-negra.jpg",
        nombre: "cartuchera negra",
        precio: 3000
    },
    {
        id: 5,
        img: "./img/cartuchera-roja.jpg",
        nombre: "Cartuchera roja",
        precio: 3000
    },
    {
        id: 6,
        img: "./img/cartuchera-gris.jpg",
        nombre: "Cartuchera gris",
        precio: 3000
    },
    {
        id: 7,
        img: "./img/llavero-print.jpg",
        nombre: "Llavero print",
        precio: 2000
    },
    {
        id: 8,
        img: "./img/llavero-rosado-gris.jpg",
        nombre: "Llavero rosado",
        precio: 2000
    },
]


let nuestrosProductos = document.getElementById("nuestros-productos")

function renderProductos(productosArray) {
    productosArray.forEach(producto => {
        const card = document.createElement("div");
        card.classList = "card"
        card.innerHTML = `
        <div class="card-body">
        <img src= ${producto.img}>
        <h3 ">${producto.nombre}</h3>
        <p ">$${producto.precio}</p>
        <button class=" btn boton-agregar" id="${producto.id}"> Agregar </button>
        </div>`


        nuestrosProductos.appendChild(card);
        card.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
    });
}


renderProductos(productos);

