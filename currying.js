function one()
{
    return function two()
    {
        return function three()
        {
            console.log("Hello")
            return 0
        }
    }
}
console.log(one()()())
// console.log(one())

// var a = one();

// b= a();

// b();