let s = [2, 2]
let a = [2, 0]
let b = [4, 2]
let c = [0, 2]
led.plot(s[0], s[1])
led.plot(a[0], a[1])
led.plot(b[0], b[1])
led.plot(c[0], c[1])
function otoceni(d: number) {
    
    basic.clearScreen()
    a.reverse()
    a[d] = Math.abs(a[d] - 4)
    b.reverse()
    b[d] = Math.abs(b[d] - 4)
    c.reverse()
    c[d] = Math.abs(c[d] - 4)
    led.plot(s[0], s[1])
    led.plot(a[0], a[1])
    led.plot(b[0], b[1])
    led.plot(c[0], c[1])
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    otoceni(0)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    otoceni(1)
})
