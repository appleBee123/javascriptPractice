// function one()
// {
//     return "h1"
// }


// console.log(one())

function first()
{
    console.log("Hi")
    return "good morning";

}

function second()
{
    a = first();
    return a + " how are you" ;
}

// function three(ref)
// {
//     console.log(ref());
// }

// three(second)

setTimeout(second,1000*5)
