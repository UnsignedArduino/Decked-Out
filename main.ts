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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0) {
        controller.moveSprite(sprite_hero, 75, 75)
        running = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    if (!(sprites.readDataBoolean(otherSprite, "opened"))) {
        pause(100)
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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(sprite_hero, 50, 50)
    running = false
})
let running = false
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
user_artifacts.pop()
info.setScore(20)
info.setLife(20)
let in_game = false
let got_loot = false
running = false
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
game.showLongText("When you are ready to enter, head through the doors.", DialogLayout.Bottom)
game.showLongText("Good luck! You'll need it...", DialogLayout.Bottom)
game.onUpdate(function () {
    if (sprite_hero.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenEast) && !(in_game)) {
        if (game.ask("Are you sure you want to", "enter the dungoen?")) {
            timer.background(function () {
                controller.moveSprite(sprite_hero, 0, 0)
                sprite_hero.setFlag(SpriteFlag.Invisible, true)
                sprite_hero.x += -16
                pause(100)
                color.startFade(color.originalPalette, color.Black, 1000)
                color.pauseUntilFadeDone()
                pause(500)
                sprite_artifact_chest.destroy()
                sprite_hero.setFlag(SpriteFlag.Invisible, false)
                tiles.setTilemap(tiles.createTilemap(hex`3000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0b151919150b0d00000000000000000000000000000a0b150b0c0b150b0d0000002b3033303d3e303330310000000018020303030304170000000000000000000000000000180203030303030417000000363903033c3f0303042600000000130901010101051b0b150c0c150b0b0b0c150c0b150c2209011e071d01051b0b0c27290901010101010105350000000014090101010101010101010101010101010101010101010101054409010101010101010140410101404105260000000013090101011e051a11161111161c09051a16101116101c090105440901051a11112f32094243010142430525000000001808071d1e07061700000000001309050e00000000001809011f0320010517000000360940410101404105260000000012161c09051a160f00000000001409050e0000000000130807070107073921000000230942430101424305260000000000001309050e00000000000000130905210000000000121110161c011a160f0000002409404101014041052500000000000014090521000000000000001409052100000000000000000014010e0000000000230942430101424305350000000000001409050e00000a0b0b150b2209051b0b150c46460c0c0d001301210000000000240807071d1e07070625000000000000130905210000133903030303201f0303030303030304210014012100000000002c2d3432090528342d2e00000000000018090517000018090101010101010101010101010105170014010e0000000000000000240905250000000000000000001409051b0b0c22090101011e07070707071d010101051b0c22011b0c0b3330302730272909052500000000000000000014091f0303030320010101053837383738090101011f030303010303030303030303030320052600000000000000000013091e070707071d010101053738373837090101011e0707070707070707071d1e0707070706250000000000000000001309051a11111c090101011f030303030320010101051a1110111011113432090528342f2d2d2e0000000000000000001809051700001809010101010101010101010101010517000000000000002409052500000000000000000000000000001309050e0000140807070707070707070107070707062100000000002b332909052a33303030303031000000000000002409052500001211484810111116101c011a111611100f0000000000243903201f030303030303042500000000000000240905260000000000000000000000140121000000000000000000002309011e07070707071d01053500000000002b332909052a333d3e3d3e3d3e3d3e333029012a27333100000000000000240901054444444444090105260000000000363903201f03033c3f3c3f3c3f3c3f0303030103030435000000000000003609010544453a4544090105250000000000230901010101010101010101010101010101010101052a273027333027272909010544453b45440901054900000000004709010101014041010140410101404101010101011f03030303030303030320010544454545440901052600000000004709010101014243010142430101424301010101011e0707070707070707071d0105444444444409010525000000000023090101010101010101010101010101010101010105282d2d2f342f2d2d3209011f03030303032001053500000000003608070707070707070707070707070707070707070635000000000000003608070707070707070707062600000000002c342f2d2f2f342d2f2f2f2d2f2f2f342f2f2d2f2d342e000000000000002c2f2d2d2f2f2d2f2f2d2f2f2e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    ................................................
                    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.doorLockedNorth,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,sprites.castle.tileDarkGrass2,myTiles.tile14,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorClosedEast], TileScale.Sixteen))
                tiles.placeOnTile(sprite_hero, tiles.getTileLocation(5, 5))
                in_game = true
                pause(500)
                controller.moveSprite(sprite_hero, 50, 50)
                color.startFade(color.Black, color.originalPalette, 1000)
                color.pauseUntilFadeDone()
            })
        } else {
            sprite_hero.x += -16
        }
    }
})
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
game.onUpdateInterval(2000, function () {
    if (!(running) && info.score() < 20) {
        info.changeScoreBy(1)
        if (character.matchesRule(sprite_hero, character.rule(Predicate.NotMoving))) {
            timer.after(1000, function () {
                if (info.score() < 20) {
                    info.changeScoreBy(1)
                }
            })
        }
    }
})
game.onUpdateInterval(500, function () {
    if (running && character.matchesRule(sprite_hero, character.rule(Predicate.Moving))) {
        info.changeScoreBy(-1)
    }
    if (info.score() <= 0) {
        controller.moveSprite(sprite_hero, 50, 50)
        running = false
    }
})
