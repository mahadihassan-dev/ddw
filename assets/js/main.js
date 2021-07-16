 // Slider Start
 $(document).ready(function(){
    $('.img-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        centerMode: true,
        // prevArrow: '<i class="fas fa-angle-right slide-arrow arrow-right"></i>',
        // nextArrow: '<i class="fas fa-angle-left slide-arrow arrow-left"></i>',
        prevArrow: '<img src="./assets/images/left-arrow.png" alt="" class="img-fluid slide-arrow arrow-left">',
        nextArrow: '<img src="./assets/images/right-arrow.png" alt="" class="img-fluid slide-arrow arrow-right">',
        asNavFor: '.subHeading-slide',
        responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        arrows: true,
                        centerMode: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
    });
    $('.subHeading-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-slider',
    });
})