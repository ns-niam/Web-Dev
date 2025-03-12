let date1 = new Date(2012, 1, 20, 3, 12);

console.log(String(date1));

function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return "SU"
    case 1:
      return "MO";
    case 2:
      return "TU";
    case 3:
      return "WE";
    case 4:
      return "TH";
    case 5:
      return "FR";
    case 6:
      return "SA";
  }
}

let date2 = new Date();
console.log(getWeekDay(date2));


function getDateAgo(date, numDays) {

  let dateCopy = new Date(date);
  
  dateCopy.setDate(dateCopy.getDate() - numDays);
  return `${numDays} days ago it was the ${dateCopy.getDate()}th day of the month`;
}

console.log(getDateAgo(date2, 2));


function getLastDayOfMonth(year, month) {
  
  date = new Date(year, month);
  date.setDate(31);

  return `The ${month + 1}th month of ${year} is ${31 - date.getDate()} days long`;
}

console.log(getLastDayOfMonth(2020, 1));


function getSecondsToday() {

  let now = Date.now();
  let midnightToday = new Date();
  midnightToday.setHours(0, 0, 0, 0);
  
  return Math.round((now - midnightToday.getTime()) / 1000);
}

function getSecondsTillTomorrow() {

  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return Math.round((tomorrow - now) / 1000);

}

console.log(getSecondsToday());
console.log(getSecondsTillTomorrow());

console.log("\n")
function formatDate(date) {

  let now = Date.now();
  let TSdiff = now - date.getTime();
  console.log(TSdiff);


  switch (TSdiff) {
    case (TSdiff < 1 * 1000):
      return "right now"; 

    case (TSdiff < 1 * 60 * 1000):
      return `${TSdiff} seconds ago`;

    case (TSdiff < 1 * 60 * 60 * 1000):
      return `${TSdiff} minutes ago`;

    default:
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() % 100} ${date.getHours()}:${date.getMinutes()}`
  }
  

}

console.log(formatDate(new Date()));
