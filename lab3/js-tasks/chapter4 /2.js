`Object methods in constructors`

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert(`Hi, my name is ${this.name}`);
  }
}

let john = new User('John');
john.sayHi();
