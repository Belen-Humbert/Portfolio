$(document).ready(function() {
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

    // Change navbar and footer background on scroll
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var navbar = $('.nav');
        var footer = $('footer');

        // Toggle navbar scroll class
        navbar.toggleClass('scroll', scrollTop > 50);

        // Toggle footer scroll class
        if ($(window).scrollTop() + $(window).height() > $(document).height() - $('footer').height()) {
            footer.addClass('scroll');
        } else {
            footer.removeClass('scroll');
        }
    });
});

