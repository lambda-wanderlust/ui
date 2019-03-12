$(document).ready(function(){
  
  var div = $("#divToShowHide");
 
  var pos = div.position();
 
  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();
   
   if (windowpos >= (pos.top - 50)) {
     div.addClass("AfterScroll");
   }
  
   else {
     s.removeClass("AfterScroll");
   }
   
 });
});

