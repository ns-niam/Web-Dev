let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


function sumSalaries(obj) {
  
  return Object.values(obj).reduce((a,b) => a + b, 0);
}

function count(obj) {

  return Object.entries(obj).length;
}

console.log(sumSalaries(salaries));
console.log(count(salaries));
