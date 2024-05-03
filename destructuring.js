var student = {
    name : "Neha",
    subject: "Math",
    marks1 : 56,
    marks2: 76,
    marks3: 89,
    marks4: 70,
    marks5: 60
}

// var {name:nm,marks1:m1,marks2:m2,marks3:m3} = student

// var {name:nm,marks1:m1,marks2:m2,marks3:m3,...others} = student

var {name:nm,marks1:m1,marks2:m2,marks3:m3,email:m="thered333@gmail.com",...others} = student

// console.log(nm)
// console.log(others)
// console.log(others.subject)
console.log(m)

// var x = student.name
// var y = student.marks1
// var z = student.marks2
// var p = student.marks3

// x = "Shalu"
// y = 90
// z = 100
// p = 80

// console.log(x)
// console.log(y)
// console.log(z)
// console.log(p)

