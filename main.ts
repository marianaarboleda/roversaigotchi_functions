input.onButtonPressed(Button.A, function () {
    if (new_game) {
        bird.change(LedSpriteProperty.X, -1)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
function playGame () {
    new_game = true
    index = 0
    obstacles = []
    bird = game.createSprite(2, 0)
    bird.set(LedSpriteProperty.Blink, 300)
    while (new_game) {
        while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 0) {
            obstacles.removeAt(0).delete()
        }
        for (let obstacle2 of obstacles) {
            obstacle2.change(LedSpriteProperty.Y, -1)
        }
        if (ticks % 3 == 0) {
            emptyObstacleY = randint(0, 4)
            for (let index2 = 0; index2 <= 4; index2++) {
                if (index2 != emptyObstacleY) {
                    obstacles.push(game.createSprite(index2, 4))
                }
            }
        }
        for (let obstacle3 of obstacles) {
            if (obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y) && obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X)) {
                new_game = false
                basic.showString("GAME OVER")
                basic.clearScreen()
                bird.delete()
                obstacle3.delete()
                obstacles = []
                control.reset()
                return
            }
        }
        ticks += 1
        basic.pause(700)
    }
    basic.clearScreen()
    return
}
input.onButtonPressed(Button.B, function () {
    if (new_game) {
        bird.change(LedSpriteProperty.X, 1)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    playGame()
})
let emptyObstacleY = 0
let ticks = 0
let obstacles: game.LedSprite[] = []
let index = 0
let bird: game.LedSprite = null
let new_game = false
new_game = false
basic.forever(function () {
    if (!(new_game)) {
        basic.showIcon(IconNames.Happy)
    }
})
