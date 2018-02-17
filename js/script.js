var doc = document;

$(".bxSlider").bxSlider({
    auto : true,
    pager : false,
    speed: 700
});

$(".owl-carousel").owlCarousel({
    items : 5,
    responsiveClass : true,
    responsive : {0 : {items : 1}, 780 : {items : 3}, 1200 : {items : 5}}
});

$(window).on('scroll' , function() {
    var height = $('header').height();
    var scroll = $(this).scrollTop();
    if (scroll >= height) {
        $('header').addClass('fixed');
        $('.sign').hide();
    } else {
        $('header').removeClass('fixed');
        $('.sign').show();
    }
});

$('.fa-bars').on('click', function() {
    $('.min').css({'transform' : 'translateX(0)'});
});

$('.first').on('click', function() {
    $('.min').css({'transform' : 'translateX(100%)'});
});

$('.list a').each(function(i) {
    $('.list a').eq(0).css('color', '#00afa0');
    $('.book .owl-carousel').hide();
    $('.book .owl-carousel').eq(0).show();
    $(this).on('click', function() {
        $('.list a').css('color', '#888888');
        $('.list a').eq(i).css('color', '#00afa0');
        $('.book .owl-carousel').hide();
        $('.book .owl-carousel').eq(i).show();
    });
});


var left = doc.querySelector('.fa-chevron-left');
var right = doc.querySelector('.fa-chevron-right');
var listLiA = doc.getElementsByClassName('listLiA');
var thisList = 0;
var lastList = listLiA.length - 1;

left.addEventListener('click', function() {
    thisList--;
    var intervarId = setInterval(function() {
        if (thisList <= 0) {
            clearInterval(intervarId);
            listLiA[thisList +1].style.color = '#888888';
            listLiA[thisList].style.color = '#00afa0';
        }
    });
});

right.addEventListener('click', function() {
    thisList++;
    var intervarId = setInterval(function() {
        if (thisList >= listLiA.length) {
            clearInterval(intervarId);
            listLiA[thisList].style.color = '#00afa0';
            listLiA[thisList - 1].style.color = '#888888';
        }
    });
});