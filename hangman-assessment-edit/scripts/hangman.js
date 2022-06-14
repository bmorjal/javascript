// declare and initialize array
let game = ["FORD", "CHEVY", "DODGE", "GMC", "HONDA", "SUBARU", "FERRARI", "LAMBORGHINI", "CHRYSLER", "MERCEDES"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
//let found = false;
// game setup works fine --steffen
function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
}




// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman


document.getElementById("submit").addEventListener("click", function(event){

    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; //would this reset value to null

    for (var c = 0; c < answer.length; c++) {
        //alert(letters[c]);
        //found = false;
        if (userLetter.toUpperCase() === letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            //found = true;
            }   
        output = output + display[c] + ' ';
            
    }
    
        if (userLetter !== answer[c]){
            found = false;
            
                //attemptsLeft --;
                document.getElementById('wrong').innerText = userLetter;
            }

    if (attemptsLeft == 6){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/01.png");
        document.getElementById('imag').appendChild(newElement)
    }if (attemptsLeft == 5){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/02.png");
        document.getElementById('imag').appendChild(newElement)
    }if (attemptsLeft == 4){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/03.png");
        document.getElementById('imag').appendChild(newElement)
    }if (attemptsLeft == 3){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/04.png");
        document.getElementById('imag').appendChild(newElement)
    }if (attemptsLeft == 2){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/05.png");
        document.getElementById('imag').appendChild(newElement)
    }if (attemptsLeft == 1){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/06.png");
        document.getElementById('imag').appendChild(newElement)
    }if (attemptsLeft == 0){
        var newElement = document.createElement('img');
        newElement.setAttribute('src', "images/07.png");
        document.getElementById('imag').appendChild(newElement)
    }
    

    
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
    
    document.getElementById("word").innerHTML = output;
    output = '';
    

    
    
});


//scirpt connected fine somereason the button and the script are not registering.