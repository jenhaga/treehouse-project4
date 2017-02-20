
$('#search').hideseek({
      list:           '.hideseek-data',
      nodata:         '',
      attribute:      'text',
      highlight:      false,
      ignore:         '',
      navigation:     false,
      ignore_accents: false
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
