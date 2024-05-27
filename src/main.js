
"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    fps: {
        target: 30,
        forceSetTimeOut: true
    },
    backgroundColor: "#ffffff",
    width: 800,
    height: 600,
    scene: [Monster]
}

const game = new Phaser.Game(config);