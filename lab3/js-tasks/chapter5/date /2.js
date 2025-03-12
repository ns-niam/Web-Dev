let d = new Date();

d.setHours(0);
console.log(d);

d.setUTCHours(0, 0, 0, 0);
console.log(d);


let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 3);
console.log(date);
