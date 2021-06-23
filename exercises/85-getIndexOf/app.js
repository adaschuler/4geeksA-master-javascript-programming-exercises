// Write your function here
function getIndexOf(character, string){
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
     }
     return -1;                                  
} 

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2