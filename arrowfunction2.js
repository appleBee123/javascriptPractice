// (() => 
// {
//     console.log(this)
// })()


var student = {
    marks: 67,
    subject: "chemistry",
    demo: function()
    {
        // console.log(this)
        console.log(`${this.marks}`)
    }
}

// setTimeout(student.demo.call(student), 1000*3)

// function demo2()
// {
//     this.demo()
// }

setTimeout(student.demo.bind(student), 1000*3)