
function forgotPassword() {
    window.location.href = 'reset-code.html';
}

function read() {
    window.location.href = 'the-tortoise-and-the-hare-reading.html';
}

function theTortoiseAndTheHareGame() {
    window.location.href = 'the-tortoise-and-the-hare-game.html';
}

function exitStory() {
    window.location.href = 'home.html';
}

$('#locked_story').click(function(){
    $('#modalDumpty').modal('hide');
    $('#locked_modal').modal('show')
})

$('#exit_modal').click(function(){
    $('#exit_story').modal('show')
})

$('#end-btn').click(function(){
    $('#end_story').modal('show')
})

