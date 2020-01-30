$(document).ready(function () {

var colorArray=["#e6194B","#f58231","#3cb44b","#4363d8","#911eb4","#f032e6"];

var currentQuestion=0;

var qbankArray=["a",
"and",
"away",
"big",
"blue",
"can",
"come",
"down",
"find",
"for",
"funny",
"go",
"help",
"here",
"I",
"in",
"is",
"it",
"jump",
"little",
"look",
"make",
"me",
"my",
"not",
"one",
"play",
"red",
"run",
"said",
"see",
"the",
"three",
"to",
"two",
"up",
"we",
"where",
"yellow",
"you"];

//shuffleArray
function shuffleArray(qbankArray) {
    for (let i = qbankArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [qbankArray[i], qbankArray[j]] = [qbankArray[j], qbankArray[i]];
    }
}
shuffleArray(qbankArray);

///shuffleArray

  beginActivity();

function beginActivity(){

 var color1=colorArray[Math.floor(Math.random()*colorArray.length)];
//var qbank1=qbankArray[Math.floor(Math.random()*qbankArray.length)];

var qbank1 = qbankArray[currentQuestion];

 $("#cardArea").empty();

 $("#cardArea").append('<div id="card1" class="card">' + qbank1+ '</div>');

 $("#card1").css("background-color",color1);

  $("#newArea").append('<div id = qbank1>');

 currentQuestion++;
 $("#buttonArea").empty();
 $("#buttonArea").append('<div id="nextButton">NEXT</div>');

 $("#nextButton").on("click",function(){
  if(currentQuestion<qbankArray.length){beginActivity();}
  else{displayFinalMessage();}
 });//click function
}//beginactivity


function togglePosition(){
 if($("#card1").position().top==-200){$("#card1").css("top","200px");};
}//toggle

function displayFinalMessage(){
 $("#buttonArea").empty();
 $("#cardArea").empty();
 $("#cardArea").append('<div id="finalMessage">You have finished the activity.</div>');
 $("#reStartbuttonArea").empty();
 $("#reStartbuttonArea").append('<div id="reStartbuttonButton">One more time!</div>');
 $("#reStartbutton").on("click",function(){

  });
}//final message

});
