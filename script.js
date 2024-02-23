var timer = 60;
var hitValue =  0;
var score = 0;
function createBubble(){
    var clutter = " ";
    for(var i = 1; i <= 160; i++){
        var rndmNum = Math.floor(Math.random()*i);
        clutter += `<div class = "bubble">${rndmNum}</div>`;
        document.querySelector("#btmpnl").innerHTML = clutter;
    } 
}

function createTimer(){
    var timerId = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerId);
            document.querySelector("#btmpnl").innerHTML = `<div id="scoreCard"><h1>Game Over😓 Your Score: ${score} 🤑</h1></div>`;
        }
    }, 1000)
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}

function createNewHit(){
    hitValue = Math.floor(Math.random()*160);
    document.querySelector("#hitval").textContent = hitValue;
}

document.querySelector("#btmpnl").addEventListener("click", function(dets){
    var ClickedBubble = Number(dets.target.textContent);
    if(ClickedBubble === hitValue){
        increaseScore();
        createNewHit();
        createBubble();
    }
})

createBubble();
createNewHit();
createTimer();
