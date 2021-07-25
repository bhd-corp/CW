setTimeout ( function(){
	let gs = document.getElementById('bhd');
	gs.style.display = 'none';
	let body = document.getElementById('body');
	body.style.background = 'url(b.jpg)';
	let kaq = document.getElementById('end');
	kaq.style.display = 'block';

document.getElementById('startt').onclick = function() {
	let od = document.getElementById('start');
	od.style.display = 'block';
	let kj = document.getElementById('end');
	kj.style.display = 'none';
let count = 110;
let h1 = 0;
let k = document.getElementById('h1');
setInterval( function(){
	h1+=1;
	k.innerHTML = h1;
}, 1000);

let left = document.getElementById('left');
let right = document.getElementById('rigth');
let per  = document.getElementById('ske');
right.addEventListener('click', function(){
	count+=110;
	per.style.left = count + 'px';
	per.style.transform = 'scale(1, 1)';
	if (count == 880) {
		location.reload();
	}
});
left.addEventListener('click', function(){
	count-=110;
	per.style.left = count + 'px';
	per.style.transform = 'scale(-1, 1)';
	if (count == 0) {
		location.reload();
	}
});
let v = document.getElementById('sw');
let g = 50;
setTimeout( function(){
	if (count == 0) {
		location.reload();
	}
}, 3000);
setInterval( function(){
	g+=100;
	if (g > 130 && count == 220) {
		location.reload();
	}
	else if (g > 130 && count == 110) {
		location.reload();
	}
}, 7000);

let b = document.getElementById('s');
setInterval( function(){
	g+=100;
	if (g > 130 && count == 550) {
		location.reload();
	}
}, 10000);


let q = document.getElementById('w');
setInterval( function(){
	g+=100;
	if (g > 130 && count == 440) {
		location.reload();
	}
}, 6000);

}
document.getElementById('fs').onclick = function(){
	let zx = document.getElementById('end');
	zx.style.display = 'none';
	let nq = document.getElementById('settings');
	nq.style.display = 'block';
}
document.getElementById('times').onclick = function() {
	let m = document.getElementById('settings');
	m.style.display = 'none';
	let zx = document.getElementById('end');
	zx.style.display = 'block';
}
}, 6000);
document.getElementById('bhd').onclick = function() {
	let aj = document.getElementById('bhd');
	aj.style.display = 'none';
	let bcx = document.getElementById('end');
	bcx.style.display = 'block';
	let hhd = document.getElementById('body');
	hhd.style.background = 'url(b.jpg)';
}