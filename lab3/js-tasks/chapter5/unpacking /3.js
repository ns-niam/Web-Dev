let user = {
  name: "John",
  years: 30
};


let {
  name,
  years: age,
  isAdmin = false,
} = user;

console.log(name);
console.log(age);
console.log(isAdmin);


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj) {

  let maxKey = null;
  let maxSalary = 0;

  for (let [key, value] of Object.entries(obj)) {
    if (value > maxSalary) {
      maxKey = key;
      maxSalary = value;
    }
  } 

  return maxKey;
}

console.log(topSalary({}));
console.log(topSalary(salaries));
