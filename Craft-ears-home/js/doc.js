function clone(e) {
    var t = e.cloneNode()
      , i = e.querySelector(".testimonial__image-wrap").cloneNode()
      , n = e.querySelector(".testimonial__image").cloneNode()
      , o = e.querySelector(".testimonial__content").cloneNode()
      , l = e.querySelector(".testimonial__content").childNodes;
    return l.forEach(function(e) {
        var t = e.cloneNode();
        t.innerText = e.innerText,
        o.appendChild(t)
    }),
    i.appendChild(n),
    t.appendChild(i),
    t.appendChild(o),
    t
}
function change(e) {
    var t = document.querySelector(".testimonial--active")
      , i = e.target.closest(".testimonial");
    if (t.querySelector(".testimonial__content").style.opacity = "0",
    t.classList.toggle("testimonial--active"),
    t.classList.toggle("testimonial--" + ("testimonial--prev" === i.classList[1] ? "next" : "prev")),
    i.classList.toggle(i.classList[1]),
    i.classList.toggle("testimonial--active"),
    setTimeout(function() {
        i.querySelector(".testimonial__content").style.opacity = "1"
    }, 700),
    testimonials.length <= 3)
        if (document.querySelector(".testimonial--next")) {
            if (!document.querySelector(".testimonial--prev")) {
                var n = document.querySelectorAll(".testimonial--next")[document.querySelectorAll(".testimonial--next").length - 1];
                n.classList.add("testimonial--prev"),
                n.classList.remove("testimonial--next"),
                n.querySelector(".testimonial__image").style.transform = "scale(0)",
                n.querySelector(".testimonial__image").style.opacity = "0",
                testimonialsContainer.prepend(n)
            }
        } else {
            var o = document.querySelectorAll(".testimonial--prev")[0];
            o.classList.add("testimonial--next"),
            o.classList.remove("testimonial--prev"),
            o.querySelector(".testimonial__image").style.transform = "scale(0)",
            o.querySelector(".testimonial__image").style.opacity = "0",
            testimonialsContainer.insertBefore(o, null)
        }
    if (document.querySelector(".testimonial--next")) {
        if (!document.querySelector(".testimonial--prev")) {
            var l = document.querySelectorAll(".testimonial--next")[document.querySelectorAll(".testimonial--next").length - 1];
            l.classList.add("testimonial--prev"),
            l.classList.remove("testimonial--next"),
            l.querySelector(".testimonial__image").style.transform = "scale(0)",
            l.querySelector(".testimonial__image").style.opacity = "0",
            testimonialsContainer.prepend(l)
        }
    } else {
        var s = document.querySelectorAll(".testimonial--prev")[0];
        s.classList.add("testimonial--next"),
        s.classList.remove("testimonial--prev"),
        s.querySelector(".testimonial__image").style.transform = "scale(0)",
        s.querySelector(".testimonial__image").style.opacity = "0",
        testimonialsContainer.insertBefore(s, null)
    }
    setZIndex(document.querySelectorAll(".testimonial--prev"), document.querySelectorAll(".testimonial--next")),
    setTimeout(function() {
        hideRest()
    }, 10)
}
function setZIndex(e, t) {
    t.forEach(function(e, i) {
        e.style.zIndex = t.length - i
    }),
    e.forEach(function(e, t) {
        e.style.zIndex = t
    }),
    document.querySelector(".testimonial--active").style.zIndex = "1000"
}
function carouselInit() {
    testimonials.length <= 3 && (testimonials.forEach(function(e) {
        var t = clone(e);
        t.classList.remove("testimonial--active"),
        testimonialsContainer.appendChild(t)
    }),
    testimonials = document.querySelectorAll(".testimonial"));
    var e = []
      , t = [];
    testimonials.forEach(function(i, n) {
        return i.classList.contains("testimonial--active") ? (i.querySelector(".testimonial__content").style.opacity = "1",
        !1) : void (n === testimonials.length - 1 ? (i.classList.add("testimonial--prev"),
        t.push(i)) : (i.classList.add("testimonial--next"),
        e.push(i)))
    }),
    testimonialsContainer.prepend(testimonialsContainer.querySelector(".testimonial--prev")),
    setZIndex(t, e),
    hideRest(),
    testimonials.forEach(function(e) {
        e.querySelector(".testimonial__image-wrap").addEventListener("click", function(e) {
            return !e.target.closest(".testimonial--active") && !animating && (animating = !0,
            change(e),
            void setTimeout(function() {
                animating = !1
            }, 1e3))
        })
    })
}
function hideRest() {
    testimonials.forEach(function(e) {
        e.classList.contains("testimonial--active") || e.nextElementSibling && e.nextElementSibling.classList.contains("testimonial--active") || e.previousElementSibling && e.previousElementSibling.classList.contains("testimonial--active") ? e.querySelector(".testimonial__image").removeAttribute("style") : (e.querySelector(".testimonial__image").style.transition = "1s",
        e.querySelector(".testimonial__image").style.transform = "scale(0)",
        e.querySelector(".testimonial__image").style.opacity = "0")
    })
}
var testimonialsContainer = document.querySelector(".row__testimonials")
  , testimonials = document.querySelectorAll(".testimonial")
  , animating = !1;
1 !== testimonials.length ? carouselInit() : testimonials[0].querySelector(".testimonial__content").style.opacity = "1";