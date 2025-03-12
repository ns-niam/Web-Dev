//Making an object iterable add function with key
//Symbol.iterator that returns an object with next() method

function Range(start, end) {
  this.start = start;
  this.end = end;

  this[Symbol.toPrimitive] = function(hint) {
    return hint == "string" ? `Integer Range from ${this.start} to ${this.end}` : this.end; 
  }
  
  // 1. call to for..of initially calls this
  this[Symbol.iterator] = function() {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
      current: this.start,
      last: this.end,

      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };

  }
}

r = new Range(1,10);
console.log(String(r));

for (let num of r) {
  console.log(num);
}

//Creating arrays from iterables and arraylikes
//We can also use a mapping function while creating an Array

arr = Array.from(r, item => item * item);
console.log(arr);

arrayLike = {
  0 : "word1",
  1 : "word2",
  length : 2
}

arr2 = Array.from(arrayLike);
console.log(arr2.pop());
console.log(arr2);
