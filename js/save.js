import Canvas from './canvas.js';
import Font from './font.js';
import { random } from './utils.js';


class MaskFontRain extends Canvas{
	constructor({width,height,maskElement,textList}){
		super(width, height);
		this.maskElement = maskElement;
		this.textList = textList;
		this.textListLength = textList.length-1;
		this.snowList = [];


		this.addFontState = {
			timer:500,
			min:10,
			max:30
		}
		this.fontArray = [];

		this.init();
	}

	init(){
		setInterval(this.addFont,this.addFontState.timer);

		this.animated();
	}

	draw(x,y,r,t,ts){
		const { ctx } = this;
		ctx.beginPath();
		ctx.textAlign ='center';
		ctx.textBaseline = 'middle';
		ctx.lineWidth  = 3;
		ctx.font = `${ts}px serif`;

		// t = textArray[random(0,textArrayLength)];
		if( r%2 == 0 ){
			ctx.strokeText(t,x,y);
		}else{
			ctx.fillText(t,x,y);
		}
		// ctx.arc(x,y,r,0,Math.PI*2);
		// ctx.fill();
	}
	addFont(){
		const { addSnowState : { min , max }, canvasWidth , textList , textListLength }  = this;
		const fontCount = random(min,max);
		for(let index=0; index<fontCount; index++){
			const fontSize = random(8,50);
			const fontOptions = { 
				x: random(textSize,canvasWidth-r),
				y: random(-textSize,-textSize*3),
				speed: random(5,10),
				text: textList[random(0,textListLength)],
				isStroke:random(0,10) % 2 === 0 ? true : false,
				fontSize
			}
			this.snowArray = [...this.snowArray, new Font(fontOptions) ]
		}
	}
	animated(){
		const { canvasWidth , canvasHeight , context } = this;
		context.clearRect(0,0,canvasWidth,canvasHeight);
		for(let snow of this.snowArray){
			if( canvasHeight <= snow.posY ){
				this.snowArray = this.snowArray.filter( fsnow => fsnow != snow );
			}
			this.drawText(...snow);
			font.updateY();			
		}

		this.png();
		requestAnimationFrame(this.animated.bind(this));
	}

	png(){
		const { canvas } = this;
		const image = canvas.toDataURL('image/png');
		maskImage.style.webkitMask = `url(${image}) no-repeat center center`;
	}
}