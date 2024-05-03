function One(n,r)
{
  this.name = n,
  this.rollNo = r,
  this.details = function()
  {
    console.log(` Your name is ${this.name}`)
  }
}

var obj = new One("Sam",234)
var obj2 = new One("Amit",150)

console.log(obj)
console.log(obj2)