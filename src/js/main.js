//IMPORTS
import {controls, timer} from "./controls.js"
import {sound} from "./sound.js"


//EVENTS
controls.buttonPlay.addEventListener('click', function () {
    controls.clickPlay()
    sound.pressButton()
})
controls.buttonPause.addEventListener('click', function () {
    controls.clickPause()
    sound.pressButton()
})
controls.buttonStop.addEventListener('click', function () {
    controls.clickStop()
    sound.pressButton()
})
controls.buttonSet.addEventListener('click', controls.clickSet)

sound.buttonSoundOn.addEventListener('click', sound.clickSoundOn)
sound.buttonSoundOff.addEventListener('click', sound.clickSoundOff)