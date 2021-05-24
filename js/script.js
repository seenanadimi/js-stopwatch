let seconds = 00;
let tens = 00;
let appendTens = document.getElementById('tens');
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("start-btn");
let buttonStop = document.getElementById("stop-btn");
let buttonReset = document.getElementById("reset-btn");
let interval; // to store timer values

// this function will run when click on start

function startTimer () {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML ="0" + 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
};

buttonStart.onclick = function () {
    interval = setInterval(startTimer)
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}