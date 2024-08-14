

function ingresarDatosDelUsuario() {
    document.getElementById("ingresar-datos").innerHTML = `
    <form action="" id="form">
        <div class="form">
            <div class="label-input">
                <label for="nombre y apellido" ></label>
                <input type="text" placeholder=" tu nombre y apellido" id="nombre-apellido">
            </div>
            <div class="label-input">
                <label for="tu direccion" ></label>
                <input type="text" placeholder="tu direccion" id="direccion">
            </div>
            <div class="label-input">
                <label for="email"></label>
                <input type="email" placeholder=" tu e-mail" id="email">
            </div>
            <div class="label-input">
                <label for="tel"></label>
                <input type="tel" placeholder=" tu numero" id="telefono">
            </div>
        
            <div class="boton-input">
                <button type="submit" id="finalizar-compra">finalizar compra</button>
                <p id="mal"></p>
            </div>
        </div>
    </form>
            
            `;

}



ingresarDatosDelUsuario()


const nombre = document.getElementById("nombre-apellido")
const direccion = document.getElementById("direccion")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const mal = document.getElementById("mal")

form.addEventListener("submit", e => {
    e.preventDefault()
    
    let prueba = ""
    let nombreBien = nombre.value.length >= 3
    let telBien = telefono.value.length >= 10
    let direccionBien= direccion.value.length >= 10
    let emailbien = email.value.length >= 10
    try {

        if (nombreBien, telBien,direccionBien,emailbien) {
            prueba = ""
        }
        else {
            throw new Error("Complete todos los campos correctamente")
        }
    } catch (err) {
        prueba = err
    }
    finally {
        mal.innerHTML = prueba
    }
    if (prueba === "") {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
        function vaciarCarrito() {
            localStorage.removeItem("productos");
            ingresarDatosDelUsuario();
        }
        vaciarCarrito();
    }
    

});


