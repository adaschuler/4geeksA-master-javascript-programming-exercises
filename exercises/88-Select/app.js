// Write your function here
function select(myarray, object){
    var obj2={};
    for (let key in object) {
    myarray.forEach(function(i) {
      if (key === i) {
        obj2[key] = obj[key];
      }
    });
  }
  return obj2;

}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);