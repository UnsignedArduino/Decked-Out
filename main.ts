namespace SpriteKind {
    export const Loot_Box = SpriteKind.create()
    export const Chest = SpriteKind.create()
}
function set_hero_animations () {
    character.loopFrames(
    sprite_hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    character.rule(Predicate.MovingLeft)
    )
    character.loopFrames(
    sprite_hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    character.rule(Predicate.MovingRight)
    )
    character.loopFrames(
    sprite_hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    200,
    character.rule(Predicate.MovingUp)
    )
    character.loopFrames(
    sprite_hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . f f e 4 1 f d d f 1 4 e f . . 
        f d f f e 4 d d d d 4 e f e . . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `],
    200,
    character.rule(Predicate.MovingDown)
    )
    character.runFrames(
    sprite_hero,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    character.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    character.runFrames(
    sprite_hero,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    character.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    character.runFrames(
    sprite_hero,
    [img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f d f . . 
        . e 4 f f f f f f f f f b f . . 
        . 4 d f 2 2 2 2 2 2 f f b f . . 
        . 4 4 f 4 4 4 4 4 4 f f c f . . 
        . . . . f f f f f f . f f . . . 
        . . . . f f . . f f . . . . . . 
        `],
    200,
    character.rule(Predicate.NotMoving, Predicate.FacingUp)
    )
    character.runFrames(
    sprite_hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    character.rule(Predicate.NotMoving, Predicate.FacingDown)
    )
    character.setCharacterAnimationsEnabled(sprite_hero, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    if (!(sprites.readDataBoolean(otherSprite, "opened"))) {
        sprite_artifact_chest.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        sprites.setDataBoolean(sprite_artifact_chest, "opened", true)
        game.showLongText("This is where your artifacts are kept after you survive a run! You can have up to 12 items!", DialogLayout.Bottom)
        if (user_artifacts.length > 0) {
            for (let index = 0; index <= user_artifacts.length - 1; index++) {
                game.showLongText("Artifact #" + index + ":\\n" + user_artifacts[index][0] + "\\n" + user_artifacts[index][1] + "\\nRarity: " + user_artifacts[index][2], DialogLayout.Center)
            }
        } else {
            game.showLongText("Aww...you don't have any! Go and get some!", DialogLayout.Bottom)
        }
    }
})
let user_artifacts: string[][] = []
let sprite_artifact_chest: Sprite = null
let sprite_hero: Sprite = null
sprite_hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(sprite_hero, 50, 50)
sprite_hero.setFlag(SpriteFlag.ShowPhysics, false)
sprite_hero.setFlag(SpriteFlag.StayInScreen, true)
sprite_hero.z = 10
set_hero_animations()
sprite_artifact_chest = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.Chest)
sprites.setDataBoolean(sprite_artifact_chest, "opened", false)
sprite_artifact_chest.z = 5
user_artifacts = [["Red Toy Car", "A red toy car, fun to play with!", "Common", "car_set", "common"]]
info.setScore(0)
info.setLife(20)
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(sprite_hero)
tiles.placeOnTile(sprite_hero, tiles.getTileLocation(6, 7))
tiles.placeOnTile(sprite_artifact_chest, tiles.getTileLocation(4, 4))
pause(100)
game.showLongText("Welcome to TangoTek's Decked Out from HermitCraft, now on MakeCode Arcade!", DialogLayout.Bottom)
game.showLongText("Your goal is to follow the compass and try to find your treasure, hidden in the dungeon!", DialogLayout.Bottom)
game.showLongText("Along the way, there will be chests filled with smaller loot, such as coins or maybe even the occasional power up!", DialogLayout.Bottom)
game.showLongText("You will definitely want to avoid the snakes. They will be patrolling the dungeon, and if they get hold of you, you die!", DialogLayout.Bottom)
game.showLongText("The longer you stay in the dungeon, the more clank you will generate. This will awaken bats and ghost, which won't be good!", DialogLayout.Bottom)
game.showLongText("When you are ready to enter, flick the lever. This will open the door to the dungeon.", DialogLayout.Bottom)
game.showLongText("Good luck! You'll need it...", DialogLayout.Bottom)
game.onUpdate(function () {
    if (!(sprite_hero.overlapsWith(sprite_artifact_chest))) {
        if (sprites.readDataBoolean(sprite_artifact_chest, "opened")) {
            sprites.setDataBoolean(sprite_artifact_chest, "opened", false)
        }
    }
    if (sprites.readDataBoolean(sprite_artifact_chest, "opened")) {
        sprite_artifact_chest.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
    } else {
        sprite_artifact_chest.setImage(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
    }
})
