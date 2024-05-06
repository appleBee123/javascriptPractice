function One()
{
    var myObj = {}
    myObj.name = "Sam",
    myObj.rollNo = 234,
    myObj.details = function(){
        console.log(`Your name is ${this.name}`)
        return 'Your rollno is ' + this.rollNo
    }
    return myObj
}

console.log(One().details())