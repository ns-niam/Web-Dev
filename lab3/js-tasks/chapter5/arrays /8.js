
let arr = [1,2,3];


function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);



let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];



function unique(arr) {
  let result = [];

  for (word of arr) {
    if (!result.includes(word)){
      result.push(word);
    }
  }

  return result;
}

console.log(unique(strings));
