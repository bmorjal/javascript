function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById('round').innerHTML = Math.round(4.9);
    document.getElementById('ceil').innerHTML = Math.ceil(6.7894);
    document.getElementById('floor').innerHTML = Math.floor(3.76548);
    document.getElementById('trunc').innerHTML = Math.trunc(7.23409);
    document.getElementById('sign').innerHTML = Math.sign(-432);
    document.getElementById('pow').innerHTML = Math.pow(9, 7);
    document.getElementById('min').innerHTML = Math.min(0, 11, 14, 44, 55);
    document.getElementById('random').innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById('random2').innerHTML = Math.floor(Math.random(1) * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    document.getElementById('comparisons').innerHTML = 'The difference between == and ===, == is used to compare or assign values, and === is used for comparisons that are more strict in value, checking it over.';



    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}