let counter = 0
function Villogtat (hányszor: number) {
    for (let index = 0; index < hányszor; index++) {
        led.setBrightness(255)
        basic.pause(500)
        led.setBrightness(30)
        basic.pause(500)
        led.setBrightness(255)
        basic.pause(500)
    }
}
input.onButtonPressed(Button.A, function () {
    Visszaszámlálás(3)
    KülsőKör()
    Villogtat(1)
    BelsőKör()
    Villogtat(2)
    Közepe()
    Villogtat(3)
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
input.onButtonPressed(Button.B, function () {
    counter = 0
    while (counter <= 4) {
        led.plot(0, 4 - counter)
        counter += 1
        basic.pause(200)
    }
})
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
function Visszaszámlálás (mettől: number) {
    basic.clearScreen()
    counter = mettől
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
