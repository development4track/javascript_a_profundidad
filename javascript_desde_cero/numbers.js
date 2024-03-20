// tipo entero y decimal
const entero = 4
const decimal = 7.2
console.log(typeof entero, typeof decimal)

// notacion cientifica
const cientifico = 5e3
console.log(cientifico)

// infinitos y NaN
const infinito = Infinity
const noEsNumero = NaN
console.log(infinito, noEsNumero)

// operaciones aritmeticas
const suma = 3 + 4
const resta = 6 - 8
const multiplicacion = 6*2
const divicion = 7/3
const modulo = 5 % 4
const exponenciacion = 3 ** 4

// precision, (NO USAR JS PARA TEMAS DE PRECISION)
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(typeof resultado.toFixed(1), resultado.toFixed(1))
console.log(resultado.toFixed(1) === 0.3) // igualdad a nivel de valor y tipo de dato

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-1)
const aleatorio = Math.random()
console.log(raizCuadrada , valorAbsoluto , aleatorio)