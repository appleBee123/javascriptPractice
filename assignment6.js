
var s = 5;

function demo()
{
    console.log(s--);
    if(s == -1)
    {
        clearInterval(cl)
        console.log("Time's up !")
    }
    
    
}

console.log("Time starts now!");

var cl = setInterval(demo, 1000);





