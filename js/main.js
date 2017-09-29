$(document).ready(function(){
    $('#code-a').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #EF5350');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#resume').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #FFA726');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#prof').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #FFD600');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#logos').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #00E676');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    $('#contact').hover(function() {
        $('.site-head-middle').css('border-bottom', '11px solid #00E5FF');
    }, function() {
        $('.site-head-middle').css('border-bottom', '11px solid white');
    });

    var current_color = 0;
    var colors = ['#EF5350', '#FFA726', '#FFD600', '#00E676', '#00E5FF',
                  '#5C6BC0', '#7E57C2'];
});