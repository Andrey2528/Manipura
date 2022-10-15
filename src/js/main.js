(function ($) {
    'use strict';

    $(document).ready(function () {

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
        
            $('#input__file').on('change', function () {
        if ($(this).get(0).files.length !== 0) {
            $('.input__file-button').addClass('selected');
        } 
        else  {
            $('.input__file-button').removeClass('selected');    
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