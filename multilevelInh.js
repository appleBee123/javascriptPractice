var soap = {
    shampoo: 100,
    conditioner: 250,
    handSoap: 150
}

var skincare = {
    cleanser: 210,
    serum: 250,
    sunscreen: 600
}

var makeup = {
    concealer: 200,
    powder: 300,
    eyeliner: 100
}

soap.__proto__ = skincare
skincare.__proto__ = makeup

//console.log(soap.__proto.__proto__)   how to print makeup ? :(
    console.log(soap.skincare.__proto__)



console.log(skincare.__proto__)        // multilevel inheritance