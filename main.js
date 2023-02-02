const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const pause = document.querySelector('.pause');

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const millsecond = document.querySelector('.millsecond');

let hr = min = sec = milsec = '0' + 0

start.addEventListener('click', startTime)
reset.addEventListener('click', resetBtn)
pause.addEventListener('click', pauseBtn)

// startTime
let startTimer;
function startTime() {   
    startTimer = setInterval(() => {
    milsec++
    // millsec less then 10 if contidion
    millsecond.innerHTML = (milsec < 10) ? '0' + milsec : milsec

    if (milsec == 100) {
        sec++
    // second less then 10 if contidion
        second.innerHTML = (sec < 10) ? '0' + sec : sec
        milsec = '0' + 0
    }
    if (sec == 60) {
        min++
    // minute less then 10 if contidion
        minute.innerHTML = (min < 10) ? '0' + min : min
        sec = '0' + 0
    }
    if (min == 60) {
        hr++
    // hour less then 10 if contidion
        hour.innerHTML = (hr < 10) ? '0' + hr : hr
        hr = '0' + 0
    }
    // remove the class name of startBtn and pauseBtn
    start.classList.add('active')
    pause.classList.remove('active')
}, 10);
    
}
// pauseBtn
function pauseBtn() {
    clearInterval(startTimer)
    pause.classList.add('active')
    start.classList.remove('active')
}

// resetBtn
function resetBtn() {
    start.classList.remove('active')
    pause.classList.remove('active')
    clearInterval(startTimer)
    hr = min = sec = milsec = '0' + 0
    hour.innerHTML = hr
    minute.innerHTML = min
    second.innerHTML = sec
    millsecond.innerHTML = milsec
}
