// banner轮播效果实现
//获取页面元素
var banner_box;
var banner_main;
var banner_imgArr = ['img/banner.jpg','img/banner1.jpg','img/banner2.jpg'];
var banner_href = ['http://demo.kangjingept.com:8020/cssthemes6/zly20210109_06/index.html','http://demo.kangjingept.com:8020/cssthemes6/zly20210109_06/index.html','http://demo.kangjingept.com:8020/cssthemes6/zly20210109_06/index.html']
//预加载
window.addEventListener('load',init);
function init(){
	banner_box = document.querySelector('.banner-box');
	banner_main = document.querySelector('.banner-main');
	bannerXuanran();
}
//定义一个轮播渲染函数
function bannerXuanran(){
	bannermore(0);
	var i = 1;
	setInterval(()=>{
		if(i > 2 || i < 0){
			i = 0;
		}else{
			bannermore(i);
			i++;
		}
	},5000)
}
//定义一个默认banenr渲染函数
function bannermore(i){
	banner_main.innerHTML = `
		<img src="${banner_imgArr[i]}" >
		<div class="banner-yuandian">
			<span></span>
			<span></span>
			<span></span>
		</div>
	`;
	var banner_yuandian = document.querySelector('banner-yuandian');
	var banner_yuandians = document.querySelectorAll('.banner-yuandian span');
	var banner_img = document.querySelector('.banner-main>img')
	banner_yuandians[i].style.background = '#FFA900';
	banner_img.onclick = function(){
		location.href = banner_href[i];
	}
	for(let i = 0;i < banner_yuandians.length;i++){
		banner_yuandians[i].onclick = function(){
			bannermore(i);
		}
	}
}