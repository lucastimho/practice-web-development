document.querySelectorAll("button").forEach(function (doc) {
  doc.addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
});
