$(function () {

  $(".price__input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
    },
  });


  $('.trend__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  })


  var containerEl1 = document.querySelector('[data-ref="showcase"]');
  var containerEl2 = document.querySelector('[data-ref="design"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


})

$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
});