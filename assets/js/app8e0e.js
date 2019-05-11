(function ($) {
    //$(function () { objectFitImages(); });
    $(".login-link").click(function () {

        $(".overlay").addClass('overlay-open');
        $(".mobile-overlay").removeClass('overlay-open');
        $('body').addClass('no-scroll');
        $('.mobilemenudd').removeClass('active');
    });

    $('#overlay-login').click(function (event) {
        if ($(event.target).parents('.overlay-content').length > 0) {
            $(event.target).parents('.overlay-content').addClass('overlay-content-data');

            $(".logind").addClass('overlay-content-open');
        }

    });

    $(".mobile-menu-close").click(function (e) {
        $(".overlay-open").removeClass("overlay-open");
        $('body').removeClass('no-scroll');
    });

    $('#overlay-privatprofil').click(function (event) {
        if ($(event.target).parents('.overlay-content').length > 0) {
            $(event.target).parents('.overlay-content').addClass('overlay-content-data');
            $(".privatprofil").addClass('overlay-content-open');
        }

    });

    $('#overlay-firmaprofil').click(function (event) {
        if ($(event.target).parents('.overlay-content').length > 0) {
            $(event.target).parents('.overlay-content').addClass('overlay-content-data');
            $(".firmaprofil").addClass('overlay-content-open');
        }
    });

    $('#overlay-mobilemenu').click(function () {
        $(".mobile-overlay").addClass('overlay-open');
        $('body').addClass('no-scroll');
    });

    function dropdownClick(target) {

        document.querySelectorAll(target)[0].classList.toggle('active');
    }

    if (document.querySelector(".profileddtrigger")) {
        document.querySelector(".profileddtrigger").addEventListener("click", function () {
            dropdownClick('.profiledd');
        });
    }


    $('.features-carousel .owl-carousel').owlCarousel({
        //loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.collections-carousel .owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    //$('.dashboard-carousel-js .owl-carousel').owlCarousel({
    //    margin: 10,
    //    loop: false,
    //    nav: true,
    //    startPosition: -1,
    //    navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
    //    responsive: {
    //        0: {
    //            items: 1
    //        },
    //        768: {
    //            items: 2
    //        },
    //        991: {
    //            items: 3
    //        }
    //    },
    //    afterUpdate: function () {
    //        //updateSize();
    //    },
    //    afterInit: function () {
    //        //updateSize();
    //    }
    //});

    function updateSize() {
        var minHeight = parseInt($('.owl-item').eq(0).css('height'));
        $('.owl-item').each(function () {
            var thisHeight = parseInt($(this).css('height'));
            minHeight = (minHeight <= thisHeight ? minHeight : thisHeight);
        });
        $('.owl-wrapper-outer').css('height', minHeight + 'px');

        /*show the bottom part of the cropped images*/
        $('.owl-carousel .owl-item .item').each(function () {
            var thisHeight = parseInt($(this).css('height'));
            if (thisHeight > minHeight) {
                $(this).css('margin-top', -1 * (thisHeight - minHeight) + 'px');
            }
        });

    }

    $('.collection-bar').each(function () {
        $percentBar = $(this).find('.progressbar');
        $percentValue = $(this).find('.collection-percent').data("percent");
        $percentBar.css('width', $percentValue);
    });

    $(document).ready(function () {
        htmlTags = [
            ".collections-carousel .owl-carousel .item .collection-content",
            ".collections-carousel .owl-carousel .item .collection-content h3",

            // ".dashboard-carousel .owl-carousel .item",
            ".collection-boxes .collection-box"
        ];
        if ($(window).width() > 767) {
            for (var i = 0; i < htmlTags.length; ++i) {
                if ($(htmlTags[i])[0]) {
                    var heights = $(htmlTags[i]).map(function () {
                        return $(this).height();
                    }).get();

                    maxHeight = Math.max.apply(null, heights);

                    $(htmlTags[i]).height(maxHeight);
                }
            }
        }
    });

    $(window).resize(function () {
        //htmlTags = [
        //    ".collections-carousel .owl-carousel .item .collection-content",
        //    ".collections-carousel .owl-carousel .item .collection-content h3",

        //    // ".dashboard-carousel .owl-carousel .item",
        //    ".collection-boxes .collection-box"
        //];

        //for (var i = 0; i < htmlTags.length; ++i) {
        //    if ($(window).width() > 767) {
        //        if ($(htmlTags[i])[0]) {
        //            var heights = $(htmlTags[i]).map(function () {
        //                return $(this).height();
        //            }).get();

        //            maxHeight = Math.max.apply(null, heights);

        //            $(htmlTags[i]).height(maxHeight);
        //        }
        //    } else {
        //        $(htmlTags[i]).css('height', 'auto');
        //    }
        //}
    });

    $(document).on('click', '.field[data-dd]', function (e) {
        e.preventDefault();
        $(this).find('.dropdown').slideToggle();
    });

    $(document).on('click', '.dropdown a', function (e) {
        e.preventDefault();
        var val = $(this).data('val');

        $(this).closest('.field').find('[data-drop-down]').val(val);
    });

    // Changes 11.05.2019
    /* init Jarallax */
    $(window).on('load resize orientationchange', function () {
        if ($(window).width() > 1200) {
            jarallax(document.querySelectorAll('.jarallax'));
        } else {
            jarallax(document.querySelectorAll('.jarallax'), 'destroy')
        }
    });

    // Video Modal
    $('#modal1').on('hidden.bs.modal', function (e) {
        $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
    });
    
})(jQuery);