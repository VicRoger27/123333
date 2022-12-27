input.onSound(DetectedSound.Loud, function () {
    basic.showString("1    2    3!")
    if (Math.randomBoolean()) {
        basic.showString("1!")
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(delay)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
    } else {
        if (Math.randomBoolean()) {
            basic.showString("2!")
            for (let index = 0; index < 3; index++) {
                music.playMelody("B E A D F G C5 C ", 218)
            }
        } else {
            basic.showString("3!")
            basic.showLeds(`
                # # # . #
                . . # . #
                # # # . #
                . . # . .
                # # # . #
                `)
            basic.pause(5000)
            basic.clearScreen()
            game.startCountdown(300000)
            game.setScore(103457892)
            game.gameOver()
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playTone(147, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playMelody("C5 B A F G E C D ", 344)
    basic.pause(delay)
    music.playTone(311, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playTone(311, music.beat(BeatFraction.Double))
    basic.pause(delay)
    music.playTone(294, music.beat(BeatFraction.Quarter))
    basic.pause(delay)
    music.playTone(277, music.beat(BeatFraction.Half))
    basic.pause(delay)
    music.playTone(698, music.beat(BeatFraction.Sixteenth))
    basic.pause(delay)
    music.playTone(233, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playTone(196, music.beat(BeatFraction.Whole))
    basic.pause(delay)
    music.playTone(131, music.beat(BeatFraction.Whole))
})
let delay = 0
delay = 20
basic.showIcon(IconNames.Heart)
basic.showString("Hello!")
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
