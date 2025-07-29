console.log("a:"+a)
var a = 10
function local(){
    console.log("x:"+x)
    var x= 10
    console.log("x:"+x)
}

console.log("a:"+window.a)
console.log("a:"+a)
console.log("a:"+this.a)
local() 
console.log("x:"+x)