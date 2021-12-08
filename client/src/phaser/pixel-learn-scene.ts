import { Scene } from 'phaser';
import { ClassMate } from '../redux/game/game.reducer';
import store from '../redux/store';
import socket from '../socket';

const getRandomPosition = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export default class PixeLearnScene extends Scene {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  tick = 0;

  otherPlayers: Phaser.GameObjects.Sprite[] = [];

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  addOtherPlayer = (classMate: ClassMate): void => {
    const otherPlayer = this.add
      .sprite(
        Number(classMate.position.positionX),
        Number(classMate.position.positionY),
        'dude'
      )
      .setData('playerId', classMate.socketId);

    this.otherPlayers.push(otherPlayer);
  };

  selectClassMateState = (state: any): ClassMate[] => {
    return state.gameToggle.classMates;
  };

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
    socket.connect();
  };

  create = (): void => {
    // create map
    const map = this.make.tilemap({ key: 'map' });

    // assign name of the tiles to the map
    const tilesClassroom = map.addTilesetImage('tiles_classroom');
    const tilesRoomBuilder = map.addTilesetImage('tiles_room_builder');

    // add layers
    map.createLayer('floor', tilesRoomBuilder, 0, 0).setDepth(-1);
    const wallsLayer = map.createLayer('walls', tilesRoomBuilder, 0, 0);
    const furnitureLayer = map.createLayer('furniture', tilesClassroom, 0, 0);

    // set collision according to the property in tiled
    furnitureLayer.setCollisionByProperty({ isSolid: true });
    wallsLayer.setCollisionByProperty({ isSolid: true });

    this.player = this.physics.add
      .sprite(getRandomPosition(50, 1000), getRandomPosition(100, 500), 'dude')
      .setInteractive({ useHandCursor: true })
      .setSize(20, 50);
    this.player.setOffset(15, 35);
    this.player.on('pointerup', () => {
      store.dispatch({ type: 'STUDENT_MODAL_TOGGLE' });
    });

    this.player.setCollideWorldBounds(true); // Stops player from walking off the canvas
    this.player.setOffset(15, 35);

    store.subscribe(() => {
      const initClassMatesState = this.selectClassMateState(store.getState());
      initClassMatesState.forEach((classMate: ClassMate) => {
        const playerAlreadyExist = this.otherPlayers.some(
          (otherPlayer) =>
            otherPlayer.data.values.playerId === classMate.socketId
        );

        if (!playerAlreadyExist) {
          this.addOtherPlayer(classMate);
        }
      });
    });

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
    let direction = 'turn';

    if (this.cursors.left.isDown) {
      direction = 'left';
      this.player.setVelocityX(-160);
      this.player.setVelocityY(0); // Prevents unintentional diagonal movement

      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      direction = 'right';
      this.player.setVelocityX(160);
      this.player.setVelocityY(0); // Prevents unintentional diagonal movement

      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      direction = 'up';
      this.player.setVelocityY(-160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      direction = 'down';
      this.player.setVelocityY(160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
      this.player.anims.play('down', true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

      this.player.anims.play('turn');
    }
    if (this.time.now - this.tick > 100) {
      store.dispatch({
        type: 'STUDENT_GAME_POSITION',
        payload: {
          positionX: this.player.x.toString(),
          positionY: this.player.y.toString(),
          direction,
        },
      });
      this.tick = this.time.now;
    }

    const classMateState = this.selectClassMateState(store.getState());

    // UPDATE OTHER PLAYERS POSITIONS
    classMateState.forEach((classMate: ClassMate) => {
      this.otherPlayers.forEach((otherPlayer) => {
        if (otherPlayer.data.values.playerId === classMate.socketId) {
          if (!classMate.connected) {
            otherPlayer.setActive(false);
            otherPlayer.setVisible(false);
          }
          otherPlayer.setPosition(
            Number(classMate.position.positionX),
            Number(classMate.position.positionY)
          );
          otherPlayer.anims.play(classMate.direction, true);
        }
      });
    });
  };
}
