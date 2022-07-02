/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
const games = ['Call Of Duty', 'Eldin Ring', 'Gta V', 'Apex', 'Minecraft'];

let text = "";
for (const x of games){
    text+= x + '<br>';
}
document.getElementById("list").innerHTML = text;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(['DNA', 'Dead or Alive', 'You Proof', 'Whiskey Glasses', 'Slim Shady']);

let text1 = "";
songs.forEach (function(value){
    text1 += value + "<br>"
})
document.getElementById("set1").innerHTML = text1;

// add two more songs to the set then display in the set2 paragraph
songs.add('Chasing You')
songs.add('Rap God')
let text2 = "";
songs.forEach (function(value){
    text2 += value + "<br>"
})
document.getElementById("set2").innerHTML = text2;






/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
const people = new Map([
    ["Blake", "user.1@gmail.com"],
    ["Ryan", "user.2@gmail.com"],
    ["Jacob", "user.3@gmail.com"],
    ["Jake", "user.4@gmail.com"],
    ["Rachel", "user.5@gmail.com"]
]);
text3 = "";
people.forEach (function(value1, key){
    text3 += key + '=' + value1 + "<br>";
})
document.getElementById("map1").innerHTML = text3;


// add two new names and emails and display in map2 use the forEach() method
people.set("Caden", "user.6@gmail.com")
people.set("Morris", "user.7@gmail.com")
text4 = "";
people.forEach (function(value2, key){
    text4 += key + '=' + value2 + "<br>";
})
document.getElementById("map2").innerHTML = text4;
// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = people.get("Blake");