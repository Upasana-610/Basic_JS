// What is Callback Function in JavascripT: Using setTimeouts, callbacks and Web APIs we can achieve this asynchronus nature for a single threaded language like javascript
setTimeout(function () {}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("Y");
});
// Javascript is a synchronous and single-threaded language : call stack is the main thread. Everything happens there.

// Blacking the main thread

//Power of Callbacks?

// Deep about Event listeners
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}
attachEventListeners(); // callback function xyz forms a closure with attachEventListeners and count has a block scope safer option for encapsulation.

// Why should we always remove EventListeners: Event Listerners take up a lot of memory. Even when they are not in call stack , they store the scope of the variables (closure and global forming the scope chain). That is why it is good to garbage collect and remove event listeners

//Closures Demo withh Event Listeners

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListeners
