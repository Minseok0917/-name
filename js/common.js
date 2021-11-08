import MaskFontRain from './SnowCanvas.js';

const maskImage = document.getElementById('backgruond-mask');



const a = new MaskFontRain({
	width:window.innerWidth,
	height:window.innerHeight,
	maskElement:maskImage,
	textList:'ABC'.split('')
});


// document.body.append(a.canvas);