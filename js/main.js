$(document).ready(function() {
  $(".scrolly").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".container-one").height()}, 'slow'
    );
    return false;
  });
});
