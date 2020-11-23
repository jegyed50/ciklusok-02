let counter = 0
input.onButtonPressed(Button.A, function () {
    counter = 1
    while (counter <= 6) {
        basic.showNumber(counter)
        basic.pause(500)
        counter += 1
    }
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
