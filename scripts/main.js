
$('#search').hideseek({
      attribute: 'title'
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

function captions() {
  document.getElementByClassName("mfp-title").innerHTML = "title";
}
