//关于我们js效果实现
//左侧导航栏默认效果
var about_tab_ones = document.querySelectorAll('.about-content-left ul:nth-of-type(1) li')
var aboutTabNum = 2;
tabmoren(aboutTabNum)
//关于我们模块内部渲染更新
for(let i = 0;i < about_tab_ones.length;i++){
	about_tab_ones[i].onmouseenter = function(){
		clearAboutTab();
		tabmoren(aboutTabNum);
		this.style.color = '#FF9A00';
	}
	about_tab_ones[i].onmouseleave = function(){
		clearAboutTab();
		tabmoren(aboutTabNum);
	}
	about_tab_ones[i].onclick = function(){
		clearAboutTab();
		aboutTabNum = i;
		tabmoren(aboutTabNum);
		this.style.color = '#FF9A00';
		tabxuanran();
	}
}
function tabxuanran(){
	var about_content_right = document.querySelector('.about-content-right');
	if(aboutTabNum == 1){
		about_content_right.innerHTML = `
			<div class="about-content-right-top">
				公司介绍
			</div>
			<div class="about-content-right-main">
				<p>深圳市康振机械科技有限公司坐落于改革开放的热土——深圳市，注册资金2600万元，是一家集设计研发、生产销售和服务于一体的专业化、高科技公司，主要面向土建工程领域，提供优质的智能施工装备和配套服务。 </p>
				<iframe src="http://player.youku.com/embed/XMjcwMzc5MDk0NA==" width="510" height="498"></iframe>
				<p>公司致力于提升国家工程建设机械自动化水平，优化施工工艺，提升项目效益，为推动国家科技进步贡献力量。公司集中力量研制成功数控钢筋弯箍机大大方便了盘条钢筋的加工制作，数控钢筋弯曲中心解决了大直径钢筋的弯曲成型的效率问题，数控钢筋笼滚焊机是钢筋笼实现精准制作的好帮手，数控钢筋剪切线是钢筋工厂化流水线加工的理想工具，8字筋生产线让隧道格栅拱架的制作效率大大提高，经过多年的创新努力，交付的设备性能稳定，品质过硬，售后良好，参与了国内外众多的大型项目的建设，赢得了客户对公司的尊重和信赖。 </p>
				<p>公司国内客户群有中国中铁、中国铁建、中交股份、中国电建、中国建筑和省属大型工程企业等;国外客户群有欧洲、北非、中东、东南亚及部分美洲国家。公司参建项目有广州、深圳等城市轨道交通，京九、京沈等铁路客专;包茂、大广等高速;万科、万达等地产楼宇;以及码头、港口等。同时公司在湖南、湖北、云南、贵州、广西、山西、四川、上海、北京等均设有办事处及售后服务机构。</p>
				<p>公司采用股份制公司治理结构，企业健康稳定向前发展，通过多年的努力，积累了大量的技术知识并申请了产权专利，研发并掌握了各项设备制作工艺。企业质量管理采用ISO9001，环境管理采用ISO14001，并取得相关认证。公司产品获得欧盟CE认证，是国家认定的高新技术企业，是中国钢筋及预应力协会理事单位，是铁建股份框架协议供应商。公司持有的“康振”“SKZ”“SKZ康振”品牌具有良好的美誉度。</p>
				<p> 康振秉承诚信为本，品质为先，服务至上的经营理念，以提供高效、安全、绿色、智能的施工解决方案 ，实现智能化施工为使命，坚持以最先进的技术为客户提供专业的钢筋加工解决方案，追求卓越，致力成为行业标杆。 </p>
			</div>
		`;
	}else if(aboutTabNum == 2){
		about_content_right.innerHTML = `
			<div class="about-content-right-top">
				公司文化
			</div>
			<div class="about-content-right-main">
				<div class="about-content-right-cuture">
					<p>康振愿景</p>
					<p>全球领先的智能施工设备企业</p>
				</div>
				<div class="about-content-right-cuture">
					<p>康振使命</p>
					<p>提供高效、安全、绿色、智能的施工解决方案，实现智能化施工</p>
				</div>
				<div class="about-content-right-cuture">
					<p>康振核心价值观</p>
					<p>成就客户、成就团队、成就自己</p>
				</div>
				<div class="about-content-right-cuture">
					<p>康振精神</p>
					<p>艰苦奋斗、坚韧不拔、协作担当</p>
				</div>
			</div>
		`;
	}else if(aboutTabNum == 3){
		about_content_right.innerHTML = `
			<div class="about-content-right-top">
				组织框架
			</div>
			<div class="about-content-right-main">
				暂无信息
			</div>
		`
	}
	
}
function tabmoren(i){
	about_tab_ones[i].style.color = '#FF9A00';
	if(typeof(i) == 'number'){
		about_tab_ones[0].style.color = 'white'
	}
}
function clearAboutTab(){
	for(let i = 0;i < about_tab_ones.length;i++){
		about_tab_ones[i].style.color = 'black';
	}
}

//导航栏上的点击渲染
var nav_lis_twos = document.querySelectorAll('.nav-4-main>li:nth-of-type(2)>ul>li');
// console.log(nav_lis_twos)
for(let i = 0;i < nav_lis_twos.length;i++){
	nav_lis_twos[i].onclick = function(){
		clearAboutTab();
		aboutTabNum = i+1;
		tabmoren(aboutTabNum);
		tabxuanran();
	}
}