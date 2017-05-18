
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

        $(".cursors").typed({
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

// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});

// menu
$('.mobHamb').click(function(){
    $('.menu').toggleClass("show");
});

$('.mobHamb').click (function(){
  $(this).toggleClass('open');
});
