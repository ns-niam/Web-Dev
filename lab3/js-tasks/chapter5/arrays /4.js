`Array methods`

arr = [3,2,1,4,5];

//splice(i, deleteCount, arg1, arg2, ....); from pos i deletes deleteCount and inserts arg1, arg2, ...

arr.splice(2,2,5,6);
console.log(arr);

//concat(arg1, arg2, ...) adds arg1, arg2 to arr. args can be either arrays or values;
arr = arr.concat([7,8], 11, 10);
console.log(arr);

arr.forEach((value, index, _) => {
  console.log(`${value} is at ${index} in arr`);
});


let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

//find and findIndex
let user = users.find(item => item.id == 2);
let index = users.findIndex(item => item.name == "Mary");


console.log(user.name); // John

//filter and map
let resultArr = arr.filter(item => item > 5);
console.log(resultArr);

resultArr = resultArr.map(item => Math.pow(item, 2));
console.log(resultArr);

//sort
function comparator(a,b) {
  if (a > b) {
    return 1;
  }
  if (a == b) {
    return 0;
  }
  if (a < b ){
    return -1;
  }
}

arr.sort(comparator);
console.log(arr);


//reduce
let res = arr.reduce((previous, current) => current + previous, 0);
console.log(res);
