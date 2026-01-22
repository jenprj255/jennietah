$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


  //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });    


    ///===== Progress Bar

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }




    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //===== WeChat QR toggle (tap/click to mimic hover)
    $('.wechat_wrapper > a').on('click', function (event) {
        var href = $(this).attr('href') || '';
        if (href !== '#' && href !== 'javascript:void(0)') {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        var $wrapper = $(this).closest('.wechat_wrapper');
        $wrapper.toggleClass('is-open');
        $wrapper.siblings('.wechat_wrapper').removeClass('is-open');
    });

    $('.wechat_wrapper').on('mouseenter', function () {
        $(this).addClass('is-open');
    }).on('mouseleave', function () {
        $(this).removeClass('is-open');
    });

    $(document).on('click', function () {
        $('.wechat_wrapper').removeClass('is-open');
    });

    $('.wechat_wrapper .wechat_qr').on('click', function (event) {
        event.stopPropagation();
    });

    //===== Experience photo lightbox
    $(document).on('click', '.detail_gallery img', function () {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt') || 'Photo';

        var $overlay = $('<div class="lightbox_overlay" role="dialog" aria-modal="true"></div>');
        var $img = $('<img>', { src: src, alt: alt });
        var $close = $('<button class="lightbox_close" type="button" aria-label="Close">×</button>');

        $overlay.append($img, $close);
        $('body').append($overlay);

        $close.on('click', function () {
            $overlay.remove();
        });

        $overlay.on('click', function (event) {
            if (event.target === $overlay[0]) {
                $overlay.remove();
            }
        });

        $img.on('click', function () {
            $(this).toggleClass('is-zoomed');
        });

        $(document).on('keydown.lightbox', function (event) {
            if (event.key === 'Escape') {
                $overlay.remove();
                $(document).off('keydown.lightbox');
            }
        });
    });


});
