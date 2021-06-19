// Write your function here
function isSameLength(word1,word2) {
    let contador1= word1.length;
    let contador2= word2.length;
  
  if (contador1 === contador2) {
        return true;
    } else {
        return false;
    }
}
var output = isSameLength('words', 'super');
console.log(output);