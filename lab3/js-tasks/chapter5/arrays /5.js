function camelize(str) {

  strArray = str.split("-");
  strArray = strArray.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  return strArray.join("");
  
  
}

function filterRange(arr, a, b) {

  return arr.filter(item => item >= a && item <= b);
}

function filterRangeInPlace(arr, a, b) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

function DecreasingOrderComp(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

function copySorted(arr) {
  let sortedArr = arr.slice(0);
  sortedArr.sort((a,b) => (a - b));
  return sortedArr;
}

console.log(camelize("my-var-name"));

let arr = [1,2,3,4,5,6];
console.log(filterRange(arr, 2, 4));
console.log(arr);

filterRangeInPlace(arr, 2, 4);
console.log(arr);

let arr2 = [6,8,5,2,4,10,1];
arr2.sort((a,b) => b - a);
console.log(arr2);

let arr3 = [5,9,1,0,56,2];
let sortedArr3 = copySorted(arr3);
console.log(arr3);
console.log(sortedArr3);
