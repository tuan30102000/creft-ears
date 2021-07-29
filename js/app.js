(function(){
    const generalApp = {
        starts: function() {
            this.aniationheader()
            this.handlEvent()
        },
        aniationheader: function() {
            var timeline = gsap.timeline({
                default: {
                    duration: 1,
                }
            })
            if ($(window).width() < 768) {
                timeline
                    .from('.header-box', { x: '100%', duration: 1.4, ease: 'ease', })
            } else {
                timeline
                    .from('.header-box', { x:'100%', duration: 1.4, ease: 'ease', })
                    .from('.header__item', { duration: .8, opacity: 0, stagger: .3, })
            }
        },
        handlEvent: function() {
            window.onscroll = function() {
                    //header
                    if (document.documentElement.scrollTop > 0) {
                        $('.header').addClass('scroll')
                    } else {
                        $('.header.scroll').removeClass('scroll')
                    }
                }
                //menu
            $('.header__btn-mobie').click(function() {
                if (!Boolean(document.querySelector('.header.open-menu'))) {
                    $('.header').addClass('open-menu')
                    $('.nav-oder__wraper').addClass('active')
                    gsap.from('.header__item', { duration: 0.8, opacity: 0, stagger: .2, })
                } else {
                    $('.header').removeClass('open-menu')
                    $('.nav-oder__wraper').removeClass('active')
                }
            })
        },
    }
    
    generalApp.starts()
})()