`Strings`

console.log("for i in range(5):\n\tprint(i)");

`Methods and Propetries`

//.length
let s = "Hajimemashite";
console.log(s.length);

//[pos] and .at[pos] allows negative positions
console.log(s[0]);
console.log(s.at(-1));

//iteration
for (let char of s) {
  //console.log(char);
}


//cases
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//indexex, inclusion, start and end with etc
console.log(s.indexOf("ji"));
console.log(s.includes("y"));

//substrings

console.log(s.slice(2,4));  //slice works with neg numbers as well
console.log(s.substring(2,4));  //the same but does not work with neg numbers

//comparisons: using unicode values
alphabet = "";
for (let i = 65; i <= 220; i++) {
  alphabet += String.fromCodePoint(i);
}
console.log(alphabet);

console.log('a'.localeCompare('ү'));
