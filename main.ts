input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 A B G E F A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
