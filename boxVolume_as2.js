var box = {
    width: 1,
    length: 1,
    height: 1
}



function volumeOfBox(w,l,h)
{
    
    this.width = w
    this.length = l
    this.height = h
    return this.width * this.length * this.height
}

// var x = volumeOfBox.bind(box)

// console.log(x(5,5,5))

console.log(volumeOfBox.call(box,2,3,5))

