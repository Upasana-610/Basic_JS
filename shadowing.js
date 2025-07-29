//shadowing within the block scope for let and const, but for var even outside the block scope
var a = 10;// global window object
let b = 20;// script scope
const c = 30;// script scope
{
  var a = 100;
  let b = 200;
  const c = 300;
  console.log(a);// global window object
  console.log(b);// block scope
  console.log(c);// block scope
}
console.log(a);// global window object
console.log(b);// script scope
console.log(c);// script scope

//**//
// var a =10 // global window object
// {
//     const a = 20 // block scope
//     console.log(a)
// }
// console.log(a)

//**//
// var a =10 // global window object
// {
//     let a = 20 // block scope
//     console.log(a)
// }
// console.log(a)

//**//
// let a =10 // script scope
// {
//     const a = 20 // block scope
//     console.log(a)
// }
// console.log(a)

//**//
// const a =10// script scope
// {
//     let a = 20 // block scope
//     console.log(a)
// }
// console.log(a)

//Illegal shadowing
//SyntaxError: Identifier 'a' has already been declared
// let a =10 
// {
//     var a = 20 
//     console.log(a)
// }
// console.log(a)

//SyntaxError: Identifier 'a' has already been declared
// const a =10 
// {
//     var a = 20 
//     console.log(a)
// }
// console.log(a)
