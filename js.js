function using1() {
    document.getElementById('text').innerHTML = "  يستخدم لتكسر حصوات (الـحالـب  && الـكـلـى ) باستخدام الليزر"
}

function using2() {
    document.getElementById('text2').innerHTML = " استئصال البروستات بلازما<br> استصال اورام المثانه بلازما"
}

/*               card                              */


/*  about us */

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });