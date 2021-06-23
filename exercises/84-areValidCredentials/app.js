// Write your function here
function areValidCredentials(name, password){
   
    var one= name.length;
    var two= password.length;

    if (one >3 && two>8) {
        return true;
    } else {
        return false;
    }
}
var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero