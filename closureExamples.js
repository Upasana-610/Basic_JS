function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var c = 200;
var close = outest()("hello world");
close(); // inner has access to a, b, c from the next lexical parent due to closure

// closure helps in encapsulation
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
//console.log(count) ;// throws error
var counter1 = counter();
counter1(); //1
counter1(); //2

//counter2 has a separate new copy of closure from counter1
var counter2 = counter();
counter2(); //1
counter2(); //2

// The above code is not scalable because say we want to increase a variable and then later decrease the same value. But increasing and decreasing are separate functions, who will create separate copy of closures. Also we can return only one function.
// In this case , we need to use a Constructor.

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// Disadvantages of closure : Overconsumption of memory, closed over variables are not garbage collected till the program expires, can lead to memory leaks, can freeze the browser if not handled properly.

// Garbage collector : A program in the javascript engine which frees up the unutilised memory.
//Javascript is a high level language
// In language like C, C++ , its upto developers to decide how to allocate and deallocate memory
// But in Js, most of the work is done by Js engine.

//However some of the modern browser like V8 engine smartly collects Garbage variable if they find they are not used.
function a() {
  var x = 10,
    z = 20;
  return function b() {
    console.log(x);
  };
}
a()(); // If you check the Dev tools, you will see z is not there in closure of b with a, it is garbage collected smartly
