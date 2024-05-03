var a = [1,2,3,4,5,6,7,8,9]

var b = []

// for(i=0; i<a.length; i++)
// {
//     b.push(a.pop())          // this statement didn't work :(
    
// }

//  console.log(b)

for(i=a.length-1; i > -1 ; i--)
{
    b.push(a[i])
}

console.log(b)