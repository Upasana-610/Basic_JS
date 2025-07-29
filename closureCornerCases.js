//Javascript does not wait, sends setTimeout to WebApI. While the timer expires, it runs runs the next line. But the setTime parameter function contains the closure of x, thus uses the reference to i, and prints it even after x() ends.
// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste Javascript");
// }
// x();

// block of function in setTimeout refers to the same value as its lexical environment (setTimeout and for loop) in its closure
// setTimeout takes up the value of i in each iteration and triggers the 5 timers one by one.
// However by the time, first timer ends, the for loop has already ended with i value increased to 6. When console.log get logged , it logs 6, 5 times.
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 3000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

//let is block scoped. Everytime the for loop iteration runs, it creates a new block. Thus each setTimeout takes up the value of i in each iteration for different blocks and triggers the 5 timers one by one, whose value does not change for following iterations.
// Thus console.log logs the corresponding i value , separate for each timeout. 12345 one by one.
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 3000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

// close() gets the value of i as parameter, not reference. Now setTimeout function parameter's lexical parent is close, so x refers to separate reference from i.
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, i * 3000);
//     }
//     close(i);
//   }
//   console.log("Namaste Javascript");
// }
// x();


// Closure only for functions
function x() {
  var a = 10;
  for (var i = 1; i <= 5; i++) {
    var d = 10; // no closure created, lexical environment stored in local itself, closure only for functions
    setTimeout(function () {
      console.log(i);
    }, i * 3000);
  }
  console.log("Namaste Javascript");
  function y() {
    var b = 10; 
    console.log("Stored in y's local");
    // console.log(a) ---> on commenting this line, we do not see a in closure of x for y() and z(), because is no where used in the entire code, but i is used in setTimeout, therefore its closure is stored in all cases.
  }
  y(); // closure created with x
  return function () {
    var c = 10;
    console.log("Closure Created");
  };
}
var z = x();
z(); // closure created with x
