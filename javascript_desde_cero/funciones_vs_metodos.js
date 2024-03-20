// capacidades que tienen las funciones al igual que otros objetos
/*
// pasar funciones como argumento (callback)
function a() {}
function b(a) {}

//retornar funciones
function a() {
    function b() {}
    return b
}

// asignar funciones a variables (function expression)
const a = function() {}

// propiedades y metodos
function a() {}
const obj = {}
a.call(obj)

// anidar funciones
function a() {
    function b() {
        function c() {

        }
        c()
    }
    b()
}
a()
*/

// metodos
const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage_rocket(a) {
        console.log(a+" 🚀")
    }
}

rocket.launchMessage("Ahora si perros")