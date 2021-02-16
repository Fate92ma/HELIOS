$(document).ready(function () { // Start Coding Here

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Smooth Scroll

    $(".container1 ul li a").click(function () {
        var target = $(this).attr("href");

        $("body", "html").animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });

    // Mini

    $(".menu").click(function () {
        $(".container1 ul").toggleClass("mini");
    });

    // Header on Scroll

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 300) {
            $("header").addClass("change");
        } else {
            $("header").removeClass("change");
        }

    });

    // Portfolio

    $(function () {
        var filterList = {
            init: function () {
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.design, .development, .branding'
                    }
                });
            }
        };
        filterList.init();
    });

    // CountTo

    var $window = $(window);

    $(window).on('scroll', function () {
        $topOffset = $(this).scrollTop();
        console.log($topOffset);

        if ($topOffset > 2270) {
            $('.timer').countTo({
                onUpdate: true
            });
        };
    });

}); // End Code