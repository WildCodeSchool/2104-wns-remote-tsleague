import { Scene } from 'phaser';

export default class PixeLearnScene extends Scene {
  preload(): void {
    this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
  }

  create(): void {
    const image = this.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height / 2,
      'sky'
    );
    const scaleX = this.cameras.main.width / image.width;
    const scaleY = this.cameras.main.height / image.height;
    const scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);

    this.add.text(250, 250, 'Hello PixeLearn', {
      backgroundColor: 'white',
      color: 'blue',
    });
  }
}
