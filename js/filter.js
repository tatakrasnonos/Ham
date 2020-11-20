'use strict';

$(document).ready(() => {
  const btnLoadMore = $('.our-work-load-btn');

  $('.all').click((event) => {
    event.preventDefault();
    highlightTab(event);

    $('.portfolio-item').hide();
    $('.portfolio-item:not(.hidden)').show();
    btnLoadMore.show();
  });

  $('.filter-item:not(.all)').click((event) => {
    event.preventDefault();
    filter(event, btnLoadMore);
  });
});

function highlightTab(event) {
  $('.filter-item').removeClass('filter-item-active');
  event.target.classList.add('filter-item-active');
}

function filter(event, btnLoadMore) {
  const category = event.target.dataset.category;
  highlightTab(event);

  $('.portfolio-item').filter(`li[data-category*="${category}"]`).show();
  $('.portfolio-item').filter(`:not(li[data-category*="${category}"])`).hide();
  btnLoadMore.hide();
}