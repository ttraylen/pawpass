MFRC522.Init()
pins.servoWritePin(AnalogPin.P0, 0)
pins.servoWritePin(AnalogPin.P8, 180)
basic.forever(function () {
    if (MFRC522.getID() == 1234) {
        pins.servoWritePin(AnalogPin.P8, 0)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(5000)
        while (sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        ) < 20) {
            basic.pause(100)
        }
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P8, 180)
    }
})
