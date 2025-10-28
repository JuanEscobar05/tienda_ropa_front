import {buscarUsuarios,guardarUsuario} from "../services/servicioUsuario.js"



//capturar los datos del formulario
let cajaNombreUsuario=document.getElementById("nombre")
let cajaContraseñaUsuario=document.getElementById("contraseña")
let cajaFechaNacimientoUsuario=document.getElementById("fechaNacimiento")
let botonFormulario=document.getElementById("boton")

botonFormulario.addEventListener("click",(evento)=>{
    
    evento.preventDefault()
    let datos={
        nombre:cajaNombreUsuario.value,
        contraseña:cajaContraseñaUsuario.value,
        fechaNacimiento:cajaFechaNacimientoUsuario.value
    }
   
    guardarUsuario(datos)
    .then(function(respuesta){
        console.log('Respuesta guardarUsuario:', respuesta)
        // si llegamos aquí la petición fue exitosa (200-299)
        Swal.fire({
            title: "Buen trabajo!",
            text: "Te has registrado con exito",
            icon: "success"
        });
    })
    .catch(function(error){
        console.error('Error al guardar usuario:', error)
        Swal.fire({
            icon: "error",
            title: "Fallamos",
            text: error.message || "Algo salió mal en tu registro",
        });
    })


})

//llamar al api para guardar

//mostrar mensaje de exito si se guardo el usuario con exito