(function(){
    $(window).resize(function(){
        var winW = $(window).width();
        var divResize = $(".resize");
        if(winW < 500)
            divResize.css('background-color', 'green');
    });
});