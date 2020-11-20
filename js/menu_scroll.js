'use strict';

$(document).ready(() => {
  $('a[href^="#"]').click(function (event) {
    event.preventDefault();
    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 700);
  })
});