import { Scene } from 'phaser';
import store from '../redux/store';
import GAME_ACTIONS from '../redux/Game/game.types';

const { STUDENT_MODAL_TOGGLE, STUDENT_GAME_POSITION } = GAME_ACTIONS;

export default class PixeLearnScene extends Scene {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  cursors: any;

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  player: any;

  preload = (): void => {
    this.load.tilemapTiledJSON(
      'map',
      'assets/tiles-configs/pixelearn-map.json'
    );
    this.load.image(
      'tiles_classroom',
      'assets/interiors/5_Classroom_and_library_48x48.png'
    );
    this.load.image(
      'tiles_room_builder',
      'assets/interiors/Room_Builder_48x48.png'
    );

    this.load.spritesheet('dude', 'assets/characters/Bruce_run_48x48.png', {
      frameWidth: 48,
      frameHeight: 96,
    });
  };

  create = (): void => {
    // create map
    const map = this.make.tilemap({ key: 'map' });

    // assign name of the tiles to the map
    const tilesClassroom = map.addTilesetImage('tiles_classroom');
    const tilesRoomBuilder = map.addTilesetImage('tiles_room_builder');

    // add layers
    const floorLayer = map
      .createLayer('floor', tilesRoomBuilder, 0, 0)
      .setDepth(-1);
    const wallsLayer = map.createLayer('walls', tilesRoomBuilder, 0, 0);
    const furnitureLayer = map.createLayer('furniture', tilesClassroom, 0, 0);

    // set collision according to the property in tiled
    furnitureLayer.setCollisionByProperty({ isSolid: true });
    wallsLayer.setCollisionByProperty({ isSolid: true });

    this.player = this.physics.add
      .sprite(100, 400, 'dude')
      .setInteractive({ useHandCursor: true })
      .setSize(20, 50);
    this.player.setOffset(15, 35);
    this.player.on('pointerup', () => {
      store.dispatch({ type: STUDENT_MODAL_TOGGLE });
    });

    this.player.setCollideWorldBounds(true); // Stops player from walking off the canvas

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 17 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dude', { start: 6, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', { start: 18, end: 23 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 14 }],
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.physics.world.setBounds(0, 0, 2400, 2400);
    //  set camera to the world size
    this.cameras.main.setBounds(0, 0, 2400, 2400);
    // target player
    this.cameras.main.startFollow(this.player);

    this.physics.add.collider(this.player, furnitureLayer);
    this.physics.add.collider(this.player, wallsLayer);
  };

  update = (): void => {
    // if (this.cursors.up.isDown && this.cursors.right.isDown) {
    //   this.player.setVelocityX(160);
    //   this.player.setVelocityY(-160);
    // } else if (this.cursors.up.isDown && this.cursors.left.isDown) {
    //   this.player.setVelocityX(-160);
    //   this.player.setVelocityY(-160);
    // } else if (this.cursors.down.isDown && this.cursors.right.isDown) {
    //   this.player.setVelocityX(160);
    //   this.player.setVelocityY(160);
    // } else if (this.cursors.down.isDown && this.cursors.left.isDown) {
    //   this.player.setVelocityX(-160);
    //   this.player.setVelocityY(160);

    if (this.cursors.left.isDown) {
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
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
      this.player.anims.play('down', true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

      this.player.anims.play('turn');
    }
    store.dispatch({
      type: STUDENT_GAME_POSITION,
      payload: {
        positionX: this.player.x.toString(),
        positionY: this.player.y.toString(),
      },
    });
  };
}
