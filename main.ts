input.onButtonPressed(Button.A, function () {
	
})
pins.digitalWritePin(DigitalPin.P8, 0)
basic.forever(function () {
    if (input.temperature() >= 30) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    basic.showNumber(input.temperature())
})
