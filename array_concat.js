var a = ["tomato","potato","carrot"]
var b = ["mango","apple","banana"]
var c = []

a.forEach(concatArray)          // for each loop
b.forEach(concatArray)

function concatArray(item)
{
    c.push(item)
}

console.log(c)