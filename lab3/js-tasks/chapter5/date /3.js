let date = new Date();
console.log(+date);


function objExample(id) {
  this.id = id;
  this.countId = () => {
    this.id * this.id * this.id;
  }

  this[Symbol.toPrimitive] = function() {
    return `Example obj with id ${this.id}`;
  }

  this[Symbol.iterator] = function() {

    return {
      current : 0,
      end : this.id,

      next() {
        if (current <= end) {
          return {done: false, value: this.current++};
        } else {
          return {done: true};
        }
      }
    }
  } 
}

start = Date.now()

for (let i = 0; i <= 1000000; i++) {
  let j = new objExample();
}

end = Date.now();

console.log(`Execution speed was ${end-start} milliseconds`);
