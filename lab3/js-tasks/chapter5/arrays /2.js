function sumInput() {

  let arr = [];
  
  while (true) {

    let number = prompt("Enter a number: ");

    if (isNaN(number) || number === null || number === '') {
      
      alert(sumArray(arr));
      break;
    }

    arr.push(+number);

  }
}

function sumArray(arr) {
  
  let result = 0;

  for (let num of arr) {

    result += num;
  }

  return result;
}

sumInput();
