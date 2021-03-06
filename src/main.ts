import 'phaser';

import MainScene from './scenes/PlayScene';
import Preloader from './scenes/Preloader';

const config = {
    type: Phaser.AUTO,
    resolution: 1, 
    backgroundColor: "#282828",
    
    scene: [
      Preloader,
      MainScene
    ],
    scale: {
      parent: 'content',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 480 * 1.5,
      height: 900 * 1.5
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // will affect our player sprite
            debug: false // change if you need
        }
    }
};

new Phaser.Game(config);