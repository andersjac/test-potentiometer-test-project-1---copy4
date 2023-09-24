basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    servos.P1.setAngle(Math.map(pins.analogReadPin(AnalogPin.P0), 428, 1023, 0, 180))
})
