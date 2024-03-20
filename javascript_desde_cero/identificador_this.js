// implicit blinding
const house = {
    dogName: "Fido",
    dogGreeding: function () {
        console.log(`Hi, i'm ${this.dogName}`)
    }
}
house.dogGreeding()

// explicit binding
function dogGreeding() {
    console.log(`Hi, I'm ${this.dogName}`)
}
const newHouse = {
    dogName:"Coconut",
}
dogGreeding.call(newHouse) 

// adding parameters
function newDogGreeding(owner,address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}
const owner = 'Kucy'
const address = 'Avenue 1234'
newDogGreeding.call(newHouse,owner,address)