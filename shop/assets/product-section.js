// position sticky for information container

if ($('.product-section__information-container').css('position') == 'sticky') {
  $('.page-container').css('overflow', 'unset');
}

// position fixed for scroll logo

$(window).scroll(function(){
    $(".product-section__image-container__scroll-image").css("top",Math.max(45,620-$(this).scrollTop()));
});

if ($('.product-section__image-container__scroll-image').css('position') == 'fixed') {
  $('.page-container').css('transform', 'none');
}

// slider image for mobile

function addSlick(screenSize) {
  if (screenSize.matches) {
    $('.product-section__image-container').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="https://cdn.shopify.com/s/files/1/0505/5273/3855/files/noun_Arrow_2335664_copie.png?v=1605009195" /></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="https://cdn.shopify.com/s/files/1/0505/5273/3855/files/noun_Arrow_2335664.png?v=1605009188" /></button>'
    });
  } else {
    $('.product-section__image-container').slick('unslick');
  }
}

var screenSize = window.matchMedia("(max-width: 1023px)")
addSlick(screenSize)
screenSize.addListener(addSlick)

// related products

document.getElementsByClassName('related-products')[0].style.paddingLeft = "0";
document.getElementsByClassName('related-products')[1].style.paddingRight = "0";
document.getElementsByClassName('related-products')[2].style.paddingLeft = "0";
document.getElementsByClassName('related-products')[3].style.paddingRight = "0";
