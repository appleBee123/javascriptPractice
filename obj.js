var student = {
            name: "Sam",
            rollNo: 254,
            subject: "BCA",
            marks1: 56,
            marks2: 78,

            details: function one()
            {
                // return (` Name is ${this.name} and his course is ${this.subject}`)
                return this.name="anil"
            }
}


// student.name="neha"
// student.marks3 = 89;
// student.totalMarks = function()
// {
//     return (this.marks1+this.marks2+this.marks3)
// }

// var nm = student.name
// console.log(nm)

for(a in student)
{
    // console.log(student[a])
    
    if(a=="marks1" || a =="marks2" || a=="marks3")
    {
        console.log(student[a])
    }
 }

// this.anyThing = 999
// console.log(this)
// console.log(student.details())
// console.log(student["marks1"])



