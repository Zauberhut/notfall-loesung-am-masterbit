input.onButtonPressed(Button.A, function () {
    radio.setGroup(123)
    radio.sendNumber(12345)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            basic.showString("!")
        }
        basic.showString(" XYZ ")
    }
})
basic.forever(function () {
	
})
