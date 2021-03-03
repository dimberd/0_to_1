/*slider()*/

$(function() {

    $('.slider').slick({
        arrows: false,
        dots: true,

        responsive: [{

            breakpoint: 420,
            settings: {
                dots: false,
                autoplay: true
            }
        }]

    });

});