$(function() {
    // Toggle navbar menu in mobile view
    $('.navTrigger').click(function() {
        $(this).toggleClass('active');
        $("#mainListDiv").toggleClass("show_list");
    });

    // Smooth scrolling to sections
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500, 'linear');
    });

    // Change navbar background on scroll
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var navbar = $('.nav');

        // Toggle navbar scroll class
        navbar.toggleClass('scroll', scrollTop > 50);
    });
});


