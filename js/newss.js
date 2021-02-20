//关于我们js效果实现
//左侧导航栏默认效果
var newss_tab_ones = document.querySelectorAll('.newss-content-left ul:nth-of-type(1) li')
var newssTabNum = 2;
newsstabmoren(newssTabNum)
//关于我们模块内部渲染更新
for(let i = 0;i < newss_tab_ones.length;i++){
	newss_tab_ones[i].onmouseenter = function(){
		clearnewssTab();
		newsstabmoren(newssTabNum);
		this.style.color = '#FF9A00';
	}
	newss_tab_ones[i].onmouseleave = function(){
		clearnewssTab();
		newsstabmoren(newssTabNum);
	}
	newss_tab_ones[i].onclick = function(){
		clearnewssTab();
		newssTabNum = i;
		newsstabmoren(newssTabNum);
		this.style.color = '#FF9A00';
		newsstabxuanran();
	}
}
function newsstabxuanran(){
	var newss_content_right = document.querySelector('.newss-content-right');
	if(newssTabNum == 1){
		newss_content_right.innerHTML = `
			<div class="about-content-right-top">
				公司新闻
			</div>
			<div class="newss-content-right-main">
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>生产一线最美的景，你我心中最可爱的人——SKZ康振优秀员工专题报道</p>
						<p>她们就像火红的花朵点缀着刚性的生产一线,她们没有华丽的外衣,没有时尚前卫...,都以一颗平常的热心投入到工作中去,展现着巾帼不让须眉的风采。</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>你原来是这样的康振，我可能是个假康振人</p>
						<p>近一直被“我可能XX假XXX”的梗“洗脑”， 这个梗简直有毒，一用根本停不下来—— 因为我发现 这个梗特别适合SKZ康振的各种“美” 这么多不知道！ 感觉自己真的是一个假的康振人......</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>315，做让消费者买不后悔的产品。</p>
						<p>一年一度的消费者权限日又到了，又到了一个消费者拿着手机、坐在电视机前等直播看哪些企业被打假了、哪些产品又被爆出不良、哪些生产前线的“潜规则”了…… 昨日被一则“****餐厅用扫把洗锅”的新</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>迁宅吉祥日，安居大有年——庆SKZ康振乔迁之喜</p>
						<p>阳春三月，万木争春，百花争艳，在这春意盎然，充满希望的大好日子里，迎来了深圳市康振机械科技有限公司的又一激动的时刻，所有人员换旧袍，穿新装，略施粉黛，为了在这个开始时刻展现自己</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
			</div>
		`;
	}else if(newssTabNum == 2){
		newss_content_right.innerHTML = `
			<div class="about-content-right-top">
				行业新闻
			</div>
			<div class="newss-content-right-main">
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>兴泉铁路全线首座隧道今天顺利进洞！</p>
						<p>2020年5月10日 兴泉铁路全线首座隧道今天顺利进洞！</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>沐川县：“仁沐新”高速公路沐川段全线开工</p>
						<p>据了解，“仁沐新”高速公路全长约201千米，项目概算总投资约245.26亿元，力争在2020年底前建成。其中：沐川段全长约55千米，概算投资70多亿元，占地约4406亩，将过境新凡、建和、武圣等7</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>川南城际铁路泸县段建设有序推进</p>
						<p>川南城际铁路泸县段建设有序推进</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
				<div class="newss-content-right-lis">
					<div class="newss-content-right-lis-left">
						<p>兴泉铁路戴云山一号隧道开挖 系全线首座进洞施工的隧道</p>
						<p>暂无简介</p>
					</div>
					<div class="newss-content-right-lis-right">
						2020年05月10日
					</div>
				</div>
			</div>
		`;
	}else if(newssTabNum == 3){
		newss_content_right.innerHTML = `
			<div class="about-content-right-top">
				组织框架
			</div>
			<div class="about-content-right-main">
				暂无信息
			</div>
		`
	}
	
}
function newsstabmoren(i){
	newss_tab_ones[i].style.color = '#FF9A00';
	if(typeof(i) == 'number'){
		newss_tab_ones[0].style.color = 'white'
	}
}
function clearnewssTab(){
	for(let i = 0;i < newss_tab_ones.length;i++){
		newss_tab_ones[i].style.color = 'black';
	}
}

//导航栏上的点击渲染
var nav_lis_threes = document.querySelectorAll('.nav-4-main>li:nth-of-type(3)>ul>li');
// console.log(nav_lis_twos)
for(let i = 0;i < nav_lis_threes.length;i++){
	nav_lis_threes[i].onclick = function(){
		clearnewssTab();
		newssTabNum = i+1;
		newsstabmoren(newssTabNum);
		newsstabxuanran();
	}
}