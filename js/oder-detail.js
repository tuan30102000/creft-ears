(function(){
    const oderApp = {
        optionState: 0,
        thisData: {},
        start: function (producid) {
            this.showOption($('.option-detail.active'), this.setOpitionState())
            this.showOneOpone()
            this.handleEvent(producid)
        },
        listOpitionDetail: Array.from($('.option-detail')),
        getElementChecked: function () {
            return document.querySelector('.oder__list-options-btn input[type=\"radio\"]:checked')
        },
        setOpitionState: function () {
            this.optionState = this.getElementChecked().value - 1
            return this.listOpitionDetail[this.optionState]
        },
        showOption: function (elmNotActive, elmActive) {
            if (elmNotActive) elmNotActive.removeClass('active')
            elmActive.classList.add('active')
        },
        showOneOpone: function () {
            const _this = this
            _this.listOpitionDetail.forEach((item, index) => {
                if (item.querySelector('.choose-1or2')) {
                    let chooseIdex = item.querySelector('.choose-1or2 input[type=\"radio\"]:checked').value
                    _this.showOption($(item.querySelector('.options__configure.active')), item.querySelector('.choose-' + chooseIdex))
                }
                if (item.querySelector('.choose-detail')) {
                    $(item).find('.choose-detail').each((index, elm) => {
                        let valueChooelv2 = $(elm).find('.option__items-lv2').find('input[type="radio"]:checked').attr('choose')
                        _this.showOption($(elm.querySelector('.option__items-lv3.active')), elm.querySelector('.choose-' + valueChooelv2))
                    })
                }
            })
        },
        addData: function (elm) {
            this.thisData[elm.attr('for')] = !Array.isArray(this.thisData[elm.attr('for')]) ? [] : [...this.thisData[elm.attr('for')]]
            this.thisData[elm.attr('for')].push(elm.attr('value'))
        },
        getLastData: function (producid = 2) {
            this.thisData = {}
            this.thisData.id = producid
            console.log( this.getData())
        },
        callAjax: function () {},
        getData: function () {
            const _this = this
            _this.listOpitionDetail.forEach((item,) => {
                if (item.querySelector('.choose-1or2')) {
                    let choose1Or2Index = $(item).find('.choose-1or2 input[type="radio"]:checked').attr('value')
                    let resultChoose1Or2 = item.querySelector('.choose-' + choose1Or2Index)
                    let elmSelected = $(resultChoose1Or2).find(('.choose-detail'))
                    if (elmSelected[0]) {
                        elmSelected.each((index, elm) => {
                            let rsChooseDetail = elm.querySelector('.option__items-lv2 input[type=\"radio\"]:checked').getAttribute('choose')
                            let elmChooseLastResult = $(elmSelected).find(`.choose-${rsChooseDetail} input[type="radio"]:checked`)
                            _this.addData(elmChooseLastResult)
                        })
                    }
                    else $(resultChoose1Or2).find('input[type="radio"]:checked').each((index, lastChoose) => { _this.addData($(lastChoose)) })
                }
                else $($(item).find('input[type=\"radio\"]:checked')).each((index, ipData) => { _this.addData($(ipData)) 
                })
            })
            return _this.thisData
        },
        handleEvent: function (pdId) {
            const _this = this
            $('.oder__list-options-btn input[type=\"radio\"]').change(() => { _this.showOption($('.option-detail.active'), _this.setOpitionState()) })
            $('.options .option input[type=\"radio\"]').change(() => _this.showOneOpone())
            $('button.id').click(() => _this.getLastData(pdId))
        },
    }
    oderApp.start(102)
})()
