/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
const d = new Date();
document.getElementById('basic').innerHTML = d;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
const a = new Date();
document.getElementById('today').innerHTML = a;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const b = new Date(2001, 9, 18, 9, 59);
document.getElementById('birthday').innerHTML = b;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
const c = new Date();
document.getElementById('iso').innerHTML = d.toISOString()


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const e = new Date(2022/06/19);
document.getElementById('date1').innerHTML = e;
const f = new Date('Jun 19 2022');
document.getElementById('date2').innerHTML = f;
let msec = Date.parse('June 19, 2022');
const g = new Date(msec);
document.getElementById('date3').innerHTML = g;
//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const h = new Date();
document.getElementById('get1').innerHTML = h.getTime()
document.getElementById('get2').innerHTML = h.getFullYear()
document.getElementById('get3').innerHTML = h.getMonth()
document.getElementById('get4').innerHTML = h.getDate()

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const v = new Date();
document.getElementById('set1').innerHTML = v.setFullYear(2001, 9, 1)
document.getElementById('set2').innerHTML = v.setMonth(8)
document.getElementById('set3').innerHTML = v.setMinutes(30)
document.getElementById('set4').innerHTML = h.setHours(2)