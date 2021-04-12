$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// $('.menu-trigger').on('click', function(event) {
//   .menu-triggerクリック時に行われる処理
// });