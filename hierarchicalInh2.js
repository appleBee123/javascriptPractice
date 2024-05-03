var shape ={                                           // parent
    type: "shape",
    describe: function(){
        console.log(`I am a ${this.type}`)
    }
}

var square = {                                         // inherits parent shape
    type: "square"
}

var circle = {                                         // also inherits parent shape
    type: "circle"
}

square.__proto__ = shape
circle.__proto__ = shape

square.describe()
circle.describe()