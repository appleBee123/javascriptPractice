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

var hair = {
    hairspray: 2000,
    comb: 50,
    gel: 90
}

skincare.__proto__ = soap
makeup.__proto__ = soap

hair.__proto__ = {skincare,makeup}          // hybrid inheritance


// console.log(hair.__proto__.skincare.__proto__)
//  console.log(hair.__proto__.skincare.__proto__.shampoo)         // how to print soap 

   console.log(hair.makeup.handSoap)         // how to print soap 

// console.log(hair.makeup)

// console.log(hair.makeup.__proto__)         // how to print soap  