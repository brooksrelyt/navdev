$(window).load(function() {
    equalheight('.match');
    equalheight('.match-2');
    equalheight('.contact-match');
    equalheight('.hero-match');
});

equalheight = function(container){

    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    $(container).each(function() {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        rowDivs.length = 0; // empty the array
        currentRowStart = topPostion;
        currentTallest = $el.height();
        rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).resize(function(){
    equalheight('.match');
    equalheight('.match-2');
    equalheight('.contact-match');
    equalheight('.hero-match');
});


var titleCard = $(".img-card-header").height();

console.log(titleCard);

var a = $("#row-match").height();
var b = a/2 - 20;
var c = b - titleCard;
var d = $(window).width();


$( window ).resize(function() {
    $(".img-card, .img-card-display").css('height', 'auto');

    var e = $("#row-match").height();
    var f = e/2 - 20;
    var g = f - titleCard;

    $(".img-card").css({ 'height': f + "px" });
    $(".img-card-display").css({ 'height': g + "px" });

    if ($(window).width() > 768) {

    }
});

$( document ).ready(function() {
    $(".img-card").css({ 'height': b + "px" });
    $(".img-card-display").css({ 'height': c + "px" });

    var trigger = $('.acc-trigger');
    trigger.on('click', function(event){
        event.preventDefault();
        $(this).next('.acc-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
    });

    $(function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('navbar-default').addClass('header-bg')
            }
            if ($(this).scrollTop() < 50) {
                $('navbar-default').removeClass('header-bg')
            }
        });
    });

    var eventItem = $('.eventBlock').length;
    console.log(eventItem);

    $('.eventBlock:lt(6)').remove();

});
