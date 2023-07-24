export const sound = {
    buttonSoundOn: document.querySelector('.sound-on'),
    buttonSoundOff: document.querySelector('.sound-off'),

    buttonPressAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
    kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
    bgAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"),

    pressButton: () => {
        sound.buttonPressAudio.play()
        sound.bgAudio.loop
    },

    timeEnd: () => {
        sound.kitchenTimer.play()
    },

    clickSoundOn: () => {
        sound.buttonSoundOn.classList.add('hide')
        sound.buttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    },

    clickSoundOff: () => {
        sound.buttonSoundOff.classList.add('hide')
        sound.buttonSoundOn.classList.remove('hide')
        sound.bgAudio.play()
    }
}