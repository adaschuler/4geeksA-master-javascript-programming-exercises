// Write your function here
function getAverageOfElementsAtProperty(obj, key) {

    let cantidadelementos = obj[key].length;
    /* console.log (cantidadelementos) */

    let suma = 0;
    
    if (!Array.isArray(obj[key])) {return 0;} //if que valide que ese elemento es un array
    if (obj[key].length===0) {return 0;} 

    for (let i = 0; i < cantidadelementos; i++) {
        suma += obj[key][i];
    }
    return suma / cantidadelementos;
}

var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);