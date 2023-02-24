// webdesigin1 button
$(document).ready(function(){
  $('section.webdesigin1 div.inner div.inner_box1 div.button div.btn').click(function(){
    $('section.webdesigin1 div.inner div.inner_box2 div.textbox').animate({
      left:"0px" , bottom:"0px"
      },500);
    });
});

$(document).ready(function(){
  $('section.webdesigin2 div.inner div.inner_box1 div.button div.btn').click(function(){
    $('section.webdesigin2 div.inner div.inner_box2 div.textbox').animate({
      left:"0px" , bottom:"0px"
      },500);
    });
});



// composition swiper
var swiper = new Swiper(".Swiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});



// webdesigin3 swiper
var swiper = new Swiper(".mySwiper9", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// webbanner swiper
var swiper = new Swiper(".Swiper2", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// graphicdesigin swiper
var swiper = new Swiper(".mySwiper0", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// illustratorlogo swiper
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Videoprojects swiper
var swiper5 = new Swiper(".mySwiper5", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-125%", 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ["125%", 0, -800],
      rotate: [0, 0, 90],
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// popup
$('.composition .swiper .swiper-wrapper .swiper-slide').each(function (index, item){
  $(item).click(function(){
    $('div#popup').stop().fadeIn();
  })
  $('div#popup').click(function(){
    $(this).stop().fadeOut();
  })
});


$('.webbanner .swiper .swiper-wrapper .swiper-slide').each(function (index, item){
  $(item).click(function(){
    $('div#popup').stop().fadeIn();
  })
  $('div#popup').click(function(){
    $(this).stop().fadeOut();
  })
});



