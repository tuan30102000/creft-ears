/* input animation */
$('.form__input-elm').focus(
    function (e) {
        if (!e.target.value) {
            e.target.parentElement.classList.add("active")
        }

    }
)
$('.form__input-elm').blur(
    function (e) {
        if (!e.target.value) {
            e.target.parentElement.classList.remove("active")
        }

    }
)