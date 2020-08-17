// made by zummontt

function configShowHideFields(elems, boolean) {
    const set = boolean ? '' : 'display: none;'
    const array = elems.length == undefined ? [...[elems]] : [...elems]
    array.forEach(function(t){
        t.setAttribute('style', set)
    })
}
function configUploadImage(img, upload) {
    var elemSet = document.querySelector(upload)
    var elemImg = document.querySelector(img)
    if (elemSet.files.length > 0) {
        elemImg.setAttribute('src', window.URL.createObjectURL(elemSet.files[0]))
    } else {
        elemImg.setAttribute('src', 'images/_logo_100x100.png')
    }
}

// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded',function(){
    userDataLoad()
    mainLoad()
    mainLangSet()
    document.querySelector('#main_header1').addEventListener('click',function(){
        if (main == '_browse') { return }
        main = '_browse'
        mainLoad()
    })
    document.querySelector('#main_header2').addEventListener('click',function(){
        if (['_browse','_list'].indexOf(main) >= 0) { return }
        main = mains[2][0]
        mainLoad()
    })
    document.querySelector('#main_header3').addEventListener('click',function(){
        if (main == '_list') { return }
        main = '_list'
        mainLoad()
    })
})

function mainLoad() {
    var connect = mains.filter(function(t) { return t[0] == main })
    connect = connect == '' ? mains[0][1] : connect[0][1]

    var elem_reset = '[id^="scr_main_css_"], [id^="scr_main_scr_"]'
    document.querySelectorAll(elem_reset).forEach(function(t){
        
        t.parentNode.removeChild(t)
    })
    var elem_reset = '[id^="scr_main_config"]'
    document.querySelectorAll(elem_reset).forEach(function(t){

        t.innerHTML = ''
    })
    Object.keys(connect).forEach(function(t){
        
        if (t.startsWith('scr_main_css_')) {
            var link = document.createElement('link')
            link.id = t
            link.rel = 'stylesheet'
            link.href = connect[t]
            document.head.appendChild(link)

        } else if (t.startsWith('scr_main_scr_')) {
            var script = document.createElement('script')
            script.id = t
            script.src = connect[t]
            document.body.appendChild(script)

        } else {
            loadHtmltoElem('#' + t, connect[t])
        }
    })
}
function mainLangSet() {
    var lang_index = langs.indexOf(lang)+1
    if (lang_index < 1) { lang_index = 1 }

    main_lang_text.map(function(t){ return [[t[0], t[lang_index]]] }).forEach(function(t){

        document.querySelector(t[0][0]).textContent = t[0][1]
    })
    main_lang_tooltip.map(function(t){ return [[t[0], t[lang_index]]] }).forEach(function(t){

        document.querySelector(t[0][0]).title = t[0][1]
    })
}
    // ?lang=Thai&main=bootstrap_inv_basic&cl=Par&cl=123&cl=Mogo&il=jj&il=99&il=ee&il=88
function userDataLoad() {
    const urlParams = new URLSearchParams(window.location.search)
    const keys = urlParams.keys()
    const keys_list = ['cl','il']
    
    for (const key of keys) {
        var getby = 'get'
        if (keys_list.indexOf(key) >= 0) { getby = 'getAll' }
        userData[key] = urlParams[getby](key)
    }

    if (userData.cl == undefined) { client_list = zummonData.client_list }
    else { client_list = listToMatrix(userData.cl, 3); delete userData.cl }

    if (userData.il == undefined) { item_list = zummonData.item_list }
    else { item_list = listToMatrix(userData.il, 2); delete userData.il }

    main = userData.main == undefined ? '_browse' : userData.main
    lang = userData.lang
    doc_title = userData.doc_title
    saletax_rate = isNaN(userData.saletax_rate) ? 0.07 : parseFloat(userData.saletax_rate)
    incometax_rate = isNaN(userData.incometax_rate) ? -0.03 : parseFloat(userData.incometax_rate)
    an_price = userData.an_price
    an_qty = userData.an_qty
}
// https://www.sitepoint.com/get-url-parameters-with-javascript/

// --------------------------------------------------------------------------------------------------------------------

function listToMatrix(list, subArray) {
    var matrix = [], i, k
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % subArray === 0) {
            k++
            matrix[k] = []
        }
        matrix[k].push(list[i])
    }
    return matrix
}
// https://stackoverflow.com/questions/4492385/

function loadHtmltoElem(selectElem, file) {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
    xhr.open('get', file, true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector(selectElem).innerHTML = xhr.responseText
        }
    }
    xhr.send()
}
// https://stackoverflow.com/questions/32938168/

function isHidden(elem) {
    var style = window.getComputedStyle(elem);
    return (style.display === 'none')
}
// https://stackoverflow.com/questions/19669786/

// --------------------------------------------------------------------------------------------------------------------

