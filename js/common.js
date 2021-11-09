import MaskFontRain from './module/SnowCanvas.js';

const maskImage = document.getElementById('backgruond-mask');


new MaskFontRain({
	width:window.innerWidth,
	height:window.innerHeight,
	maskElement:maskImage,
	textList:'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0987654321'.split('')
});