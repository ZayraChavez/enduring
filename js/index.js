var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
if (screen.width > 600) {
  $item.addClass('img-responsive');
$item.css("height","638");
} 
if (screen.width < 600) {
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
        

if (screen.width > 600) {
$("#img1").attr("src","img/slider-1.jpg");
$("#img2").attr("src","img/slider-2.jpg");
$("#img3").attr("src","img/slider-3.jpg");
$("#img4").attr("src","img/slider-4.jpg");
$(".pasta-text-cellphone").css("display","none");
$(".pasta-text").css("display","inline-block");
$(".number-cellphone").css("display","none");
$(".number-web").css("display","block");
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

if (screen.width > 500 && screen.width < 650) {
    $("#img1").attr("src","img/slider-celh-1.jpg");
$("#img2").attr("src","img/slider-celh-2.jpg");
$("#img3").attr("src","img/slider-celh-3.jpg");
$("#img4").attr("src","img/slider-celh-4.jpg");
$("#img5").attr("src","img/slider-celh-5.jpg");
$("#img6").attr("src","img/slider-celh-6.jpg");
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
  if (screen.width < 600) {
    $("#logo").detach();
  }
  if (screen.width > 600) {
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