// call with parameters 
const owner = "Lucy"
const address = "Avenue 1234"
function dogGreeding(owner,address) {
    console.log(`Hi, I'm ${this.dogName} ${owner} ${address}`)
}

const newHouse = {
    dogName: "Coconut"
}

dogGreeding.call(newHouse,owner,address)

// apply to pass parameters as array
const necessaryValues = [owner , address]
dogGreeding.apply(newHouse, necessaryValues)

// bind to create a new function
const bindingWithBind = dogGreeding.bind(newHouse,owner,address) // bind() return an function object
bindingWithBind()