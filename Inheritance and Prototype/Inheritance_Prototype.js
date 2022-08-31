console.log("connected");
// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent = {
    name:"hari",
    age: 20,
    }
const child = {
    name: "ravi",
    age: 30,
}
child.__proto__ = parent;
console.log(child.__proto__.age);

//Write code to explain prototype chaining
const studentOne = {
    name: "pr",
    age:20,
   StudentDetails: function(){
        console.log(`name ${this.name}age ${this.age}`);
   
    }   
}
const studentTwo = {
    name:"hari",
    age: 25,
}
console.log(studentOne.__proto__);
console.log(studentTwo.__proto__);
console.log(studentTwo.__proto__.__proto__); 

//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
Array.prototype.sum = Array.prototype.sum || function (){
    return this.reduce(function(a,b){return a+b},0);
  };
const array = [1,3,6,2,5,4];
console.log(array.sum());

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.
const js={
    name: "pr",
    age:20,
}
const fun=Object.keys(js)
console.log(fun)