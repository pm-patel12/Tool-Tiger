$(document).ready(function () {
    // =================
    // Page Loader ENds
    // =================

    // =================
    // Modile Menu Toggler Starts
    // =================
    $('.menuToggle').on('click', function (e) {
        e.stopPropagation();
        $('.menu-links').toggleClass('show');
        $('body').toggleClass('overly');
    });

    $('.menu-links').on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function () {
        $('.menu-links').removeClass('show');
        $('body').removeClass('overly');
    });
    // =================
    // Modile Menu Toggler Ends
    // =================

    // =================
    // Partners carousel Starts
    // =================
    var owl = $('.partners-carousel');
    setTimeout(() => {
        owl.owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            items: 5,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                980: {
                    items: 5
                }
            }
        });
    }, 500);
    // =================
    // Partners carousel Ends
    // =================

    // =================
    // Featured Collection (Home page) Starts
    // =================
    var owl2 = $('.featured-collection-carousel');
    setTimeout(() => {
        owl2.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 4,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1140: {
                    items: 4
                }
            }
        });
        // Custom Button
        $('.featured-collection-next').click(function () {
            owl2.trigger('next.owl.carousel');
        });
        $('.featured-collection-prev').click(function () {
            owl2.trigger('prev.owl.carousel');
        });
    }, 500);
    // =================
    // Featured Collection (Home page) Ends
    // =================

    // =================
    // Hero Sponsored Starts
    // =================
    var owl3 = $('.hero-sponsored-carousel');
    setTimeout(() => {
        owl3.owlCarousel({
            loop: true,
            nav: false,
            items: 2,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1140: {
                    items: 2
                }

            }
        });
        // Custom Button
        $('.hero-sponsored-next').click(function () {
            owl3.trigger('next.owl.carousel');
        });
        $('.hero-sponsored-prev').click(function () {
            owl3.trigger('prev.owl.carousel');
        });
    }, 500);
    // =================
    // Hero Sponsored Ends
    // =================


    // =================
    // Partners carousel Starts
    // =================
    var owl4 = $('.sponsored-list-tool-carousel');
    setTimeout(() => {
        owl4.owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
        });
    }, 500);
    // =================
    // Partners carousel Ends
    // =================

});
