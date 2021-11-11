import MaskFontRain from './module/maskFontRain.js';

const maskImage = document.getElementById('backgruond-mask');
const loadBg = document.getElementById('load-bg');
const mousePointer = document.getElementById('mouse-pointer');

window.onload = init;
function init(){
	loadBg.style.visibility = 'hidden';
	
	document.addEventListener('mousemove',({offsetX,offsetY})=> {
		mousePointer.style.left = offsetX+'px';
		mousePointer.style.top = offsetY+'px';
	});

	new MaskFontRain({
		width:window.innerWidth,
		height:window.innerHeight,
		maskElement:maskImage,
		textList:'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0987654321'.split('')
	});
}