////轮播
//	var mySwiper = new Swiper(".swiper-container",{
//		speed:800, //控制速度，滑动时间
//		loop:false,// 循环
//		mode:"vertical",//控制模式，竖直
//		noSwiping : true,
////		onSlideChangeEnd:function() {
////			var t1 = document.getElementById("t1");
////			if(mySwiper.activeLoopIndex == 1) {
////				t1.style.display = "block";
////				t1.className = t1.className + " bounceInLeft";
////			}else {
////				t1.style.display = "none";
////				t1.className = "hello animated";
////			}
////		}
//		//动画
////      onInit: function(swiper){           //Swiper2.x的初始化是onFirstInit
////          swiperAnimateCache(swiper);     //隐藏动画元素 
////          swiperAnimate(swiper);          //初始化完成开始动画
////      },
////      onSlideChangeEnd: function(swiper){ 
////          swiperAnimate(swiper);          //每个slide切换结束时也运行当前slide动画
////      }
//	});
//
//	var downArrow = document.getElementById("downArrow");
//	downArrow.addEventListener("click",function() {
//		mySwiper.swipePrev();//上一张
//		mySwiper.swipeNext();//下一张
//	},false)
//
//	 var scrollFunc = function (e) {
//	    var direct = 0;
//	    e = e || window.event;
//	    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
//	        if (e.wheelDelta > 0) { //当滑轮向上滚动时
//	           mySwiper.swipePrev()
//	        }
//	        if (e.wheelDelta < 0) { //当滑轮向下滚动时
//	           mySwiper.swipeNext();
//	        }
//	    } else if (e.detail) {  //Firefox滑轮事件
//	        if (e.detail> 0) { //当滑轮向上滚动时
//	            alert("滑轮向上滚动");
//	        }
//	        if (e.detail< 0) { //当滑轮向下滚动时
//	            alert("滑轮向下滚动");
//	        }
//	    }
//	}
//  //给页面绑定滑轮滚动事件
//  if (document.addEventListener) {
//      document.addEventListener('DOMMouseScroll', scrollFunc, false);
//  }
//  //滚动滑轮触发scrollFunc方法
//  window.onmousewheel = document.onmousewheel = scrollFunc;

    
//刮刮卡

    var bodyStyle = document.body.style;
	var width=document.body.clientWidth;
	var height=document.body.clientHeight;
	bodyStyle.mozUserSelect = 'none';
	bodyStyle.webkitUserSelect = 'none';
	
	var img = new Image();
	var img2 = new Image();
//	var canvas = document.querySelector('canvas');
	var canvas = document.getElementById("canvas1");
	canvas.style.backgroundColor='transparent';
	canvas.style.position = 'absolute';
	var imgs = ['img/p3.jpg','img/p2.jpg'];
	
//	var num = Math.floor(Math.random()*1);
	img.src = imgs[0];
	img2.src = imgs[1];
	
	img.addEventListener('load', function(e) {
		var ctx;
	    var w = width,
	    	h = height;
	    var offsetX = canvas.offsetLeft,
	    	offsetY = canvas.offsetTop;
	    var mousedown = false;
		
	    function layer(ctx) {
//	        ctx.fillStyle = 'gray';
//	        var repeatImg = ctx.drawImage(img2,0,0,img2.width,img2.height,0,0,w,h)
	        	ctx.fillStyle=repeatImg;
	        	var repeatImg=ctx.createPattern(img2,"repeat");
			ctx.fillRect(0, 0, w, h);
	    }
	
	    function eventDown(e){
	        e.preventDefault();
	        mousedown=true;
	    }
	
	    function eventUp(e){
	        e.preventDefault();
	        mousedown=false;
//	        $("#canvas1").hide();
	        var data = ctx.getImageData(0,0,w,h).data;
	        for(var i=0,j=0;i<data.length;i+=4){
	        	if(data[i] && data[i+1] && data[i+2] && data[i+3]){
	        		j++;
	        	}
	        }if(j<=w*h*0.6){
	        	ctx.clearRect(0, 0, w, h);
	        }
	    }
	
	    function eventMove(e){
	        e.preventDefault();
	        if(mousedown) {
	             if(e.changedTouches){
	                 e=e.changedTouches[e.changedTouches.length-1];
	             }
	             var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,
	                 y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0;
	             with(ctx) {
	                 beginPath()
	                 arc(x, y, 60, 0, Math.PI * 2);
	                 fill();
	             }
	        }
	    }
	
	    canvas.width=w;
	    canvas.height=h;
	    canvas.style.backgroundImage='url('+img.src+')';
	    canvas.style.backgroundSize='100% 100%';
	    canvas.style.backgroundPosition='center';
   		canvas.style.backgroundRepeat='no-repeat';
	    ctx=canvas.getContext('2d');
	    ctx.fillStyle='transparent';
	    ctx.fillRect(0, 0, w, h);
	    layer(ctx);
	
	    ctx.globalCompositeOperation = 'destination-out';
	
	    canvas.addEventListener('touchstart', eventDown);
	    canvas.addEventListener('touchend', eventUp);
	    canvas.addEventListener('touchmove', eventMove);
	    canvas.addEventListener('mousedown', eventDown);
	    canvas.addEventListener('mouseup', eventUp);
	    canvas.addEventListener('mousemove', eventMove);
	});
