// 文字列の表示
// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// 青色長方形に変更
// $(function(){
//   $('.box1').css({
//     'background-color':'#0000FF',
//     'height':'100px'
//   });
// });

// 上から下にスライド
// $(function(){
//   $('.box1').slideDown();
// });

// 下から上にスライド
// $(function(){
//   $('.box1').slideUp();

// 非表示を表示
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color':'#0000FF'});
// });

// 表示を非表示
// $(function(){
//   $('.box1').hide();
// });

// マウスオーバーイベント
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color':'#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color':'#FF0000'});
//   });
// });

// classを指定
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

//  マウスクリックイベント
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// 7章
// this前
// $(function(){
//   $('.bg1').on('click',function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click',function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click',function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click',function(){
//     $('.bg4').slideUp();
//   });
// });

// this後
//  $(function(){
//   $('.box1').on('click',function(){
//     $(this).slideUp();
//   });
//  });

// children
$(function(){
  $('button').on('click',function(){
    $('ul').children().css('color','red');
  });
});