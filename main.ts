controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = arrowXs[1]
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = arrowXs[0]
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = arrowXs[2]
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = arrowXs[3]
})
function setUpStopper () {
    stopper = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.Enemy)
    stopper.setPosition(80, 116)
    animation.runImageAnimation(
    stopper,
    [img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `,img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `],
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
})
function makeArrow () {
    arrowNumber = randint(0, 3)
    arrow2 = sprites.create(arrowImgs[arrowNumber], SpriteKind.Food)
    arrow2.y = 0
    arrow2.vy = 80
    arrow2.x = arrowXs[arrowNumber]
}
let arrow2: Sprite = null
let arrowNumber = 0
let stopper: Sprite = null
let dancer: Sprite = null
let arrowImgs: Image[] = []
let arrow = null
let arrowXs: number[] = []
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............111................................................................................................................................................
    .............111................................................................................................................................................
    .............111................................................................................................................................................
    ................................................................................................................................................................
    ..................................................................1.............................................................................................
    ..................................................................1.............................................................................................
    ..................................................................1..................111....................................................111.................
    ..................................................................11.................111........................11..........................111.................
    .....................................................................................111....................................................111.................
    ................................................................................................................................................................
    .............................................1..................................................................................................................
    ................................................................................................................................................................
    ........................................................................................................................................................1.......
    ................................................................................................................................................................
    ..........................................................................................................................1.....................................
    ..........................................................................................................................1.....................................
    ..........................................................................................................................111...................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............1.................................................................................................................................................
    .......................................................................................................1........................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...........................................111.......................................................................1..........................................
    ...........................................111.......................................................................1.............111.............1............
    ...........................................111.....................................................................................111..........................
    .............................................................................1.....................................................111..........................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................................................................1............................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................1...............................................................................................................................................
    ...............11...............................................................................................................................................
    ................................................................................................................................................................
    ...................................1............................................................................................................................
    ...................................1..................................................................................................................111.......
    ......................................................................................................................................................111.......
    ......................................................................................................................................................111.......
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...............111............................1..................1..............................................................................................
    ...............111...............................................1..............................................................................................
    ...............111...............................................1..............................................................................................
    .................................................................1...................................1.......................................1..................
    .................................................................................111............................................................................
    .................................................................................111............................................................................
    .................................................................................111............................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................................................1......................................
    .........................................................................................................................1......................................
    .........................................................................................................................111....................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    555555f888888ff7777777f4444444f77777777f5555555f8888888888888f777777777f33333333f555555555f8888888888f9999999999f5555555555f4444444444f999f55555555555ff44444444
    5555ff888888f77777777f4444444f77777777f55555555f8888888888888f777777777f33333333f555555555f8888888888f99999999999f5555555555f4444444444f999ff55555555555ff444444
    55ff8888888f77777777f4444444f77777777f555555555f8888888888888f777777777f33333333f555555555f88888888888f9999999999f55555555555f4444444444f9999ff55555555555ff4444
    ff8888888ff77777777f4444444f777777777f55555555f8888888888888f7777777777f33333333f555555555f88888888888f99999999999f55555555555f4444444444f99999f555555555555ff44
    88888888f777777777f44444444f77777777f555555555f8888888888888f7777777777f33333333f5555555555f8888888888f999999999999f55555555555f4444444444f99999ff555555555555ff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    55555f8888888888f55555555f888888888f999999999f3333333333333f8888888888f444444444f9999999999f33333333333f444444444444f8888888888888f333333333f777777ff88888888888
    5555f8888888888f55555555f888888888f999999999f33333333333333f8888888888f444444444f9999999999f333333333333f444444444444f8888888888888f333333333f7777777ff888888888
    55ff8888888888f55555555f888888888f9999999999f3333333333333f88888888888f444444444f99999999999f33333333333f4444444444444f8888888888888f333333333f77777777f88888888
    5f88888888888f55555555f8888888888f999999999f33333333333333f8888888888f4444444444f99999999999f333333333333f444444444444f88888888888888f333333333f77777777ff888888
    5f888888888ff55555555f8888888888f9999999999f3333333333333f88888888888f4444444444f99999999999f333333333333f4444444444444f88888888888888f333333333f777777777f88888
    f888888888f555555555f8888888888f9999999999f33333333333333f88888888888f4444444444f99999999999f333333333333f44444444444444f88888888888888f333333333ff77777777ff888
    888888888f555555555f8888888888f99999999999f33333333333333f88888888888f4444444444f999999999999f333333333333f4444444444444f888888888888888f3333333333f777777777ff8
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    7777777f9999999999f7777777777f55555555555f88888888888888f44444444444f77777777777f444444444444f5555555555555f99999999999999f555555555555555f4444444444f8888888888
    777777f9999999999f7777777777f55555555555f88888888888888f444444444444f77777777777f444444444444f5555555555555f999999999999999f555555555555555f4444444444f888888888
    77777f9999999999f77777777777f55555555555f88888888888888f444444444444f77777777777f444444444444f5555555555555f999999999999999f5555555555555555ff444444444f88888888
    7777f9999999999f77777777777f55555555555f888888888888888f444444444444f77777777777f4444444444444f5555555555555f999999999999999f55555555555555555f444444444f8888888
    777f9999999999f77777777777f555555555555f88888888888888f444444444444f777777777777f4444444444444f5555555555555f9999999999999999f55555555555555555f444444444f888888
    77f9999999999f777777777777f55555555555f888888888888888f444444444444f777777777777f4444444444444f55555555555555f9999999999999999f55555555555555555f444444444f88888
    7f9999999999f777777777777f555555555555f88888888888888f4444444444444f777777777777f4444444444444f55555555555555f9999999999999999f555555555555555555f444444444f8888
    f99999999999f77777777777f555555555555f888888888888888f4444444444444f777777777777f44444444444444f55555555555555f9999999999999999f555555555555555555f444444444f888
    99999999999f777777777777f555555555555f888888888888888f4444444444444f777777777777f44444444444444f55555555555555f99999999999999999f555555555555555555f444444444f88
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    333333333f999999999999f3333333333333f999999999999999f5555555555555f3333333333333f88888888888888f777777777777777f33333333333333333f8888888888888888888f777777777f
    33333333f999999999999f3333333333333f999999999999999f55555555555555f3333333333333f888888888888888f77777777777777f333333333333333333f8888888888888888888f777777777
    3333333f9999999999999f3333333333333f999999999999999f55555555555555f3333333333333f888888888888888f777777777777777f333333333333333333f8888888888888888888f77777777
    333333f9999999999999f3333333333333f9999999999999999f5555555555555f33333333333333f888888888888888f777777777777777f333333333333333333f88888888888888888888ff777777
    33333f9999999999999f33333333333333f999999999999999f55555555555555f33333333333333f888888888888888f7777777777777777f333333333333333333f888888888888888888888f77777
    3333f99999999999999f3333333333333f9999999999999999f55555555555555f33333333333333f8888888888888888f777777777777777f3333333333333333333f888888888888888888888f7777
    3333f9999999999999f33333333333333f999999999999999f555555555555555f33333333333333f8888888888888888f777777777777777f3333333333333333333f8888888888888888888888f777
    333f9999999999999f33333333333333f9999999999999999f555555555555555f33333333333333f8888888888888888f7777777777777777f3333333333333333333f8888888888888888888888f77
    33f99999999999999f33333333333333f9999999999999999f55555555555555f333333333333333f8888888888888888f7777777777777777f33333333333333333333f8888888888888888888888f7
    3f99999999999999f33333333333333f9999999999999999f555555555555555f333333333333333f88888888888888888f7777777777777777f33333333333333333333f8888888888888888888888f
    `)
arrowImgs = [
img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 
    6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 
    6 6 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 1 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `,
img`
    6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 
    6 6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 
    6 6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 
    6 6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `,
img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 1 6 6 
    6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 1 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 1 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `,
img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 6 
    6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 6 
    6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 6 
    6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 
    `
]
setUpStopper()
effects.confetti.startScreenEffect()
info.setScore(0)
info.setLife(5)
dancer = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 3 3 3 3 3 3 3 b . 
    b d d d b b b 3 3 3 3 3 3 3 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
arrowXs = [
35,
65,
95,
125
]
dancer.y = 100
dancer.y = 100
dancer.x = arrowXs.get(1)
game.onUpdateInterval(500, function () {
    makeArrow()
})
