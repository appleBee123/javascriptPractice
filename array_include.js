// var a = [1,2,3,4]

// console.log(a.includes(0)) 
// console.log(a.indexOf(8)) 

var b = [10,20,30,40,50]
var c = [{pname:"cleanser",pprice:200},{pname:"serum",pprice:300},{pname:"mist",pprice:600}]
// console.log(c)
// console.log(c.map(function(e){
//     e.pprice += e.pprice + 10
//     return e
// }))

// console.log(c.map(function(e){
//     e.pprice += e.pprice + 10
//     return [e,e]
// }))

// console.log(c.map(function(e){
//     e.pprice += e.pprice + 10
//     var e2 = {...e, price: e.pprice + (e.pprice * 10/100)}
//     return [e2,e]
// }))


console.log(c.flatMap(function(e){
    e.pprice += e.pprice + 10
    var e2 = {...e, price: e.pprice + (e.pprice * 10/100)}
    return [e2,e]
}))