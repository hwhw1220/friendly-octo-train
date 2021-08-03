$('html, body').stop().animate({
    scrollTop : 0
}, 1000)


$('.menu li').eq(0).addClass('on')
var cflag = false;
$('.menu li a').on('click focus', function(e){
    e.preventDefault()
    cflag = true;
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    var num = $(this).parent().index()
    if (num===0) {
        $('.skillContainer > div').removeClass('on')
    } else {
        if ( !$('.skillContainer > div').hasClass('on')) {
            $('.skillContainer > div').addClass('on')
            count(80, '.html', 10)
            count(80, '.css', 20)
            count(70, '.script', 30)
            count(60, '.jquery', 40)
            count(50, '.react', 50)
        }
    }
    var secDist = $('section').eq(num).offset().top
    $('html, body').stop().animate({
        scrollTop : secDist
    }, 1000, function(){
        cflag = false
    })
})


function count(jumsu, cname, time) {
    let num = 0; 
    var stop = setInterval(function(){
        num++;
        if (num<=jumsu) {
            $(cname).find('.myscore').text(num+'%')
        } else {
            clearInterval(stop)
        }
    }, time)
}



var sDist0 = $('#sect1').offset().top
var sDist1 = $('#sect2').offset().top
var sDist2 = $('#sect3').offset().top

// 마지막구간이 윈도우높이보다 클때
var lastSect = $('#sect4').offset().top             
// 마지막구간이 윈도우높이보다 작을때
// var lastSect = $('body').height() - $(window).height()
var sct=0;
$(window).on('scroll', function(){
    
    // var wh = $(this).height()
    sct = $(this).scrollTop()
    if ( sct>=sDist0 && sct<sDist1 && !cflag) {
        $('.Lmenu li').eq(0).addClass('on')
        $('.Lmenu li').eq(0).siblings().removeClass('on')
        $('.skillContainer > div').removeClass('on')
    } else if ( sct>=sDist1 && sct<sDist2 && !cflag) {
        $('.Lmenu  li').eq(1).addClass('on')
        $('.Lmenu  li').eq(1).siblings().removeClass('on')
        if ( !$('.skillContainer > div').hasClass('on') ) {
            $('.skillContainer > div').addClass('on')
            count(80, '.html', 10)
            count(80, '.css', 20)
            count(70, '.script', 30)
            count(60, '.jquery', 40)
            count(50, '.react', 50)
        }

    } else if ( sct>=sDist2 && sct<lastSect && !cflag) {
        $('.Lmenu  li').eq(2).addClass('on')
        $('.Lmenu  li').eq(2).siblings().removeClass('on')
    } else if ( sct>=lastSect && !cflag) {
        $('.Lmenu  li').eq(3).addClass('on')
        $('.Lmenu  li').eq(3).siblings().removeClass('on')
    } 

})


$('section').on('mousewheel', function(event, delta){
    if (delta>0) {    // 마우스휠을 위로 굴리면 양수
        $('html, body').stop().animate({
            scrollTop: $(this).prev().offset().top
        }, 600)
    } else if (delta<0) {  // 마우스휠을 아래로 굴리면 음수
        $('html, body').stop().animate({
            scrollTop: $(this).next().offset().top
        }, 600)
    }
})


$('.slideInner').slick({
    autoplay:true,
    arrows:false,
    pauseOnHover:false,
    autoplaySpeed:6000,
    dots:true
})

$('.slideOuter .plpa').on('click', function(){
    
    if ( $(this).find('i').hasClass('fa-pause') ) {
        $('.slideInner').slick('slickPause')
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slideInner').slick('slickPlay')
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }

})
