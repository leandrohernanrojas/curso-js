

const carrito = []

const susproductos = "sus productos:"
console.log(susproductos)

let agregar = true

function carteras() {
    function carteranegra(agregar) {
        const carteranegra = {
            color: "negro",
            precio: "$500"
        }

        let confirmar = prompt("precio $500. ¿quieres agregarlo? (si/no)")
        if (confirmar == "si") {
            agregar = false
            carrito.push(500)
            console.log(carteranegra)
        }
    }

    function carteragrisplata(agregar) {
        const carteragrisplata = {
            color: "gris plata",
            precio: "$550"
        }

        let confirmar = prompt("precio $550. ¿quieres agregarlo? (si/no)")
        if (confirmar == "si") {
            agregar = false
            carrito.push(550)
            console.log(carteragrisplata)
        }
    }


    let colores = parseInt(prompt("elija una color: \n 1-negro \n 2-gris plata \n 3-volver "))
    while (colores !== 3) {
        switch (colores) {
            case 1:
                carteranegra()
                break
            case 2:
                carteragrisplata()
                break
            default:
                alert("opcion incorrecta")
        }
        colores = parseInt(prompt("elija una color: \n 1-negro \n 2-gris plata \n 3-volver "))
    }

}

function cartucheras() {
    function rojo(agregar) {
        const rojo = {
            color: "rojo",
            precio: "$200"
        }

        let confirmar = prompt("precio $200. ¿quieres agregarlo? (si/no)")
        if (confirmar == "si") {
            agregar = false
            carrito.push(200)
            console.log(rojo)
        }
    }

    function azul(agregar) {
        const azul = {
            color: "azul",
            precio: "$210"
        }

        let confirmar = prompt("precio $210. ¿quieres agregarlo? (si/no)")
        if (confirmar == "si") {
            agregar = false
            carrito.push(210)
            console.log(azul)
        }
    }


    let colores = parseInt(prompt("elija una color: \n 1-rojo \n 2-azul \n 3-volver "))
    while (colores !== 3) {
        switch (colores) {
            case 1:
                rojo()
                break
            case 2:
                azul()
                break
            default:
                alert("opcion incorrecta")
        }
        colores = parseInt(prompt("elija una color: \n 1-rojo \n 2-azul \n 3-volver "))
    }

}



let option = parseInt(prompt("elija una opcion: \n 1-carteras \n 2-cartucheras  \n 3-salir"))

while (option !== 3) {
    switch (option) {
        case 1:
            carteras()
            break
        case 2:
            cartucheras()
            break
        case 3:
            billeteras()
            break
        default:
            alert("opcion incorrecta")
    }
    option = parseInt(prompt("elija una opcion: \n 1-carteras \n 2-cartucheras  \n 3-salir"))
}
alert("gracias por su compra")

console.log(carrito)

function sumar(carrito) {
    let resultado = 0;
    for (let numero of carrito) {
        resultado += numero;
    }
    return resultado
}
sumar(carrito);
console.log("total apagar: $" + sumar(carrito))




