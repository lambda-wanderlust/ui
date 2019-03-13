
$(window).scroll(function() {
  var div = $("#divToShowHide");
  if($(window).scrollTop() > 900) {
    div.addClass("AfterScroll");;
  } else {
    div.removeClass("AfterScroll")
  }
});


