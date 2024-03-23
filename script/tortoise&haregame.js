const pairs = [
    ["fast", "swift"],
    ["jog", "run"],
    ["laugh", "amused"],
    ["agreed", "consented"],
    ["look", "sight"]
];
const words = pairs.flatMap(pair => pair);
shuffleArray(words);
let openBoxes = []; // Array to store open boxes

for (let i = 0; i < words.length; i++) {
let box = document.createElement('div');
box.className = 'item';
box.innerHTML = words[i];

    box.onclick = function() {
        if (openBoxes.length === 2 || this.classList.contains('boxMatch')) {
            return; // Prevent clicking if already 2 boxes are open or the box is already matched
        }
        if (!this.classList.contains('boxOpen') && !this.classList.contains('boxMatch')) {
            this.classList.add('boxOpen');
            openBoxes.push(this);

            if (openBoxes.length === 2) {             
                setTimeout(() => {
                    let word1 = openBoxes[0].innerHTML;
                    let word2 = openBoxes[1].innerHTML;

                    let pairFound = pairs.some(pair => {
                        return (pair[0] === word1 && pair[1] === word2) || (pair[0] === word2 && pair[1] === word1);
                    });

                    if (pairFound) {
                        openBoxes.forEach(box => {
                            box.classList.add('boxMatch');
                            box.classList.remove('boxOpen');
                        });

                        openBoxes = []; // Reset openBoxes array

                        if (document.querySelectorAll('.boxMatch').length === words.length) {
                            $('#done').modal('show');
                        }
                    } else {
                        openBoxes.forEach(box => {
                            box.classList.remove('boxOpen');
                        });
                        openBoxes = []; // Reset openBoxes array
                    }
                }, 1000);
            }
        }
    };

document.querySelector('.memory-view').appendChild(box);         
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const wordBoxes = document.querySelectorAll('.sb-first-set');
const goal = "GOAL";
let sbOne = 0;

wordBoxes.forEach(wordBox => {
    wordBox.addEventListener('click', function() {
        if (this.textContent.trim() !== '') {
            const letter = this.textContent.trim(); 
            const wordBoxAns = document.querySelectorAll('.sb-first-ans');

            let emptyIndex = 0;
            for (let i = 0; i < wordBoxAns.length; i++) {
                if (wordBoxAns[i].textContent.trim() === '') {
                    emptyIndex++;
                    const h1 = document.createElement('h1');
                    h1.textContent = letter;
                    wordBoxAns[i].appendChild(h1);
                    this.textContent = '';                            
                    break;                      
                }
            }
            sbOne++;
            if (sbOne === wordBoxAns.length) {
                const answer = Array.from(wordBoxAns).map(ans => ans.textContent.trim()).join('');
                if (answer === goal) {
                    wordBoxAns.forEach(ans => {
                        ans.style.backgroundColor = 'green';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                    }); 
                    setTimeout(() => {
                        var currentView = document.getElementById('spellingBee-1');
                        var nextView = document.getElementById('spellingBee-2');
                        currentView.style.display = 'none';
                        nextView.style.display = 'block';
                    }, 1000);                    
                } else {                          
                    wordBoxAns.forEach(ans => {
                        ans.style.backgroundColor = 'red';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                        setTimeout(() => {
                            const letter = ans.textContent.trim();
                            const emptyWordBox = Array.from(wordBoxes).find(wordBox => wordBox.textContent.trim() === '');
                            if (emptyWordBox) {
                                const h1 = document.createElement('h1'); 
                                h1.textContent = letter; 
                                emptyWordBox.appendChild(h1);
                            }
                            ans.textContent = '';
                            ans.style.backgroundColor = '#DEE0F3';
                            sbOne = 0; 
                        }, 1000);
                    });
                    
                }
            }
        }
    });
});

const wordBoxesTwo = document.querySelectorAll('.sb-second-set');
const slow = "SLOW";
let sbTwo = 0;

wordBoxesTwo.forEach(wordBoxTwo => {
    wordBoxTwo.addEventListener('click', function() {
        if (this.textContent.trim() !== '') {
            const letter = this.textContent.trim(); 
            const wordBoxTwoAns = document.querySelectorAll('.sb-second-ans');

            let emptyIndex = 0;
            for (let i = 0; i < wordBoxTwoAns.length; i++) {
                if (wordBoxTwoAns[i].textContent.trim() === '') {
                    emptyIndex++;
                    const h1 = document.createElement('h1');
                    h1.textContent = letter;
                    wordBoxTwoAns[i].appendChild(h1);
                    this.textContent = '';                            
                    break;                      
                }
            }
            sbTwo++;
            if (sbTwo === wordBoxTwoAns.length) {
                const answer = Array.from(wordBoxTwoAns).map(ans => ans.textContent.trim()).join('');
                if (answer === slow) {
                    wordBoxTwoAns.forEach(ans => {
                        ans.style.backgroundColor = 'green';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                    }); 
                    setTimeout(() => {
                        var currentView = document.getElementById('spellingBee-2');
                        var nextView = document.getElementById('spellingBee-3');
                        currentView.style.display = 'none';
                        nextView.style.display = 'block';
                    }, 1000);                    
                } else {                          
                    wordBoxTwoAns.forEach(ans => {
                        ans.style.backgroundColor = 'red';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                        setTimeout(() => {
                            const letter = ans.textContent.trim();
                            const emptyWordBox = Array.from(wordBoxesTwo).find(wordBoxTwo => wordBoxTwo.textContent.trim() === '');
                            if (emptyWordBox) {
                                const h1 = document.createElement('h1'); 
                                h1.textContent = letter; 
                                emptyWordBox.appendChild(h1);
                            }
                            ans.textContent = '';
                            ans.style.backgroundColor = '#DEE0F3';
                            sbTwo = 0; 
                        }, 1000);
                    });
                    
                }
            }
        }
    });
});

const wordBoxesThree = document.querySelectorAll('.sb-third-set');
const sleep = "SLEEP";
let sbThree = 0;

wordBoxesThree.forEach(wordBoxThree => {
    wordBoxThree.addEventListener('click', function() {
        if (this.textContent.trim() !== '') {
            const letter = this.textContent.trim(); 
            const wordBoxThreeAns = document.querySelectorAll('.sb-third-ans');

            let emptyIndex = 0;
            for (let i = 0; i < wordBoxThreeAns.length; i++) {
                if (wordBoxThreeAns[i].textContent.trim() === '') {
                    emptyIndex++;
                    const h1 = document.createElement('h1');
                    h1.textContent = letter;
                    wordBoxThreeAns[i].appendChild(h1);
                    this.textContent = '';                            
                    break;                      
                }
            }
            sbThree++;
            if (sbThree === wordBoxThreeAns.length) {
                const answer = Array.from(wordBoxThreeAns).map(ans => ans.textContent.trim()).join('');
                if (answer === sleep) {
                    wordBoxThreeAns.forEach(ans => {
                        ans.style.backgroundColor = 'green';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                    }); 
                    setTimeout(() => {
                        var currentView = document.getElementById('spellingBee-3');
                        var nextView = document.getElementById('spellingBee-4');
                        currentView.style.display = 'none';
                        nextView.style.display = 'block';
                    }, 1000);                    
                } else {                          
                    wordBoxThreeAns.forEach(ans => {
                        ans.style.backgroundColor = 'red';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                        setTimeout(() => {
                            const letter = ans.textContent.trim();
                            const emptyWordBox = Array.from(wordBoxesThree).find(wordBoxThree => wordBoxThree.textContent.trim() === '');
                            if (emptyWordBox) {
                                const h1 = document.createElement('h1'); 
                                h1.textContent = letter; 
                                emptyWordBox.appendChild(h1);
                            }
                            ans.textContent = '';
                            ans.style.backgroundColor = '#DEE0F3';
                            sbThree = 0; 
                        }, 1000);
                    });
                    
                }
            }
        }
    });
});

const wordBoxesFour = document.querySelectorAll('.sb-fourth-set');
const laugh = "LAUGH";
let sbFour = 0;

wordBoxesFour.forEach(wordBoxFour => {
    wordBoxFour.addEventListener('click', function() {
        if (this.textContent.trim() !== '') {
            const letter = this.textContent.trim(); 
            const wordBoxFourAns = document.querySelectorAll('.sb-fourth-ans');

            let emptyIndex = 0;
            for (let i = 0; i < wordBoxFourAns.length; i++) {
                if (wordBoxFourAns[i].textContent.trim() === '') {
                    emptyIndex++;
                    const h1 = document.createElement('h1');
                    h1.textContent = letter;
                    wordBoxFourAns[i].appendChild(h1);
                    this.textContent = '';                            
                    break;                      
                }
            }
            sbFour++;
            if (sbFour === wordBoxFourAns.length) {
                const answer = Array.from(wordBoxFourAns).map(ans => ans.textContent.trim()).join('');
                if (answer === laugh) {
                    wordBoxFourAns.forEach(ans => {
                        ans.style.backgroundColor = 'green';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                    }); 
                    setTimeout(() => {
                        var currentView = document.getElementById('spellingBee-4');
                        var nextView = document.getElementById('spellingBee-5');
                        currentView.style.display = 'none';
                        nextView.style.display = 'block';
                    }, 1000);                    
                } else {                          
                    wordBoxFourAns.forEach(ans => {
                        ans.style.backgroundColor = 'red';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                        setTimeout(() => {
                            const letter = ans.textContent.trim();
                            const emptyWordBox = Array.from(wordBoxesFour).find(wordBoxFour => wordBoxFour.textContent.trim() === '');
                            if (emptyWordBox) {
                                const h1 = document.createElement('h1'); 
                                h1.textContent = letter; 
                                emptyWordBox.appendChild(h1);
                            }
                            ans.textContent = '';
                            ans.style.backgroundColor = '#DEE0F3';
                            sbFour = 0; 
                        }, 1000);
                    });
                    
                }
            }
        }
    });
});

const wordBoxesFive = document.querySelectorAll('.sb-fifth-set');
const beside = "BESIDE";
let sbFive = 0;

wordBoxesFive.forEach(wordBoxFive => {
    wordBoxFive.addEventListener('click', function() {
        if (this.textContent.trim() !== '') {
            const letter = this.textContent.trim(); 
            const wordBoxFiveAns = document.querySelectorAll('.sb-fifth-ans');

            let emptyIndex = 0;
            for (let i = 0; i < wordBoxFiveAns.length; i++) {
                if (wordBoxFiveAns[i].textContent.trim() === '') {
                    emptyIndex++;
                    const h1 = document.createElement('h1');
                    h1.textContent = letter;
                    wordBoxFiveAns[i].appendChild(h1);
                    this.textContent = '';                            
                    break;                      
                }
            }
            sbFive++;
            if (sbFive === wordBoxFiveAns.length) {
                const answer = Array.from(wordBoxFiveAns).map(ans => ans.textContent.trim()).join('');
                if (answer === beside) {
                    wordBoxFiveAns.forEach(ans => {
                        ans.style.backgroundColor = 'green';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                    }); 
                    setTimeout(() => {
                        $('#done').modal('show')
                    }, 1000);                    
                } else {                          
                    wordBoxFiveAns.forEach(ans => {
                        ans.style.backgroundColor = 'red';
                        ans.querySelectorAll('h1').forEach(h1 => {
                            h1.style.color = 'white';
                        });
                        setTimeout(() => {
                            const letter = ans.textContent.trim();
                            const emptyWordBox = Array.from(wordBoxesFive).find(wordBoxFive => wordBoxFive.textContent.trim() === '');
                            if (emptyWordBox) {
                                const h1 = document.createElement('h1'); 
                                h1.textContent = letter; 
                                emptyWordBox.appendChild(h1);
                            }
                            ans.textContent = '';
                            ans.style.backgroundColor = '#DEE0F3';
                            sbFive = 0; 
                        }, 1000);
                    });
                    
                }
            }
        }
    });
});

var quiz = 1;

function showGame(gameId) {
    var gameView = document.querySelector('.game-view');
    var game = document.querySelector(gameId);
    gameView.style.display = 'none';
    game.style.display = 'block';

    
}

function nextQuiz() {
    quiz++;
    showQuestion(quiz);
}

function showQuestion(quiz) {
    var currentQuestion = document.getElementById('question-' + (quiz - 1));
    var nextQuestion = document.getElementById('question-' + quiz);

    if (currentQuestion) {
        currentQuestion.style.display = 'none';
    }

    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    } else {
        $('#done').modal('show')
    }
}

