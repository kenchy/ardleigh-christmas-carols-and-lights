function silentNight () {
    music.setTempo(55)
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
}
input.onButtonPressed(Button.A, function () {
    playLED = 1
    if (songChoice == 1) {
        silentNight()
    }
    if (songChoice == 0) {
        oComeFaithful()
    }
    playLED = 0
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
})
function oComeFaithful () {
    for (let index = 0; index < 2; index++) {
        music.setTempo(100)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(294, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
}
input.onButtonPressed(Button.B, function () {
    if (songChoice < 1) {
        songChoice += 1
        basic.showString("SN")
    } else {
        songChoice += -1
        basic.showString("OC")
    }
})
let playLED = 0
let songChoice = 0
songChoice = 0
playLED = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.forever(function () {
    if (playLED == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(music.tempo() * 10000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
