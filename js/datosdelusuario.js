

function ingresarDatosDelUsuario() {
    document.getElementById("ingresar-datos").innerHTML = `
    <form action="" id="form">
        <div class="form">
            <div class="label-input">
                
                <input type="text" placeholder=" tu nombre y apellido" id="nombre-apellido">
            </div>
            <div class="label-input">
                
                <input type="text" placeholder="tu direccion" id="direccion">
            </div>
            <div class="label-input">
                
                <input  placeholder=" tu e-mail" id="email">
            </div>
            <div class="label-input">

                <input type="tel" placeholder=" tu numero" id="telefono">
            </div>
        
            <div class="boton-input">
                <button type="submit" id="finalizar-compra">finalizar compra</button>
            </div>
            <p id="error"></p> 
        </div>
    </form>
            
            `;
        }

        ingresarDatosDelUsuario()
        
        //variables
        const nombre = document.getElementById("nombre-apellido")
        const direccion = document.getElementById("direccion")
        const email = document.getElementById("email")
        const telefono = document.getElementById("telefono")
        const form = document.getElementById("form")
        const error = document.getElementById("error")
        
        //funcion para tomar datos y vaciar carrito
        
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
        error.innerHTML = prueba
    }
    if (prueba === "") {
        Swal.fire({
            title: "Gracias por su compra",
            text: "Su pedido se enviara dentro de 5 dias",
            icon: "success"
        });
        function vaciarCarrito() {
            localStorage.removeItem("productos");
            ingresarDatosDelUsuario();
            
        }
        vaciarCarrito();
    }
    
    
});



