// Write your function here
function getAllElementsButNth(myarray, index){

     myarray.splice(index,1)
     return myarray
    /* el nth se refiere al numero que indica la ubicacion de index en esta funcion */
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']