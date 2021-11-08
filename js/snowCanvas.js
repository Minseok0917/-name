import Canvas from './canvas.js';
import Font from './font.js';
import { random } from './utils.js';


class MaskFontRain extends Canvas{
	constructor({width,height,maskElement,fontList}){
		super(width, height);
		this.maskElement = maskElement;
		this.fontList = fontList;
		this.snowList = [];


		this.timer = 500;
		this.timerSnowCount = {
			min:10,
			max:30
		}
		this.snowArray = [];

		this.init();
	}




	init(){
		setInterval(()=>{
			this.addSnow();			
		},this.timer);

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
	addSnow(){
		const {timerSnowCount : { min , max }, canvasWidth} = this;
		const snowCount = random(min,max);
		for(let index=0; index<snowCount; index++){
			const r = random(5,30);
			const snowSetting = { 
				x: random(r,canvasWidth-r),
				y: random(-r,-r*3),
				r,
				s: random(5,10),
				t: textArray[random(0,textArrayLength)],
				ts:random(10,50)
			}
			this.snowArray = [...this.snowArray, new Snow(snowSetting) ]
		}
	}
	animated(){
		const { canvasWidth , canvasHeight , ctx } = this;
		ctx.clearRect(0,0,canvasWidth,canvasHeight);
		for(let snow of this.snowArray){
			const { posX, posY, r, t , ts} = snow;
			if( canvasHeight <= posY ){
				this.snowArray = this.snowArray.filter( fsnow => fsnow != snow );
			}
			this.draw(posX,posY,r, t , ts);
			snow.addSpeed();			
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