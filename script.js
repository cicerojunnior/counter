let displaySeconds = document.querySelector('.seconds')
let displayMinutes = document.querySelector('.minutes')
let displayHours = document.querySelector('.hours')

let btnStart = document.querySelector('.btnStart')
let btnPause = document.querySelector('.btnPause')
let btnReset = document.querySelector('.btnReset')

let seconds = 0
let minutes = 0
let hours = 0

start = () => {
    control = setInterval(setControl, 1000)

    btnStart.disabled = true
    btnPause.disabled = false
    btnReset.disabled = false
}
pause = () => {
    clearInterval(control)

    btnPause.disabled = true
    btnStart.disabled = false
    btnReset.disabled = false
}
reset = () => {
    clearInterval(control)

    seconds = 0
    minutes = 0
    hours = 0

    displaySeconds.innerHTML = '00'
    displayMinutes.innerHTML = '00'
    displayHours.innerHTML = '00'

    btnReset.disabled = true
    btnPause.disabled = true
    btnStart.disabled = false
}

setControl = () => {
    if(seconds < 60) {
        seconds++
        displaySeconds.innerHTML = seconds < 10 ? '0'+seconds : seconds
        
    }
    if(seconds == 60) {
        minutes++
        seconds = 0
        displaySeconds.innerHTML = '0'+seconds
        displayMinutes.innerHTML = minutes < 10 ? '0'+minutes : minutes
    }
    
    if(minutes == 60) {
        hours++
        minutes = 0
        displayMinutes.innerHTML = '0'+minutes
        displayHours.innerHTML = hours < 10 ? '0'+hours : hours

    }
}