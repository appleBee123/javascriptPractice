var a = [{pname: "toothpics", quantity: 100,increaseQuantity:increaseQuantity}, 
{pname: "matchsticks", quantity: 50,increaseQuantity:increaseQuantity},
 {pname: "clouds", quantity: 20,increaseQuantity:increaseQuantity}]
 
 function increaseQuantity()
 {
    this.quantity++
 }
    
    a.forEach(function(p){
        p.increaseQuantity();
    })

    console.log(a)
