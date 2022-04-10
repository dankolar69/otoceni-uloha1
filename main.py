s = [2, 2]
a = [2, 0]
b = [4, 2]
c = [0, 2]


led.plot(s[0], s[1])
led.plot(a[0], a[1])
led.plot(b[0], b[1])
led.plot(c[0], c[1])


def otoceni(d):
    global a, b, c
    basic.clear_screen()
    a.reverse()
    a[d]= abs(a[d]-4)
    b.reverse()
    b[d]= abs(b[d]-4)
    c.reverse()
    c[d]= abs(c[d]-4)
    led.plot(s[0], s[1])
    led.plot(a[0], a[1])
    led.plot(b[0], b[1])
    led.plot(c[0], c[1])

def on_button_pressed_a():
    otoceni(0)
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_b():
    otoceni(1)
input.on_button_pressed(Button.B, on_button_pressed_b)