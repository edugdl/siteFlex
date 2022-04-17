$(function(){
    $(window).resize(function(){
        var winW = $(window).width();
        var divResize = $("a");
        if(winW < 500)
            divResize.css('transform', 'scale(1,2)');
            alert('foi');
    });
});