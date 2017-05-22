let isTop = $(".navbar").offset().top < 50;

handleResize();

$(window).scroll(function () {
    handleResize();
});
$(window).resize(function () {
    handleResize();
});

function handleResize() {
    let navbarTopThreshold = 0;
    let navbarBottomThreshold = 50;
    let windiwWidthThreshold = 751;

    let navbarScroll = $(".navbar").offset().top;
    let windowWidth = $(window).width();
    let isWide = windowWidth > windiwWidthThreshold;

    if (isTop) {
        if (navbarScroll > navbarBottomThreshold) {
            isTop = false;
        }
    } else {
        if (navbarScroll == navbarTopThreshold) {
            isTop = true;
        }
    }

    if (isWide) {
        if (isTop) {
            $(".navbar-default").css({"background-color": "transparent"});
        } else {
            $(".navbar-default").css({"background-color": "#ffffff", "height": "100px"});
        }
    } else {
        if (isTop) {
            $(".navbar-default").css({"background-color": "transparent"});
        } else {
            $(".navbar-default").css({"background-color": "#ffffff", "height": "70px"});
        }
    }
}

/*****Navbar Collapse*****/
$(document).ready(function (){
    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});

/***** On Click navbar toggle change to cross sign*****/
$(document).ready(function (){
    $( ".navbar-toggle" )
        .on( "click", function() {
            $(this).toggleClass( "active" );
            $('.collapse').toggleClass('in')
        });
    $('.nav a').on('click', function() {
        $(".navbar-toggle" ).removeClass("active");
    });
});
