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

$(function () {
  $('.partners__inner').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
     responsive: [{
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           infinite: true,
           
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 564,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       }, 
       {
         breakpoint: 480,
         settings: {
           slidesToShow:1 ,
           slidesToScroll: 1
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
  });

})