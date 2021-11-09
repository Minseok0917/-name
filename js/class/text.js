export default class Font{
	constructor({x,y,speed,text,fontSize,isStroke}){
		this.x = x; // defaultX
		this.y = y; // defaultY
		this.speed = speed; // speed
		this.text = text; // text
		this.fontSize = fontSize; // font size
		this.isStroke = isStroke; // is stroke

		this.posX = x; // positionX
		this.posY = y; // positionY
	}

	updateY(){
		const { posY, speed } = this;
		this.posY = posY+speed;
	}
}