// function factorialDemo()
// {
//      n = 5;

//      factorial = 1;

//      for(i=n; i>=1; i--)
//      {
//         factorial = factorial*i;
//      }

//      return factorial;

// }

// console.log(factorialDemo());


function factorialDemo(n)
{
    var a = 80
    if(n==1)
    {
        return 1;
    }
    

   return factorialDemo(n-1)*n;

}

console.log(factorialDemo(5))
// console.log(factorialDemo(5));

// factorialDemo(5) - this function is called with the argument 5

// factorialDemo(4) - this function is called with the argument 4

// factorialDemo(3) - this function is called with the argument 3

// factorialDemo(2) - this function is called with the argument 2

// factorialDemo(1) - this function is called with the argument 1

// factorialDemo(0) - this function is called with the argument 0
// if condition is true. factorialDemo(0) returns 1

// factorialDemo(1) returns 1*1

// factorialDemo(2) returns 1*2

// factorialDemo(3) retruns 2*3

// factorialDemo(4) returns 6*4

// factorialDemo(5) returns 24*5


