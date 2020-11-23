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
input.onButtonPressed(Button.B, function () {
    counter = 0
    while (counter <= 4) {
        led.plot(counter, 0)
        counter += 1
        basic.pause(200)
    }
    counter = 0
    while (counter <= 4) {
        led.plot(4, counter)
        counter += 1
        basic.pause(200)
    }
    counter = 0
    while (counter <= 4) {
        led.plot(4 - counter, 4)
        counter += 1
        basic.pause(200)
    }
    counter = 0
    while (counter <= 4) {
        led.plot(0, 4 - counter)
        counter += 1
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
