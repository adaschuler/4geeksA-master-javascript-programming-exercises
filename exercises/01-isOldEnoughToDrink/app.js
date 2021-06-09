function isOldEnoughToDrink(input){
    if (input >= 21) {
        return true;
    } else if (input < 21) {
        return false;
    }
}
var output = isOldEnoughToDrink(22);
console.log(output);
