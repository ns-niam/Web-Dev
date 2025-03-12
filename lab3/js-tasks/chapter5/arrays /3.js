
function getMaxSubarray(arr){
  
  let r = 0
  let sum = 0;
  let ans = 0;

  while (r < arr.length) {

    sum += arr[r];
    ans = Math.max(sum, ans);
    if (sum < 0) {
      sum = 0;
    }
    r += 1;
  }

  return ans;
}


console.log(getMaxSubarray([-1, 2, 3, -9]) == 5); 
console.log(getMaxSubarray([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubarray([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubarray([-2, -1, 1, 2]) == 3);
console.log(getMaxSubarray([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubarray([1, 2, 3]) == 6); 
