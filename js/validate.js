function Validator(options) {
    var selectorRules = {}

    function Validate(inputElement, rule) {
        var errorMessage
        var dadElement = inputElement.parentElement
        var errorElement = dadElement.querySelector('span')
        var rules = selectorRules[rule.selector]
        for (var i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value)
            if (errorMessage) {
                break
            }
        }
        if (errorMessage) {
            errorElement.innerText = errorMessage
            dadElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            dadElement.classList.remove('invalid')
        }
        return !!!errorMessage
    }
    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function (e) {

            e.preventDefault()
            var isFormValid = true

            options.rules.forEach(function (rule) {
                var inputElement = document.querySelector(rule.selector)
                var isValid = Validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }


            })
            if (isFormValid) {

                if (typeof options.onSubmit === 'function') {
                    var data = {}
                    var allInput = formElement.querySelectorAll('[type=text],[type=password]')
                    Array.from(allInput).map(function (values) {
                        data[values.id] = values.value

                    })

                    options.onSubmit(data)

                } else {
                    formElement.submit()
                }
            }
        }

        options.rules.forEach((rule) => {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)

            } else {
                selectorRules[rule.selector] = [rule.test]
            }
            var inputElement = document.querySelector(rule.selector)


            if (inputElement) {
                inputElement.onblur = function () {
                    Validate(inputElement, rule)
                    console.log(selectorRules)
                }
                inputElement.oninput = function () {
                    var dadElement = inputElement.parentElement
                    var errorElement = dadElement.querySelector('span')
                    errorElement.innerText = ''
                    dadElement.classList.remove('invalid')

                }
            }

        });
    }
}



Validator.isRequired = function (selector, messsage) {

    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : messsage || 'Vui Long nhap truong nay'
        }
    }
}
Validator.isEmail = function (selector, messsage) {
    return {
        selector: selector,
        test: function (value) {
            var checked = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            return checked.test(value) ? undefined : messsage || 'Trường này phải là Email'

        }
    }
}
Validator.minLength = function (selector, minLength, messsage) {
    return {
        selector: selector,
        test: function (value) {

            return value.length >= minLength ? undefined : messsage || `Vui long nhập tối thiểu ${minLength} kí tự`
        }
    }
}
Validator.isConfirm = function (selector, cofirm, message) {

    return {
        selector: selector,
        test: function (value) {
            return value === cofirm() ? undefined : message || 'Giá trị nhập lại không chính xác'
        }
    }

}