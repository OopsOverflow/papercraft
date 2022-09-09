import { Container, Sprite, Graphics, BlurFilter } from 'pixi.js';
import 'pixi-heaven';
import Matter from 'matter-js';
import { colors } from '../utils/colors';

class BasicShape extends Container {
	constructor(id, options) {
		super()
		this.id = id;
		// this.renderer = PIXI.autoDetectRenderer()

	}

	async init({
		type,
		position: {x, y} = {},
		size: { width, height } = {},
		radius = 10,
		sides,
		slope,
		isStatic,
		debug,
	}) {
		let engine = window.playground.engine
		this.graphics = new PIXI.Graphics();

		// this.addChild(this.graphics);
		this.color = colors[Object.keys(colors)[this.getRandomInt(4)]]
		this.x = x;
		this.y = y;
		this.position = { x, y };

		// TODO: fill shape with random color
		switch (type) {
			case 'rectangle':
				console.log('rectangle')
				this.physicBody = Matter.Bodies.rectangle(
					0, 0, width, height,
					{
						isStatic: isStatic
					});
				this.graphics.beginFill(this.color); // Purple
				this.graphics.drawRect(0, 0, width, height); // drawRect(x, y, width, height)
				this.graphics.endFill();
				break;
			case 'circle':
				this.physicBody = Matter.Bodies.circle(
					0, 0, radius,
					{
						isStatic: isStatic,
						frictionAir: 0.1
					});
				this.graphics.beginFill(this.color); // Purple
				this.graphics.drawCircle(0, 0, radius); // drawRect(x, y, width, height)
				this.graphics.endFill();
				this.radius = radius;
				// this.hitArea = new PIXI.Circle(0, 0, radius);
				break;
			case 'polygon':
				this.physicBody = Matter.Bodies.polygon(
					x, y, sides,
					{
						isStatic: isStatic
					});
				break;
		}


		if (debug) {
			// for debug
		}
		
		// console.log(this.parent)
		const texture = window.app.renderer.generateTexture(this.graphics);
		this.sprite = new PIXI.Sprite(texture);
		this.sprite.anchor.set(0.5)

		// interact with sprite
		this.interactive = true;
		this.buttonMode = true;
		this.selected = false;
		this.addChild(this.sprite);
		this.on('mousedown', this.clickEventHandler)

		Matter.Composite.add(engine.world, this.physicBody);
		Matter.Body.setPosition(this.physicBody, this.position)
	}

	update() {
		this.x = this.physicBody.position.x
		this.y = this.physicBody.position.y
		this.rotation = this.physicBody.angle
	}

	clickEventHandler(e) {
		// unselect last
		if(window.it) {
			window.it.selected = false;
			window.it.alpha = 1.0;
		}

		// select this
		this.selected = !this.selected;
		// console.log("Mousedown")
		if (this.selected) {
			this.alpha = 0.5;
			window.it = this;
		}
		else {
			this.alpha = 1.0;
			window.it = null;
		}
	}


	getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	// debug draw function

}

export default BasicShape
