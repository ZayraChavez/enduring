var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

   window.onorientationchange = function() { 
        var orientation = window.orientation; 
            switch(orientation) { 
                case 0:
                case 90:
                case -90: window.location.reload(); 
                break; }

                }; 

if (screen.width > 500) {
$("#img1").attr("src","img/slider-1.jpg");
$("#img2").attr("src","img/slider-2.jpg");
$("#img3").attr("src","img/slider-3.jpg");
$("#img4").attr("src","img/slider-4.jpg");
$("#mobile-img1").detach();
$("#mobile-img2").detach();
$(".col-xs-8").removeClass("col-xs-offset-2");
$(".col-xs-8").removeClass("col-xs-8");
$(".elements").html("<li data-target='#mycarousel' data-slide-to='0' class='active'></li>"+
                "<li data-target='#mycarousel' data-slide-to='1'></li>"+
                "<li data-target='#mycarousel' data-slide-to='2'></li>"+
                "<li data-target='#mycarousel' data-slide-to='3'></li>"+
                "<br>"+
                "<button id='playButton' type='button' class='pauseandplay btn btn-default btn-xs'>"+
                "<span class='glyphicon glyphicon-play'></span>"+
                "</button>"+
                "<button id='pauseButton2' type='button' class='pauseandplay btn btn-default btn-xs'>"+
                "<span class='glyphicon glyphicon-pause'></span>"+
                "</button>");

}
if (screen.width < 500) {
$("#img1").attr("src","img/slider-celv-1.jpg");
$("#img2").attr("src","img/slider-celv-2.jpg");
$("#img3").attr("src","img/slider-celv-3.jpg");
$("#img4").attr("src","img/slider-celv-4.jpg");
$("#img5").attr("src","img/slider-celv-5.jpg");
$("#img6").attr("src","img/slider-celv-6.jpg");
$("#bose").removeClass("bose");
$("#alarm").removeClass("bose");
$("#dsc").removeClass("bose");
$("#bose2").removeClass("bose");
$("#netgear").removeClass("netgear");
$("#RemoveText").removeClass("text-center");
$("#RemoveText2").removeClass("text-center");
$("#RemoveText3").removeClass("text-center");
$(".bolita-rosa2").css("display","inline-block");
$(".elements").html("<li data-target='#mycarousel' data-slide-to='0' class='active'></li>"+
                "<li data-target='#mycarousel' data-slide-to='1'></li>"+
                "<li data-target='#mycarousel' data-slide-to='2'></li>"+
                "<li data-target='#mycarousel' data-slide-to='3'></li>"+
                "<li data-target='#mycarousel' data-slide-to='4'></li>"+
                "<li data-target='#mycarousel' data-slide-to='5'></li>"+
                "<br>"+
                "<button id='playButton' type='button' class='pauseandplay btn btn-default btn-xs'>"+
                "<span class='glyphicon glyphicon-play'></span>"+
                "</button>"+
                "<button id='pauseButton2' type='button' class='pauseandplay btn btn-default btn-xs'>"+
                "<span class='glyphicon glyphicon-pause'></span>"+
                "</button>");
}
if (screen.width <768) {
  window.open ('us.html')
}

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});


$(function(){
  if (screen.width < 500) {
    $("#logo").detach();
  }
  if (screen.width > 500) {
    $("#logo2").css("display","none");
    $(window).scroll(function(){
      var aTop = 720;
      if($(this).scrollTop()>=aTop){
        $("#logo").css("display","none");
        $("#logo2").css("display","block");
      }
      if($(this).scrollTop()<=aTop){
        $("#logo").css("display","block");
        $("#logo2").css("display","none");
      }
    });
  };

});

  $(document).ready(function(){
      $('#english').on('click',function(){
        window.open("us.html","_self");
      });
      $('#espanol').on('click',function(){
        window.open("es.html","_self");
      });


  });