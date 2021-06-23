// Write your function here
function addToFrontOfNew (myarray, elemento){
    let myarray2=myarray.slice();
    myarray2.unshift(elemento);
     return myarray2
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]