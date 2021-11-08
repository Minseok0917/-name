import Canvas from './canvas.js';
import Text from './text.js';
import { random } from './utils.js';


export default class MaskFontRain extends Canvas{
	constructor({width,height,maskElement,textList}){
		super(width, height);
		this.maskElement = maskElement;
		this.textList = textList;
		this.textListLength = textList.length-1;
		this.addTextState = {
			timer:500,
			min:10,
			max:30
		}
		this.textArray = []; // Text 객체 배열 

		this.init();
	}

	init(){
		setInterval(this.addText.bind(this),this.addTextState.timer);
		this.animated();
	}

	addText(){
		const { addTextState : { min , max }, canvasWidth , textList , textListLength }  = this;
		const textCount = random(min,max);
		for(let index=0; index<textCount; index++){
			const fontSize = random(8,50);
			const textOptions = { 
				x: random(fontSize,canvasWidth-fontSize),
				y: random(-20,-30),
				speed: random(5,10),
				text: textList[random(0,textListLength)],
				isStroke:random(0,10) % 2 === 0 ? true : false,
				fontSize
			}
			this.textArray = [...this.textArray, new Text(textOptions) ]
		}
	}

	animated(){
		this.canvasReset();
		for(let text of this.textArray){
			const { posY } = text;
			if( this.canvasHeight <= posY ){
				this.textArray = this.textArray.filter( ftext => ftext != text );
			}
			text.updateY();
			this.drawText({...text,...{ y:posY }});
		}

		this.png();
		requestAnimationFrame(this.animated.bind(this));
	}

	png(){
		const { canvas , maskElement } = this;
		const image = canvas.toDataURL('image/png');
		maskElement.style.webkitMask = `url(${image}) no-repeat center center`;
	}
}