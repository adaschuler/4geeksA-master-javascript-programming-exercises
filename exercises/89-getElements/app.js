// Write your function here
function getElementsThatEqual10AtProperty(myobj, mykey){

    // para revisar si el array lo es y si esta vacio
    if (!myobj[mykey] || !Array.isArray(myobj[mykey]) || myobj[mykey].length < 1) {
    return [];  
  }
  // para buscar los 10 en el array dentro de la key
  return myobj[mykey].filter(function(num) {  
    return num === 10;
  });

}
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]