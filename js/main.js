$('.pane-entry').on('mouseenter', function(event){
    let width = parseInt($(this.children[0]).css('width').split('px')[0]) + 10;
    $(this.children[1]).css('width', width);
});

$('.pane-entry').on('mouseleave', function(event){
    $(this.children[1]).css('width', '0px');
});