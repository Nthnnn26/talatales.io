let currentPlayingAudio = null;

function stopCurrentAudio() {
    if (currentPlayingAudio) {
        currentPlayingAudio.pause();
        currentPlayingAudio.currentTime = 0;
    }
}

const slow = document.getElementById('audio_slow');
const laugh = document.getElementById('audio_laugh');
const run = document.getElementById('audio_run');
const amused = document.getElementById('audio_amused');
const consented = document.getElementById('audio_consented');
const sight = document.getElementById('audio_sight');
const beside = document.getElementById('audio_beside');
const sleeping = document.getElementById('audio_sleeping');
const steadily = document.getElementById('audio_steadily');
const goal = document.getElementById('audio_goal');
const swiftest = document.getElementById('audio_swiftest');

const slowBtn = document.getElementById('slow-btn');
const laughBtn = document.getElementById('laugh-btn');
const runBtn = document.getElementById('run-btn');
const amusedBtn = document.getElementById('amused-btn');
const consentedBtn = document.getElementById('consented-btn');
const sightBtn = document.getElementById('sight-btn');
const besideBtn = document.getElementById('beside-btn');
const sleepingBtn = document.getElementById('sleeping-btn');
const steadilyBtn = document.getElementById('steadily-btn');
const goalBtn = document.getElementById('goal-btn');
const swiftestBtn = document.getElementById('swiftest-btn');

slowBtn.addEventListener('click', () => { slow.play(); });
laughBtn.addEventListener('click', () => { laugh.play(); });
runBtn.addEventListener('click', () => { run.play(); });
amusedBtn.addEventListener('click', () => { amused.play(); });
consentedBtn.addEventListener('click', () => { consented.play(); });
sightBtn.addEventListener('click', () => { sight.play(); });
besideBtn.addEventListener('click', () => { beside.play(); });
sleepingBtn.addEventListener('click', () => { sleeping.play(); });
steadilyBtn.addEventListener('click', () => { steadily.play(); });
goalBtn.addEventListener('click', () => { goal.play(); });
swiftestBtn.addEventListener('click', () => { swiftest.play(); });

const slowPhonetics = document.getElementById('slow_phonetics');
const laughPhonetics = document.getElementById('laugh_phonetics');
const runPhonetics = document.getElementById('run_phonetics');
const amusedPhonetics = document.getElementById('amused_phonetics');
const consentedPhonetics = document.getElementById('consented_phonetics');
const sightPhonetics = document.getElementById('sight_phonetics');
const besidePhonetics = document.getElementById('beside_phonetics');
const sleepingPhonetics = document.getElementById('sleeping_phonetics');
const steadilyPhonetics = document.getElementById('steadily_phonetics');
const goalPhonetics = document.getElementById('goal_phonetics');
const swiftestPhonetics = document.getElementById('swiftest_phonetics');

const proSlowBtn = document.getElementById('pro_slow');
const proLaughBtn = document.getElementById('pro_laugh');
const proRunBtn = document.getElementById('pro_run');
const proAmusedBtn = document.getElementById('pro_amused');
const proConsentedBtn = document.getElementById('pro_consented');
const proSightBtn = document.getElementById('pro_sight');
const proBesideBtn = document.getElementById('pro_beside');
const proSleepingBtn = document.getElementById('pro_sleeping');
const proSteadilyBtn = document.getElementById('pro_steadily');
const proGoalBtn = document.getElementById('pro_goal');
const proSwiftestBtn = document.getElementById('pro_swiftest');

proSlowBtn.addEventListener('click', () => { slowPhonetics.play(); });
proLaughBtn.addEventListener('click', () => { laughPhonetics.play(); });
proRunBtn.addEventListener('click', () => { runPhonetics.play(); });
proAmusedBtn.addEventListener('click', () => { amusedPhonetics.play(); });
proConsentedBtn.addEventListener('click', () => { consentedPhonetics.play(); });
proSightBtn.addEventListener('click', () => { sightPhonetics.play(); });
proBesideBtn.addEventListener('click', () => { besidePhonetics.play(); });
proSleepingBtn.addEventListener('click', () => { stopCurrentAudio(); currentPlayingAudio = sleepingPhonetics; sleepingPhonetics.play(); });
proSteadilyBtn.addEventListener('click', () => { stopCurrentAudio(); currentPlayingAudio = steadilyPhonetics; steadilyPhonetics.play(); });
proGoalBtn.addEventListener('click', () => { goalPhonetics.play(); });
proSwiftestBtn.addEventListener('click', () => { swiftestPhonetics.play(); });

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

