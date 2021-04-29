import { Scene } from 'phaser';
import store from '../redux/store';
import GAME_ACTIONS from '../redux/Game/game.types';

const { STUDENT_MODAL_TOGGLE } = GAME_ACTIONS;

export default class PixeLearnScene extends Scene {
  cursors: any;

  // walls: any;

  player: any;

  preload = (): void => {
    this.load.image('floor', 'floor.png');
    this.load.image('wall_bottom', 'wall_bottom.png');
    this.load.image('wall_side', 'wall_side.png');
    this.load.image('wall_top', 'wall_top.png');

    this.load.spritesheet('dude', 'dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  };

  create = (): void => {
    this.add.image(400, 300, 'floor'); // Add background texture

    const walls = this.physics.add.staticGroup();

    walls.create(400, 48, 'wall_top').body.setSize(760, 60, 0, 15); // body.setSize() permits us to change the size of the collision box
    walls.create(400, 591, 'wall_bottom'); // https://phaser.io/examples/v2/arcade-physics/offset-bounding-box
    walls.create(11, 300, 'wall_side'); // Left
    walls.create(789, 300, 'wall_side'); // Right

    this.player = this.physics.add
      .sprite(100, 400, 'dude')
      .setInteractive({ useHandCursor: true });

    this.player.on('pointerup', () => {
      store.dispatch({ type: STUDENT_MODAL_TOGGLE });
    });

    this.player.setCollideWorldBounds(true); // Stops player from walking off the canvas

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(this.player, walls);
  };

  update = (): void => {
    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.setVelocityY(-160);
    } else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.setVelocityY(160);
    } else if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.setVelocityY(160);
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.setVelocityY(0); // Prevents unintentional diagonal movement

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.setVelocityY(0); // Prevents unintentional diagonal movement

      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

      this.player.anims.play('turn');
    }
  };
}
