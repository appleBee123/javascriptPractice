var a = [1,1,0,7,1,6,1,2,0,2,6]
var b = []

for(i=0; i<a.length; i++)
{
    if(b.includes(a[i]))
    {
        continue
    }
    else
    {
        b.push(a[i])
    }
}

console.log(b)