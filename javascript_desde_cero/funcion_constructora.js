function Rocket(name, message) {
    this.name = name
    this.message = function() {
        console.log(message)
    }
}

const polo = new Rocket('polo','Hola perros') // Remember key word new
const challenger = new Rocket('Challenger','Hola perros')

console.log(challenger.name)
console.log(challenger.message()) // Los metodos siempre llevan los parentesis de llamada ()

// Funcion constructora con arrow function
const RocketWithArrowFunction = (name,message) => ({
    name: name,
    launchmessage: message
})

const personalizedMessageWithArrowFunction = () => 'Successful launch'

const falconWithArrowFunction = RocketWithArrowFunction('Apolo',personalizedMessageWithArrowFunction)
console.log(falconWithArrowFunction.name)
console.log(falconWithArrowFunction.launchmessage())