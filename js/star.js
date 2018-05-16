// 初始化swiper
  var starSwiper = new Swiper('#swiper-wrap', {
    loop: true,
    prevButton:'#swiper-wrap .swiper-button-prev',
    nextButton:'#swiper-wrap .swiper-button-next',
  });
  /*按屏幕修改根文本尺寸*/
  var setRootFont=function(){
    var ww=$(document.body).width();
    ww=ww>1024?1024:ww;
    var f=Math.floor(ww/ 24);
    $("html").css("font-size",f+"px");
    $("body").css("font-size",f+"px");
    console.log("RFS:"+f+"  ("+$("body").width()+"x"+$("body").height()+")");
  };

  $(function(){
    $("#close_btn").on("click",function(event) {
      $("#swiper-wrap").hide();
    })
    $(".anchor").on("click",function(event) {
      // var index = $(this).index(".anchor");
      // starSwiper.slideTo(index+1,0,false);
      $(this).css({
        "box-shadow":"0px 0px 1rem 0.2rem #fff"
      });
      $(this).addClass('active');
      $(this).parent().find(".anchor-text").fadeIn();
      var num = 0;
      for (var i = 0; i < $(".anchor").length; i++) {
        if ($($(".anchor")[i]).hasClass('active')) {
            num++;
        }   
      }
      if (num==5) {
        $("#star").attr("src","img/star2.png");
        $("#next_btn").show();
        $(".small-star").show();
        $("#hand p").text("点我查看详情");
        $("#hand").on('click', function(event) {
          event.preventDefault();
          $("#swiper-wrap").fadeIn();
          starSwiper.update()
        });
      }
    });
    
    setRootFont();
    $(window).resize(function(){setRootFont();});
  });