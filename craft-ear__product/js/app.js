window.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        $('.header').addClass('scroll')
    } else {
        $('.header.scroll').removeClass('scroll')
    }
}
$('.header__btn-mobie').click(function () {
    if (!Boolean(document.querySelector('.header.open-menu'))) {
        $('.header').addClass('open-menu')
        gsap.from('.header__item', { duration: 1, opacity: 0, stagger: .5, })
    } else {
        $('.header').removeClass('open-menu')
    }
})
function animationHomePage1() {
    var timeline = gsap.timeline({
        default: {
            duration: 1,
        }
    })
    timeline
        .from('.header', { x: '100%', duration: 1, ease: 'ease', })
        .from('.header__item', { duration: 1, opacity: 0, stagger: .5, })
}

$('.home-page5__btn').click(function (e) {
    gsap.fromTo('.home-page5__slider.active .slider-img-wraper', {

        rotation: 0,
    }, {
        duration: 2,

        rotation: 360,
    }
    )
   
   
    setTimeout(function(){
        var src = e.currentTarget.querySelector('.btn-img.active').attributes.kol.nodeValue

    var emlArray = Array.from(document.querySelectorAll('.home-page5__slider'))
    var activeElm = emlArray.find(function (a, b) {
        return a.attributes.kol.nodeValue === src
    })
    var btnPrev = Array.from($('.btn-img.prev')).find(function(a){
        return a.attributes.kol.nodeValue==getIndex(activeElm, emlArray)[0]
    })
    var btnNext =Array.from($('.btn-img.next')).find(function(a){
        return a.attributes.kol.nodeValue==getIndex(activeElm, emlArray)[1]
    })
    
    $('.home-page5__slider.active').removeClass('active')
   $('.btn-img.prev.active').removeClass('active')
   $('.btn-img.next.active').removeClass('active')
    activeElm.classList.add('active')
    btnPrev.classList.add('active')
    btnNext.classList.add('active')
    },700)

})
function getIndex(a, b) {
    var i = b.indexOf(a)
    var c
    var d
    if (i == b.length - 1) {
        c = i-1
        d = 0
    } else if (i == 0) {
        c = b.length - 1
        d = i + 1
    } else {
        c = i - 1
        d = i + 1
    }
    return [b[c].attributes.kol.nodeValue,b[d].attributes.kol.nodeValue]
}
animationHomePage1()