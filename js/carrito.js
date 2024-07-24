const productosEnCarrito = [
    {
        id: 1,
        img: "../img/cartera-beige.jpg",
        nombre: "cartera beige",
        precio: 5200
    },
    {
        id: 2,
        img: "../img/cartera-gris.jpg",
        nombre: "cartera gris",
        precio: 5000
    },
    {
        id: 3,
        img: "../img/cartera-negra-tira-roja.jpg",
        nombre: "Cartera negra tira roja",
        precio: 5000
    },
    {
        id: 4,
        img: "../img/cartuchera-negra.jpg",
        nombre: "cartuchera negra",
        precio: 3000
    },
    {
        id: 5,
        img: "../img/cartuchera-roja.jpg",
        nombre: "Cartuchera roja",
        precio: 3000
    },
    {
        id: 6,
        img: "../img/cartuchera-gris.jpg",
        nombre: "Cartuchera gris",
        precio: 3000
    },
    {
        id: 7,
        img: "../img/llavero-print.jpg",
        nombre: "Llavero print",
        precio: 2000
    },
    {
        id: 8,
        img: "../img/llavero-rosado-gris.jpg",
        nombre: "Llavero rosado",
        precio: 2000
    },
]

let nuestrosProductos = document.getElementById("nuestros-productos")
let unidadesElement = document.getElementById("total-unidades")
let precioElement = document.getElementById("total-a-pagar")
const carritoVacioElement = document.getElementById("carrito-vacio")
const pieDeCarritoElement = document.getElementById("pie-carrito")


function renderProductos() {
    nuestrosProductos.innerHTML = "";
    const producto = JSON.parse(localStorage.getItem("productos"));
    if (producto && producto.length > 0) {

        producto.forEach(producto => {
            const card = document.createElement("div");
            card.classList = "card"
            card.innerHTML = `
    <div class="card-body">
        <img src= ../${producto.img}>
        <h3 >${producto.nombre}</h3>
        <p >$${producto.precio}</p>
        <button class= "restar">-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button class="sumar">+</button>
    </div>
    `;
            nuestrosProductos.appendChild(card);
            card
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElemento = e.target.parentElement.getElementsByTagName("span")[0]
                    cuentaElemento.innerText = agregarAlCarrito(producto);
                    actualizarTotales()
                });
            card
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto)
                    renderProductos();
                    actualizarTotales()
                });
        });
    }
}
renderProductos();
actualizarTotales();

function actualizarTotales() {
    const producto = JSON.parse(localStorage.getItem("productos"));
    let unidades = 0
    let precio = 0
    if (producto && producto.length > 0) {
        producto.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
    mensajeVacio();

}

function mensajeVacio() {
    const producto = JSON.parse(localStorage.getItem("productos"));
    carritoVacioElement.classList.toggle("escondido", producto && producto.length > 0);
    pieDeCarritoElement.classList.toggle("escondido", !(producto && producto.length > 0));
}

mensajeVacio();
