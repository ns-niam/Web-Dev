`Destructuring objects`

//values of keys go to corresponging variable names
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;


//different var and key names source:targetVar

({width: w, height: h, title} = options);
console.log(w);
console.log(title);

options = {
  title: "Menu"
};


//default values var=value

({width: w = 100, height: h = 200, title} = options);
console.log(title);
console.log(w);


//...rest
//
({title, ...rest} = options);

