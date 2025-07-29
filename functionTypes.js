a();
// b() // throws error

// Function Statement aka Function Declaration : Hoisting
function a() {
  console.log("a");
}

// Function Expression : in hoisting set as undefined
var b = function (
  param1,
  param2 // parameters
) {
  console.log("b");
};
b(1, 2); // Arguements

//Anonymous Function : function without name where function are used as values like above

// But Function statement should have a name, So this will give Syntax error
// function(){

// }

//Named Function Expression : We gave a name to the anonymous function
var c = function xyz() {
  console.log("b");
  console.log(xyz); // xyz is local , not in the global scope, here can access it.
};
// xyz() // throws error, not in global scope, here cannot access it.

//First Class Functions/ Citizens : The ability of function to be passed as values, to be passed to another function as arguements and to be returned from another function is called First Class Function in javascript

//Arrow Functions : part of ES6
