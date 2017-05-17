/* slideshow */
// $(document).ready(function() {
// function play() {
//     setInterval(function(){
//         var next = $(".slideshow .active").removeClass("active").next(".image");
//         if (!next.length) {
//             next = $(".slideshow .image:first");
//         }
//         next.addClass("active");
//     }, 15000);
// }
// play();
// });

/* nav */

$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
        $('nav').addClass('follow black');
        $('.icon-left, .icon-right').addClass('backBlack');

       
    } else {
        $('nav').removeClass('follow black');
        $('.icon-left, .icon-right').removeClass('backBlack');
        
    }
});

/* typed */
    $(function(){

        $(".test").typed({
            strings: ["I actually <strong>enjoy</strong> writing email code."],
            typeSpeed: 20,
            backDelay: 500,
            // time before typing starts
            startDelay: 2200,
            loop: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "|",
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });

    });

// $(function(){
//     $(".wine").typed('reset')
//       $(".wine").typed({
//             strings: ["I also like wine."],
//             typeSpeed: 20,
//             backDelay: 500,
//             // time before typing starts
//             startDelay: 16000,
//             loop: false,
//             // show cursor
//             showCursor: true,
//             // character for cursor
//             cursorChar: "|",
//             contentType: 'html', // or text
//             // defaults to false for infinite loop
//             loopCount: false,
//         });
// });

// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});

// menu
$('.btn1').click(function(){
    $('.menu').toggleClass("show");
});

$('.btn1').click (function(){
  $(this).toggleClass('open');
});
