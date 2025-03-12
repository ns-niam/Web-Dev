
let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 29 };

let users = [ john, pete, mary ];

let userMapped = users.map(item => {
  return {
    fullName : [item.name, item.surname].join(" "),
    id : item.id,
  }
})

console.log(userMapped)

users.sort((a, b) => a.age - b.age);
console.log(users);

function getAverageAge(arr) {
  return arr.reduce((accum, item) => accum + item.age, 0) / arr.length;
}

console.log(getAverageAge(users));

