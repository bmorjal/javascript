let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = Math.ceil(Math.random() * 1000);

function checkNumber(){
    var input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = "Right" + "," + "it was" + number;
    }
    else if(input > number){
        output.innerHTML = "to high";
        
    }
    else if(input < number /*&& input > 1*/){
        output.innerHTML = "to low"
    }
    else if(input < 1){
        output.innerHTML = "Higher has to be between 1 and 100"
    }
    else if(input > 1000){
        output.innerHTML = "Higher than 100"
    }
    else{
        output.innerHTML = "Not a number in range"
    }
    
}

btn.addEventListener('click', checkNumber);