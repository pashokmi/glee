$(function () {

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