//Use toFixed() method to round the number 7.45678 to 2 decimal places
let a=7.45678
console.log(a.toFixed(2));


//Use the toPrecesion() method to format the number 123.456789 to a precision of four digits.
let b=123.456789
console.log(b.toPrecision(4))


//Use javascript Date methods to display the current date and the day of the week
const d=new Date()
console.log(d.toLocaleDateString())
console.log(d.toLocaleString('en-US',{weekday:'long'}))