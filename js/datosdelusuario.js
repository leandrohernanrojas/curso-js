// const ingresarDatosDelUsuario = document.getElementById("ingresar-datos")

// function datosDelUsuario(){ 
//     const usuario = document.createElement("div");
//     usuario.classList = "usuario"
//     usuario.innerHTML = `
//         <form action="">
//                 <div class="form-1">
//                     <div class="contenedor-1">
//                         <div class="label-input">
//                             <label for="nombre y apellido"></label>
//                             <input type="text" placeholder=" tu nombre y apellido">
//                         </div>
//                         <div class="label-input">
//                             <label for="email"></label>
//                             <input type="email" placeholder=" tu e-mail">
//                         </div>
//                         <div class="label-input">
//                             <label for="tel"></label>
//                             <input type="tel" placeholder=" tu numero">
//                         </div>
//                     </div>
//                     <div class="contenedor-2">
//                         <label for="mensaje"></label>
//                         <textarea placeholder=" en esta sección podes consultar por color en stock" name="mensaje"
//                             cols="70" rows="10"></textarea>
//                     </div>
//                 </div>
//                 <div class="boton-input">
//                     <input type="submit" value="enviar" class="boton-enviar">
//                 </div>
//             </form>
        
//         `
// };tomarDatosDelUsuario(ingresarDatos);


document.getElementById("ingresar-datos").innerHTML =  `
<form action="">
        <div class="form-1">
            <div class="contenedor-1">
                <div class="label-input">
                    <label for="nombre y apellido"></label>
                    <input type="text" placeholder=" tu nombre y apellido">
                </div>
                <div class="label-input">
                    <label for="email"></label>
                    <input type="email" placeholder=" tu e-mail">
                </div>
                <div class="label-input">
                    <label for="tel"></label>
                    <input type="tel" placeholder=" tu numero">
                </div>
            </div>
            <div class="contenedor-2">
                <label for="mensaje"></label>
                <textarea placeholder=" en esta sección podes consultar por color en stock" name="mensaje"
                    cols="70" rows="10"></textarea>
            </div>
        </div>
        <div class="boton-input">
            <input type="submit" value="enviar" class="boton-enviar">
        </div>
    </form>

`