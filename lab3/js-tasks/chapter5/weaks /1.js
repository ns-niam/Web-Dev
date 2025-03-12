`Weakmap:

-only ahs objects as keys 
-if an object that was passed as a key is removed from memory, wm loses the key as well

Weakmap does not protect its keys from garbage collection 

Only has methods: set, get, delete and has
Does not have methods like keys, values or entries

`

john = {name:"John"};

let map = new Map();
map.set(john, 1);

let wmap = new WeakMap();
wmap.set(john, 1);

john = null;

console.log(map);
console.log(wmap);

`Weakset

ALmost the same as Weakmap. Does not support size or keys`


let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

john = null;
