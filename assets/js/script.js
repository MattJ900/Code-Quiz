var questions = [
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

function startQuiz(){
var start = document.getElementsByClassName('start')
start.style.display="none";
console.log("startQuiz")


}

for(var i=0; i <questions.length i++){
    startQuiz.addEventListener('click');

}






document.getElementById("start-quiz").addEventListener("click",startQuiz)





// creae variable array of questions

// than great forloop array 

// object 



// timer

// question or collection of answers loop through

// once user answers all questions or runs out of time you will give them a game over

// once game over screen ends put in intital and hit submit grabs score and intital and saves it

// have seperate HTML page when
