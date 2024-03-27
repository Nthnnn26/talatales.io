
function forgotPassword() {
    window.location.href = 'reset-code.html';
}

function read() {
    window.location.href = 'the-tortoise-and-the-hare-read.html';
}

function theTortoiseAndTheHareGame() {
    window.location.href = 'the-tortoise-and-the-hare-game.html';
}

function exitStory() {
    window.location.href = 'home.html';
}

$('#locked_story').click(function(){
    $('#locked_modal').modal('show')
})

$('#exit_modal').click(function(){
    $('#exit_story').modal('show')
})

$('#end-btn').click(function(){
    $('#end_story').modal('show')
})

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}