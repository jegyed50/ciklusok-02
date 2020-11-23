let counter = 0
input.onButtonPressed(Button.A, function () {
    counter = 1
    while (counter <= 3) {
        basic.showNumber(counter)
        basic.pause(500)
        counter += 1
    }
    basic.pause(500)
    basic.clearScreen()
    KülsőKör()
    BelsőKör()
    Közepe()
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
function Közepe () {
    led.plot(2, 2)
}
basic.forever(function () {
	
})
