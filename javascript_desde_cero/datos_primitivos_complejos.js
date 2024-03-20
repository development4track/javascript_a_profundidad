// Los datos primitivos son inmutables
// datos primitivos: string, number, bool, null, undefined, bigint, symbol

let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// los datos complejos son mutables
// datos complejos: object, array, function
// object
let usuario = { nombre:"alan", edad:30}
usuario.edad = 32
console.log(usuario)
// array
let frutas = ['manzana','pera']
frutas[0] = 'sandia'
console.log(frutas)
// function
function cambiaNombre(objeto) {
    objeto.nombre = 'Nuevo nombre'
}
let persona = { nombre:'Alan'}
cambiaNombre(persona)
console.log(persona)