function checkAnswer(questionNumber, selectedAnswer) {
    const correctAnswers = [1, 2, 3, 2, 4, 1, 3, 2, 4, 1];
    if (selectedAnswer === correctAnswers[questionNumber - 1]) {
        $('#correct').modal('show');
    } else {
        $('#wrong').modal('show');
    }
}

const goalAudio = document.getElementById('audio_goal');
const goalBtn = document.getElementById('goal-btn');
goalBtn.addEventListener('click', () => {
    goalBtn.style.display = 'none'; 
    goalAudio.play(); 
});

goalAudio.addEventListener('ended', () => {
    goalBtn.style.display = 'block'; 
});

const slowAudio = document.getElementById('audio_slow');
const slowBtn = document.getElementById('slow-btn');
slowBtn.addEventListener('click', () => {
    slowBtn.style.display = 'none'; 
    slowAudio.play(); 
});

slowAudio.addEventListener('ended', () => {
    slowBtn.style.display = 'block'; 
});

const sleepAudio = document.getElementById('audio_sleep');
const sleepBtn = document.getElementById('sleep-btn');
sleepBtn.addEventListener('click', () => {
    sleepBtn.style.display = 'none'; 
    sleepAudio.play(); 
});

sleepAudio.addEventListener('ended', () => {
    sleepBtn.style.display = 'block'; 
});

const laughAudio = document.getElementById('audio_laugh');
const laughBtn = document.getElementById('laugh-btn');
laughBtn.addEventListener('click', () => {
    laughBtn.style.display = 'none'; 
    laughAudio.play(); 
});

laughAudio.addEventListener('ended', () => {
    laughBtn.style.display = 'block'; 
});

const besideAudio = document.getElementById('audio_beside');
const besideBtn = document.getElementById('beside-btn');
besideBtn.addEventListener('click', () => {
    besideBtn.style.display = 'none'; 
    besideAudio.play(); 
});

besideAudio.addEventListener('ended', () => {
    besideBtn.style.display = 'block'; 
});