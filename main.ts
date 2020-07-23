let y = 0
let x = 0
let y1 = 0
let y2 = 0
let y3 = 0
basic.forever(function () {
    y = 0
    x = randint(0, 4)
    led.plot(x, y)
    while (led.point(x, y)) {
        y += 1
        led.plotBrightness(x, y, 255)
        y1 = y - 1
        led.plotBrightness(x, y1, 170)
        y2 = y1 - 1
        led.plotBrightness(x, y2, 85)
        y3 = y2 - 1
        led.plotBrightness(x, y3, 0)
        basic.pause(200)
    }
})
