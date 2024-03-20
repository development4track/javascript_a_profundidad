// Paso por valor
let x = 1
let y= 'hola'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

x = 12
y = 'platzi'
z = undefined

console.log(x,y,z,a,b,c)

// Paso por referencia
let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['rolex']
let copiaPanes = panes //panes y copiaPanes apuntan a la misma direccion de memoria
panes.push('Mantecadas') //Modifica el mismo objeto guardado en memoria
console.log(panes, copiaPanes)

let ropa = {blusa:'👕'} //la varianle apunta a una posicion en memoria en especifico #001
ropa.pantalon = '​👖' //es la misma variable pero ahora apunta a otra direccion en memoria #002
console.log(ropa)    //el objeto en la primera posicion en memoria aun existe pero ya no hay variable que apunte ahi