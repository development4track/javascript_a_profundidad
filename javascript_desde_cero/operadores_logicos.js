// && "y"
// || "o"
// ! negacion

const a = 10
const b = 20
const c = '10'
const d  = 10

console.log( a == c && a == d )
console.log( a === c && a == d )
console.log( a === c || a == d )
console.log( !(a===c) )
