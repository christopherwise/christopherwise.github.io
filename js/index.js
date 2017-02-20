$(document).ready(function() {

function play() {
    setInterval(function(){
        var next = $(".slideshow .active").removeClass("active").next(".image");
        if (!next.length) {
            next = $(".slideshow .image:first");
        }
        next.addClass("active");
    }, 5000);
}
play();

});

/*THIS IS WHERE SCRIPT FOR NAV BAR BEGINS*/

$(window).scroll(function() {

    if ($(window).scrollTop() > 50) {
        $('nav').addClass('follow black');
       
    } else {
        $('nav').removeClass('follow black');
        
    }
});
