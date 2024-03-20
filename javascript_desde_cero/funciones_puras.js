// Funciones puras: dado la misma entrada, obtenemos la misma salida sin side effects

// side effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener hora actual

// función pura
function sum(a,b) {
    return a + b
}

// función impura
function sum(a,b) {
    console.log("A: ", a)
    return a + b
}

// Función impura
let total = 0
function sumWithSideEffect(a) {
    total += a
    // return total
}

console.log(sumWithSideEffect(10))
console.log(total)