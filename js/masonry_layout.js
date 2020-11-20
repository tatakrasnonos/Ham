$(document).ready(() => {
  $('.gallery-content').masonry({
    itemSelector: '.gallery-grid-item',
    columnWidth: 10,
    gutter: 11
  });
});