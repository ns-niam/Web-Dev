//methods
function Calculator() {

  this.methods = {
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
  }
  
  this.calculate = (expr) => {
    
    exprArr = expr.split(" ");
    operator = exprArr[1];
    a = +exprArr[0]; b = +exprArr[2];
    
    if (isNaN(a) || isNaN(b)){
      console.error("Wrond Input Type: Not a Number");
      return;
    }

    try {
      return this.methods[operator](a, b);
    } catch (error) {
      console.error(`No Such Operator`);
      return;
    }
  }
  
  this.addMethod = (name, func) => {
    this.methods[name] = func;
  }
}

calc = new Calculator();
console.log(calc.calculate("5 + 2"));
calc.addMethod("*", (a,b) => a*b);
console.log(calc.calculate("8 * 7"));


//map
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
console.log(names);


//map with objects


