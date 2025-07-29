//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). A closure is formed when a function "remembers" variables from its outer lexical scope, even after that outer function has finished executing.
// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// z(); // Even when is deleted from call stack, y remember the reference to its lexical environment

function x() {
  var a = 10;
  function y() {
    var b = 20;
    function z() {
      console.log(a);
      console.log(b);
    }
    z();
  }
  y();
}
x(); // Check Dev tools to check closure
