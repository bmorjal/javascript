// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

/*
let text = "";
for (let i = 0; i < 99; i++){
    text += i + "bottles of beer on the wall" + "<br>";
    text += i + "bottles of beer" + "<br>";
    text += "You take one down pass it around" + "<br>"
    text += i - 1 + "bottles of beer on the wall" + "<br>";
}
document.getElementById("beer").innerHTML = text;
*/
let text = "";
var word = "bottles";
var count = 99;
while (count > 0) {
    text += (count + " " + word + " of beer on the wall" + "<br>");
    text += (count + " " + word + " of beer," + "<br>");
    text += ("Take one down, pass it around," + "<br>");
    count = count - 1;
    if (count > 0) {
        text += (count + " " + word + " of beer on the wall." + "<br>");
    } else {
        text += ("No more " + word + " of beer on the wall." + "<br>");
    }
document.getElementById("beer").innerHTML = text;
}


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
const months = ["January", "February", "March"];

let txt = "";
for (let x in months){
    txt += months[x] + "";
}
 document.getElementById("for-in").innerHTML = txt;




// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let lan = "Chevy";

let tx = "";
for (let x of lan){
    tx += x + "<br>";
}
document.getElementById("for-of").innerHTML = tx;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
let t = "";
let i = 0;
while (i < 51) {
    t += i + "<br>";
    i++
}
document.getElementById("while").innerHTML = t;