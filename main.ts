radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (rps == 1) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # # # . #
                # . # . #
                # # # . #
                `)
        }
        if (rps == 2) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # # # # #
                . # # # .
                . # # # .
                `)
        }
        if (rps == 3) {
            basic.showLeds(`
                # # # # #
                . # . # #
                . # . # #
                . # . # #
                # # # # #
                `)
        }
    }
    if (receivedNumber == 2) {
        if (rps == 1) {
            basic.showLeds(`
                # # # # #
                . # . # #
                . # . # #
                . # . # #
                # # # # #
                `)
        }
        if (rps == 2) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # # # . #
                # . # . #
                # # # . #
                `)
        }
        if (rps == 3) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # # # # #
                . # # # .
                . # # # .
                `)
        }
    }
    if (receivedNumber == 3) {
        if (rps == 1) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # # # # #
                . # # # .
                . # # # .
                `)
        }
        if (rps == 2) {
            basic.showLeds(`
                # # # # #
                . # . # #
                . # . # #
                . # . # #
                # # # # #
                `)
        }
        if (rps == 3) {
            basic.showLeds(`
                # . # . #
                # . # . #
                # # # . #
                # . # . #
                # # # . #
                `)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    rps += -1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(rps)
})
input.onButtonPressed(Button.B, function () {
    rps += 1
})
let rps = 0
rps = 1
radio.setGroup(1)
basic.forever(function () {
    if (rps == 4) {
        rps = 1
    }
    if (rps == 0) {
        rps = 3
    }
    if (rps == 1) {
        basic.showLeds(`
            # # # # .
            . . # # .
            . . # # #
            . . # # .
            . . # # .
            `)
    }
    if (rps == 2) {
        basic.showLeds(`
            # . # # .
            # . # # .
            # # # # #
            # . # # .
            # # # # .
            `)
    }
    if (rps == 3) {
        basic.showLeds(`
            # . . . #
            # # # # #
            # # # # #
            . . # . .
            # # # # #
            `)
    }
})
