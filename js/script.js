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
    $('.list a').eq(0).css('color', '#00afa0');
    $('.book ul').hide();
    $('.book ul').eq(0).show();
    $(this).on('click', function() {
        $('.list a').css('color', '#888888');
        $('.list a').eq(i).css('color', '#00afa0');
        $('.book ul').hide();
        $('.book ul').eq(i).show();
    });
});