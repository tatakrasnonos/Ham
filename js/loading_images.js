'use strict';

$(document).ready(() => {

  $('.our-work-load-btn').click((event) => {
    event.preventDefault();
    $('.preloader').show();

    setTimeout(() => {
      $('.preloader').hide();
      $('.portfolio-item.hidden').slice(0, 12).removeClass('hidden').show();

      if (!$('.portfolio-item').hasClass('hidden')) {
        $('.our-work-load-btn').remove();
      }
    }, 2000);

  });

  $('.gallery-load-btn').click((event) => {
    event.preventDefault();
    $('.preloader').show();

    setTimeout(() => {
      $('.preloader').hide();
      $('.gallery-grid-item.hidden').slice(0, 3).removeClass('hidden');
      $('.gallery-content').masonry({
        itemSelector: '.gallery-grid-item',
        columnWidth: 10,
        gutter: 11
      });

      if (!$('.gallery-grid-item').hasClass('hidden')) {
        $('.gallery-load-btn').remove();
      }
    }, 2000);

  });
});