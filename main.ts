basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Giraffe)
    } else {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showIcon(IconNames.Giraffe)
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showIcon(IconNames.Giraffe)
            } else {
                basic.clearScreen()
            }
        }
    }
})
