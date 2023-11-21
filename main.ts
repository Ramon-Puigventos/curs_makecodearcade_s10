sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.sayText(":)", 100, true)
    otherSprite.setKind(SpriteKind.Player)
})
let mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 
    2 2 2 1 1 1 1 1 2 2 1 1 1 1 1 2 
    2 2 2 f f f 1 1 2 2 f f f 1 1 2 
    2 2 2 f f f 1 1 2 2 f f f 1 1 2 
    2 2 2 f f f 1 1 2 2 f f f 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 5 5 2 2 2 2 2 2 2 2 2 5 5 2 
    2 2 2 2 5 2 2 2 2 2 2 2 5 5 2 2 
    2 2 2 2 5 5 2 2 2 2 5 5 5 2 2 2 
    2 2 2 2 2 2 5 5 5 5 5 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
let Enemic = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 1 1 1 1 1 8 8 1 1 1 1 1 8 
    8 8 8 1 1 1 1 1 8 8 1 1 1 1 1 8 
    8 8 8 f f f 1 1 8 8 f f f 1 1 8 
    8 8 8 f f f 1 1 8 8 f f f 1 1 8 
    8 8 8 f f f 1 1 8 8 f f f 1 1 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 5 5 8 8 8 8 8 8 8 8 8 5 5 8 
    8 8 8 8 5 8 8 8 8 8 8 8 5 5 8 8 
    8 8 8 8 5 5 8 8 8 8 5 5 5 8 8 8 
    8 8 8 8 8 8 5 5 5 5 5 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Enemy)
Enemic.setPosition(10, 20)
controller.moveSprite(mySprite)
