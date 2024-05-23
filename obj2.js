var person = {

    age: 33,
    dob: "4 feb 1991"
}

function bday(a,b,c)
{
    return ++this.age + a
}


// console.log(bday.call(person,7,9,8))

// console.log(bday.apply(person,[5,9,8]))

var x = bday.bind(person)

console.log(x(22))