var colour = {                                            // parent
    type: "colour",
    describe: function(){
        console.log(`I am ${this.type}`)
    }
}

var red = {                                               // inherits colour
    type: "red" 
}

var blue = {                                              // inherits colour
    type: "blue"
}

red.__proto__ = colour
blue.__proto__ = colour

var purple = {                                             // inherits both red and blue
    type: "purple"
}

purple.__proto__ = Object.assign({},red,blue)          

// i didn't explicity attach colour to purple but if red and blue inherited purple then
// describe() exists in purple

purple.describe()