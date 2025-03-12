`Date`
let now = new Date();

console.log(now);

//args:
//1. timestamp - milisecond from 1st Jan 1970
console.log(new Date(0));

//2. string date
console.log(new Date("2017-01-26"));

//3. args list:
//year : 4 digit, month : from 0 to 11, date, hours/minutes/seconds/milliseconds

console.log(new Date(2011, 0, 1, 0, 0, 0, 0));


`Get Methods (local timezone, add UTC after get to get UTC time):

getFullYear() - year
getMonth() - month
getDate() - day
getHours(), etc...

getDay() -> 0 - 6 where 0 is Sunday

getTime() -, timestamp from 1st Jan 1970
getTimezoneOffset()
`

` Set Methods

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

all of the method except the last one have their utc counterparts
`
