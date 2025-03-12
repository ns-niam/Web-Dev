`JSON`
let student = {
  name : "tangenz",
  age : 18,
  isAdmin : false,
  skills : [
    {"python" : ["basic", "numpy", "pandas", "fastapi", "discord.py", "async"]}, 
    {"c++" : ["basic"]}, 
    {"js" : ["basic browser-side"]}, 
    {"html" : ["elementary"]}, 
    {"css" : ["elementary"]}, 
    {"sql" : ["postgres", "mysql"]}
  ]
}

let jsonStudent = JSON.stringify(student, null, 2);
console.log(jsonStudent);

let object = {
  method : () => {
    console.log("hi");
  },
  [Symbol("id")] : 1,
  someProperty : undefined
}

let jsonObject = JSON.stringify(object); //undefined, functions and symbols are ignored
console.log(jsonObject);


let room = {
  number : 23,
  toJSON() {
    return this.number;
  }
}

let meetup = {
  title : "Conference",
  room
}

console.log(JSON.stringify(meetup, null, 4));



//parsing

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

let objectSchedule = JSON.parse(schedule, function(key, value) {
  if (key == "date") {
    return new Date(value);
  }
  return value;
})

console.log(objectSchedule.meetups[1].date.getUTCHours());
