'use strict';

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    speed: 600,
    initialSlide: 2,
    waitForAnimate: false,
    appendArrows: $('.arrows-container'),
    appendDots: $('.dots-container')
  });
});