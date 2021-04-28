import { Scene } from 'phaser';

export default class PixeLearnScene extends Scene {
  create(): void {
    this.add.text(250, 250, 'Hello PixeLearn', {
      backgroundColor: 'white',
      color: 'blue',
    });
  }
}
