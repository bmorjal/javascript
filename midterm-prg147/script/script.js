var v = '';

console.log("10 good questions!")

const quizData = [
    {
        question:"Who was the actor in Top gun who played Maverick?",
        a: "Tom Cruise",
        b: "Val Kilmer",
        c: "Anthony Edwards",
        d: "Brad Pitt",
        correct: "a"
    },
    {
        question:"In the movie Aladdin where is the main city located?",
        a: "Brazil",
        b: "Iraq",
        c: "Afghanistan",
        d: "Nigeria",
        correct: "b"
    },
    {
        question:"What flavor of pop tarts does buddy the elf eat on his spaghetti in the Elf?",
        a: "Chocolate",
        b: "Strawberry",
        c: "Smores",
        d: "Blueberry",
        correct: "a"  
    },
    {
        question:"For what movie did Steven Spielberg win his first Oscar for best director?",
        a: "Ready Player one",
        b: "The Post",
        c: "BFG",
        d: "Schindler's List",
        correct: "d"
    },
    {
        question:"What Hollywood movie star plays himself in Zombieland?",
        a: "Ryan Reynolds",
        b: "Bill Murray",
        c: "Will Smith",
        d: "Tom Hanks",
        correct: "b"
    },
    {
        question:"Who actually drew the sketch of Rose in Titanic?",
        a: "Leonardo DiCaprio",
        b: "Kathy Bates",
        c: "James Cameron",
        d: "Billy Zane",
        correct: "c"
    },
    {
        question:"Where were The Lord of the Rings movies filmed at?",
        a: "Ireland",
        b: "New Zealand",
        c: "Australia",
        d: "Iceland",
        correct: "c"
    },
    {
        question:"Who was the first black person to win an oscar?",
        a: "Hattie McDaniel",
        b: "Sidney Poitier",
        c: "Dorothy Dandridge",
        d: "James Earl Jones",
        correct: "a"
    },
    {
        question:"Freddy Krueger has which color stripes?",
        a: "Red and Blue",
        b: "Orange and Green",
        c: "Red and Green",
        d: "Orange and Brown",
        correct: "c"
    },
    {
        question:"What item is in every Fight Club scene?",
        a: "Coca-Cola can",
        b: "Starbucks cup",
        c: "Dunkin' donut",
        d: "Pepsi bottle",
        correct: "b"
    },
];

console.log("Good job, now create the elements in which to use!")

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

console.log("Create functions in which to load the program")

loadQuiz()

function loadQuiz(){
    deselectanswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectanswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2> You got ${score}/${quizData.length} right`
        }
    }
    if(score==10){
        v = "You got a perfect score congrats!"
    }else if(score == 9){
        v = "Oh so close to perfect!"
    }else if(score == 8){
        v = "8 is the new 10!"
    }else if(score == 7){
        v = "Cutting close aren't we!"
    }else if(score == 6){
        v = "What happened you tired?"
    }else if(score == 5){
        v = "Half right, but also half wrong."
    }else if(score == 4){
        v = "Less then half not good."
    }else if(score == 3){
        v = "A baby could do better then that!"
    }else if(score == 2){
        v = "You had to try to fail this huh?"
    }else if(score == 1){
        v = "I have nothing to say."
    }else{
        v = "Not valid"
    }
    document.getElementById("endplus").innerText = v;
})

console.log("Create answer cheat")

const end = {
    caption: "1. Tom Cruise,<br> 2. Iraq,<br> 3. Chocolate,<br> 4. Schindler's List,<br> 5. Bill Murray,<br> 6. James Cameron,<br> 7. Australia,<br> 8. Hattie McDaniel,<br> 9. Red and Orange,<br> 10. Starbucks cup"
}

function chooseHint(hints){
    if(hints == 1){
        loadMe(end, 1);
    }
}

function loadMe(hints){
    document.getElementById('all-answers').innerHTML = hints.caption;
}

console.log("Have nice quote at the end to each score")
/*
if(score==10){
    v = "You got a perfect score congrats!"
}else if(score == 9){
    v = "Oh so close to perfect!"
}else if(score == 8){
    v = "8 is the new 10!"
}else if(score == 7){
    v = "Cutting close aren't we!"
}else if(score == 6){
    v = "What happened you tired?"
}else if(score == 5){
    v = "Half right, but also half wrong."
}else if(score == 4){
    v = "Less then half not good."
}else if(score == 3){
    v = "A baby could do better then that!"
}else if(score == 2){
    v = "You had to try to fail this huh?"
}else if(score == 1){
    v = "I have nothing to say."
}else{
    v = "Not valid"
}

document.getElementById("endplus").innerText = v;
*/