namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const Seeing = SpriteKind.create()
    export const Snake = SpriteKind.create()
    export const Compass = SpriteKind.create()
    export const Info = SpriteKind.create()
    export const Clear_settings = SpriteKind.create()
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
function instructions () {
    game.showLongText("Welcome to a horrible clone of TangoTek's Decked Out from HermitCraft, now on MakeCode Arcade!", DialogLayout.Bottom)
    game.showLongText("Your goal is to follow the compass and try to find your treasure, hidden in the dungeon!", DialogLayout.Bottom)
    game.showLongText("Along the way, there will be chests filled with smaller loot, such as coins or food!", DialogLayout.Bottom)
    game.showLongText("You will definitely want to avoid the snakes." + "(Yeah, I was too lazy to draw a Ravager) " + "They will be patrolling the dungeon, " + "and if they get hold of you, you'll die!" + "", DialogLayout.Bottom)
    game.showLongText("The longer you stay in the dungeon, " + "the more clank you will generate. " + "This will awaken bats and ghost, " + "(which can fly through walls) " + "which won't be good!", DialogLayout.Bottom)
    game.showLongText("When you are ready to enter, head through the doors on the right.", DialogLayout.Bottom)
    game.showLongText("Good luck! You'll need it...", DialogLayout.Bottom)
}
function count_random_cookies (max: number) {
    local_cookies = 0
    for (let index = 0; index <= max; index++) {
        if (Math.percentChance(coins_chance - index)) {
            local_cookies += 1
        } else {
            return local_cookies
        }
    }
    return local_cookies
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (in_game) {
        timer.throttle("try_eat_cookie", 2000, function () {
            if (user_cookies > 0 && info.life() <= 18) {
                controller.moveSprite(sprite_hero, 20, 20)
                running = false
                sprite_hero.startEffect(effects.trail)
                timer.after(2000, function () {
                    controller.moveSprite(sprite_hero, 50, 50)
                    effects.clearParticles(sprite_hero)
                    if (controller.B.isPressed()) {
                        user_cookies += -1
                        info.changeLifeBy(2)
                        sprite_hero.say("" + user_cookies + " cookie(s) left!", 2000)
                    }
                })
            } else {
                if (info.life() > 18) {
                    sprite_hero.say("Full on health!", 2000)
                } else {
                    sprite_hero.say("No cookies. :(", 2000)
                }
            }
        })
    }
})
function update_compass (player_x: number, player_y: number, target_x: number, target_y: number) {
    local_radians_to_target = Math.atan2(player_y - target_y, player_x - target_x)
    local_degree_to_target = 180 * local_radians_to_target / Math.atan2(0, -1)
    sprite_compass.setFlag(SpriteFlag.Invisible, false)
    if (within_range(local_degree_to_target, 90, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 2 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 2 1 1 1 1 1 f . . 
            f 1 1 1 1 1 1 2 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 2 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 2 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 c 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 c 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 c 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 c 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 c 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, 135, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 2 1 f . . 
            f 1 1 1 1 1 1 1 1 1 2 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 2 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 2 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 c 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 c 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 c 1 1 1 1 1 1 1 1 1 f . 
            . f 1 c 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, 180, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 c c c c c f 2 2 2 2 2 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, -135, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 c 1 1 1 1 1 1 1 1 1 f . . 
            f 1 1 1 c 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 c 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 c 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 2 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 2 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 2 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 2 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, -90, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 c 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 c 1 1 1 1 1 f . . 
            f 1 1 1 1 1 1 c 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 c 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 c 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 2 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 2 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 2 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 2 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 2 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, -45, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 c 1 f . . 
            f 1 1 1 1 1 1 1 1 1 c 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 c 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 c 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 2 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 2 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 2 1 1 1 1 1 1 1 1 1 f . 
            . f 1 2 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, 0, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 2 2 2 2 2 f c c c c c 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (within_range(local_degree_to_target, 45, 22)) {
        sprite_compass.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 2 1 1 1 1 1 1 1 1 1 f . . 
            f 1 1 1 2 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 2 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 2 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 c 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 c 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 c 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 c 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
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
    // 
    // List of sets: https://hermitcraft.fandom.com/wiki/Decked_Out#Sets
    loot_table = [
    ["Dragon set - Obsidian", "Some really black rock.", "Common", "dragon", "common"],
    ["Dragon set - End Crystal", "Directly exported from the End dimension.", "Uncommon", "dragon", "uncommon"],
    ["Dragon set - Dragon's Breath", "Some smelly gas for brewing.", "Rare", "dragon", "rare"],
    ["Dragon set - Dragon's Head", "Thankfully, it's just a model.", "Unique", "dragon", "unique"],
    ["Wither set - Soul Sand", "Fresh brown sand direct from the Nether dimension.", "Common", "wither", "common"],
    ["Wither set - Wither Rose", "A special flower that you don't want to plant.", "Uncommon", "wither", "uncommon"],
    ["Wither set - Wither Head", "A great spoil of war that's very creepy.", "Rare", "wither", "rare"],
    ["Wither set - Nether Star", "Looks just like a star...", "Unique", "wither", "unique"],
    ["Ocean set - Sea Pickle", "A sea pickle that has been pickled for preservation.", "Common", "ocean", "common"],
    ["Ocean set - Sea Lantern", "Used for lighting up the Ocean Monuments.", "Uncommon", "ocean", "uncommon"],
    ["Ocean set - Sponge", "A sponge to soak up water, found in Ocean Monuments.", "Rare", "ocean", "rare"],
    ["Ocean set - Heart of the Sea", "The coveted Heart of the Sea.", "Unique", "ocean", "unique"],
    ["End set - End Rod", "Shiny stick!", "Common", "end", "common"],
    ["End set - Eye of Ender", "Creepy circle thing that looks like an eye.", "Uncommon", "end", "uncommon"],
    ["End set - Ender Chest", "Store your stuff in here and never lose it again!", "Rare", "end", "rare"],
    ["End set - Shulker Head", "The head of a Shulker.", "Unique", "end", "unique"],
    ["Nether set - Glowstone", "A glowing stone. Simple.", "Common", "nether", "common"],
    ["Nether set - Shroomlight", "A natural source of light in the Nether.", "Uncommon", "nether", "uncommon"],
    ["Nether set - Ancient Debris", "Something everyone seems to want these days...", "Rare", "nether", "rare"],
    ["Nether set - Respawn Anchor", "Died in the Nether? Hope your Anchor was charged!", "Unique", "nether", "unique"],
    ["Shiny set - Lapis Lazuli Block", "The Imposter of the Diamond Block.", "Common", "shiny", "common"],
    ["Shiny set - Gold Block", "A whole block of gold. Uber heavy!", "Uncommon", "shiny", "uncommon"],
    ["Shiny set - Emerald Block", "Villagers kill for this stuff. Seriously.", "Rare", "shiny", "rare"],
    ["Shiny set - Diamond Block", "The real-deal stuff. Keep care of it!", "Unique", "shiny", "unique"],
    ["Bee set - Honey Block", "A solidified cube of honey. Very sticky!", "Common", "bee", "common"],
    ["Bee set - Honeycomb", "Direct from the beehives!", "Uncommon", "bee", "uncommon"],
    ["Bee set - Beehive", "A hive of bees.", "Rare", "bee", "rare"],
    ["Bee set - Angry Bee Head", "You are lucky this is just a head!", "Unique", "bee", "unique"],
    ["Witch set - Nether Wart", "Reminds me of mushrooms...", "Common", "witch", "common"],
    ["Witch set - Cauldron", "I don't have a clue on how that fits in the chest.", "Uncommon", "witch", "uncommon"],
    ["Witch set - Brewing Stand", "A real brewing stand used by real witches.", "Rare", "witch", "rare"],
    ["Witch set - Witch Head", "Ewww...they actually have warts on their noses!", "Unique", "witch", "unique"],
    ["Enchantment set - Lapis Lazuli", "How do you pronounce the name of this stuff?!", "Common", "enchantment", "common"],
    ["Enchantment set - Bookshelf", "Reading is good for you.", "Uncommon", "enchantment", "uncommon"],
    ["Enchantment set - Bottle O' Enchanting", "Has liquid XP in here! Don't drop it!", "Rare", "enchantment", "rare"],
    ["Enchantment set - Enchanting Table", "Make your tools shiny.", "Unique", "enchantment", "unique"],
    ["Poison set - Rotten Flesh", "Stinky!", "Common", "poison", "common"],
    ["Poison set - Spider Eye", "I hate spiders. So creepy.", "Uncommon", "poison", "uncommon"],
    ["Poison set - Pufferfish", "Spikey!", "Rare", "poison", "rare"],
    ["Poison set - Poisonous Potato", "This potato grew some spuds.", "Unique", "poison", "unique"],
    ["Villager set - Hay Bales", "Efficient wheat storage!", "Common", "villager", "common"],
    ["Villager set - Anvil", "Bang! Bang! Bang!", "Uncommon", "villager", "uncommon"],
    ["Villager set - Bell", "STOP RUNNING, I JUST RUNG IT FOR FUN!", "Rare", "villager", "rare"],
    ["Villager set - Iron Golem Head", "How in the world did you get this?!", "Unique", "villager", "unique"],
    ["Snowman set - Stick", "Stick.", "Common", "snowman", "common"],
    ["Snowman set - Snow Block", "Hmmm...still frozen somehow.", "Uncommon", "snowman", "common"],
    ["Snowman set - Carrot", "Yum!", "Rare", "snowman", "rare"],
    ["Snowman set - Snow Golem Head", "Nice model someone made and forgot about.", "Unique", "snowman", "unique"]
    ]
    loot_sets = [
    "dragon",
    "wither",
    "ocean",
    "end",
    "nether",
    "shiny",
    "bee",
    "witch",
    "enchantment",
    "poison",
    "villager",
    "snowman"
    ]
    coins_chance = 50
}
function get_random_cookies (max: number) {
    pause_enemies()
    local_cookies_got = count_random_cookies(max)
    user_cookies += local_cookies_got
    if (local_cookies_got == 0) {
        game.showLongText("Dang, you didn't get anything! :(", DialogLayout.Bottom)
    } else {
        game.showLongText("Oh look, you found some cookies!", DialogLayout.Bottom)
        game.showLongText("You found:\\n" + local_cookies_got + " cookie(s)!", DialogLayout.Center)
    }
    unpause_enemies()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Clear_settings, function (sprite, otherSprite) {
    while (sprite.overlapsWith(otherSprite)) {
        sprite.x += -2
        sprite.y += -2
    }
    if (game.ask("Are you sure you want", "to reset?") && game.ask("You can't go back after", "this!")) {
        blockSettings.clear()
        pause(100)
        game.showLongText("Done clearing data! Restarting!", DialogLayout.Bottom)
        pause(100)
        color.startFade(color.originalPalette, color.Black, 1000)
        color.pauseUntilFadeDone()
        game.reset()
    }
})
function tp_to_random_spawner (sprite: Sprite) {
    local_random = randint(0, 3)
    if (local_random == 0) {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.doorClosedNorth)
    } else if (local_random == 1) {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.doorClosedWest)
    } else if (local_random == 2) {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.doorClosedSouth)
    } else {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.doorClosedEast)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0 && in_game) {
        controller.moveSprite(sprite_hero, 75, 75)
        running = true
    }
})
function within_range (x: number, middle: number, difference: number) {
    return x < middle + difference && x > middle - difference
}
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
function summon_ghost () {
    sprite_ghost = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tp_to_random_spawner(sprite_ghost)
    sprites.setDataBoolean(sprite_ghost, "see_player", false)
    sprites.setDataNumber(sprite_ghost, "see_cooldown", 10)
    sprites.setDataNumber(sprite_ghost, "damage_rate", 500)
    sprites.setDataNumber(sprite_ghost, "damage", -3)
    sprites.setDataString(sprite_ghost, "species", "ghost")
    character.runFrames(
    sprite_ghost,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    character.rule(Predicate.FacingLeft)
    )
    character.runFrames(
    sprite_ghost,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    character.rule(Predicate.FacingRight)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Info, function (sprite, otherSprite) {
    while (sprite.overlapsWith(otherSprite)) {
        sprite.x += 2
        sprite.y += -2
    }
    changelogs()
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
    tp_to_random_spawner(sprite_snake)
    sprites.setDataBoolean(sprite_snake, "see_player", false)
    sprites.setDataNumber(sprite_snake, "see_cooldown", 10)
    sprites.setDataNumber(sprite_snake, "damage_rate", 0)
    sprites.setDataNumber(sprite_snake, "damage", -1)
    sprites.setDataString(sprite_snake, "species", "snake")
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
        game.showLongText("Dang, you didn't get anything! :(", DialogLayout.Bottom)
    } else {
        game.showLongText("Oh look, you found some coins!", DialogLayout.Bottom)
        game.showLongText("You found:\\n" + local_coins_got + " coin(s)!", DialogLayout.Center)
    }
    unpause_enemies()
}
function save_user_artifacts_to_settings () {
    for (let x = 0; x <= user_artifacts.length - 1; x++) {
        for (let y = 0; y <= 4; y++) {
            blockSettings.writeString("decked_out_artifacts_array_" + x + "_" + y, user_artifacts[x][y])
            console.logValue("decked_out_artifacts_array_" + x + "_" + y, user_artifacts[x][y])
        }
    }
    blockSettings.writeNumber("decked_out_artifacts_length", user_artifacts.length)
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
    if (in_game) {
        controller.moveSprite(sprite_hero, 50, 50)
        running = false
    }
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
    sprite_hero.destroy()
    timer.after(5000, function () {
        game.over(false, effects.melt)
    })
})
function changelogs () {
    game.showLongText("Changelogs:\\n" + "We're still in BETA, so I'm too lazy to write any.\\n" + ":)\\n" + "Once we are stable-ish, I'll try to remember to write changelogs.\\n" + "Current version is 0.7.0 **BETA**", DialogLayout.Full)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Seeing, function (sprite, otherSprite) {
    scene.followPath(sprites.readDataSprite(otherSprite, "saw_from"), scene.aStar(tiles.locationOfSprite(sprites.readDataSprite(otherSprite, "saw_from")), tiles.locationOfSprite(sprites.readDataSprite(otherSprite, "saw_from"))), 0)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (in_game) {
        controller.moveSprite(sprite_hero, 50, 50)
        effects.clearParticles(sprite_hero)
    }
})
function summon_bat () {
    sprite_bat = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    tp_to_random_spawner(sprite_bat)
    sprites.setDataBoolean(sprite_bat, "see_player", false)
    sprites.setDataNumber(sprite_bat, "see_cooldown", 10)
    sprites.setDataNumber(sprite_bat, "damage_rate", 1000)
    sprites.setDataNumber(sprite_bat, "damage", -1)
    sprites.setDataString(sprite_bat, "species", "bat")
    character.loopFrames(
    sprite_bat,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    character.rule(Predicate.FacingLeft)
    )
    character.loopFrames(
    sprite_bat,
    [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b b b b b b c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c b b b c b c 
        . . . c f b b b b 1 f f f 1 b f 
        . . c c f b b b b b b b b b b f 
        . . . . f c b b b b b b b b f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . c c . . 
        . . . . . . c c c 3 c c 3 c . . 
        . . . . . c c c b 3 c b 3 b c . 
        . . . . f f b b b b b b b b c . 
        . . . . f f b b b b b b b b c c 
        . . . f f f c b b 1 b b b 1 b c 
        . . . f f f f b b b b b b b b c 
        . . . b b b c c b c b b b c b f 
        . . . c c c c f b 1 f f f 1 b f 
        . . . c c b b f b b b b b b f . 
        . . . c b b c c b b b b b f c c 
        . . c b b c c f f f f f f c c c 
        . c c c c c . . . . . . c c c . 
        c c c c . . . . . . . c c c . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    character.rule(Predicate.FacingRight)
    )
}
function pause_enemies () {
    paused = true
    for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.setDataNumber(sprite, "paused_x", sprite.x)
        sprites.setDataNumber(sprite, "paused_y", sprite.y)
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, myTiles.tile2)
    console.logValue("location position", "" + tiles.locationXY(location, tiles.XY.row) + ", " + tiles.locationXY(location, tiles.XY.column))
    console.logValue("loot position", "" + tiles.locationXY(loot_pos, tiles.XY.row) + ", " + tiles.locationXY(loot_pos, tiles.XY.column))
    console.logValue("got loot", got_loot)
    if (tiles.locationXY(location, tiles.XY.row) == tiles.locationXY(loot_pos, tiles.XY.row) && tiles.locationXY(location, tiles.XY.column) == tiles.locationXY(loot_pos, tiles.XY.column) || false) {
        if (!(got_loot)) {
            pause_enemies()
            got_loot = true
            artifacts_obtained = [get_random_loot(), get_random_loot(), get_random_loot(), get_random_loot()]
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
        if (Math.percentChance(50)) {
            get_random_coins(10)
        } else {
            get_random_cookies(5)
        }
    }
})
function get_random_loot () {
    local_chance = randint(0, 99)
    if (local_chance >= 90) {
        local_rarity = "unique"
    } else if (local_chance >= 80) {
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
    return ["", "", "", "", ""]
}
function load_user_artifacts_from_settings () {
    local_stop = false
    for (let x = 0; x <= blockSettings.readNumber("decked_out_artifacts_length") - 1; x++) {
        local_artifact_array_contruc = []
        for (let y = 0; y <= 4; y++) {
            if (!(blockSettings.exists("decked_out_artifacts_array_" + x + "_" + y))) {
                local_stop = true
            } else {
                local_artifact_array_contruc.push(blockSettings.readString("decked_out_artifacts_array_" + x + "_" + y))
            }
        }
        if (!(local_stop)) {
            user_artifacts.push(local_artifact_array_contruc)
        }
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    option_selected = true
})
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
            blockSettings.writeNumber("decked_out_coins", blockSettings.readNumber("decked_out_coins") + user_coins)
            for (let sprite of sprites.allOfKind(SpriteKind.Enemy)) {
                sprite.destroy()
            }
            for (let artifact of artifacts_obtained) {
                user_artifacts.push(artifact)
            }
            save_user_artifacts_to_settings()
            pause(2000)
            color.startFade(color.Black, color.originalPalette, 1000)
            color.pauseUntilFadeDone()
            game.over(true)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (false) {
        timer.throttle(sprites.readDataString(otherSprite, "species"), sprites.readDataNumber(otherSprite, "damage_rate"), function () {
            info.changeLifeBy(sprites.readDataNumber(otherSprite, "damage"))
        })
    }
    if (sprites.readDataString(otherSprite, "species") == "snake") {
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
    } else if (sprites.readDataString(otherSprite, "species") == "bat") {
        if (character.matchesRule(sprite, character.rule(Predicate.FacingLeft))) {
            otherSprite.setImage(img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c 1 b b b 1 b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b 1 f f 1 c b b b b f . . . . 
                f f 1 f f 1 f b b b b f c . . . 
                f f 2 2 2 2 f b b b b f c c . . 
                . f 2 2 2 2 b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `)
        } else {
            otherSprite.setImage(img`
                f f f . . . . . . . . f f f . . 
                c b b c f . . . . . . c c f f . 
                . c b b c f . . . . . . c c f f 
                . c c c b f . . . . . . c f c f 
                . c c b b c f . c c . c c f f f 
                . c b b c b f c c 3 c c 3 c f f 
                . c b c c b f c b 3 c b 3 b f f 
                . . c c c b b c b 1 b b b 1 c . 
                . . . c c c c b b 1 b b b 1 c . 
                . . . . c c b b b b b b b b b c 
                . . . . f b b b b c 1 f f 1 b c 
                . . . c f b b b b f 1 f f 1 f f 
                . . c c f b b b b f 2 2 2 2 f f 
                . . . . f c b b b b 2 2 2 2 f . 
                . . . . . f c b b b b b b f . . 
                . . . . . . f f f f f f f . . . 
                `)
        }
    } else if (sprites.readDataString(otherSprite, "species") == "ghost") {
        if (character.matchesRule(sprite, character.rule(Predicate.FacingLeft))) {
            otherSprite.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........fffff.........
                ........ff1111bff.......
                .......fb1111111bf......
                .......f111111111f......
                ......fd1111111ffff.....
                ......fd111dd1c111bf....
                ......fb11fcdf1b1bff....
                ......f11111bfbfbff.....
                ......f1b1bdfcffff......
                ......fbfbfcfcccf.......
                ......ffffffffff........
                .........ffffff.........
                .........ffffff.........
                .........fffffff..f.....
                ..........fffffffff.....
                ...........fffffff......
                ........................
                ........................
                ........................
                ........................
                `)
        } else {
            otherSprite.setImage(img`
                ........................
                ........................
                ........................
                ........................
                .........fffff..........
                .......ffb1111ff........
                ......fb1111111bf.......
                ......f111111111f.......
                .....ffff1111111df......
                ....fb111c1dd111df......
                ....ffb1b1fdcf11bf......
                .....ffbfbfb11111f......
                ......ffffcfdb1b1f......
                .......fcccfcfbfbf......
                ........ffffffffff......
                .........ffffff.........
                .........ffffff.........
                .....f..fffffff.........
                .....fffffffff..........
                ......fffffff...........
                ........................
                ........................
                ........................
                ........................
                `)
        }
    }
})
// TODO:
// 
// - Bigger dungeon! (Gotta keep expanding!)
// - [ ] Make ghosts go through walls.
// - Automatically collect sets and increment hero score, which is displayed above you in lobby. 
// - [ ] Keep adding more artifacts.
// 
// TODO for 1.0:
// 
// - Write changelogs post 1.0 on every release
// - Hide seeing sprites
// - Enable text explanation at start
// - Enable damage
// - Changelogs sprite (like chest) in lobby post 1.0
// - Starting melody would be cool
// - Able to walk through monster spawners but cost 3-5 health and teleports to other random spawner. Says "These are black holes. You can go through them, but it hurts! Try?"
let end_location: tiles.Location = null
let sprite_seeing: Sprite = null
let start_time = 0
let local_artifact_array_contruc: string[] = []
let local_stop = false
let local_set = ""
let local_rarity = ""
let local_chance = 0
let loot_pos: tiles.Location = null
let sprite_bat: Sprite = null
let local_coins = 0
let local_coins_got = 0
let sprite_snake: Sprite = null
let sprite_ghost: Sprite = null
let local_random = 0
let local_cookies_got = 0
let loot_sets: string[] = []
let loot_table: string[][] = []
let local_degree_to_target = 0
let local_radians_to_target = 0
let coins_chance = 0
let local_cookies = 0
let option_selected = false
let user_artifacts_simple: string[] = []
let artifacts_obtained: string[][] = []
let end_game = false
let in_game = false
let paused = false
let running = false
let got_loot = false
let user_cookies = 0
let user_coins = 0
let user_artifacts: string[][] = []
let sprite_compass: Sprite = null
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
let sprite_reset_settings = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 2 2 f f f f f f f f . . 2 2 . 
    . 2 2 2 b b b b b c f f 2 2 2 . 
    . . 2 2 2 b b b b c c 2 2 2 . . 
    . . f 2 2 2 b b b c 2 2 2 f . . 
    . . f c 2 2 2 b c 2 2 2 c f . . 
    . . f c c 2 2 2 2 2 2 c c f . . 
    . . f c c c 2 2 2 2 c c c f . . 
    . . f c c c 2 2 2 2 c c c f . . 
    . . f c c 2 2 2 2 2 2 c c f . . 
    . . f c 2 2 2 d d 2 2 2 c f . . 
    . . f 2 2 2 c c c c 2 2 2 f . . 
    . . 2 2 2 d d d d d d 2 2 2 . . 
    . 2 2 2 d c c c c c c d 2 2 2 . 
    . 2 2 f f f f f f f f f f 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Clear_settings)
