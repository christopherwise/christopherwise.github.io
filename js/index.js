/* slideshow */
$(document).ready(function() {
function play() {
    setInterval(function(){
        var next = $(".slideshow .active").removeClass("active").next(".image");
        if (!next.length) {
            next = $(".slideshow .image:first");
        }
        next.addClass("active");
    }, 15000);
}
play();
});

/* nav */

$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
        $('nav').addClass('follow black');
       
    } else {
        $('nav').removeClass('follow black');
        
    }
});

/* typed */
    $(function(){

        $(".test").typed({
            strings: ["I actually <strong>enjoy</strong> writting email code."],
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

$(function(){
    $(".wine").typed('reset')
      $(".wine").typed({
            strings: ["I also like wine."],
            typeSpeed: 20,
            backDelay: 500,
            // time before typing starts
            startDelay: 16000,
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