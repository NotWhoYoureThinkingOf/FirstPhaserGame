export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/img/star.png')
		this.load.spritesheet('dude', 'assets/img/dude.png', {
			frameWidth:32,
			frameHeight: 48
		});
	}
	create() {
		// Image Section
		this.star = this.add.image(100,250, 'star')
		this.star.setScale(2,2);

		// Sprite Section
		this.dude = this.add.sprite(200, 150, 'dude', 4).setScale(2,2);
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers(
				'dude',
			{
				start: 0,
				end:3
			}),
			frameRate: 10,
			repeat: -1
		});
		this.dude.anims.play('left', true)
	}
	update(time, delta) {}
}
