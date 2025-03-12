`Destructuring like unpacking in python`

// we have an array with a name and surname

let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;


//destructuring while skipping stuff and assignment using ...

[firstName, , title, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic", "Augustus's", "Predecessor"];


//works with other iterabes like strings, sets, etc..

let [a,b,c] = "abc";

//works with other assignables like object properties

let user = {
  name: "John",
  age: 30
};


for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}


let userMap = new Map();
userMap.set("name", "John");
userMap.set("age", "30");

for (let [key, value] of userMap) {
  console.log(`${key} => ${value}`);
}


//swapping items

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];
console.log(admin);
console.log(guest);


//default values

// default values : vars that are not assigned anything from the array stay with def values
[name = "Guest", surname = "Anonymous"] = ["Julius"];
