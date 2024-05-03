var shape = {
    describe: function () {
        console.log(`I am a shape with ${this.sides} sides.`)
    },

    display: function () {
        console.log('from shape object')
    }
}

var square = {
    sides: 4,
    size: 6,
    display: function () {
        console.log('from square object')
    },

    demo: function () {
        // return this.__proto__.display()         // displays parent fxn
        return this.display()
    }
}


square.__proto__ = shape          // single inheritance   // square inherits from shape

// square.demo()
// square.describe()

square.display()

square.__proto__.display()