
$(document).ready(function() {
  $('#search').hideseek();
  });


$('#search').hideseek ({
  list: '.title'
});


$(document).ready(function() {
  $('.slide').magnificPopup({type:'image'});
  });


$('#gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {enabled: true},
  navigateByImgClick: true,
  arrowMarkup: 'button title="%title% type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
  tPrev: 'Previous (Left arrow key)',
  tNext: 'Next (Right arrow key)',
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
  });
