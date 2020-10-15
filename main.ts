namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const Seeing = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (in_game) {
        timer.throttle("display_cant_go_back_warning", 500, function () {
            pause_enemies()
            sprite_hero.y += 8
            game.showLongText("It's pointless going back now!", DialogLayout.Bottom)
            unpause_enemies()
        })
    }
})
function unpause_enemies () {
    paused = false
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
function set_loot_tables () {
    // Format:
    // 0: Name
    // 1: Description
    // 2: Rarity
    // 3: Set (for tracking)
    // 4: Rarity (for tracking)
    // 
    // Example:
    // ["Red Toy Car", "A red toy car, fun to play with!", "Common", "car", "common"]
    loot_table = [
    ["Red Toy Car", "A red toy car, fun to play with!", "Common", "car", "common"],
    ["Blue Toy Car", "A blue toy car, fun to play with!", "Uncommon", "car", "uncommon"],
    ["Pink Toy Car", "A pink toy car, fun to play with!", "Rare", "car", "rare"],
    ["Fake Apple", "A fake apple for fake meals.", "Common", "fruit", "common"],
    ["Fake Cherry", "A fake cherry for fake meals.", "Uncommon", "fruit", "uncommon"],
    ["Fake Strawberry", "A fake strawberry for fake meals.", "Rare", "fruit", "rare"],
    ["Donut Model", "Fake donuts for advertising.", "Common", "desert", "common"],
    ["Cake Model", "Fake cakes for advertising.", "Uncommon", "desert", "uncommon"],
    ["Vanilla Ice Cream Model", "Circus Baby's Ice Cream in Sister Location.", "Rare", "desert", "rare"],
    ["Plastic Pizza", "A plastic pizza from a cooking set.", "Common", "food", "common"],
    ["Plastic Burger", "A plastic burger from a cooking set.", "Uncommon", "food", "uncommon"],
    ["Plastic Taco", "A plastic taco from a cooking set.", "Rare", "food", "rare"]
    ]
    loot_sets = ["car", "fruit", "desert", "food"]
    coins_chance = 50
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
                game.showLongText("Artifact #" + (index + 1) + ":\\n" + user_artifacts[index][0] + "\\n" + user_artifacts[index][1] + "\\nRarity: " + user_artifacts[index][2], DialogLayout.Center)
            }
        } else {
            game.showLongText("Aww...you don't have any! Go and get some!", DialogLayout.Bottom)
        }
    }
})
function summon_snake () {
    sprite_snake = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(sprite_snake, sprites.dungeon.darkGroundCenter)
    sprites.setDataBoolean(sprite_snake, "see_player", false)
    sprites.setDataNumber(sprite_snake, "see_cooldown", 10)
    character.loopFrames(
    sprite_snake,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `,img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `],
    500,
    character.rule(Predicate.MovingLeft)
    )
    character.loopFrames(
    sprite_snake,
    [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `,img`
        . . . . . . . c c c c c c . . . 
        . . . . . . c 6 7 7 7 7 6 c . . 
        . . . . . c 7 7 7 7 7 7 7 7 c . 
        . . . . c 6 7 7 7 7 7 7 7 7 6 c 
        . . . . c 7 7 7 c 6 6 6 6 c 7 c 
        . . . . f 7 7 7 6 f 6 6 f 6 7 f 
        . . . . f 7 7 7 7 7 7 7 7 7 7 f 
        . . . . f 6 7 7 c 6 7 7 7 7 f . 
        . . c c c f 6 7 7 c c c c f . . 
        . c 7 7 7 c c f 7 7 7 2 6 c . . 
        c 7 7 7 7 6 f c 7 7 2 7 7 6 c . 
        c c c 6 6 6 c 6 6 7 1 1 1 1 c . 
        . . c 6 6 6 6 6 6 1 1 1 1 1 c . 
        . . c 6 6 6 6 6 1 1 1 1 1 6 c . 
        . . c c 6 6 7 1 1 1 1 1 6 c . . 
        . . . c c c c c c c c c c . . . 
        `],
    500,
    character.rule(Predicate.MovingRight)
    )
    character.runFrames(
    sprite_snake,
    [img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `],
    500,
    character.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    character.runFrames(
    sprite_snake,
    [img`
        . . . . . . c c c c c c . . . . 
        . . . . . c 6 7 7 7 7 6 c . . . 
        . . . . c 7 7 7 7 7 7 7 7 c . . 
        . . . c 6 7 7 7 7 7 7 7 7 6 c . 
        . . . c 7 7 7 c 6 6 6 6 c 7 c . 
        . . . f 7 7 7 6 f 6 6 f 6 7 f . 
        . . . f 7 7 7 7 7 7 7 7 7 7 f . 
        . . c f 6 7 7 c 6 7 7 7 7 f . . 
        . c 7 7 f 6 7 7 c c c c f . . . 
        c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
        c c 6 7 7 6 c f c 7 7 2 7 7 c . 
        . . c 6 6 6 c c f 6 7 1 1 1 1 c 
        . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
        . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
        . . . f 6 6 6 1 1 1 1 1 1 6 f . 
        . . . . f c c c c c c c c c . . 
        `],
    500,
    character.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
}
info.onCountdownEnd(function () {
	
})
function get_random_coins (max: number) {
    pause_enemies()
    local_coins_got = count_random_coins(max)
    user_coins += local_coins_got
    if (local_coins_got == 0) {
        game.showLongText("Dang, you didn't get any coins! :(", DialogLayout.Bottom)
    } else {
        game.showLongText("Oh look, you found some coins!", DialogLayout.Bottom)
        game.showLongText("You found:\\n" + local_coins_got + " coin(s)!", DialogLayout.Center)
    }
    unpause_enemies()
}
function count_random_coins (max: number) {
    local_coins = 0
    for (let index = 0; index <= max; index++) {
        if (Math.percentChance(coins_chance - index)) {
            local_coins += 1
        } else {
            return local_coins
        }
    }
    return local_coins
}
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(sprite_hero, 50, 50)
    running = false
})
sprites.onDestroyed(SpriteKind.Seeing, function (sprite) {
    if (sprite_hero.overlapsWith(sprite)) {
        sprites.setDataBoolean(sprite, "see_player", true)
        sprites.setDataNumber(sprites.readDataSprite(sprite, "saw_from"), "see_cooldown", 10)
        sprites.readDataSprite(sprite, "saw_from").follow(sprite_hero, 50)
    } else {
        if (sprites.readDataNumber(sprites.readDataSprite(sprite, "saw_from"), "see_cooldown") > 0) {
            sprites.changeDataNumberBy(sprites.readDataSprite(sprite, "saw_from"), "see_cooldown", -1)
        } else {
            sprites.setDataBoolean(sprite, "see_player", false)
            sprites.readDataSprite(sprite, "saw_from").follow(sprite_hero, 0)
        }
    }
})
info.onLifeZero(function () {
    info.setScore(user_coins)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Seeing, function (sprite, otherSprite) {
    scene.followPath(sprites.readDataSprite(otherSprite, "saw_from"), scene.aStar(tiles.locationOfSprite(sprites.readDataSprite(otherSprite, "saw_from")), tiles.locationOfSprite(sprites.readDataSprite(otherSprite, "saw_from"))), 0)
    otherSprite.destroy()
})
function pause_enemies () {
    paused = true
    for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.setDataNumber(sprite, "paused_x", sprite.x)
        sprites.setDataNumber(sprite, "paused_y", sprite.y)
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile2)
    chests_left = tiles.getTilesByType(myTiles.tile1).length
    chests_opened = tiles.getTilesByType(myTiles.tile2).length
    if (!(got_loot)) {
        if (chests_left == 0 || Math.percentChance(chests_opened * 2.5) || true) {
            pause_enemies()
            got_loot = true
            artifacts_obtained = [get_random_loot(), get_random_loot(), get_random_loot()]
            tiles.setTileAt(tiles.getTileLocation(5, 2), sprites.dungeon.doorOpenNorth)
            tiles.setTileAt(tiles.getTileLocation(6, 2), sprites.dungeon.doorOpenNorth)
            game.showLongText("You found your loot box!", DialogLayout.Bottom)
            game.showLongText("You got:", DialogLayout.Bottom)
            for (let index = 0; index <= artifacts_obtained.length - 1; index++) {
                game.showLongText("Artifact #" + (index + 1) + ":\\n" + artifacts_obtained[index][0] + "\\n" + artifacts_obtained[index][1] + "\\nRarity: " + artifacts_obtained[index][2], DialogLayout.Center)
            }
            get_random_coins(10)
            unpause_enemies()
        } else {
            get_random_coins(10)
        }
    } else {
        get_random_coins(10)
    }
})
function get_random_loot () {
    local_chance = randint(0, 99)
    if (local_chance >= 90) {
        local_rarity = "rare"
    } else if (local_chance >= 50) {
        local_rarity = "uncommon"
    } else {
        local_rarity = "common"
    }
    local_set = loot_sets[randint(0, loot_sets.length - 1)]
    for (let artifact of loot_table) {
        if (artifact[3] == local_set && artifact[4] == local_rarity) {
            return artifact
        }
    }
    return ["Bug", "You are not supposed to get this!", "Not supposed to happen", "placeholder_return_values", "impossible"]
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (in_game && !(end_game)) {
        pause_enemies()
        controller.moveSprite(sprite_hero, 0, 0)
        end_game = true
        timer.after(250, function () {
            sprite_hero.setFlag(SpriteFlag.Invisible, true)
            in_game = false
        })
        timer.background(function () {
            color.startFade(color.originalPalette, color.Black, 1000)
            color.pauseUntilFadeDone()
            tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, [myTiles.transparency16], TileScale.Sixteen))
            info.setScore(user_coins)
            for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
                sprite.destroy()
            }
            pause(2000)
            color.startFade(color.Black, color.originalPalette, 1000)
            color.pauseUntilFadeDone()
            game.over(true)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(-1)
    }
    if (character.matchesRule(sprite, character.rule(Predicate.FacingLeft))) {
        otherSprite.setImage(img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `)
    } else {
        otherSprite.setImage(img`
            . . . . c c c c c c c . . . . . 
            . . . c 6 7 7 7 7 7 6 c . . . . 
            . . c 6 7 c 6 6 6 6 c 7 c . . . 
            . . c 7 7 6 f 6 6 f 6 7 6 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 7 7 6 1 f f 1 8 7 f . . 
            . . f 7 7 7 f 1 f f 1 f 6 f . . 
            . . f 6 7 7 f 2 2 2 2 f f . . . 
            . . c f 6 7 7 2 2 2 2 f c c . . 
            . c 7 7 c c 7 7 7 7 7 7 7 7 c . 
            c 7 7 7 6 c f 7 7 7 7 1 1 1 7 c 
            c c 6 6 6 c c f 6 7 1 1 1 1 1 f 
            . . c 6 6 6 c 6 6 1 1 1 1 1 1 f 
            . . c 6 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . c 6 6 6 6 1 1 1 1 1 6 f . 
            . . . . c c c c c c c c f f . . 
            `)
    }
})
let end_location: tiles.Location = null
let sprite_seeing: Sprite = null
let start_time = 0
let local_set = ""
let local_rarity = ""
let local_chance = 0
let local_coins = 0
let user_coins = 0
let local_coins_got = 0
let sprite_snake: Sprite = null
let coins_chance = 0
let loot_sets: string[] = []
let loot_table: string[][] = []
let artifacts_obtained: string[][] = []
let chests_opened = 0
let chests_left = 0
let end_game = false
let in_game = false
let paused = false
let running = false
let got_loot = false
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
sprites.setDataBoolean(sprite_hero, "on_fire", false)
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
// Format:
// 0: Name
// 1: Description
// 2: Rarity
// 3: Set (for tracking)
// 4: Rarity (for tracking)
// 
// Example:
// ["Red Toy Car", "A red toy car, fun to play with!", "Common", "car", "common"]
user_artifacts = [["Red Toy Car", "A red toy car, fun to play with!", "Common", "car", "common"]]
user_artifacts.pop()
info.setScore(20)
info.setLife(20)
got_loot = false
running = false
paused = false
in_game = false
end_game = false
let clank = 5
let clank_multiplier = 1
chests_left = 0
chests_opened = 0
artifacts_obtained = []
set_loot_tables()
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(sprite_hero)
tiles.placeOnTile(sprite_hero, tiles.getTileLocation(6, 7))
tiles.placeOnTile(sprite_artifact_chest, tiles.getTileLocation(4, 4))
pause(100)
if (false) {
    game.showLongText("Welcome to TangoTek's Decked Out from HermitCraft, now on MakeCode Arcade!", DialogLayout.Bottom)
    game.showLongText("Your goal is to follow the compass and try to find your treasure, hidden in the dungeon!", DialogLayout.Bottom)
    game.showLongText("Along the way, there will be chests filled with smaller loot, such as coins or maybe even the occasional power up!", DialogLayout.Bottom)
    game.showLongText("You will definitely want to avoid the snakes." + "(Yeah, I was too lazy to draw a Ravager)" + "They will be patrolling the dungeon, " + "and if they get hold of you, you'll die!" + "", DialogLayout.Bottom)
    game.showLongText("The longer you stay in the dungeon, the more clank you will generate. This will awaken bats and ghost, which won't be good!", DialogLayout.Bottom)
    game.showLongText("When you are ready to enter, head through the doors on the right.", DialogLayout.Bottom)
    game.showLongText("Good luck! You'll need it...", DialogLayout.Bottom)
}
game.onUpdate(function () {
    if (sprite_hero.tileKindAt(TileDirection.Center, sprites.dungeon.doorOpenEast) && !(in_game)) {
        timer.throttle("enter_dungeon", 500, function () {
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
                    tiles.setTilemap(tilemap`level_0`)
                    tiles.placeOnTile(sprite_hero, tiles.getTileLocation(5, 5))
                    start_time = game.runtime()
                    in_game = true
                    for (let index = 0; index < 3; index++) {
                        summon_snake()
                    }
                    pause(500)
                    controller.moveSprite(sprite_hero, 50, 50)
                    color.startFade(color.Black, color.originalPalette, 1000)
                    color.pauseUntilFadeDone()
                })
            } else {
                sprite_hero.x += -16
            }
        })
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
game.onUpdate(function () {
    if (in_game) {
        if (sprite_hero.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava0) || sprite_hero.tileKindAt(TileDirection.Center, sprites.dungeon.hazardLava1)) {
            if (!(sprites.readDataBoolean(sprite_hero, "on_fire"))) {
                sprite_hero.startEffect(effects.fire)
                sprites.setDataBoolean(sprite_hero, "on_fire", true)
            }
        } else if (sprites.readDataBoolean(sprite_hero, "on_fire")) {
            timer.after(500, function () {
                effects.clearParticles(sprite_hero)
                sprites.setDataBoolean(sprite_hero, "on_fire", false)
            })
        }
    }
})
game.onUpdate(function () {
    if (in_game || end_game) {
        info.startCountdown((game.runtime() - start_time) / 1000)
    }
})
game.onUpdate(function () {
    if (paused) {
        for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
            sprite.x = sprites.readDataNumber(sprite, "paused_x")
            sprite.y = sprites.readDataNumber(sprite, "paused_y")
        }
    }
})
game.onUpdateInterval(5000, function () {
    if (true) {
        sprite_hero.say(clank)
    }
    if (in_game && !(paused)) {
        if (character.matchesRule(sprite_hero, character.rule(Predicate.NotMoving))) {
            clank_multiplier = 1
        } else {
            if (running) {
                clank_multiplier = 2
            } else {
                clank_multiplier = 4
            }
        }
        if (Math.percentChance(clank * clank_multiplier)) {
            clank += 1
        }
    }
})
game.onUpdateInterval(50, function () {
    if (sprites.readDataBoolean(sprite_hero, "on_fire")) {
        info.changeLifeBy(-1)
    }
})
game.onUpdateInterval(2000, function () {
    if (!(running) && info.score() < 20) {
        info.changeScoreBy(1)
    }
    if (character.matchesRule(sprite_hero, character.rule(Predicate.NotMoving))) {
        timer.after(1000, function () {
            if (info.score() < 20) {
                info.changeScoreBy(1)
            }
        })
    }
})
forever(function () {
    if (in_game) {
        for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
            sprite_seeing = sprites.createProjectileFromSprite(img`
                3 
                `, sprite, (sprite_hero.x - sprite.x) * 10, (sprite_hero.y - sprite.y) * 10)
            sprite_seeing.setFlag(SpriteFlag.Invisible, false)
            sprite_seeing.setFlag(SpriteFlag.DestroyOnWall, true)
            sprite_seeing.setFlag(SpriteFlag.AutoDestroy, true)
            sprites.setDataSprite(sprite_seeing, "saw_from", sprite)
            sprite_seeing.setKind(SpriteKind.Seeing)
        }
    }
    pause(200)
})
// From: https://www.arduino.cc/en/Tutorial/BuiltInExamples/toneMelody
// 
// #define NOTE_B0  31
// #define NOTE_C1  33
// #define NOTE_CS1 35
// #define NOTE_D1  37
// #define NOTE_DS1 39
// #define NOTE_E1  41
// #define NOTE_F1  44
// #define NOTE_FS1 46
// #define NOTE_G1  49
// #define NOTE_GS1 52
// #define NOTE_A1  55
// #define NOTE_AS1 58
// #define NOTE_B1  62
// #define NOTE_C2  65
// #define NOTE_CS2 69
// #define NOTE_D2  73
// #define NOTE_DS2 78
// #define NOTE_E2  82
// #define NOTE_F2  87
// #define NOTE_FS2 93
// #define NOTE_G2  98
// #define NOTE_GS2 104
// #define NOTE_A2  110
// #define NOTE_AS2 117
// #define NOTE_B2  123
// #define NOTE_C3  131
// #define NOTE_CS3 139
// #define NOTE_D3  147
// #define NOTE_DS3 156
// #define NOTE_E3  165
// #define NOTE_F3  175
// #define NOTE_FS3 185
// #define NOTE_G3  196
// #define NOTE_GS3 208
// #define NOTE_A3  220
// #define NOTE_AS3 233
// #define NOTE_B3  247
// #define NOTE_C4  262
// #define NOTE_CS4 277
// #define NOTE_D4  294
// #define NOTE_DS4 311
// #define NOTE_E4  330
// #define NOTE_F4  349
// #define NOTE_FS4 370
// #define NOTE_G4  392
// #define NOTE_GS4 415
// #define NOTE_A4  440
// #define NOTE_AS4 466
// #define NOTE_B4  494
// #define NOTE_C5  523
// #define NOTE_CS5 554
// #define NOTE_D5  587
// #define NOTE_DS5 622
// #define NOTE_E5  659
// #define NOTE_F5  698
// #define NOTE_FS5 740
// #define NOTE_G5  784
// #define NOTE_GS5 831
// #define NOTE_A5  880
// #define NOTE_AS5 932
// #define NOTE_B5  988
// #define NOTE_C6  1047
// #define NOTE_CS6 1109
// #define NOTE_D6  1175
// #define NOTE_DS6 1245
// #define NOTE_E6  1319
// #define NOTE_F6  1397
// #define NOTE_FS6 1480
// #define NOTE_G6  1568
// #define NOTE_GS6 1661
// #define NOTE_A6  1760
// #define NOTE_AS6 1865
// #define NOTE_B6  1976
// #define NOTE_C7  2093
// #define NOTE_CS7 2217
// #define NOTE_D7  2349
// #define NOTE_DS7 2489
// #define NOTE_E7  2637
// #define NOTE_F7  2794
// #define NOTE_FS7 2960
// #define NOTE_G7  3136
// #define NOTE_GS7 3322
// #define NOTE_A7  3520
// #define NOTE_AS7 3729
// #define NOTE_B7  3951
// #define NOTE_C8  4186
// #define NOTE_CS8 4435
// #define NOTE_D8  4699
// #define NOTE_DS8 4978
forever(function () {
    if (in_game) {
        pause(Math.max(10000 - clank * 100, 1000))
        for (let index = 0; index < 2; index++) {
            music.playTone(104, music.beat(BeatFraction.Sixteenth))
            music.rest(music.beat(BeatFraction.Half))
        }
    }
    if (false) {
        music.playTone(104, music.beat(BeatFraction.Sixteenth))
        music.rest(music.beat(BeatFraction.Half))
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
game.onUpdateInterval(10000, function () {
    if (in_game) {
        for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
            if (!(scene.spriteIsFollowingPath(sprite)) && !(sprites.readDataBoolean(sprite, "see_player"))) {
                end_location = tiles.getTilesByType(sprites.dungeon.darkGroundCenter)[randint(0, tiles.getTilesByType(sprites.dungeon.darkGroundCenter).length - 1)]
                scene.followPath(sprite, scene.aStar(tiles.locationOfSprite(sprite), end_location), 25)
            }
        }
    }
})
