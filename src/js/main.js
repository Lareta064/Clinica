$(document).ready(function () {
    /* OPEN SEARCH INPUT HEADER */
    const searchInputBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    searchInputBtn.addEventListener('click', function (e) {

        const inputElement = searchInput.querySelector('input');
        e.preventDefault();

        console.log(inputElement.value.length);
        if (inputElement.value == '') {
            searchInput.classList.toggle('active');
            this.closest('.header-search').classList.toggle('active');
        }
    })

    /*SLIDER - BANNER */

    $('.banner-wrapper').owlCarousel({
        items: 1,
        // autoplay: true,
        loop: true,
        dots: true,
        autoplaySpeed: 1200,

        autoplayHoverPause: true,
        smartSpeed: 1200,
        navSpeed: 1200
    });

    $('.banner3-slider').owlCarousel({
        items: 1
    });
    $('.banner-wrapper2').owlCarousel({
        items: 1
    });
    $(function () {
        var owl = $('.programms-carousel');
        owl.owlCarousel({

            items: 1,
            nav: true,
            dots: false,
            navSpeed: 1000,
            onInitialized: counter, //When the plugin has initialized.
            onTranslated: counter //When the translation of the stage has finished.
        });

        function counter(event) {
            var element = event.target; // DOM element, in this example .owl-carousel
            var items = event.item.count; // Number of items
            var item = event.item.index + 1; // Position of the current item
            $('#counter').html("<span>" + item + " </span>/<span>" + items + " </span>")
        }
    });

    // partner-logo
    $('.partners-slider').owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 900,
        center: true,
        autoplay: true,

        autoplaySpeed: 800,
        responsive: {
            320: {
                items: 1
            },
            560: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })

    // VIDEO-SLIDER
    $('.video-blog').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,

        dots: false,
        nav: true,
        responsive: {
            320: {
                items: 1
            },
            560: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });
    // REVIEW-SLIDER
    $('.review-slider').owlCarousel({
        items: 1,
        center: true,
        nav: true,
        navSpeed: 1200
    });
    $('.review-slider2').owlCarousel({
        items: 2,

        nav: true,
        navSpeed: 1200,
        loop: true,
        responsive: {
            320: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    });
    //Для всех сворачиваемых элементов (не кнопок, а сворачиваемых блоков)
    $('.collapsable').on('show.bs.collapse', function () {
        let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
        tabIcon.addClass("rotate");
    });
    $('.collapsable').on('hide.bs.collapse', function () {
        let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
        tabIcon.removeClass("rotate");
    });

    // переставить сайдбар
    const asideLeft = document.querySelector('.aside-left');
    if (asideLeft) {
        const mainBlock = asideLeft.querySelector('.col-lg-9');
        mainBlock.classList.add('order-lg-2')
    }

    //-сертификаты врача слайдер
    let sertificates = $('.persone-sert-slider');
    if (sertificates) {
        sertificates.owlCarousel({
            items: 3,
            nav: true,
            dots: true,
            navSpeed: 1000,
            dotsSpeed: 1000,

            responsive: {
                320: {
                    items: 1
                },
                560: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }


        })
    }

})