sprite_reset_settings.z = 5
let sprite_changelogs = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f f . . 
    . . . f 1 1 1 1 1 1 1 1 1 f . . 
    . f f f 1 f f f f 1 1 1 1 f . . 
    . f 1 f 1 f f f f 1 f f 1 f . . 
    . f 1 f 1 f f f f 1 1 1 1 f . . 
    . f 1 f 1 f f f f 1 f f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 f 1 f f f f f f f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 f 1 f f f f f f f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 f 1 f f f f f f f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 1 1 f . . 
    . . f . f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Info)
sprite_changelogs.z = 5
sprite_compass = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 f 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f f 1 1 1 1 1 1 1 f f . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Compass)
sprite_compass.setFlag(SpriteFlag.RelativeToCamera, true)
sprite_compass.setFlag(SpriteFlag.Invisible, true)
sprite_compass.left = 2
sprite_compass.bottom = scene.screenHeight() - 1
// Format:
// 0: Name
// 1: Description
// 2: Rarity
// 3: Set (for tracking)
// 4: Rarity (for tracking)
// 
// Example:
// ["Red Toy Car", "A red toy car, fun to play with!", "Common", "car", "common"]
// 
// Can't store as list of list of strings - maybe store as simple key: value with value as string and key format as decked_out_artifacts_array_x_y and x would be array index and y would be array index inside array index thingy?
// 
// See: https://forum.makecode.com/t/more-settings-questions/4056/2
user_artifacts = [["", "", "", "", ""]]
user_artifacts.pop()
load_user_artifacts_from_settings()
if (!(blockSettings.exists("decked_out_coins"))) {
    blockSettings.writeNumber("decked_out_coins", 0)
}
user_coins = 0
user_cookies = 0
info.setScore(blockSettings.readNumber("decked_out_coins"))
info.setLife(20)
got_loot = false
running = false
paused = false
in_game = false
end_game = false
let clank = 5
let clank_multiplier = 1
artifacts_obtained = []
set_loot_tables()
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level`)
scene.cameraFollowSprite(sprite_hero)
tiles.placeOnTile(sprite_hero, tiles.getTileLocation(6, 6))
tiles.placeOnTile(sprite_artifact_chest, tiles.getTileLocation(4, 4))
tiles.placeOnTile(sprite_changelogs, tiles.getTileLocation(4, 7))
tiles.placeOnTile(sprite_reset_settings, tiles.getTileLocation(8, 7))
pause(100)
if (false) {
    instructions()
}
if (user_artifacts.length > 12) {
    controller.moveSprite(sprite_hero, 0, 0)
    game.showLongText("Oh no, you don't have enough space for all your artifacts! Select " + (user_artifacts.length - 12) + " artifact(s) to sacrifice.", DialogLayout.Bottom)
    blockMenu.setColors(1, 15)
    while (user_artifacts.length > 12) {
        user_artifacts_simple = []
        option_selected = false
        for (let artifact of user_artifacts) {
            user_artifacts_simple.push("" + artifact[0] + " - " + artifact[2])
        }
        blockMenu.showMenu(user_artifacts_simple, MenuStyle.Grid, MenuLocation.FullScreen)
        while (!(option_selected)) {
            pause(100)
        }
        if (game.ask("Are you sure you want", "to sacrifice it?")) {
            game.showLongText("Farewell, artifact!", DialogLayout.Bottom)
            user_artifacts.removeAt(blockMenu.selectedMenuIndex())
            user_coins += 1
            info.changeScoreBy(1)
            game.showLongText("1 coin(s) awarded!", DialogLayout.Bottom)
        } else {
            game.showLongText("Choose something else!", DialogLayout.Bottom)
        }
    }
    blockMenu.closeMenu()
    save_user_artifacts_to_settings()
    controller.moveSprite(sprite_hero, 50, 50)
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
                    sprite_reset_settings.destroy()
                    sprite_changelogs.destroy()
                    sprite_hero.setFlag(SpriteFlag.Invisible, false)
                    tiles.setTilemap(tilemap`level_0`)
                    tiles.placeOnTile(sprite_hero, tiles.getTileLocation(5, 5))
                    info.setScore(20)
                    start_time = game.runtime()
                    in_game = true
                    loot_pos = tiles.getTilesByType(myTiles.tile1)[randint(0, tiles.getTilesByType(myTiles.tile1).length - 1)]
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
game.onUpdateInterval(5000, function () {
    control.heapSnapshot()
})
game.onUpdateInterval(50, function () {
    if (sprites.readDataBoolean(sprite_hero, "on_fire")) {
        info.changeLifeBy(-1)
    }
})
game.onUpdateInterval(2000, function () {
    if (in_game) {
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
    }
})
game.onUpdateInterval(2000, function () {
    if (in_game && true) {
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
forever(function () {
    if (in_game && sprites.allOfKind(SpriteKind.Enemy).length < 100) {
        if (clank >= 20 || false) {
            if (Math.percentChance(clank) || false) {
                summon_bat()
            }
        }
        if (clank >= 50 || false) {
            if (Math.percentChance(clank) || false) {
                summon_ghost()
            }
        }
    }
    pause(5000)
})
forever(function () {
    if (sprite_hero.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        sprite_hero.startEffect(effects.halo, 1500)
        pause(500)
        color.startFade(color.originalPalette, color.White, 500)
        color.pauseUntilFadeDone()
        tiles.placeOnRandomTile(sprite_hero, sprites.dungeon.collectibleInsignia)
        color.startFade(color.White, color.originalPalette, 500)
        for (let tile of tiles.getTilesByType(sprites.dungeon.collectibleInsignia)) {
            tiles.setTileAt(tile, myTiles.tile27)
        }
        clank += 3
        timer.after(9000, function () {
            for (let tile of tiles.getTilesByType(myTiles.tile27)) {
                tiles.setTileAt(tile, sprites.dungeon.collectibleInsignia)
            }
        })
    }
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
        for (let index = 0; index < 2; index++) {
            music.playTone(104, music.beat(BeatFraction.Sixteenth))
            music.rest(music.beat(BeatFraction.Half))
        }
        music.rest(music.beat(BeatFraction.Double))
    }
})
forever(function () {
    if (in_game) {
        update_compass(tiles.locationXY(tiles.locationOfSprite(sprite_hero), tiles.XY.column), tiles.locationXY(tiles.locationOfSprite(sprite_hero), tiles.XY.row), tiles.locationXY(loot_pos, tiles.XY.column), tiles.locationXY(loot_pos, tiles.XY.row))
    }
    pause(100)
})
game.onUpdateInterval(500, function () {
    if (in_game) {
        if (running && character.matchesRule(sprite_hero, character.rule(Predicate.Moving))) {
            info.changeScoreBy(-1)
        }
        if (info.score() <= 0) {
            controller.moveSprite(sprite_hero, 50, 50)
            running = false
        }
    }
})
game.onUpdateInterval(200, function () {
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
