import { sound } from "./sound.js"

export const timer = {
    minutesDisplay: document.querySelector('.minutes'),
    secondsDisplay: document.querySelector('.seconds'),
    
    countdown: () => {
        timerTimeOut = setTimeout(function() {    
            let minutes = Number(timer.minutesDisplay.textContent)
            let seconds = Number(timer.secondsDisplay.textContent)

            if (minutes <= 0 && seconds <= 0) {
                controls.resetControls()
                controls.resetTimer()
                sound.timeEnd()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                timer.minutesDisplay.textContent = String(--minutes).padStart(2, '0')
            }
            
            timer.secondsDisplay.textContent = String(--seconds).padStart(2, '0')
            
            timer.countdown()
        }, 1000)
    }
}

export const controls = {
    buttonPlay: document.querySelector('.play'),
    buttonPause: document.querySelector('.pause'),
    buttonSet: document.querySelector('.set'),
    buttonStop: document.querySelector('.stop'),

    resetControls:() => {
        controls.buttonPlay.classList.remove('hide')
        controls.buttonPause.classList.add('hide')
        controls.buttonSet.classList.remove('hide')
        controls.buttonStop.classList.add('hide')
    },

    resetTimer: () => {
        timer.minutesDisplay.textContent = String(minutes).padStart(2, '0')
        timer.secondsDisplay.textContent = String(0).padStart(2, '0')
        clearTimeout(timerTimeOut)
    },
    
    clickPlay: () => {
        controls.buttonPlay.classList.add('hide')
        controls.buttonPause.classList.remove('hide')
        controls.buttonSet.classList.add('hide')
        controls.buttonStop.classList.remove('hide')

        timer.countdown()
    },
    
    clickPause: () => {
        clearTimeout(timerTimeOut)

        controls.buttonPause.classList.add('hide')
        controls.buttonPlay.classList.remove('hide')
    },

    clickStop: () => {
        controls.resetTimer()
        controls.resetControls()
    },
    
    clickSet: () => {
        let newMinutes = prompt('Quantos minutos');
    
        if (newMinutes !== null) {

            newMinutes = newMinutes.trim();
    
            if (/^\d+$/.test(newMinutes)) {
                minutes = timer.minutesDisplay.textContent = newMinutes.padStart(2, '0');
            } else {
                alert('Por favor, insira um valor numérico válido para os minutos.');
            }
        } else {
            controls.resetTimer();
        }
    }
}   

let timerTimeOut
let minutes = Number(timer.minutesDisplay.textContent)
let seconds = Number(timer.secondsDisplay.textContent)