let Fraction = function(num, den) {
  this.num = num;
  this.den = den;

  //JS looks for this method first to identify what is the result of conversion
  this[Symbol.toPrimitive] = function(hint) {
    return hint == "string" ? `${this.num} / ${this.den}` : this.num / this.den;
  }
};


a = new Fraction(2,5);

b = new Fraction(4,6);

//alert(a); --> "2 / 5"
console.log(a + b);
