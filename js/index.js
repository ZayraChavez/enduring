var $item = $('.carousel .item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

  if (screen.width > 500) {
$("#prueba").attr("src","img/enduring-company.jpg");
}
if (screen.width < 500) {
$("#prueba").attr("src","img/4_Fondo_Security.jpg");
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
        window.open("index.html","_self");
      });
      $('#espanol').on('click',function(){
        window.open("es.html","_self");
      });


  });