window.addEventListener('load', function () {
    var sections = document.querySelectorAll('.story-view');

    if (sections.length > 0) {
        sections[0].style.display = 'block';
    }
});

/*function toggleVideo(thumbnailId, videoId, subtitleId, textId, control) {
    var video = document.getElementById(videoId);
    var subtitle = document.getElementById(subtitleId);
    var text = document.getElementById(textId);
    var thumbnail = document.getElementById(thumbnailId);
    const playPauseBtn = document.getElementById(control);

    text.style.display = "none";
    video.style.display = "none";
    thumbnail.style.display = "block";
    subtitle.style.display = "block";
              
    if (subtitle.paused) {
        subtitle.play();  
        playPauseBtn.innerHTML = getPauseSVG();
    } else {
        subtitle.pause();
        playPauseBtn.innerHTML = getPlaySVG();
    }
    
    subtitle.addEventListener('ended', function() {
        thumbnail.style.display = "block";
        text.style.display = "block";
        video.style.display = "none";
        subtitle.style.display = "none";
        playPauseBtn.innerHTML = getPlaySVG();
});
    
}*/

function next(currentPage) {
    var sections = document.querySelectorAll('.story-view');
    sections[currentPage - 1].style.display = 'none';
    var nextPage = currentPage % sections.length + 1;
    sections[nextPage - 1].style.display = 'block';
    stopAllVideosAndAudio();
}

function prev(currentPage) {
    var sections = document.querySelectorAll('.story-view');
    sections[currentPage - 1].style.display = 'none';
    var previousPage = (currentPage - 2 + sections.length) % sections.length + 1;
    sections[previousPage - 1].style.display = 'block';
    stopAllVideosAndAudio();
}

function stopAllVideosAndAudio() {
    // Stop all videos and reset to 0
    var allVideos = document.querySelectorAll('video');
    allVideos.forEach(function(video) {
        video.pause();
        video.currentTime = 0;
      
    });

    // Stop all audio elements
    var allAudio = document.querySelectorAll('audio');
    allAudio.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}





/*function tipLaugh(thumbnailLaugh, videoLaugh) {
var tooltip = document.getElementById('laugh');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text1');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnaillaugh = document.getElementById(thumbnailLaugh);
var videolaugh = document.getElementById(videoLaugh);

videolaugh.style.display = "block";
thumbnaillaugh.style.display = "none";
videolaugh.play();
}

function tipRun(thumbnailRun, videoRun) {
var tooltip = document.getElementById('run');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text2');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailrun = document.getElementById(thumbnailRun);
var videorun = document.getElementById(videoRun);

videorun.style.display = "block";
thumbnailrun.style.display = "none";
videorun.play();
}

function tipAmused(thumbnailAmused, videoAmused) {
var tooltip = document.getElementById('amused');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text3');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailamused = document.getElementById(thumbnailAmused);
var videoamused = document.getElementById(videoAmused);

videoamused.style.display = "block";
thumbnailamused.style.display = "none";
videoamused.play();

}

function tipConsented(thumbnailConsented, videoConsented) {
var tooltip = document.getElementById('consented');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text4');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailconsented = document.getElementById(thumbnailConsented);
var videoconsented = document.getElementById(videoConsented);

videoconsented.style.display = "block";
thumbnailconsented.style.display = "none";
videoconsented.play();
}

function tipSight(thumbnailSight, videoSight) {
var tooltip = document.getElementById('sight');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text5');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailsight = document.getElementById(thumbnailSight);
var videosight = document.getElementById(videoSight);

videosight.style.display = "block";
thumbnailsight.style.display = "none";
videosight.play();
}

function tipBeside(thumbnailBeside, videoBeside) {
var tooltip = document.getElementById('beside');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text6');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailbeside = document.getElementById(thumbnailBeside);
var videobeside = document.getElementById(videoBeside);

videobeside.style.display = "block";
thumbnailbeside.style.display = "none";
videobeside.play();
}

function tipSteadily(thumbnailSteadily, videoSteadily) {
var tooltip = document.getElementById('steadily');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text7');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailsteadily = document.getElementById(thumbnailSteadily);
var videosteadily = document.getElementById(videoSteadily);

videosteadily.style.display = "block";
thumbnailsteadily.style.display = "none";
videosteadily.play();
}

function tipSleeping(thumbnailSleeping, videoSleeping) {
var tooltip = document.getElementById('sleeping');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text8');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailsleeping = document.getElementById(thumbnailSleeping);
var videosleeping = document.getElementById(videoSleeping);

videosleeping.style.display = "block";
thumbnailsleeping.style.display = "none";
videosleeping.play();
}

function tipGoal() {
var tooltip = document.getElementById('goal');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text9');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailgoal = document.getElementById(thumbnailGoal);
var videogoal = document.getElementById(videoGoal);

videogoal.style.display = "block";
thumbnailgoal.style.display = "none";
videogoal.play();
}

function tipSwiftest(thumbnailSwiftest, videoSwiftest) {
var tooltip = document.getElementById('swiftest');
tooltip.style.display = 'block';
var highlightedText = document.querySelector('.highlighted-text10');
var rect = highlightedText.getBoundingClientRect();
var centerHorizontal = rect.left + rect.width / 2;
var tooltipLeft = centerHorizontal - tooltip.offsetWidth / 2;
tooltip.style.left = tooltipLeft + 'px';
tooltip.style.top = rect.top - tooltip.offsetHeight + 'px';

var thumbnailswiftest = document.getElementById(thumbnailSwiftest);
var videoswiftest = document.getElementById(videoSwiftest);

videoswiftest.style.display = "block";
thumbnailswiftest.style.display = "none";
videoswiftest.play();
}*/

function closeTip(tooltipId) {
var tooltip = document.getElementById(tooltipId);
if (tooltip) {
    tooltip.style.display = 'none';
}
}

function getPlaySVG() {
return `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#FCC710" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
        </svg>`;
}

function getPauseSVG() {
return `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#FCC710" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
        </svg>`;
}

