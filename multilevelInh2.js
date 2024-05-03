var shape = {                                  // grandparent
    describe: function(){
        console.log("I am a shape")
    },
    display: function()
    {
        console.log('from shape object')
    }
}

var polygon = {                                // parent
    countSides: function(){
        console.log(`I have ${this.sides} sides`)
    },
    display: function()
    {
        console.log('from polygon object')
    }
}

polygon.__proto__ = shape

var triangle = {                               // child
    sides: 3,
    display: function()
    {
        console.log('from triangle object')
    }
}

triangle.__proto__ = polygon

// triangle.countSides()
// triangle.describe()

// triangle.display()
// triangle.__proto__.display()

triangle.display()
triangle.__proto__.display()
triangle.__proto__.__proto__.display()