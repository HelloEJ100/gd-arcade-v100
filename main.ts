namespace SpriteKind {
    export const big_spike = SpriteKind.create()
    export const display1 = SpriteKind.create()
    export const small_spike = SpriteKind.create()
    export const Display2 = SpriteKind.create()
    export const yellow_pad = SpriteKind.create()
    export const Ship_portal = SpriteKind.create()
    export const ball_portal = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.small_spike, function (sprite, otherSprite) {
    AR_check()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game2 == 1) {
        if (mySprite.vy == 0 && gamemode == 0) {
            mySprite.vy = -185
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ship_portal, function (sprite, otherSprite) {
    gamemode = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yellow_pad, function (sprite, otherSprite) {
    mySprite.vy = -240
})
function AR_check () {
    if (auto_retry == 1) {
        pause(333)
        mySprite.setVelocity(0, 0)
        spawn()
    } else {
        game.gameOver(false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.big_spike, function (sprite, otherSprite) {
    AR_check()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.setGameOverMessage(true, "Level Complete!")
    game.setGameOverEffect(true, effects.splatter)
    game.gameOver(true)
})
function spawn () {
    info.setScore(0)
    game.setGameOverScoringType(game.ScoringType.HighScore)
    pause(5)
    game2 = 1
    tiles.setCurrentTilemap(tilemap`level1`)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(value, true)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile7`)) {
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    mySprite.setVelocity(100, 0)
    for (let value3 of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value3, assets.tile`transparency16`)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.big_spike)
        tiles.placeOnTile(mySprite2, value3)
        mySprite3 = sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . 1 f f f f 1 . . . . . 
            . . . . . 1 f f f f 1 . . . . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 f f f f f f f f f f 1 . . 
            . 1 f f f f f f f f f f f f 1 . 
            . 1 f f f f f f f f f f f f 1 . 
            1 f f f f f f f f f f f f f f 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.display1)
        tiles.placeOnTile(mySprite3, value3)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setTileAt(value4, assets.tile`transparency16`)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.small_spike)
        tiles.placeOnTile(mySprite2, value4)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . 1 f f f f 1 . . . . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . 1 f f f f f f f f f f 1 . . 
            . 1 f f f f f f f f f f f f 1 . 
            1 f f f f f f f f f f f f f f 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            `, SpriteKind.Display2)
        tiles.placeOnTile(mySprite3, value4)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setTileAt(value3, assets.tile`transparency16`)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.big_spike)
        tiles.placeOnTile(mySprite2, value3)
        mySprite3 = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 f f f f f f f f f f f f f f 1 
            . 1 f f f f f f f f f f f f 1 . 
            . 1 f f f f f f f f f f f f 1 . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 f f f f f f f f f f 1 . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . . . 1 f f f f 1 . . . . . 
            . . . . . 1 f f f f 1 . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `, SpriteKind.display1)
        tiles.placeOnTile(mySprite3, value3)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setTileAt(value4, assets.tile`transparency16`)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.small_spike)
        tiles.placeOnTile(mySprite2, value4)
        mySprite3 = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 f f f f f f f f f f f f f f 1 
            . 1 f f f f f f f f f f f f 1 . 
            . . 1 f f f f f f f f f f 1 . . 
            . . . 1 f f f f f f f f 1 . . . 
            . . . . 1 f f f f f f 1 . . . . 
            . . . . . 1 f f f f 1 . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Display2)
        tiles.placeOnTile(mySprite3, value4)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile3`)) {
        tiles.setTileAt(value5, assets.tile`transparency16`)
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . 1 5 5 5 5 5 5 5 5 5 5 5 5 1 . 
            1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 
            `, SpriteKind.yellow_pad)
        tiles.placeOnTile(mySprite4, value5)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value5, assets.tile`transparency16`)
        mySprite5 = sprites.create(img`
            . . . . 3 3 3 3 3 f f . . . . . 
            . . . . 3 3 3 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . . . . 3 3 f f . . . . . 
            . . . . 3 3 3 3 3 f f . . . . . 
            . . . . 3 3 3 3 3 f f . . . . . 
            `, SpriteKind.Ship_portal)
        tiles.placeOnTile(mySprite5, value5)
    }
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (game2 == 1) {
        if (mySprite.vy == 0) {
            mySprite.vy = -185
        } else {
            if (gamemode == 2) {
            	
            }
        }
    }
})
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let game2 = 0
let auto_retry = 0
let gamemode = 0
gamemode = 0
auto_retry = 0
game2 = 0
game.setGameOverEffect(false, effects.none)
info.setScore(0)
scene.setBackgroundColor(8)
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Play"),
miniMenu.createMenuItem("Settings")
)
miniMenu.onButtonPressed(myMenu, miniMenu.Button.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        miniMenu.close(myMenu)
        mySprite = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 f f f f f f f f f f 8 8 f 
            f 8 8 f . . . . . . . . f 8 8 f 
            f 8 8 f . . . . . . . . f 8 8 f 
            f 8 8 f . . 1 1 1 1 . . f 8 8 f 
            f 8 8 f . . 1 1 1 1 . . f 8 8 f 
            f 8 8 f . . 1 1 1 1 . . f 8 8 f 
            f 8 8 f . . 1 1 1 1 . . f 8 8 f 
            f 8 8 f . . . . . . . . f 8 8 f 
            f 8 8 f . . . . . . . . f 8 8 f 
            f 8 8 f f f f f f f f f f 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Player)
        mySprite.setVelocity(100, 0)
        mySprite.ay = 500
        spawn()
        scene.centerCameraAt(mySprite.x + 30, mySprite.y)
    } else {
        if (auto_retry == 0) {
            auto_retry = 1
        } else {
            auto_retry = 0
        }
    }
})
game.onUpdate(function () {
    if (gamemode == 1) {
        if (controller.A.isPressed()) {
            mySprite.ay = -400
        } else {
            mySprite.ay = 375
        }
    }
})
forever(function () {
    if (game2 == 1) {
        scene.centerCameraAt(mySprite.x + 30, mySprite.y)
    }
})
game.onUpdateInterval(200, function () {
    if (game2 == 1) {
        info.changeScoreBy(1)
    }
})
