// Write your function here
function addToBackOfNew(myarray, elemento){

    return myarray.concat(elemento)
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]