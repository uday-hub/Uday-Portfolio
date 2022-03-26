const button = document.getElementsByClassName("toggle-btn")[0];
const nav = document.getElementsByClassName("options")[0];

button.addEventListener("click", () => {
  nav.classList.toggle("active");
});

let typed = new Typed(".auto-input", {
  strings: [
    "I love learning new tech",
    "I love meeting new people.",
    "I Enjoy developed new websites.",
  ],
  typedSpeed: 100,
  backSpeed: 100,
  loop: true,
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 1 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/
