basic.show_icon(IconNames.YES)
servos.P1.set_angle(180)
basic.pause(5000)

def on_forever():
    servos.P1.set_angle(Math.map(pins.analog_read_pin(AnalogPin.P0), 460, 1023, 0, 180))
basic.forever(on_forever)
