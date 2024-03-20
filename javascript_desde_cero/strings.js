// creacion de cadenas de texto
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "comillas dobles"
const terceraOpcion = `estas comillas raras`

// concatenacion forma 1
const direccion = "calle falsa 123"
const ciudad = 'Hermosillo'
const direccionCompleta = "mi direccion completa es "+direccion+" "+ciudad
console.log(direccionCompleta)

// concatenacion forma 2
const nombre = `alan`
const pais = "mexico"
const presentacion = `hola soy ${nombre} de ${pais}` //solo aplica con estas madres ` `
console.log(presentacion)

// concatenacion fomra 3
const primeraParte = "me encanta"
const segundaParte = "la gente de"
const terceraParte = "mexico"
const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' '))

// concateniacion forma 4
const hobbie1 = 'dormir'
const hobbie2 = 'coger'
const hobbie3 = 'comer'
const hobbies = 'Mis hobbies son: '.concat(hobbie1,", ",hobbie2,`, `,hobbie3)
console.log(hobbies)

// saltos de linea forma 1
let parrafo = "texto en\n"+ // para salto de linea se usa \n 
              "varios parrafos"
console.log(parrafo)

// saltos de linea forma 2
let parrafo2 = 'texto en\n\
                varios renglones' // incluye los espacios
console.log(parrafo2)

// saltos de linea forma 3
let parrafo3 = `hola 
    desgraciados` // con ` ` no es necesario poner algo para que respecte los saltos de linea
console.log(parrafo3)

// metodos de string
const saludo = "Hola. Como estás?"
console.log(saludo[6])
console.log(saludo.charAt(6))
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf("Como"))
console.log(saludo.lastIndexOf("o"))
console.log(saludo.slice(3,5)) //Extremo izquierdo si se incluye y el extremo derecho se excluye
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(" ")
console.log(saludoDividido)

const saludoConEspacios = " Hola Mundo "
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = "Hola mundo"
const nuevoSaludo = saludoOriginal.replace("mundo","Bebé")
console.log(nuevoSaludo)