
function forgotPassword() {
    window.location.href = 'reset-code.html';
}
function read() {
    window.location.href = 'the-tortoise-and-the-hare-read.html';
}

$('#exit_modal').click(function(){
    $('#exit_story').modal('show')
})

function exitStory() {
    window.location.href = 'home.html';
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

slowBtn.addEventListener('click', () => {
    slow.play();
});
laughBtn.addEventListener('click', () => {
    laugh.play();
});
runBtn.addEventListener('click', () => {
    run.play();
});
amusedBtn.addEventListener('click', () => {
    amused.play();
});
consentedBtn.addEventListener('click', () => {
    consented.play();
});
sightBtn.addEventListener('click', () => {
    sight.play();
});
besideBtn.addEventListener('click', () => {
    beside.play();
});
sleepingBtn.addEventListener('click', () => {
    sleeping.play();
});
steadilyBtn.addEventListener('click', () => {
    steadily.play();
});
goalBtn.addEventListener('click', () => {
    goal.play();
});
swiftestBtn.addEventListener('click', () => {
    swiftest.play();
});
