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
        // console.log(`${this.marks}`)

        // setTimeout(function demo2(){
        //     console.log(this.marks)
        // }.bind(student), 1000*3)

        setTimeout(()=>{
            console.log(this.marks)
        }, 1000*3)
    }
}

student.demo()

// setTimeout(student.demo.call(student), 1000*3)

// function demo2()
// {
//     this.demo()
// }

