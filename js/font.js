export default class Font{
	constructor({x,y,speed,text,fontSize}){
		this.x = x; // defaultX
		this.y = y; // defaultY
		this.speed = speed; // speed
		this.text = text; // text
		this.fontSize = fontSize; // font size

		this.posX = x; // positionX
		this.posY = y; // positionY
	}

	updateY(){
		const { posY, speed } = this;
		this.posY = posY+speed;
	}
}