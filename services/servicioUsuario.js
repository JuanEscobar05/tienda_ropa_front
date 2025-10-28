export async function guardarUsuario(datos){

    // 1. URL del servicio
    const url = "http://localhost:8080/Usuarios"

    // 2. configurar peticion
    const peticion = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(datos)
    }

    // 3. activar el fetch y manejar respuestas no JSON / errores 4xx
    const respuesta = await fetch(url, peticion)

    // leer siempre como texto primero para evitar SyntaxError al parsear JSON inválido
    const texto = await respuesta.text()
    const contentType = respuesta.headers.get('content-type') || ''

    if (!respuesta.ok) {
        // el servidor devolvió 400/500... regresar el texto como mensaje de error
        throw new Error(texto || `HTTP ${respuesta.status}`)
    }

    if (contentType.includes('application/json')) {
        try {
            return JSON.parse(texto)
        } catch (e) {
            throw new Error('Respuesta JSON inválida del servidor')
        }
    }

    // respuesta exitosa pero no JSON
    return texto

}


export async function buscarUsuarios(){

    const url = "http://localhost:8080/Usuarios"
    const peticion = {
        method: "GET",
        headers: { "Accept": "application/json" }
    }

    const respuesta = await fetch(url, peticion)
    const texto = await respuesta.text()
    const contentType = respuesta.headers.get('content-type') || ''

    if (!respuesta.ok) {
        throw new Error(texto || `HTTP ${respuesta.status}`)
    }

    if (contentType.includes('application/json')) {
        try {
            return JSON.parse(texto)
        } catch (e) {
            throw new Error('Respuesta JSON inválida del servidor')
        }
    }

    return texto

}