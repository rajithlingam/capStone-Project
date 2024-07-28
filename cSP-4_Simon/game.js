// alert("I'm READY!");

var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var userChosenColour;
var started = true;
var level=0; 

$(document).keydown(function () {
    //animatePress(userChosenColour);
    // ++level;
    if (started) {
        
        //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
        nextSequence() ;
        started = false;
      }
});

$(".btn").click(function () { 
    userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    //console.log(".btn "+userClickedPattern);
    //console.log(this.id);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    //nextSequence(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {    
  
    userClickedPattern = [];
     
    var randomNumber;
    var randomChosenColour; 
    
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //$("#"+gamePattern).css("background-color", "green");
    // console.log("randomChosenColour "+randomChosenColour);
    // console.log("pre increment "+level);

    playSound(randomChosenColour);   
    $("."+randomChosenColour).fadeOut(100).fadeIn(100); 

    //console.log("t "+gamePattern[level]);      
    ++level;
    //console.log("post increment"+level);
    $("#level-title").text("Level " + level);
    
}

function playSound(name) {
    
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    // console.log("currentColour");
    // console.log(currentColour);
   
    $("."+currentColour).addClass("pressed");

   setTimeout(function() {
    $("."+currentColour).removeClass("pressed");
   }, 100);
    //currentColour.addClass("pressed");
}


function checkAnswer(currentLevel) {

     console.log("checkAnswer "+currentLevel);
        console.log(gamePattern);
        console.log(userClickedPattern);
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
            console.log(gamePattern.length+" Success "+userClickedPattern.length);
            if(gamePattern.length===userClickedPattern.length){
                setTimeout(function() {
                nextSequence();}, 1000);}
            console.log(level);
        } else {
                $("#level-title").text("Game Over, Press Any Key to Restart");
                var wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
    
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 200);
            startOver();
        }
}

function startOver() {
    level = 0;
    gamePattern=[];
    started= true;
}