$(document).ready(function(){
    $('#code-a').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #EF5350');
        $('.site-head-middle').css('-webkit-transition', 'border-bottom 1s ease');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#resume').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #FFA726');
        $('.site-head-middle').css('-webkit-transition', 'border-bottom 1s ease');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#prof').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #FFD600');
        $('.site-head-middle').css('-webkit-transition', 'border-bottom 1s ease');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#logos').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #00E676');
        $('.site-head-middle').css('-webkit-transition', 'border-bottom 1s ease');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#contact').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #00E5FF');
        $('.site-head-middle').css('-webkit-transition', 'border-bottom 1s ease');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });
});