function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Blake Morjal"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let x = 10;
    let y = 20;
    let z = "The result is: " + x + y;
    document.getElementById("add").innerHTML = z;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let a = 123;
    document.getElementById("to-string").innerHTML = a.toString();

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let b = 9.656;
    document.getElementById("exponent").innerHTML = b.toExponential(2);

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    document.getElementById("fixed").innerHTML = b.toFixed(0);

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = b.toPrecision(2);

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = parseFloat("10.5 years")

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt("10, 10.33")


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = ("=== is just a stricter version of ==, === is used as a definite and == would be used more widely loser terms, casual")
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = ("In precedence and's are always evaluated first before the or's")


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    var answer = window.prompt("Type yes, no. Then click ok.")

    switch (answer) {
        case "yes":
            document.getElementById("switch").innerHTML = ("You said yes");
            break;
        case "no":
            document.getElementById("switch").innerHTML = ("you said no");
            break;
        default:
            document.getElementById("switch").innerHTML = ("didn't pick either");
            break;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var animal = "ford";
    // animal = "chevy";

    animal === "ford"
    ? document.getElementById("ternary").innerHTML = ("Drive a ford")
    : document.getElementById("ternary").innerHTML = ("Drive a chevy");
}