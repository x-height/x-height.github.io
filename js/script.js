var doc = document;

$(".bxSlider").bxSlider({
    auto : true,
    pager : false,
    speed: 700
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

$('.list a').each(function(i) {
    $('.book ul').siblings().hide();
    $('.book ul').eq(0).show();
    $(this).on('click', function() {
        $('.book ul').siblings().hide();
        $('.book ul').eq(i).show();
    });
});