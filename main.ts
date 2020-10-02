let hero = sprites.create(img`
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
controller.moveSprite(hero, 50, 50)
hero.setFlag(SpriteFlag.ShowPhysics, false)
hero.setFlag(SpriteFlag.StayInScreen, true)
character.loopFrames(
hero,
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
hero,
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
hero,
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
hero,
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
hero,
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
hero,
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
hero,
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
hero,
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
character.setCharacterAnimationsEnabled(hero, true)
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(hex`0d000c00000000000000000000000000000000000000000000000000000000000a0c150c190c150b0d0000000012080707070707090e0000000018021a0101010106160000000012020101010101061b0000000012020101010101061b000000001802010101010106160000000013030404040404050e0000000011101714101417100f00000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . 
    . . 2 . . . . . . . 2 . . 
    . . 2 . . . . . . . 2 . . 
    . . 2 . . . . . . . 2 . . 
    . . 2 . . . . . . . 2 . . 
    . . 2 . . . . . . . 2 . . 
    . . 2 . . . . . . . 2 . . 
    . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchUp,myTiles.tile1,sprites.dungeon.greenOuterEast1], TileScale.Sixteen))
scene.cameraFollowSprite(hero)
tiles.placeOnTile(hero, tiles.getTileLocation(6, 7))
