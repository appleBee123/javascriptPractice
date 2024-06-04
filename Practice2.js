const a = {
    x: 42,
    getX: function () {
      return this.x
    }
  }
  
  const unboundGetX = a.getX
//   console.log(unboundGetX())

// console.log(a.getX())

const boundGetX = unboundGetX.bind(a)
console.log(boundGetX())