
const nuestrosProductos = document.getElementById("nuestros-productos")
const unidadesElement = document.getElementById("total-unidades")
const precioElement = document.getElementById("total-a-pagar")
const carritoVacioElement = document.getElementById("carrito-vacio")
const pieDeCarritoElement = document.getElementById("pie-carrito")
const vaciarCarritoElement = document.getElementById("vaciar-carrito")


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
        <div>
        <button class= "restar">-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button class="sumar">+</button>
        </div>
        <button class="vaciar-productos">vaciar</button>
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
            card
                .getElementsByClassName("vaciar-productos")[0]
                .addEventListener("click", (e) => {
                    vaciarProductos(producto)
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

vaciarCarritoElement.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    localStorage.removeItem("productos");
    actualizarTotales();
    renderProductos();
}
