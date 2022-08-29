function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
// 1
// 2
// 3
// 4
//--------------------------------
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
// 1
// 0
//--------------------------------
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}
// 3, 3, 3
//--------------------------------
// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
let s;
const k = function() {
    const length = 6;
    s = function( breadth) {
        console.log(length * breadth);
    }
}
k();
s(6);
// 36
//--------------------------------
//Take a variable in outer function and create an inner function to increase the counter every time it is called
const p= function(){
    let b=0;
    return function(){
       b++;
       console.log(`The count of b is ${b}`);
    }
}
let num= p();
console.log(num);
num();
num();
num();
// 1, 2, 3
//--------------------------------
var a = 12;
(function () {
  alert(a);
})();
// 12
//--------------------------------
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
// 12
//--------------------------------
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz


