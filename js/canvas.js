class Canvas{
	constructor(width,height){
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.width = width;
		this.height = height;
		this.canvas.width = width;
		this.canvas.height = height;
	}
}