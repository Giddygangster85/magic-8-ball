let Answer = 0
input.onGesture(Gesture.Shake, function () {
    Answer = randint(0, 6)
    basic.showString("Ask a Question and shake me!")
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
})
