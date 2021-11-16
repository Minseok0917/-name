import MaskFontRain from './module/maskFontRain.js';

const maskImage = document.getElementById('backgruond-mask');
const loadBg = document.getElementById('load-bg');

window.onload = init;
function init(){
	loadBg.style.visibility = 'hidden';

	new MaskFontRain({
		width:window.innerWidth,
		height:window.innerHeight,
		maskElement:maskImage,
		textList:'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0987654321'.split('')
	});
}