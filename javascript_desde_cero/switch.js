let exp = 'fresas';

switch(exp) {
    case 'naranjas':
        console.log("las naranjas cuestan $20 el kilo");
        break;
    case 'manzanas':
        console.log("las manzanas cuestan $43 el kilo");
        break;
    case 'platanos':
        console.log('El platano esta en $30 el kilo');
        break;
    case 'mangos':
    case 'papayas':
        console.log("los mangos y papayas cuestan $25 el kilo");
        break;
    default:
        console.log(`Lo siento, no contamos con ${exp}`);
}