var questions = [        //Created Questions Answers Correct Array
{
    Question:"What type of ammunition does a M4 take?",
    Answers:["556mm","25mm","100mm","16mm"],
    Correct:"556mm",
},

{
    Question:"How fast does an 556 round travel?",
    Answers:["2,970ft/s","2000sec","3000","50"],
    Correct:"2,970ft/s"
},

{
    Question:"Range for Point Target",
    Answers:["2,970 meters","2000 meters","3000 meters ","500 meters"],
    Correct:"500 meters"
},

{
    Question:"How much does an M4 weight?",
    Answers:["8.11 pounds","7.46 pounds","10 lbs","20lbs"],
    Correct:"7.46 pounds"
}
    
]
var timer;      //Create to start button quiz
var time = 60;
var current=0;
function startQuiz(){
var start = document.getElementById('start')
start.style.display="none";
document.getElementById("timer").textContent=time;
timer=setInterval(runTimer,1000)
console.log("startQuiz")
runQuiz()

}
function runQuiz(){      

var i = current
document.querySelector(".question").textContent=questions[i].Question
document.querySelector("#Choice1").textContent=questions[i].Answers[0]
document.querySelector("#Choice2").textContent=questions[i].Answers[1]
document.querySelector("#Choice3").textContent=questions[i].Answers[2]
document.querySelector("#Choice4").textContent=questions[i].Answers[3]

}
function runTimer(){
time--
document.getElementById("timer").textContent=time;
}

function checkAnswer(event){
console.log("works");
var i = current
var correct = questions[i].Correct
var userChoice=event.target.textContent
if (correct!==userChoice){
time=time-10 
document.getElementById("timer").textContent=time;
}
 current++
 if (current < questions.length){
  runQuiz()  

 }else{
     console.log("GameOver!!");
     clearInterval(timer);
 }
 
}































document.getElementById("start-quiz").addEventListener("click",startQuiz)





// game over
// keep track .textcontent in correct 
// Gameover input their intials
// when they submit it saves time score into local