function docActClear() {
    document.querySelectorAll(text_fields).forEach(t => {
        var attr = 'textContent'
        if (input_tags.indexOf(t.tagName) >= 0) {
            attr = 'value'
        }
        t[attr] = ''
    })
    document.querySelectorAll(number_fields).forEach(t => {
        var attr = 'textContent'
        if (AutoNumeric.isManagedByAutoNumeric(t) ) {
            AutoNumeric.set(t, '')
            return
        } else if (input_tags.indexOf(t.tagName) >= 0) {
            attr = 'value'
        }
        t[attr] = ''
    })
}
function docActPop() {
    const elems = document.querySelector('#tbody').children

    for (var z = elems.length-1; z > 0; z--) {
        
        if ( !isHidden(elems[z]) ) {
            elems[z].style.display = ''
            elems[z].querySelector('[name="item"]').value = ''
            AutoNumeric.set(elems[z].querySelector('[name="price"]'), '')
            AutoNumeric.set(elems[z].querySelector('[name="qty"]'), '')
            AutoNumeric.set(elems[z].querySelector('[name="amount"]'), '')
            calculateTotal()
            return
        }
    }
}
function docActSet() {
    const elems = document.querySelector('#config_doc_set')
    const elems2 = document.querySelector('#scr_main_config1')
    if ( isHidden(elems) ) {
        elems.hidden = false
        elems2.hidden = false
        return
    }
    elems.hidden = true
    elems2.hidden = true
}
function docActAdd() {
    const elems = document.querySelector('#tbody').children
    for (var z = 0; z < elems.length; z++) {
        
        if ( isHidden(elems[z]) ) {
            elems[z].style.display = ''
            return
        }
    }
}
function docActPrint() {
    const main_configs = document.querySelectorAll('[id^="scr_main_config"]')
    const main_header = document.querySelector('#main_header')
    const main_footer = document.querySelector('#main_footer')

    main_configs.forEach(function(t){
        t.style.display = 'none'
    })
    main_header.style.display = 'none'
    main_footer.style.display = 'none'
    document.body.setAttribute('style', "background-color: #fff;")

    window.print()

    main_configs.forEach(function(t){
        t.style.display = ''
    })
    main_header.style.display = ''
    main_footer.style.display = ''
    document.body.setAttribute('style', "background-color: #222;")
}

// --------------------------------------------------------------------------------------------------------------------

function docLangSet() {
    lang
    doc_title
}
function anPriceSet() {
    const elems = document.querySelectorAll(price_fields)

    var option = ans_price.filter(function(t){ return t[0] == an_price })
    option = option == '' ? ans_price[0][1] : option[0][1]
    
    if (AutoNumeric.isManagedByAutoNumeric(elems[0])) {
        an_price_obj.forEach(function(t){
            t.options.reset()
            t.update(option)
        })
    } else {
        an_price_obj = new AutoNumeric.multiple(price_fields, option)
    }
}
function anQtySet() {
    const elems = document.querySelectorAll(qty_fields)

    var option = ans_qty.filter(function(t){ return t[0] == an_qty })
    option = option == '' ? ans_qty[0][1] : option[0][1]

    if (AutoNumeric.isManagedByAutoNumeric(elems[0])) {
        an_qty_obj.forEach(function(t){
            t.options.reset()
            t.update(option)
        })
    } else {
        an_qty_obj = new AutoNumeric.multiple(qty_fields, option)
    }
}
function saletaxRateSet() {
    const rate_show = saletax_rate < 0 ? -saletax_rate : saletax_rate
    const elem = document.querySelector('#saletax_rate')
    var attr = 'textContent'
    if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value'}
    elem[attr] = (rate_show*100).toFixed(0) + '%'
    calculateTotal()
}
function incometaxRateSet() {
    const rate_show = incometax_rate < 0 ? -incometax_rate : incometax_rate
    const elem = document.querySelector('#incometax_rate')
    var attr = 'textContent'
    if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value'}
    elem[attr] = (rate_show*100).toFixed(0) + '%'
    calculateTotal()
}
function dateTypeSet() {
    var elem = document.querySelector("#config_doc_set_date_type")
    var select = elem.options[elem.selectedIndex].value
    document.querySelectorAll(date_fields).forEach(function(t){
        t.type = select
    })
}

// --------------------------------------------------------------------------------------------------------------------

function calculateTotal() {
    var elems = document.querySelectorAll('[name="amount"]')
    var total = 0
    for (var i = 0; i < elems.length; i++) {
        total += AutoNumeric.getNumber(elems[i])
    }
    AutoNumeric.set('#total',total)
    var saleTax = 0
    var incomeTax = 0
    if ( !isHidden(document.querySelector('#saletax')) ) {
        saleTax = total * saletax_rate
        AutoNumeric.set('#saletax',saleTax)
    }
    if ( !isHidden(document.querySelector('#incometax')) ) {
        incomeTax = total * incometax_rate
        AutoNumeric.set('#incometax',incomeTax)
    }
    AutoNumeric.set('#finaltotal',AutoNumeric.getNumber('#adjust') + total + saleTax + incomeTax)
}
function calculate(e) {
    var elemPrice = e.target.closest('[name="tr"]').querySelector('[name="price"]')
    var elemAmount = e.target.closest('[name="tr"]').querySelector('[name="amount"]')
    AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(e.target))
    calculateTotal()
}
function autofillClientIdAddress(e) {
    const index = client_list.map(function(t){ return t[0] }).indexOf(e.target.value)
    if (index >= 0) {
        var elem = document.querySelector('#client_id')
        var elem_attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { elem_attr = 'value' }
        elem[elem_attr] = client_list[index][1]

        var elem = document.querySelector('#client_address')
        var elem_attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { elem_attr = 'value' }
        elem[elem_attr] = client_list[index][2]
    }
}
function autofillItemPrice(e) {
    const tr = e.target.closest('[name="tr"]')
    const index = item_list.map(function(t){ return t[0] }).indexOf(e.target.value)
    if (index >= 0) {
        var elem = tr.querySelector('[name="price"]')
        AutoNumeric.set(elem, item_list[index][1])
    }
}

// --------------------------------------------------------------------------------------------------------------------