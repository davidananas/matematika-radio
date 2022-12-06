radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showString("GOOD")
        basic.showIcon(IconNames.Yes)
    } else {
        if (receivedNumber == 2) {
            basic.showString("FAILED")
            basic.showIcon(IconNames.No)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    vstup += 1
    basic.showString("" + (vstup))
})
input.onButtonPressed(Button.AB, function () {
    zobraz()
})
input.onButtonPressed(Button.B, function () {
    if (cislo1 + cislo2 == vstup) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        nastav()
        basic.pause(500)
        zobraz()
    } else {
        radio.sendNumber(2)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        nastav()
        basic.pause(500)
        zobraz()
    }
})
function nastav () {
    vstup = 0
    cislo1 = randint(0, 5)
    cislo2 = randint(0, 5)
}
function zobraz () {
    basic.showString("" + (cislo1))
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("" + (cislo2))
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let cislo2 = 0
let cislo1 = 0
let vstup = 0
radio.sendNumber(0)
vstup = 0
cislo1 = randint(0, 5)
cislo2 = randint(0, 5)
