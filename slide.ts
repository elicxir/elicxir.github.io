// 参考 https://mukuchi.work/slideconts/

var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
var slideContsRect = []; // 要素の位置を入れるための配列
var slideContsTop = []; // 要素の位置を入れるための配列
var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
var windowH = window.innerHeight; // ウィンドウの高さを取得
var remainder = 50; // ちょっとはみ出させる部分

function UpdateRect() {
  slideConts = document.querySelectorAll('.slideConts');
  slideContsRect.length = 0;
  slideContsTop.length = 0;
  windowY = window.pageYOffset;
  // 要素の位置を取得
  for (var i = 0; i < slideConts.length; i++) {
    slideContsRect.push(slideConts[i].getBoundingClientRect());
  }
  for (var i = 0; i < slideContsRect.length; i++) {
    slideContsTop.push(slideContsRect[i].top + windowY);
  }
}


UpdateRect();
DetectScroll();

// ウィンドウがリサイズされたら、ウィンドウの高さを再取得
window.addEventListener('resize', function () {
  UpdateRect();
  windowH = window.innerHeight;
  DetectScroll();
});
// スクロールされたら
window.addEventListener('scroll', function () {
  DetectScroll();
});

function DetectScroll() {
  // スクロール位置を取得
  windowY = window.pageYOffset;

  for (var i = 0; i < slideConts.length; i++) {
    // 要素が画面の下端にかかったら
    if (windowY > slideContsTop[i] - windowH + remainder) {
      // .showを付与
      slideConts[i].classList.add('show');
    } else {
      // 逆に.showを削除
      slideConts[i].classList.remove('show');
    }
  }
}
