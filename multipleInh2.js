var canFly = {
  fly: function () {
    console.log("flying");
  },
  display: function () {
    console.log("from canFly object");
  },
};

var canSwim = {
  swim: function () {
    console.log("swimming");
  },
  display: function () {
    console.log("from canSwim object");
  },
};

var birdFish = {
    display: function()
    {
        console.log('from birdFish object')
    }
}; // inherits from both canFly and canSwim

// birdFish.__proto__ = Object.assign({},canFly,canSwim)  
// Object.assign is causing problem with method overriding

birdFish.__proto__ = { canFly, canSwim };

birdFish.display()

console.log(birdFish.__proto__)

birdFish.__proto__.canFly.display()
birdFish.__proto__.canFly.fly()
birdFish.__proto__.canSwim.display()
birdFish.__proto__.canSwim.swim()

