// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3){

if (word2.length > word1.length && word2.length > word3.length){
        return word2.length;
    } else if (word3.length > word2.length && word3.length > word1.length){
            return word3.length;
        } else if (word1.length > word2.length && word1.length > word3.length){
                return word1.length;
            } 

}
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3