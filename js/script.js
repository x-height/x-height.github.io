var doc = document;

$(".bxSlider").bxSlider({
    auto : true,
    pager : false,
    speed: 700
});

$(".owl-carousel").owlCarousel({
    items : 5,
    margin : 20,
    responsiveClass : true,
    responsive : {
        0 : {
            items : 1
        },
        640 : {
            items : 3
        },
        960 : {
            items : 5
        }
    }
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

$(window).resize(function() {
    var width = $('html').width();
    if (width < 1020) {
        $('.fa-bars').css('display', 'block');
    } else {
        $('.fa-bars').css('display', 'none');
    }
    // if (width < 640) {
    //     list();
    // }
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

// function list() {
//     $('.list a').hide();
//     $('.list a').eq(0).show();
// }

// $('.list a').each(function(i) {
//     $('.fa-chevron-left').on('click', function() {
//         console.log($('.fa-chevron-left'));
//         console.log($('.list a').eq(i + 1));
//     });
// })