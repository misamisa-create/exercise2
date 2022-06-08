
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });

  // スクロールでMV過ぎるとヘッダー背景色変更
  $(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $(".js-mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".js-header").addClass("headerColorScroll");
      } else {
        $(".js-header").removeClass("headerColorScroll");
      }
    });
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // プロフィールスライダー
  $(function () {
    $(" .js-highlight-slider").slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 6000,
      fade: true,
      adaptiveHeight: true,
      asNavFor: ".js-highlight-thumbnail",
      dots: true,
      responsive: [
        {
          breakpoint: 767, // 399px以下のサイズに適用
          settings: {
            dots: false,
          },
        },
      ],
    });
    $(".js-highlight-thumbnail").slick({
      slidesToShow: 9,
      asNavFor: ".js-highlight-slider",
      focusOnSelect: true,
      centerMode: true, // 両サイドに前後のスライド表示
      centerPadding: '0', // 左右のスライドのpadding
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767, // 399px以下のサイズに適用
          settings: {
          },
        },
      ],
    });
  });


  // 記事スライダー
  $(function () {
    $(".js-article-slider").slick({
      arrows: false,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 6000,
      slidesToShow: 3,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "18%",
          },
        },
      ],
    });
  });

  // GSAP
  gsap.fromTo('.js-img1', {
    y:"20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.js-about',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
      scrub: 1, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
    }
  });

  gsap.fromTo('.js-img2', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger: {
      trigger: '.js-img2',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
      scrub: 1, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
    }
  });

  gsap.fromTo('.js-img3', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 2.5,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger: {
      trigger: '.js-img2',//アニメーションが始まるトリガーとなる要素
      start: 'center center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
      scrub: 1, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
    }
  });

  gsap.fromTo('.js-img4', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 2.5,
    ease: "slow(0.7, 0.7, false)",
    scrollTrigger: {
      trigger: '.js-img3',//アニメーションが始まるトリガーとなる要素
      start: 'center center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
      scrub: 1, //スクロール量に合わせてアニメーションが進む（数字も指定できる）
    }
  });

  gsap.fromTo('.js-fadeUp-creators', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.l-highlight',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
    }
  });

  gsap.fromTo('.js-fadeUp-event', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.p-highlight-event',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
    }
  });

  gsap.fromTo('.js-fadeUp-detail', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.p-highlight-event__step-2',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
    }
  });

  gsap.fromTo('.js-fadeUp-detail-2', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.p-highlight-event__step-2',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
    }
  });

  gsap.fromTo('.js-fadeUp-gift', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.p-gift',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
    }
  });

  gsap.fromTo('.js-fadeUp-article', {
    y: "20%",
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1.0,
    scrollTrigger: {
      trigger: '.p-article',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置
      end: 'bottom center', //アニメーションが終わる位置
    }
  });

  gsap.config({
    nullTargetWarn: false,
  });

  // メインタイトルのアニメーション
  function BlurTextAnimeControl() {
    $('.js-animated').each(function(){ //blurTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('is-animated');// 画面内に入ったらis-animatedというクラス名を追記
      $('.js-anime-mv').addClass('is-animated');// 画面内に入ったらis-animatedというクラス名を追記
      }else{
      $(this).removeClass('is-animated');// 画面外に出たらis-animatedというクラス名を外す
      $('.js-anime-mv').removeClass('is-animated');// 画面外に出たらis-animatedというクラス名を外す
      }
      });
  }
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    BlurTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

});
