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
    let banner1 = document.querySelector('.banner1');
    if (banner1) {
        $('.banner-wrapper').owlCarousel({
            items: 1,
            // autoplay: true,
            loop: true,
            dots: true,
            autoplaySpeed: 1200,
            URLhashListener: true,
            autoplayHoverPause: true,
            smartSpeed: 1200,
            navSpeed: 1200
        })
    }
    // VIDEO-SLIDER
    $('.video-blog').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        margin: 10,
        video: true,
        lazyLoad: true,
        center: true,
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
    })
})