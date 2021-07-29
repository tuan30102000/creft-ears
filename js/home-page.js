; (function () {
    const appHomePage = {
        start: function () {
            this.setUpSlide()
           this.runSlide()
        },
        slideIndex: 0,
        setUpSlide: function () {
            const self = this
            let slide = $('.container__home-page5 .clip')
            if ($(document).width() < 768) {
                $('.container__home-page5 .clip.active').removeClass('active')
                $(slide[self.slideIndex]).addClass('active')
                self.slideIndex = self.slideIndex >= slide.length-1 ? 0 : self.slideIndex + 1
            }
        },
        runSlide:function(){
            const self=this
            let run=setInterval(()=>self.setUpSlide(),3000)
        }


    }
    appHomePage.start()
})();