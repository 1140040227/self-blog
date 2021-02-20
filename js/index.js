//写完首页才发现问题，但是重新改太繁琐，选择就这基础上尝试




// 导航栏交互效果实现
//首先设置默认选择导航
//获取到所有的导航li标签
var nav_lis = document.querySelectorAll('.nav-4-main>li');
// console.log(nav_lis)

//获取到所有的二级导航
var nav_li_twos = document.querySelectorAll('.nav-4-main>li>ul');
// console.log(nav_li_twos);
for(let i = 0;i < nav_li_twos.length;i++){
	nav_li_twos[i].style.display = 'none';
}
//鼠标焦点动画
for(let i = 0;i < nav_lis.length;i++){
	nav_lis[i].onmouseenter = function(){
		clearStyle(nav_lis,nav_li_twos);
		this.style.background = '#D38207';
		if(i - 1 < 0){
			
		}else{
			nav_li_twos[i-1].style.display = 'block';
		}
	}
	nav_lis[i].onmouseleave = function(){
		clearStyle(nav_lis,nav_li_twos);
	}
}
// 定义一个排除除自己以外的函数
function clearStyle(arr,brr){
	for(let i = 0;i < arr.length;i++){
		arr[i].style.background = '#FFA900';
		arr[pageNum].style.background = '#D38207';
	}
	for(let i = 0;i < brr.length;i++){
		brr[i].style.display = 'none'
	}
}

var index_page = document.getElementById('index_page');
var about_page = document.getElementById('about_page');
var news_page = document.getElementById('news_page');
// 先声明一个页面序号,用来判断页面
var pageNum = 0;
pagetab();
for(let i = 0;i < nav_lis.length;i++){
	nav_lis[i].onclick = function(){
		pageNum = i;
		//设置默认效果
		pagetab();
	}
}
// 声明一个页面渲染函数
function pagetab(){
	if(pageNum == 0){
		nav_lis[pageNum].style.background = '#D38207';
		index_page.style.display = 'block';
		about_page.style.display = 'none';
		news_page.style.display = 'none';
	}else if(pageNum == 1){
		nav_lis[pageNum].style.background = '#D38207';
		index_page.style.display = 'none';
		about_page.style.display = 'block';
		news_page.style.display = 'none';
	}else if(pageNum == 2){
		nav_lis[pageNum].style.background = '#D38207';
		index_page.style.display = 'none';
		about_page.style.display = 'none';
		news_page.style.display = 'block';
	}
}


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


//成功案例的轮播效果
//先对内容进行渲染
var successArr = [{
	title:'扎心了,老铁。扎心了,康振',
	image:'./img/success-1.jpg'
},
{
	title:'【四川】SKZ康振助力川南城际',
	image:'./img/success-2.jpg'
},
{
	title:'【广东】SKZ康振携数台设备助',
	image:'./img/success-3.jpg'
},
{
	title:'【浙江】SKZ康振,首开管廊市',
	image:'./img/success-4.png'
},
{
	title:'【华东】SKZ康振带您领略华东',
	image:'./img/success-5.jpg'
}];
var wrapper = document.querySelector('.success-wrapper');
var success_left = document.querySelector('.success-button-prev');
var success_right = document.querySelector('.success-button-next');
successYuan();
//获取轮播容器的大小
var wrapper_w = wrapper.offsetWidth;
//获取每一个内容的宽度大小
var slider_w = document.querySelectorAll('.success-slide')[0].offsetWidth;
//计算出每一次轮播的步数
var wrapper_step = 5*2 + slider_w;
// console.log(wrapper.offsetLeft)
var wrapper_l = wrapper.offsetLeft;
// console.log(wrapper_l)
success_animation();
function success_animation(){
	success_wrapper = setInterval(()=>{
		wrapper.style.left = wrapper.offsetLeft - 1.5 + 'px';
		if(wrapper.offsetLeft <= wrapper_l - wrapper_step){
			clearInterval(success_wrapper);
			successArr.push(successArr.shift())
			successYuan();
			wrapper.style.left = '5px'
			setTimeout(()=>{
				success_animation();
			},3000)
		}
	},10)
	// console.log(wrapper_step)
}
// success_left.onclick = function(){
// 	clearInterval(success_wrapper);
// 	var success_wrapper_left = setInterval(()=>{
// 		wrapper.style.left = wrapper.offsetLeft + 1.5 + 'px';
// 		if(wrapper.offsetLeft == wrapper_l + wrapper_step){
// 			console.log(wrapper.offsetLeft)
// 			clearInterval(success_wrapper_left);
// 			successArr.unshift(successArr.pop())
// 			successYuan();
// 			wrapper.style.left = '5px';
// 			success_animation();
// 		}
// 	},10)
// }
// success_right.onclick = function(){
// 	clearInterval(success_wrapper);
// 	var success_wrapper_right = setInterval(()=>{
// 		wrapper.style.left = wrapper.offsetLeft - 1.5 + 'px';
// 		if(wrapper.offsetLeft == wrapper_l - wrapper_step){
// 			console.log(1)
// 			clearInterval(success_wrapper_right);
// 			successArr.push(successArr.shift())
// 			successYuan();
// 			wrapper.style.left = '5px'
// 			success_animation();
// 		}
// 	},10)
// }

