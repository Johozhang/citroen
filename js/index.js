
//刮刮卡

    var bodyStyle = document.body.style;
	var width=document.body.clientWidth;
	var height=document.body.clientHeight;
	bodyStyle.mozUserSelect = 'none';
	bodyStyle.webkitUserSelect = 'none';
	// var canvas = document.getElementById("canvas1");
	var canvas;
	var canvas2 = document.getElementById("canvas2");
	var canvas3 = document.getElementById("canvas3");
	var canvas4 = document.getElementById("canvas4");

	
	var imgArr = [];//加载图片数组
	var imgNum=0;//判断是否加载全
	var img = new Image();
	var imgs = ['img/p3.jpg','img/p2.jpg','img/p2.jpg','img/p5.jpg','img/p7.jpg','img/p9.jpg'];
//	var num = Math.floor(Math.random()*2);
	img.src = imgs[0];
	imgArr.push(img)
	var img2= new Image();
	img2.src='img/p9.jpg';
	imgArr.push(img2);
	console.log(imgArr)
	for(var i = 0; i<imgArr.length;i++){
		console.log(i)
	    imgArr[i].onload = function(i){
	        canvas = document.getElementById("canvas"+(imgNum+1));
	        imgNum++;
			canvas.style.backgroundColor='transparent';
			canvas.style.position = 'absolute';
	        drawCanvas(canvas);
	    }
	}
	var drawCanvas = function(canvas){
		// console.log(this)
		var ctx;
	    var w = width,
	    	h = height;
	    var offsetX = canvas.offsetLeft,
	    	offsetY = canvas.offsetTop;
	    var mousedown = false;
		
	    function layer(ctx) {
	    	console.log(ctx)
	        ctx.drawImage(img2,0,0,img2.width,img2.height,0,0,w,h);
	        ctx.fillRect(0, 0, w, h);
	    }
	
	    function eventDown(e){
	        e.preventDefault();
	        mousedown=true;
	         x=(e.clientX + document.body.scrollLeft || e.pageX)-(offsetX=offsetX || 0);
        	y=(e.clientY + document.body.scrollTop || e.pageY)-(offsetY=offsetY || 0);
	    }
	
	    function eventUp(e){
	        e.preventDefault();
	        mousedown=false;
	        ctx.fillStyle='transparent';
	        ctx.fillRect(0, 0, w, h);
	        ctx.clearRect(0, 0, w, h);
	        $(this).parents(".swiper-slide").find(".demo").removeClass("swiper-no-swiping");
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
                 beginPath();
                 fillStyle="red"
                 arc(x, y, 40, 0, Math.PI * 2);
	                 fill();
                 // console.log(x,y)
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
	    // console.log(ctx)
	    
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
	}
