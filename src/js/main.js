(function ($) {
    'use strict';

    $(document).ready(function () {
        $('.coaches__slider').slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000
        });
        $(window).scroll(function(){
            let color = 'rgb(218,218,218)';
            if ($(window).scrollTop() > 0 && $(window).scrollTop() < 970){
                /*1*/
                color = 'rgb(218,218,218)';
            }else if ($(window).scrollTop() > 970 && $(window).scrollTop() < 2060){
                /*2*/
                color = 'rgb(32,32,32)';
            }else if ($(window).scrollTop() > 2060 && $(window).scrollTop() < 3140){
                /*3*/
                color = 'rgb(218,218,218)';
            }else if ($(window).scrollTop() > 3140 && $(window).scrollTop() < 4220){
                /*4*/
                color = 'rgb(32,32,32)';
            }else if ($(window).scrollTop() > 4220 && $(window).scrollTop() < 5300){
                /*5*/
                color = 'rgb(32,32,32)';
            }else if ($(window).scrollTop() > 5300 && $(window).scrollTop() < 6380){
                /*6*/
                color = 'rgb(32,32,32)';
            }else if ($(window).scrollTop() > 6380 && $(window).scrollTop() < 7460){
                /*7*/
                color = 'rgb(32,32,32)';
            }else if ($(window).scrollTop() > 7460 && $(window).scrollTop() < 8540){
                /*8*/
                color = 'rgb(218,218,218)';
            }else if ($(window).scrollTop() > 8540 && $(window).scrollTop() < 9620){
                /*9*/
                color = 'rgb(218,218,218)';
            }else if ($(window).scrollTop() > 9620 && $(window).scrollTop() < 10000){
                /*10*/
                color = 'rgb(32,32,32)';
            }

            $(".menu__link").css('color', color);
            $(".svgClass").css("fill", color);
        });

        $('.nav__mobile-btn').on('click', function (e) {
            e.preventDefault();
            toggleMenu();
        });

        wpmmMobileMenuActive();
        $(window).on('resize load scroll', function () {
            wpmmMobileMenuActive();
        });

        $('.header.header-mobile .nav__list a').on('click', function (e) {
            if (mobileMenuIsActive())
                toggleMenu();
        })

        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1100, function () {

                    // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                    window.location.hash = hash;
                });

                if (mobileMenuIsActive()) {
                    $('header.header-mobile').removeClass('active');
                    $('html, body').css('overflow-y', 'hidden');
                }
            } 
        });
    });

    let mobileMenuIsActive = function () {
        return jQuery('header.header').hasClass('header-mobile');
    };

    function toggleMenu() {
        jQuery('header.header-mobile').toggleClass('active');
        if (jQuery('header.header-mobile').hasClass('active')) {
            $('html, body').css('overflow-y', 'hidden');
        } else {
            $('html, body').css('overflow-y', 'visible');
        }
    }

    // Add mobile class if mobile menu active
    function wpmmMobileMenuActive() {
        let current_width = parseInt($(window).width());
        const responsive_breakpoint = 600;

        if (current_width < (responsive_breakpoint + 1)) {
            if (!mobileMenuIsActive()) {
                $('header.header').addClass('header-mobile');
                if ($('header.header').hasClass('active')) {
                    $('html, body').css('overflow-y', 'hidden');
                }
            }
        } else {
            if (mobileMenuIsActive()) {
                $('header.header').removeClass('header-mobile');
                $('html, body').css('overflow-y', 'visible');
            }
        }
    }
    
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }

    

})(jQuery);