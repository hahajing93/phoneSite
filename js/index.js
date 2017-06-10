//获取元素
var getElem = function(selector){
	return document.querySelector(selector);
}
var getAllElem = function(selector){
	return document.querySelectorAll(selector);
}
//获取class
var getCls = function( element ){
	return element.getAttribute("class");
}
//设置class
var setCls = function( element ,cls ){
	return element.setAttribute("class",cls);
}
//添加class
var addCls = function(element,cls){
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls)==-1){
		setCls(element,baseCls+' '+cls);
	}
}
//为元素删除样式
var delCls = function(element,cls){
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls)!=-1){
		setCls(element,baseCls.split(cls).join(" ").replace(/\s+/g," "));
	}
}

//初始化样式 init
var screenAnimateElemments = {
	".screen-1":[
		".screen-1__heading",
		".screen-1__phone",
		".screen-1__shadow"
	],
	".screen-2":[
		".screen-2__heading",
		".screen-2__subheading",
		".screen-2__phone",
		".screen-2__point_i_1",
		".screen-2__point_i_2",
		".screen-2__point_i_3"
	],
	".screen-3":[
		".screen-3__heading",
		".screen-3__subheading",
		".screen-3__phone",
		".screen-3__features-item-1",
		".screen-3__features-item-2",
		".screen-3__features-item-3",
		".screen-3__features-item-4",
//		".screen-2__point_i_2",
//		".screen-2__point_i_3"
	],
	".screen-4":[
		".screen-4__heading",
		".screen-4__subheading",
		".screen-4__type-item_i_1",
		".screen-4__type-item_i_2",
		".screen-4__type-item_i_3",
		".screen-4__type-item_i_4"
	],
	".screen-5":[
		".screen-5__heading",
		".screen-5__subheading",
		".screen-5__back",
	],
};
//设置初始化 init
function setScreenAnimateInit(screenCls){
	var screen = document.querySelector(screenCls);//获取当前屏幕的元素
	var animateElements = screenAnimateElemments[screenCls];//需要设置动画的元素(获得了个)数组
	for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls +" " + animateElements[i].substr(1)+ "_animate_init");
			}
}
//设置完成 done
function setScreenAnimateDone(screenCls){
	var animateElements = screenAnimateElemments[screenCls];//需要设置动画的元素(获得了个)数组
	for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls.replace("init","done"));
			}
}
window.onload = function(){
	setScreenAnimateInit(".screen-1");
	setScreenAnimateInit(".screen-2");
	setScreenAnimateInit(".screen-3");
	setScreenAnimateInit(".screen-4");
	setScreenAnimateInit(".screen-5");
}
//第二步  滚动到哪里就播放到哪里
var navItems = getAllElem(".header__nav-item");
var outLineItems = getAllElem(".outline__item");

var switchNavItemsActive = function(ind){
	for(var i=0;i<navItems.length;i++){
		delCls(navItems[i],"header__nav-item_status_active");
		
	}
	addCls(navItems[ind],"header__nav-item_status_active");
	
	for(var i=0;i<outLineItems.length;i++){
		delCls(outLineItems[i],"outline__item_status_active");
		
	}
	addCls(outLineItems[ind],"outline__item_status_active");
}

window.onscroll = function(){
	var top = document.body.scrollTop;
	if(top>80){
		addCls(getElem(".header"),"header_status_back");
		addCls(getElem(".outline"),"outline_status_in");
	}else{
		delCls(getElem(".header"),"header_status_back");
		delCls(getElem(".outline"),"outline_status_in");
		switchNavItemsActive(0);
	}
	if(top>1){
		setScreenAnimateDone(".screen-1");
	}
	if(top>800*1-100){
		setScreenAnimateDone(".screen-2");
		switchNavItemsActive(1);
	}
	if(top>800*2-100){
		setScreenAnimateDone(".screen-3");
		switchNavItemsActive(2);
	}
	if(top>800*3-100){
		setScreenAnimateDone(".screen-4");
		switchNavItemsActive(3);
	}
	if(top>800*4-100){
		setScreenAnimateDone(".screen-5");
		switchNavItemsActive(4);
	}
}

//第三步 双向定位

var setNavJump = function(i,lib){
	var item = lib[i];
	item.onclick = function(){
		document.body.scrollTop = i*800;
	}
}
for(var i=0;i<navItems.length;i++){
	setNavJump(i,navItems);
}
for(var i=0;i<outLineItems.length;i++){
	setNavJump(i,outLineItems);
}