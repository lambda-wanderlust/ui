
$(window).scroll(function() {
  var div = $("#divToShowHide");
  if($(window).scrollTop() > 875) {
    div.addClass("AfterScroll");;
  } else {
    div.removeClass("AfterScroll")
  }
});


