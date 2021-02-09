//产品中心轮播效果
var box = document.getElementById('box');
var ul = document.getElementById('ul');
ul.innerHTML += ul.innerHTML;
var lis = document.querySelectorAll('#ul li');
var speed = 5;
var flag;
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
var rightWidth = ul.offsetLeft;
leftMove();
autoleft();
function autoleft(){
	lefttran = setInterval(()=>{
		leftMove();
	},5000)
}
leftBtn.onclick = function() {
	flag = 1;
	qingchu();
	leftMove();
	autoleft();
	setTimeout(()=>{
		clearInterval(rightmove)
	},1000)
}
rightBtn.onclick = function() {
	flag = 2;
	qingchu();
	rightMove();
	autoleft();
}
box.onmouseenter = function() {
	clearInterval(lefttran);
	clearInterval(leftmove);
}
box.onmouseleave = function() {
	clearInterval(lefttran)
	autoleft();
}

function qingchu() {
	if (flag == 1) {
		clearInterval(lefttran);
		clearInterval(leftmove);
	} else if (flag == 2) {
		clearInterval(lefttran);
	}
}

function leftMove() {
	leftmove = setInterval(() => {
		ul.style.left = ul.offsetLeft - speed + 'px';
		if (ul.offsetLeft <= -lis[0].offsetWidth) {
			ul.appendChild(ul.firstElementChild);
			ul.style.left = 0;
			clearInterval(leftmove)
		}
	}, 20);
}

function rightMove() {
	rightmove = setInterval(() => {
		ul.style.left = ul.offsetLeft + speed + 'px';
		if (ul.offsetLeft >= 0) {
			ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
			ul.style.left = rightWidth + 19 + 'px';
			clearInterval(rightmove)
		}
	}, 20)
}
