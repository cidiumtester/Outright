$(document).ready(function() {
  $(".scrolly").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".container-one").height()}, 'slow'
    );
    return false;
  });
});

$(document).ready(function() {
  $("body").hide();
  $("body").fadeIn(500);
});

var video = document.getElementById('video');
video.src = "../img/main2.mp4";
video.load();
console.log("Video is on load");
