

var gameView = document.querySelector('.game-view');
var page = 1;

function showGame(gameId) {
    var game = document.querySelector(gameId);
    gameView.style.display = 'none';
    game.style.display = 'block';
}

window.addEventListener('load', function () {
var sections = document.querySelectorAll('.story-view');

if (sections.length > 0) {
    sections[0].style.display = 'block';
}
});

function next() {
page++;
showQuestion(page);
}

function showQuestion(page) {
// Add logic to show the next question based on the page value
var currentQuestion = document.getElementById('question-' + (page - 1));
var nextQuestion = document.getElementById('question-' + page);

if (currentQuestion) {
    currentQuestion.style.display = 'none';
}

if (nextQuestion) {
    nextQuestion.style.display = 'block';
} else {
    // Handle logic when there are no more questions
    $('#done').modal('show')
}
}

function questionOne(checkAnswer) {
if (checkAnswer === 1) {
    $('#correct').modal('show')
   
} else {
    $('#wrong').modal('show')
   
}
}

function questionTwo(checkAnswer) {
if (checkAnswer === 2) {
    $('#correct').modal('show')        
} else {
    $('#wrong').modal('show')             
}
}

function questionThree(checkAnswer) {
if (checkAnswer === 3) {
    $('#correct').modal('show') 
} else {
    $('#wrong').modal('show')  
}
}

function questionFour(checkAnswer) {
if (checkAnswer === 2) {
    $('#correct').modal('show') 
} else {
    $('#wrong').modal('show')  
}
}

function questionFive(checkAnswer) {
if (checkAnswer === 4) {
    $('#correct').modal('show') 
} else {
    $('#wrong').modal('show')  
}
}

function questionSix(checkAnswer) {
if (checkAnswer === 1) {
    $('#correct').modal('show') 
} else {
    $('#wrong').modal('show')  
}
}

function questionSeven(checkAnswer) {
if (checkAnswer === 3) {
    $('#correct').modal('show') 
} else {
    $('#wrong').modal('show')  
}
}

function questionEight(checkAnswer) {
if (checkAnswer === 2) {
    $('#correct').modal('show') 
} else {     
    $('#wrong').modal('show')  
}
}

function questionNine(checkAnswer) {
if (checkAnswer === 4) {
    $('#correct').modal('show') 
} else { 
    $('#wrong').modal('show')  
}
}

function questionTen(checkAnswer) {
if (checkAnswer === 1) {
    $('#correct').modal('show') 
} else {
    $('#wrong').modal('show')  
}
}

