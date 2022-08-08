//  Zero parameter  
function add() { 
    console.log(0); //0
 }
 add(); 
// Sum of 3,4

 function two() {
     console.log(3+4); //7

 }
 two();
// Arrow function
 const addition = (a,b) => {
     var result = a+b;
     console.log(result); //12
 }
 addition(6,6); 
// Print output
 var x = 21; 
 var girl = function() {
   console.log(x); //undefined
   var x = 20;  
 };
 girl(); //underfined
// Print output
 var x = 21;
 girl();
 console.log(x); //21
 function girl() {
     console.log(x);
     var x = 20;
 };
// Print output
//  var x = 21;
//  a(); //reference error
//  b();
//  console.log(a);
//  a = function() {
//      x = 20;
//      console.log(x);
//  };
//  b = function() {
//      x = 40;
//      console.log(x);
//  };

var p = 1
function fact(n)
{
    if(n==0)
    console.log("1");
    else {
        for (let i=1<i<=n;i++)
    {
        p = p*i;
    }
    console.log(p);
}
}
fact(5);
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

  console.log(factorial(7));