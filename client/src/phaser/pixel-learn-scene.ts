import { Scene } from 'phaser';
import { ClassMate } from '../redux/game/game.types';
import { State } from '../redux/root-reducer';
import { store } from '../redux/store';

const getRandomPosition = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

const skins = [
  {
    name: 'adam',
    path: 'assets/characters/Adam_run_48x48.png',
  },
  {
    name: 'ash',
    path: 'assets/characters/Ash_run_48x48.png',
  },
  {
    name: 'bob',
    path: 'assets/characters/Bob_run_48x48.png',
  },
  {
    name: 'bouncer',
    path: 'assets/characters/Bouncer_run_48x48.png',
  },
  {
    name: 'bruce',
    path: 'assets/characters/Bruce_run_48x48.png',
  },
  {
    name: 'butcher',
    path: 'assets/characters/Butcher_run_48x48.png',
  },
  {
    name: 'conf',
    path: 'assets/characters/Conference_run_48x48.png',
  },
  {
    name: 'dan',
    path: 'assets/characters/Dan_run_48x48.png',
  },
  {
    name: 'oldman',
    path: 'assets/characters/Old_man_run_48x48.png',
  },
  {
    name: 'rob',
    path: 'assets/characters/Rob_run_48x48.png',
  },
  {
    name: 'roki',
    path: 'assets/characters/Roki_run_48x48.png',
  },
  {
    name: 'samuel',
    path: 'assets/characters/Samuel_run_48x48.png',
  },
];

const getRandomIndex = (): number => {
  return Math.floor(Math.random() * 12);
};

type OtherPlayersInfo = {
  id: string;
  text: Phaser.GameObjects.Text;
};

export default class PixeLearnScene extends Scene {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  tick = 0;

  otherPlayers: Phaser.GameObjects.Sprite[] = [];

  otherPlayersInfos: OtherPlayersInfo[] = [];

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  skin!: string;

  addOtherPlayer = (classMate: ClassMate): void => {
    const otherPlayer = this.add
      .sprite(
        Number(classMate.position.positionX),
        Number(classMate.position.positionY),
        classMate.skin
      )
      .setData('playerId', classMate.socketId);

    this.otherPlayers.push(otherPlayer);
  };

  selectClassMateState = (state: State): ClassMate[] => {
    return state.game.classMates;
  };

  setPlayerInfos = (classMate: ClassMate): void => {
    const playerInfo: OtherPlayersInfo = {
      id: classMate.id,
      text: this.add.text(
        Number(classMate.position.positionX) - 90,
        Number(classMate.position.positionY) - 50,
        `${classMate.firstname} ${classMate.lastname}`
      ),
    };
    this.otherPlayersInfos.push(playerInfo);
  };

  updatePlayersInfosPosition = (classMate: ClassMate): void => {
    this.otherPlayersInfos.forEach((playerInfo: OtherPlayersInfo) => {
      if (playerInfo.id === classMate.id) {
        if (!classMate.connected) {
          playerInfo.text.setActive(false);
          playerInfo.text.setVisible(false);
        }
        playerInfo.text.setPosition(
          Number(classMate.position.positionX) - 90,
          Number(classMate.position.positionY) - 50
        );
      }
    });
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

    skins.forEach((skin) => {
      this.load.spritesheet(skin.name, skin.path, {
        frameWidth: 48,
        frameHeight: 96,
      });
    });

    // this.load.spritesheet('dude', getRandomSkin(), {
    //   frameWidth: 48,
    //   frameHeight: 96,
    // });
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

    this.skin = skins[getRandomIndex()].name;

    this.player = this.physics.add
      .sprite(
        getRandomPosition(50, 1000),
        getRandomPosition(100, 500),
        this.skin
      )
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
          this.setPlayerInfos(classMate);
        }
      });
    });
    skins.forEach((skin) => {
      this.anims.create({
        key: `${skin.name}left`,
        frames: this.anims.generateFrameNumbers(skin.name, {
          start: 12,
          end: 17,
        }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: `${skin.name}right`,
        frames: this.anims.generateFrameNumbers(skin.name, {
          start: 0,
          end: 5,
        }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: `${skin.name}up`,
        frames: this.anims.generateFrameNumbers(skin.name, {
          start: 6,
          end: 11,
        }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: `${skin.name}down`,
        frames: this.anims.generateFrameNumbers(skin.name, {
          start: 18,
          end: 23,
        }),
        frameRate: 10,
        repeat: -1,
      });

      this.anims.create({
        key: `${skin.name}turn`,
        frames: [{ key: skin.name, frame: 14 }],
      });
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

      this.player.anims.play(`${this.skin}left`, true);
    } else if (this.cursors.right.isDown) {
      direction = 'right';
      this.player.setVelocityX(160);
      this.player.setVelocityY(0); // Prevents unintentional diagonal movement

      this.player.anims.play(`${this.skin}right`, true);
    } else if (this.cursors.up.isDown) {
      direction = 'up';
      this.player.setVelocityY(-160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
      this.player.anims.play(`${this.skin}up`, true);
    } else if (this.cursors.down.isDown) {
      direction = 'down';
      this.player.setVelocityY(160);
      this.player.setVelocityX(0); // Prevents unintentional diagonal movement
      this.player.anims.play(`${this.skin}down`, true);
    } else {
      this.player.setVelocityX(0);
      this.player.setVelocityY(0);

      this.player.anims.play(`${this.skin}turn`);
    }
    if (this.time.now - this.tick > 30) {
      store.dispatch({
        type: 'STUDENT_GAME_POSITION',
        payload: {
          positionX: this.player.x.toString(),
          positionY: this.player.y.toString(),
          direction,
          skin: this.skin,
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
          otherPlayer.anims.play(classMate.skin + classMate.direction, true);
          this.updatePlayersInfosPosition(classMate);
        }
      });
    });
  };
}
