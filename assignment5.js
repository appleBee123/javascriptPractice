counter = 0;

function demo()
{
    console.log(++counter); 
}

cl = setInterval(demo, 1000);

function stop()
{
    clearInterval(cl);
}

setTimeout(stop, 1000*11);