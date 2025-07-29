// A block combines multiple statements. A block puts multiple statements in place where javascripts expects a single state ment


if(true)
   true

//SyntaxError: Unexpected end of input
// if(true)

//block
if(true)
{
    var a =10
    console.log(a)
}

//blocked scope of let and const
{
    let b=10
    const c=20
    var a=30
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b)
console.log(c)
