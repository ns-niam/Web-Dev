`Symbols`

let id = Symbol("id");


let user = {
  name: "John",
  [id]: 1
}

for (let key in user) {
  console.log(key);
}


let clone = Object.assign({}, user);

console.log(clone);

let id1 = Symbol.for("identifier")
let id2 = Symbol.for("identifier")
console.log(id1===id2)

console.log(Symbol.keyFor(id1))
