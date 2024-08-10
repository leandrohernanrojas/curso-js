function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos"))
    let cuenta = 0;
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("productos", JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(productos => productos.id === producto.id);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
            cuenta = 1;
        }
        else {
            nuevaMemoria[indiceProducto].cantidad++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
        return cuenta;
    }
}
function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos"))
    const indiceProducto = memoria.findIndex(productos => productos.id === producto.id);
    if (memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto, 1);
        localStorage.setItem("productos", JSON.stringify(memoria));
    }
    else {
        memoria[indiceProducto].cantidad--;
        localStorage.setItem("productos", JSON.stringify(memoria));

    }
}

function vaciarProductos(producto) {
    const memoria = JSON.parse(localStorage.getItem("productos"))
    const indiceProducto = memoria.findIndex(productos => productos.id === producto.id);
    if (memoria[indiceProducto].cantidad = 1) {
        memoria.splice(indiceProducto,1);
        localStorage.setItem("productos", JSON.stringify(memoria));
    }
}



function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

