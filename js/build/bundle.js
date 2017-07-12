(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/* nav */
$(window).scroll(function () {

    if ($(window).scrollTop() > 50) {
        $('nav').addClass('follow black');
        $('.icon-left, .icon-right').addClass('backBlack');
    } else {
        $('nav').removeClass('follow black');
        $('.icon-left, .icon-right').removeClass('backBlack');
    }
});

/* typed */
$(function () {

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
        loopCount: false
    });
});

// open mobile menu
$('.js-toggle-menu').click(function (e) {
    e.preventDefault();
    $('.mobile-header-nav').slideToggle();
    $(this).toggleClass('open');
});

// menu
$('.mobHamb').click(function () {
    $('.menu').toggleClass("show");
});

$('.mobHamb').click(function () {
    $(this).toggleClass('open');
});

},{}]},{},[1]);

//# sourceMappingURL=js/maps/bundle.js.map
