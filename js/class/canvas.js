export default class Canvas{
	constructor(width,height){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvasWidth = width;
		this.canvasHeight = height;
		this.canvas.width = width;
		this.canvas.height = height;

		this.event();
	}

	event(){
		window.addEventListener('resize',this.handleResize.bind(this));
	}

	handleResize(){
		const width = window.innerWidth;
		const height = window.innerHeight;
		this.canvasWidth = width;
		this.canvasHeight= height;
		this.canvas.width = width;
		this.canvas.height = height;
	}

	canvasReset(){
		const { canvasWidth, canvasHeight } = this;
		this.context.clearRect(0,0,canvasWidth,canvasHeight);
	}

	drawText({x,y,text,fontSize,isStroke=false}){
		const { context } = this;
		context.beginPath();
		context.textAlign ='center';
		context.textBaseline = 'middle';
		context.lineWidth  = 3;
		context.font = `${fontSize}px serif`;
		if( isStroke ){
			context.strokeText(text,x,y);
		}else{
			context.fillText(text,x,y);
		}
	}
	
	drawCircle({x,y,r,color,isStroke=false}){
		const { context } = this;
		const to = isStroke ? 'stroke' : 'fill';
		context.beginPath();
		context.arc(x,y,r,0,Math.PI*2);
		context[to]();
	}
}