//轮播内容数据渲染函数
function successYuan(){
	wrapper.innerHTML = '';
	for(let i = 0;i < successArr.length;i++){
		wrapper.innerHTML += `
			<div class="success-slide">
				<div class="success-slide-imgbox">
					<img src="${successArr[i].image}" >
				</div>
				<div class="success-slide-text">${successArr[i].title}</div>
			</div>
		`
	}
}

var top_to = document.getElementById('toTop');
top_to.onclick = function(){
	var scrollStep = 2;
	var scrollstart = setInterval(()=>{
		scrollT = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollT > 0){
			window.scrollBy(0,-50)
		}else{
			clearInterval(scrollstart)
			window.scroll(0,0)
		}
	},10)
}

// 新闻资讯效果实现
// 先存储所有的轮播图片
var newsImgArr = ['./img/news-1.jpg','./img/news-2.jpg','./img/news-3.jpg','./img/news-4.jpg','./img/news-5.jpg','./img/news-6.jpg','./img/news-7.jpg','./img/news-8.jpg'];
// console.log(newsImgArr)
// 轮播效果
//首先获取到图片元素
var news_imgbox = document.querySelector('.news-content-left>img');
// console.log(news_imgbox.src)
//获取到数字标签
var news_span = document.querySelectorAll('.news-content-left>div>span');
//设置默认效果
newsSetStyle(news_span,0)
var news_i = 0;//计数
var newsAnimation = setInterval(()=>{
	news_i++;
	clearNewsStyle();
	news_imgbox.src = newsImgArr[news_i];
	newsSetStyle(news_span,news_i);
	//点击事件（点击标签进行轮播图片的切换）
	for(let i = 0;i < news_span.length;i++){
		news_span[i].onclick = function(){
			clearNewsStyle();
			newsSetStyle(news_span,i);
			news_i = i;
			news_imgbox.src = newsImgArr[news_i];
		}
	}
	if(news_i == newsImgArr.length-1){
		news_i = 0;
	}
},3000)
function newsSetStyle(arr,index){
	arr[index].style.color = 'white';
	arr[index].style.background = '#FF9A00';
}
//定义一个清除其他样式的函数
function clearNewsStyle(){
	for(let i = 0;i < news_span.length;i++){
		news_span[i].style.color = 'black';
		news_span[i].style.background = 'white'
	}
}
//新闻资讯右边功能实现
var vm = new Vue({
	el:'#news-right',
	data:{
		//新闻资讯数据
		newsdata:[{
			title:'你原来是这样的康振，我可能是个假康振人',
			times:'2017-04-17'
		},{
			title:'315，做让消费者买不后悔的产品。',
			times:'2017-04-17'
		},{
			title:'迁宅吉祥日，安居大有年——庆SKZ康振乔迁之喜',
			times:'2017-04-17'
		},{
			title:'热烈祝贺SKZ康振成为中铁大桥局优秀供应商',
			times:'2017-04-17'
		},{
			title:'2016中国城市地下空间、综合管廊、海绵城市技术创',
			times:'2017-04-17'
		},{
			title:'迎新春过福年，我们在路上',
			times:'2017-04-17'
		},{
			title:'此马非彼马 上海宝马展一场机械车盛宴',
			times:'2017-04-17'
		},{
			title:'康振机械，粽横四海',
			times:'2017-04-17'
		}]
	}
})

