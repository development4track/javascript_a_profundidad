// null
const snoopy = null
console.log(snoopy, typeof snoopy)

// undefined
let name
console.log(name)

// symbol
const unique = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1,symbol2,symbol1==symbol2,symbol1===symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

// bigint
const bigNumber = 123456789098765432345678n
console.log(bigNumber)

