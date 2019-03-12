


$(window).scroll(function() {
  var div = $("#divToShowHide");
  if($(window).scrollTop() > 1000) {
    div.addClass("AfterScroll");;
  } else {
    div.removeClass("AfterScroll")
  }
});


