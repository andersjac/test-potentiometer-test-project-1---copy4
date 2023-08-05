basic.showIcon(IconNames.Yes)
servos.P1.setAngle(180)
basic.pause(5000)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    servos.P1.setAngle(Math.map(pins.analogReadPin(AnalogPin.P0), 460, 1023, 0, 180))
})
