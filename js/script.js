var doc = document;

$(".bxSlider").bxSlider({
    auto : true,
    pager : false,
    speed : 700
});

$(".owl-carousel").owlCarousel({
    items : 5,
    responsiveClass : true,
    responsive : { 0 : { items : 2 }, 780 : { items : 3 }, 1200 : { items : 5 } }
});

$(window).on('scroll' , function() {
    if ($(this).scrollTop() >= $('header').height()) {
        $('header').addClass('fixed');
        $('.sign').hide();
    } else {
        $('header').removeClass('fixed');
        $('.sign').show();
    }
});

$(window).on('resize', function() {
    if ($(window).width() < 640) {
        $('div.posLeft').css('display', 'block');
        $('div.posRight').css('display', 'block');
    } else {
        $('div.posLeft').css('display', 'inline-block');
        $('div.posRight').css('display', 'inline-block');
    }
});

$('#searchIcon').on('click', function() {
    var val = $('#search').val();
    console.log(val);
    $('h1:contains(' + val + ')').css('background-color', '#ffc900');
    $('h2:contains(' + val + ')').css('background-color', '#ffc900');
    $('h3:contains(' + val + ')').css('background-color', '#ffc900');
    $('p:contains(' + val + ')').css('background-color', '#ffc900');
    $('a:contains(' + val + ')').css('background-color', '#ffc900');
});

$('ul.menu1 > li > a').each(function(i) {
    $('ul.menu2').eq(i).css('width', $('ul.menu1 > li > a').eq(i).width() + 'px');
    $(this).on('click', function() {
        $('ul.menu2').eq(i).toggleClass('on');
    });
});

$('.fa-bars').on('click', function() {
    $('.min').css('transform', 'translateX(0)');
});

$('.fa-times').on('click', function() {
    $('nav.min').css('transform', 'translateX(100%)');
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


// var left = doc.querySelector('.fa-chevron-left');
// var right = doc.querySelector('.fa-chevron-right');
// var listLiA = doc.getElementsByClassName('listLiA');
// var thisList = 0;
// var lastList = listLiA.length - 1;
// console.log(listLiA);

// left.addEventListener('click', function() {
//     thisList--;
//     var intervarId = setInterval(function() {
//         if (thisList <= 0) {
//             clearInterval(intervarId);
//             listLiA[thisList +1].style.color = '#888888';
//             listLiA[thisList].style.color = '#00afa0';
//         }
//     });
// });

// right.addEventListener('click', function() {
//     thisList++;
//     if (thisList > lastList) {
//         var intervarId = setInterval(function() {
//             clearInterval(intervarId);
//             listLiA[0].style.color = '#00afa0';
//             listLiA[lastList].style.color = '#888888';
//         });
//     } else {
//         var intervarId = setInterval(function() {
//             clearInterval(intervarId);
//             listLiA[thisList].style.color = '#00afa0';
//             listLiA[thisList - 1].style.color = '#888888';
//         });
//     }
// });

$('dt').each(function(i) {
    $(this).on('click', function() {
        $(this).toggleClass('on');
        $('dd').eq(i).slideToggle();
        $('div.posLeft img').hide();
        $('div.posLeft img').eq(i).show();
    });
});

$('ul.item li button').each(function(i) {
    console.log($('item li button'));
    $(this).on('click', function() {
        $('div.none').hide();
        $('div.none').eq(i).show();
    });
});


startLoadFile();

function startLoadFile() {
    $.ajax({
        url : 'imgList.json',
        type : 'GET',
        dataType : 'json',
        success : function(data) {
            createImages(data)
        }
    });
}

function createImages(data) {
    var img = data.images;
    var cover = '';
    var storeBook = $('div.storeBook');
    for (var i = 0; i < img.length; i++) {
        cover += '<div class="bookList">';
        cover += '<img src="' + img[i].url + '" class="bookImg" />';
        cover += '<h3 class="title">' + img[i].title + '</h3>';
        cover += '<p class="author">' + img[i].author + ' | ' + '<span class="company">' + img[i].company + '</span>' + '</p>';
        cover += '</div>';
    }
    storeBook.append(cover);
}


$('img.bookImg').on('click', function() {
    console.log($('img.bookImg'));
    $('div.zoom').css('display', 'block');
    zoomInImage();
});

function zoomInImage() {
    var zoom = '';
    zoom += '<img src="' + img[i].url + '" />';
    $('div.zoom').append(zoom);
}

$('ul.menu li').eq(0).addClass('on');
$('ul.menu li').on('click', function() {
    $('ul.menu li').removeClass('on');
    $(this).addClass('on');
});