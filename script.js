var timer = 60;
var score=0;
var hitrn=0;

// for bubble 

function makeBubble() {

    var clutter = "";
    for (var i = 0; i <= 89; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += ` <div id="bubble">${rn}</div>`;
    }

    document.querySelector("#content").innerHTML = clutter;
}
// for time set 


function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {

            timer--
            document.querySelector("#timerValue").textContent = timer
        }
        else {
            clearInterval(timerInt)
            document.querySelector("#content").innerHTML=`<h1>Game Over☹️</h1>`;
        }
    }, 1000)
}

// for hit 

function getNewHit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitValue").textContent=hitrn
}

// for increasing the score 
function increaseScore(){
    score +=10;
    document.querySelector("#scoreValue").textContent=score
}

document.querySelector("#content").addEventListener("click", function(details){
   var clickedNumber=(Number(details.target.textContent))
   if(clickedNumber===hitrn){
    increaseScore();
    makeBubble()
    getNewHit()
   }
})
runTimer()
makeBubble()
getNewHit()

