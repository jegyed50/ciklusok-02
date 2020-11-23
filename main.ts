let counter = 0
function Villogtat () {
    for (let index = 0; index < 3; index++) {
        led.setBrightness(255)
        basic.pause(500)
        led.setBrightness(30)
        basic.pause(500)
        led.setBrightness(255)
        basic.pause(500)
    }
}
input.onButtonPressed(Button.A, function () {
    Visszaszámlálás()
    KülsőKör()
    Villogtat()
    BelsőKör()
    Villogtat()
    Közepe()
    Villogtat()
})
function KülsőKör () {
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
}
function BelsőKör () {
    counter = 1
    while (counter <= 3) {
        led.plot(counter, 1)
        counter += 1
        basic.pause(200)
    }
    counter = 1
    while (counter <= 3) {
        led.plot(3, counter)
        counter += 1
        basic.pause(200)
    }
    counter = 1
    while (counter <= 3) {
        led.plot(4 - counter, 3)
        counter += 1
        basic.pause(200)
    }
    counter = 1
    while (counter <= 3) {
        led.plot(1, 4 - counter)
        counter += 1
        basic.pause(200)
    }
}
function Visszaszámlálás () {
    basic.clearScreen()
    counter = 3
    while (counter >= 1) {
        basic.showNumber(counter)
        basic.pause(500)
        counter = counter - 1
    }
    basic.pause(500)
    basic.clearScreen()
}
function Közepe () {
    led.plot(2, 2)
}
basic.forever(function () {
	
})
