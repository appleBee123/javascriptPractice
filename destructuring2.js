var cooking = {
    dish1: "raita",
    dish2: "sandwich",
    dish3: "salad",
    dish4: "chaat"
}

function demo({dish1:d1,dish2:d2,dish3:d3,dish:d4},l,k,m,n)
{
    d1 = l
    d2 = k
    d3 = m
    d4 = n
    console.log(d1)
    console.log(d2)
    console.log(d3)
    console.log(d4)
}

demo(cooking,"burger","pizza","donut","cookie")

// we didn't use 'call' while sending object to fxn coz we're not using 'this'
// we use 'call' when we use 'this'