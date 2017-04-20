var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
if (screen.width > 800) {
  $item.addClass('img-responsive');
$item.css("height","638");
} 
if (screen.width == 1600 || screen.width == 1920) {
  $item.addClass('full-screen');
}
if (screen.width == 1600) {
   $item.css("height","738");
  $(".background-network").css("height","1360");
  $(".footer-above").css("height","411");
  $(".footer-below").css("height","109");
  $(".background-audio").css("height","1467");
  $(".contact-section").css("height","900");
    
}
if (screen.width == 1920) {
   $item.css("height","838");
  $(".background-network").css("height","1590");
  $(".footer-above").css("height","490");
  $(".footer-below").css("height","129");
  $(".background-audio").css("height","1690");
  $(".background-security").css("height","1690");
  $(".contact-section").css("height","1070");


}


if (screen.width < 800) {
    $item.addClass('full-screen');
}

   window.onorientationchange = function() { 
        var orientation = window.orientation; 
            switch(orientation) { 
                case 0:
                case 90:
                case -90: window.location.reload(); 
                break; }

                }; 


if (screen.width > 800) {
$("#img1").attr("src","img/slideresp-1.jpg");
$("#img2").attr("src","img/slideresp-2.jpg");
$("#img3").attr("src","img/slideresp-3.jpg");
$("#img4").attr("src","img/slideresp-4.jpg");
$(".pasta-text-cellphone").css("display","none");
$(".pasta-text").css("display","inline-block");
$(".number-cellphone").css("display","none");
$(".number-web").css("display","block");
$("#mobile-img1").detach();
$("#mobile-img2").detach();
$(".col-xs-8").removeClass("col-xs-offset-2");
$(".col-xs-8").removeClass("col-xs-8");
$(".tablet").css("display","none");
$(".web").css("display","block");
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



if (screen.width > 500 && screen.width < 800) {
      $("#img1").attr("src","img/slider-us-celh-1.jpg");
      $("#img2").attr("src","img/slider-us-celh-2.jpg");
      $("#img3").attr("src","img/slider-us-celh-3.jpg");
      $("#img4").attr("src","img/slider-us-celh-4.jpg");
      $("#img5").attr("src","img/slider-us-celh-5.jpg");
      $("#img6").attr("src","img/slider-us-celh-6.jpg");

      // nuevo
      $("#bose").removeClass("bose");
$("#alarm").removeClass("bose");
$("#dsc").removeClass("bose");
$("#bose2").removeClass("bose");
$("#netgear").removeClass("netgear");
$("#RemoveText").removeClass("text-center");
$("#RemoveText2").removeClass("text-center");
$("#RemoveText3").removeClass("text-center");
$(".bolita-rosa2").css("display","inline-block");
$(".pasta-text-cellphone").css("display","inline-block");
$(".number-cellphone").css("display","block");
$(".number-web").css("display","none");
$(".pasta-text").css("display","none");
$(".tamanoubitiqui").removeClass("tamanoubitiqui");
$(".tamanoluxul").removeClass("tamanoluxul");
$(".tamanonetgear").removeClass("tamanonetgear");
$(".tamanocisco").removeClass("tamanocisco");
$(".tamano2gig").removeClass("tamano2gig");
$(".tamanoalarm").removeClass("tamanoalarm");
$(".tamanolts").removeClass("tamanolts");
$(".tamanohoneywell").removeClass("tamanohoneywell");
$(".tamanodsc").removeClass("tamanodsc");
$(".tamanohikvision").removeClass("tamanohikvision");
$(".tamanopioneer").removeClass("tamanopioneer");
$(".tamanoonkyo").removeClass("tamanoonkyo");
$(".tamanoatlas").removeClass("tamanoatlas");
$(".tamanobose").removeClass("tamanobose");
$(".tamanoelura").removeClass("tamanoelura");
$(".tablet").css("display","block");
$(".web").css("display","none");
      // nuevo
  }

if (screen.width < 500) {
$("#img1").attr("src","img/slider-mobv-1.jpg");
$("#img2").attr("src","img/slider-mobv-2.jpg");
$("#img3").attr("src","img/slider-mobv-3.jpg");
$("#img4").attr("src","img/slider-mobv-4.jpg");
$("#img5").attr("src","img/slider-mobv-5.jpg");
$("#img6").attr("src","img/slider-mobv-6.jpg");
$("#bose").removeClass("bose");
$("#alarm").removeClass("bose");
$("#dsc").removeClass("bose");
$("#bose2").removeClass("bose");
$("#netgear").removeClass("netgear");
$("#RemoveText").removeClass("text-center");
$("#RemoveText2").removeClass("text-center");
$("#RemoveText3").removeClass("text-center");
$(".bolita-rosa2").css("display","inline-block");
$(".pasta-text-cellphone").css("display","inline-block");
$(".number-cellphone").css("display","block");
$(".number-web").css("display","none");
$(".pasta-text").css("display","none");
$(".tamanoubitiqui").removeClass("tamanoubitiqui");
$(".tamanoluxul").removeClass("tamanoluxul");
$(".tamanonetgear").removeClass("tamanonetgear");
$(".tamanocisco").removeClass("tamanocisco");
$(".tamano2gig").removeClass("tamano2gig");
$(".tamanoalarm").removeClass("tamanoalarm");
$(".tamanolts").removeClass("tamanolts");
$(".tamanohoneywell").removeClass("tamanohoneywell");
$(".tamanodsc").removeClass("tamanodsc");
$(".tamanohikvision").removeClass("tamanohikvision");
$(".tamanopioneer").removeClass("tamanopioneer");
$(".tamanoonkyo").removeClass("tamanoonkyo");
$(".tamanoatlas").removeClass("tamanoatlas");
$(".tamanobose").removeClass("tamanobose");
$(".tamanoelura").removeClass("tamanoelura");
$(".tablet").css("display","none");
$(".web").css("display","block");
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
  if (screen.width < 800) {
    $("#logo").detach();
  }
  if (screen.width > 800) {
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