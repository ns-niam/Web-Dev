`Numbers `

let num1 = 1_000_000_000;
let num2 = 1e9;
let num3 = 1e-6;

console.log(num3);

`
Hex and Oct
`
let numHex = 0xff;
let numOct = 0o377;
let numBin = 0b11111111;

console.log(numBin);

`
toString(base)
`
let num = 255;
console.log(num.toString(16)); //ff


`Rounding
Math.floor()
Math.ceil()
Math.round()
Math.trunc()
`

console.log(Math.round(4.501));

`Fixed length Rounding
.toFixed() --> string;

`

console.log(4.12965789.toFixed(2)); //4.13

`
Checking numbers:

isNaN();
isFinite();

and also
Math.isNaN();
Math.isFinite();
these 2 do not do autoconversion to number


`
console.log(isNaN("str"));
console.log(isNaN(NaN)); //NaN === NaN is false somehow

console.log(isFinite("str"));
console.log(isFinite(14));
console.log(isFinite(Infinity));


`
Number parsing 
`

console.log(parseInt("123px"));
console.log(parseFloat("12.4.3"));

`
Math module:
max, min, pow, random (numbers in range [0,1))
`
