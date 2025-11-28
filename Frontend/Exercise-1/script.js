let intervel;
let minutes;
let seconds;
let timer;

function setTimerValue(m){
    minutes = m;
    document.getElementById("timer-minutes").innerHTML = m;
    document.getElementById("timer-seconds").innerHTML = "00";
}

function updateTime(){
    minutes = parseInt(document.getElementById("timer-minutes").innerHTML);
    seconds = parseInt(document.getElementById("timer-seconds").innerHTML);

    if(seconds == 0){
        if(minutes == 0){
            resetTimer();
            increaseSessions();
            alert("Session Complete!");
        }else{
            minutes--;
            seconds = 59;
        }
    }else{
        seconds--;
    }

    document.getElementById("timer-minutes").innerHTML = minutes;
    document.getElementById("timer-seconds").innerHTML = seconds;
}

function startTimer(){
    if(intervel) return;

    intervel = setInterval(updateTime,1000);
    
    updateTime();
}

function stop(){
    clearInterval(intervel);
    intervel = null;
}

function resetTimer(){
    stop();
    seconds = 0;
    if(timer){
        setTimerValue(timer);
    }
    else{
        setTimerValue(25);
    }
}


function pauseTimer(){
    stop();
}


function setTimer(){
    stop();
    timer = parseInt(document.getElementById("user-input").value);
    if(timer < 1 || timer > 60){
        alert("Please enter a number between 1 and 60");
        return;
    }

    setTimerValue(timer);
}

function increaseSessions(){
    let sessionCount = parseInt(document.getElementById("sessions-count").innerText);
    document.getElementById("sessions-count").innerText = sessionCount+1;
}


const audio = new Audio("button-click.mp3");
const buttons = document.querySelectorAll('#start , #pause , #reset');

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});