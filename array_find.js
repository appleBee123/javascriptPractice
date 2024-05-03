var myObj = {pname:"mist2",pprice:6000}
var c = [{pname:"cleanser",pprice:200},{pname:"serum",pprice:300},{pname:"mist",pprice:600},myObj]
 console.log(c.findIndex( (l) => (l==myObj))) 