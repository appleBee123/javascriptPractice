function One()
{
    this.name = "Sam",
    this.rollNo = 234,
    this.details = function(){
        console.log(`Your name is ${this.name}`)
        return 'Your roll no is ' + this.rollNo
    }

}

var obj = new One()
