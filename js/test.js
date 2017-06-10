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

function setScreenAnimate(screenCls){
	var screen = document.querySelector(screenCls);//获取当前屏幕的元素
	var isSetAnimateClass = false;
	var isAnimateDone = false;
	var animateElements = screenAnimateElemments[screenCls];//需要设置动画的元素(获得了个)数组
	screen.onclick = function(){
		//是否有初始化元素的样式
		if(isSetAnimateClass === false){
			for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls +" " + animateElements[i].substr(1)+ "_animate_init");
			}
			isSetAnimateClass = true;
			return ;
		}
		//切换animateElements 的init->done
		if(isAnimateDone === false){
			for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls.replace("init","done"));
			}
			isAnimateDone =true;
			return ;
		}
		if(isAnimateDone === true){
			for(var i=0;i<animateElements.length;i++){
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls.replace("done","init"));
			}
			isAnimateDone =false;
			return ;
		}
	}
}
setScreenAnimate(".screen-1");
setScreenAnimate(".screen-2");
setScreenAnimate(".screen-3");
setScreenAnimate(".screen-4");
setScreenAnimate(".screen-5");