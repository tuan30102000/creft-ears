if ($(".artists-title__content").length == 1) {
    var typed_strings = $(".artists-title__content").text();
    var typed = new Typed(".artists-title__show", {
        strings: typed_strings.split(","),
        typeSpeed: 50,
        loop: true,
        backDelay: 2000,
        backSpeed: 50,
    });
}