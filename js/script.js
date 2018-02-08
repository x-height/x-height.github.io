var doc = document;

$('.btn_gnb').on('click',function() {
	$('.gnb').toggleClass('on');
	$('header').toggleClass('on');
	$('.container').toggleClass('on');
});

$('.ft').on('click',function() {
	$('footer ul li').css('display','block');
});