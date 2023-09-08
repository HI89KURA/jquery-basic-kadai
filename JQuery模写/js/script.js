$(function () {

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade:true,
    speed:1000,
  });



  // ボタンアニメーション
  $('.button-more').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 200);
  });
  $('.button-more').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 200);
  });


  var pagetop = $('#back-btn');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
        pagetop.fadeIn();}
    else {
        pagetop.fadeOut();
    }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });


    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });

     // ウインドウをスクロールしたら
	$(window).scroll(function (){
    // .js-fadeのクラスを持つ要素（それぞれに対して）
  $('.about,.works').each(function(){
        // この要素のスクロール位置（上から）
  var pos = $(this).offset().top;
        // ウインドウのスクロール量（上から）
  var scroll = $(window).scrollTop();
        // ウインドウの縦幅
  var windowHeight = $(window).height();
        // ウインドウのスクロール量（上から）が
        // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
  if (scroll > pos - windowHeight + 100){
       
    $(this).addClass('scroll');
  }
    });
   });

  // カンニングしました
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close').click(function () {
    $('.modal').fadeOut();
    return false
  });
  
});


