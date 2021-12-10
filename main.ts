input.onButtonPressed(Button.A, function () {
    OnOff = 0
})
input.onButtonPressed(Button.B, function () {
    OnOff = 1
})
input.onGesture(Gesture.Shake, function () {
    if (OnOff == 0) {
        Answer = randint(0, 6)
        if (Answer == 0) {
            basic.showString("No Way!")
        } else if (Answer == 1) {
            basic.showString("Totally!")
        } else if (Answer == 2) {
            basic.showString("probably")
        } else if (Answer == 3) {
            basic.showString("Unlikely")
        } else if (Answer == 4) {
            basic.showString("Maybe;)")
        } else if (Answer == 5) {
            basic.showString("I Hope Not!")
        } else if (Answer == 6) {
            basic.showString("I don't think so")
        } else if (Answer == 6) {
            basic.showString("Of Course!")
        } else if (Answer == 7) {
            basic.showString("I Hope So!")
        }
    } else if (OnOff == 1) {
        basic.showIcon(IconNames.No)
    }
})
let Answer = 0
let OnOff = 0
OnOff = 1
basic.forever(function () {
    if (OnOff == 0) {
        basic.showString("Ask Me Anything and Shake For An Answer")
    } else if (OnOff == 1) {
        basic.showIcon(IconNames.No)
    }
})
