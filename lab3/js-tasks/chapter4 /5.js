`Object contructors with methods ad this`

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("New number: ", 0);
  }

}

acc = new Accumulator(1);

for (let i = 0; i < 5; i++) {
  acc.read();

}

alert(acc.value);
