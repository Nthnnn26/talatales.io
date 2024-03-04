var sceneIndex = 0;
var imageUrls = [
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_1.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_2.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_3.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_4.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_5.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_6.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_7.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_8.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_9.png?raw=true',
    'https://github.com/Nthnnn26/talatales/blob/main/theTortoiseAndTheHare/page_10.png?raw=true',
];

var sceneTexts = [
    'A Hare was making fun of the Tortoise one day for being so slow.',
    '"Do you ever get anywhere?" he asked with a mocking laugh.',
    '"Yes," replied the Tortoise, "and I get there sooner than you think. Ill run you a race and prove it."',
    'The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed',
    'So the Fox, who had consented to act as judge, marked the distance and started the runners off.',
    'The Hare was soon far out sight and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare.',
    'He lay down beside the course to take a nap until the Tortoise should catch up.',
    'The Tortoise meanwhile kept going slowly but steadily, and, after a time, passed the place where the Hare was sleeping.',
    'But the Hare slept on very peacefully; and when at last he did wake up, the Tortoise was near the goal.',
    'The Hare now ran his swiftest, but he could not overtake the Tortoise in time.',
];

var preloadedImages = [];
imageUrls.forEach(function (url) {
    var img = new Image();
    img.src = url;
    preloadedImages.push(img);
});

function changeScene(action) {
    var imgElement = document.getElementById('main-img');
    var paragraphElement = document.getElementById('main-paragraph');

    switch (action) {
        case 'previous':
            sceneIndex = (sceneIndex - 1 + imageUrls.length) % imageUrls.length;
            break;
        case 'next':
            sceneIndex = (sceneIndex + 1) % imageUrls.length;
            break;
        default:
            console.error('Invalid action:', action);
    }

    imgElement.src = imageUrls[sceneIndex];
    paragraphElement.innerText = sceneTexts[sceneIndex];
}

function forgotPassword() {
    window.location.href = 'reset-code.html';
}
function read() {
    window.location.href = 'the-tortoise-and-the-hare-read.html';
}
function playButton() {
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('pauseButton').style.display = 'block';
}

function pauseButton() {
    document.getElementById('pauseButton').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
}
$('#newPassword').click(function(){
    window.location.href = 'reset-code.html';
})
