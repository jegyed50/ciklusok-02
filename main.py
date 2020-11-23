counter = 0
def Villogtat():
    for index in range(3):
        led.set_brightness(255)
        basic.pause(500)
        led.set_brightness(30)
        basic.pause(500)
        led.set_brightness(255)
        basic.pause(500)

def on_button_pressed_a():
    Visszaszámlálás()
    KülsőKör()
    Villogtat()
    BelsőKör()
    Villogtat()
    Közepe()
    Villogtat()
input.on_button_pressed(Button.A, on_button_pressed_a)

def KülsőKör():
    global counter
    counter = 0
    while counter <= 4:
        led.plot(counter, 0)
        counter += 1
        basic.pause(200)
    counter = 0
    while counter <= 4:
        led.plot(4, counter)
        counter += 1
        basic.pause(200)
    counter = 0
    while counter <= 4:
        led.plot(4 - counter, 4)
        counter += 1
        basic.pause(200)
    counter = 0
    while counter <= 4:
        led.plot(0, 4 - counter)
        counter += 1
        basic.pause(200)
def BelsőKör():
    global counter
    counter = 1
    while counter <= 3:
        led.plot(counter, 1)
        counter += 1
        basic.pause(200)
    counter = 1
    while counter <= 3:
        led.plot(3, counter)
        counter += 1
        basic.pause(200)
    counter = 1
    while counter <= 3:
        led.plot(4 - counter, 3)
        counter += 1
        basic.pause(200)
    counter = 1
    while counter <= 3:
        led.plot(1, 4 - counter)
        counter += 1
        basic.pause(200)
def Visszaszámlálás():
    global counter
    basic.clear_screen()
    counter = 3
    while counter >= 1:
        basic.show_number(counter)
        basic.pause(500)
        counter = counter - 1
    basic.pause(500)
    basic.clear_screen()
def Közepe():
    led.plot(2, 2)

def on_forever():
    pass
basic.forever(on_forever)
