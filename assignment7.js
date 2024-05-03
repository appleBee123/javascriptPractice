

function one(a)
{
    return function two(b) {

        return function three(c)
        {
            return function four(d)
            {
                //return c + " " + d
                return (`${a} ${b} ${c} ${d}`)
            }
        }
    }
    
}

//console.log(three("no")("spoon"))

// var s = one("There")

// var r = s("is")

// var p = r("no");

//console.log(p)

// var q = p("spoon")

// console.log(q)

console.log(one("There")("is")("no")("spoon"))


