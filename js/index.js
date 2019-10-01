var reviewSwiper = new Swiper('.swiper-container--review', {
  loop: false,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var employeeSwiper = new Swiper('.swiper-container--employee', {
  loop: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 150, // default
  mobile: false, // default
  live: true // default
})
wow.init();


var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-menu").style.top = "0";
  } else {
    document.getElementById("main-menu").style.top = "-71px";
  }
  prevScrollpos = currentScrollPos;
}

function scrollTo() {
  ScrollToResolver(document.getElementById("about"));
}

function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() { ScrollToResolver(elem);}, "100");
  } else {
    elem.lastjump = null;
  }
}