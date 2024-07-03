//carrito de compra

let agregar = true

const listadeproductos = []
const carrito = []


function carteras() {
    function carteranegra(agregar) {
        const carteranegra = {
            color: "negro",
            precio: "$500"
        }

        let confirmar = prompt("precio $500. ¿quieres agregarlo? (si/no)").toLocaleLowerCase()
        if (confirmar == "si") {
            agregar = false
            carrito.push(500)
            listadeproductos.push( "-Cartera negra, precio: $500 ")
            console.log(carteranegra)
        }
        else if(confirmar == "no"){
            agregar = true
        }
        else{
            alert("respuesta incorrecta")
        }
    }

    function carteragrisplata(agregar) {
        const carteragrisplata = {
            color: "gris plata",
            precio: "$550"
        }

        let confirmar = prompt("precio $550. ¿quieres agregarlo? (si/no)").toLocaleLowerCase()
        if (confirmar == "si") {
            agregar = false
            carrito.push(550)
            listadeproductos.push("-Cartera gris plata, precio $550")
            console.log(carteragrisplata)
        }
        else if(confirmar == "no"){
            agregar = true
        }
        else{
            alert("respuesta incorrecta")
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

        let confirmar = prompt("precio $200. ¿quieres agregarlo? (si/no)").toLocaleLowerCase()
        if (confirmar == "si") {
            agregar = false
            carrito.push(200)
            listadeproductos.push("-Cartuchera color rojo, precio $200")
            console.log(rojo)
        }
        else if(confirmar == "no"){
            agregar = true
        }
        else{
            alert("respuesta incorrecta")
        }
    }

    function azul(agregar) {
        const azul = {
            color: "azul",
            precio: "$210"
        }

        let confirmar = prompt("precio $210. ¿quieres agregarlo? (si/no)").toLocaleLowerCase()
        if (confirmar == "si") {
            agregar = false
            carrito.push(210)
            listadeproductos.push("-Cartuchera azul, precio $210")
            console.log(azul)
        }
        else if(confirmar == "no"){
            agregar = true
        }
        else{
            alert("respuesta incorrecta")
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



let option = parseInt(prompt("elija una opcion: \n 1-carteras \n 2-cartucheras \n 3-lista de productos \n 4-salir"))

while (option !== 4) {
    switch (option) {
        case 1:
            carteras()
            break
        case 2:
            cartucheras()
            break
        case 3:
                alert (listadeproductos+ " -TOTAL: $"+sumar(carrito))
                break
        default:
            alert("opcion incorrecta")
    }
    option = parseInt(prompt("elija una opcion: \n 1-carteras \n 2-cartucheras \n 3-lista de produtos \n 4-salir"))
}
alert("GRACIAS por su compra. Total a apagar: $" + sumar (carrito))

console.log(carrito,listadeproductos)

function sumar(carrito) {
    let resultado = 0;
    for (let numero of carrito) {
        resultado += numero;
    }
    return resultado
}
sumar(carrito);





