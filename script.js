/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


//change from global to var for faster playback speed
var clueHoldTime = 333; //how long to hold each clue's light/sound
// global constants
const cluePauseTime = 150; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var pattern=[];
// var pattern = [1, 1, 2, 2, 3, 3, 2];
// var pattern1 = [7, 6, 5, 6, 7, 7, 7, 6, 6, 6, 7, 7, 7]
var progress = 0; 
var gamePlaying = false;
var guessCounter = 0;
var numOfTries = 3


//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function setPattern1(){
    pattern = [3, 2, 1, 2, 3, 3, 3];
  }
function setPattern2(){
     pattern = [5, 3, 5, 5, 3, 5, 6, 5, 4, 3, 2, 3, 4];
}
function setPattern3(){
    pattern = [1, 1, 1, 5, 6, 6, 5, 3, 3, 2, 2, 1];
}

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}
function stopGame(){
    //initialize game variables
    gamePlaying = false;
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function tryAgain(){
  alert("Try again. " + numOfTries + " tries remaining.");
  startGame();
}

// Sound Synthesis Functions
const freqMap = {
  //Specific Notes of the two patterns
  1: 523, //C
  2: 587, //D
  3: 659, //E
  4: 698, //F
  5: 784, //G
  6: 880, //A
  7: 988, //B
  8: 554, //C#
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter=0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime-=20;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}



function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter]==btn){
      if(guessCounter==progress){
          if(progress==pattern.length-1)
            {
              winGame();
              clueHoldTime = 333;
              numOfTries=3;
            }
          else{
            progress++;
            playClueSequence();
          }
      }
      else{
        guessCounter++;
      }
  }
  else if(pattern[guessCounter]!=btn && numOfTries>1){
    numOfTries--;
    clueHoldTime = 333;
    tryAgain();
  }
  else{
    loseGame();
    numOfTries=3;
    clueHoldTime = 333;
    
  }

}

