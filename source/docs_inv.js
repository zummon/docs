// created by zummontt

// func startDoc
var tr_show, tr_hide, content_editable

// config_an_price
var ans_price = [
    ['num', {}],
    ['integer', { decimalPlaces: 0 }],
    ['DollarSuffix', { currencySymbol: '$', currencySymbolPlacement: 's' }],
    ['Dollar', { currencySymbol: '$' }],
    ['BahtSuffix', { currencySymbol: '฿', currencySymbolPlacement: 's' }],
    ['Baht', { currencySymbol: '฿' }],
]

// config_an_qty
var ans_qty = [
    ['num', {}],
    ['integer', { decimalPlaces: 0 }],
]

// config_date_type
var date_types = [
    ['date', 'default'],
    ['', 'manual'],
]

// config_doc_title
var doc_text = {
    untitled: [
        ['#doc_title', 
            'Document', 
            'เอกสาร',
        ],
        ['#vendor_name_label',
            'Vendor name',
            'ชื่อผู้ขาย',
        ],
        ['#vendor_id_label',
            'Vendor register',
            'ทะเบียนเลขที่',
        ],
        ['#vendor_address_label',
            'Vendor address',
            'ที่อยู่ผู้ขาย',
        ],
        ['#vendor_sign_label',
            'Vendor signature',
            'ลายมือชื่อผู้ขาย',
        ],
        ['#vendor_rank_label',
            'Vendor position',
            'ตำแหน่งผู้ขาย',
        ],
        ['#client_name_label',
            'Client name',
            'ชื่อผู้ซื้อ',
        ],
        ['#client_id_label',
            'Client register',
            'ทะเบียนเลขที่',
        ],
        ['#client_address_label',
            'Client address',
            'ที่อยู่ผู้ซื้อ',
        ],
        ['#client_sign_label',
            'Client signature',
            'ลายมือชื่อผู้ซื้อ',
        ],
        ['#client_rank_label',
            'Client position',
            'ตำแหน่งผู้ซื้อ',
        ],
        ['#ref_label',
            'No', 
            'เลขที่',
        ],
        ['#date_label',
            'Date',
            'วันที่',
        ],
        ['#duedate_label',
            'Due date',
            'กำหนดชำระ',
        ],
        ['#payment_label',
            'Payment',
            'การชำระเงิน',
        ],
        ['#subject_label',
            'Project',
            'โครงการ',
        ],
        ['#note_label',
            'Note',
            'หมายเหตุ',
        ],
        ['#line_label',
            'No',
            'ลำดับ',
        ],
        ['#item_label',
            'Description',
            'รายการ',
        ],
        ['#price_label',
            'Price',
            'ราคา',
        ],
        ['#qty_label',
            'Quantity',
            'จำนวน',
        ],
        ['#amount_label',
            'Amount',
            'เป็นเงิน',
        ],
        ['#total_label',
            'Subtotal',
            'รวม',
        ],
        ['#saletax_label',
            'Sales tax',
            'ภาษีมูลค่าเพิ่ม',
        ],
        ['#incometax_label',
            'Income tax',
            'ภาษีหัก ณ ที่จ่าย',
        ],
        ['#adjust_label',
            'Adjust',
            'ปรับปรุง'],
        ['#finaltotal_label',
            'Total',
            'รวมทั้งสิ้น',
        ],
        ['#thank_message',
            'Thank you',
            '^_^',
        ],
    ],
    invoice: [
        ['#doc_title', 
            'Invoice',
            'ใบแจ้งหนี้',
        ],
        ['#date_label',
            'Inv-date',
            'วันที่-ใบแจ้งหนี้',
        ],
        ['#ref_label',
            'Inv-number',
            'เลขที่-ใบแจ้งหนี้',
        ],
    ],
    quotation: [
        ['#doc_title', 
            'Quotation',
            'ใบเสนอราคา',
        ],
        ['#duedate_label',
            'Offer until',
            'สั่งซื้อก่อนวันที่',
        ],
    ],
    receipt: [
        ['#doc_title', 
            'Receipt',
            'ใบเสร็จรับเงิน',
        ],
        ['#date_label',
            'Rec-date',
            'วันที่-ใบเสร็จ',
        ],
        ['#ref_label',
            'Rec-number',
            'เลขที่-ใบเสร็จ',
        ],
    ],
    taxinvoice: [
        ['#doc_title', 
            'Tax Invoice',
            'ใบกำกับภาษี',
        ],
        ['#vendor_id_label',
            'Vendor register',
            'เลขประจำตัวผู้เสียภาษี',
        ],
        ['#client_id_label',
            'Client register',
            'เลขประจำตัวผู้เสียภาษี',
        ],
        ['#ref_label',
            'tax-inv-no',
            'ใบกำกับภาษี-เลขที่',
        ],
    ],
}

document.addEventListener('DOMContentLoaded',function(){
    startDoc()
    // ---- userDataSet ----

    ;['#vendor_name', '#vendor_id', '#vendor_address', '#payment', '#thank_message'].forEach(function(t){
        var elem = document.querySelector(t)
        if (elem == null || userData[t.slice(1)] == null) { return }
        var attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value' }
        elem[attr] = userData[t.slice(1)]
    })

    // ---- action ----

    document.querySelector('#action_clear').addEventListener('click',function(){
        // actionClear
    })
    document.querySelector('#action_pop').addEventListener('click',actionPop)
    document.querySelector('#action_config').addEventListener('click',actionConfig)
    document.querySelector('#action_add').addEventListener('click',actionAdd)
    document.querySelector('#action_print').addEventListener('click',actionPrint)

    // ---- config ----

    const config_lang = document.querySelector('#config_lang')
    const config_saletax_rate = document.querySelector('#config_saletax_rate')
    const config_incometax_rate = document.querySelector('#config_incometax_rate')
    const config_doc_title = document.querySelector('#config_doc_title')
    const config_an_price = document.querySelector('#config_an_price')
    const config_an_qty = document.querySelector('#config_an_qty')
    const config_date_type =  document.querySelector('#config_date_type')

    langs.forEach(function(t){
        var op = document.createElement('option')
        op.value = t
        op.textContent = t
        config_lang.appendChild(op)
    })
    ans_price.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        op.textContent = t[0]
        config_an_price.appendChild(op)
    })
    ans_qty.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        op.textContent = t[0]
        config_an_qty.appendChild(op)
    })
    Object.keys(doc_text).forEach(function(t){
        var op = document.createElement('option')
        op.value = t
        op.textContent = t
        config_doc_title.appendChild(op)
    })
    date_types.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        op.textContent = t[1]
        config_date_type.appendChild(op)
    })

    config_saletax_rate.value = userData.saletax_rate
    config_incometax_rate.value = userData.incometax_rate
    config_lang.value = userData.lang
    config_doc_title.value = userData.doc_title
    config_an_price.value = userData.an_price
    config_an_qty.value = userData.an_qty

    config_saletax_rate.addEventListener('change',function(e){
        userData.saletax_rate = parseFloat(e.target.value)

        configSetTaxRate('#saletax_rate')
        calculateTotal()
    })
    config_incometax_rate.addEventListener('change',function(e){
        userData.incometax_rate = parseFloat(e.target.value)

        configSetTaxRate('#incometax_rate')
        calculateTotal()
    })
    config_lang.addEventListener('change',function(e){
        userData.lang = e.target.value

        configSetDocLang()
    })
    config_doc_title.addEventListener('change',function(e){
        userData.doc_title = e.target.value

        configSetDocLang()
    })
    config_an_price.addEventListener('change',function(e){
        userData.an_price = e.target.value

        var option = ans_price.filter(function(t){ return t[0] == userData.an_price })
            option = option == '' ? ans_price[0][1] : option[0][1]
        an_price_obj.forEach(function(t){
            t.options.reset()
            t.update(option)
        })
    })
    config_an_qty.addEventListener('change',function(e){
        userData.an_qty = e.target.value

        var option = ans_qty.filter(function(t){ return t[0] == userData.an_qty })
            option = option == '' ? ans_qty[0][1] : option[0][1]
        an_qty_obj.forEach(function(t){
            t.options.reset()
            t.update(option)
        })
    })
    config_date_type.addEventListener('change',function(e){
        const v = e.target.value
        document.querySelectorAll('#date, #duedate').forEach(function(t){
            t.type = v
        })
    })

    configSetDocLang()
    configSetTaxRate('#saletax_rate')
    configSetTaxRate('#incometax_rate')

    // ---- autoNumeric ----

    document.querySelectorAll('[name="qty"]').forEach(function(t){
        t.addEventListener('change',function(e){
            const elemPrice = e.target.closest('[name="tr"]').querySelector('[name="price"]')
            const elemAmount = e.target.closest('[name="tr"]').querySelector('[name="amount"]')
            AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(e.target))
            calculateTotal()
        })
    })
    document.querySelectorAll('[name="amount"], #adjust').forEach(function(t){
        t.addEventListener('change', calculateTotal)
    })

    // ---- datalist ----

    const client_list = document.querySelector('#client_list')
    cl.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        client_list.appendChild(op)
    })
    const item_list = document.querySelector('#item_list')
    il.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        item_list.appendChild(op)
    })

    document.querySelectorAll('[name="item"]').forEach(function(t){
        t.setAttribute('list', 'item_list')
        t.addEventListener('change', autofillItem)
    })
    document.querySelector('#client_name').setAttribute('list', 'client_list')
    document.querySelector('#client_name').addEventListener('change', autofillClient)
})

function startDoc() {
    const doc_tbody = document.querySelector('#tbody')
    const doc_tr = document.querySelector('[name="tr"]')

    for (let z = 1; z <= tr_show + tr_hide; z++) {
        if (z > tr_show ) { doc_tr.setAttribute('style', 'display: none;') }

        var line = doc_tr.querySelector('[name="line"]')
        var line_attr = 'textContent'
        if (input_tags.indexOf(line.tagName) >= 0) { line_attr = 'value' }

        line[line_attr] = z
        doc_tbody.appendChild(doc_tr.cloneNode(true))
    }
    doc_tr.remove()

    document.querySelectorAll(content_editable).forEach(function(t){
        if (input_tags.indexOf(t.tagName) >= 0) { return }
        t.setAttribute('contenteditable', 'true')
    })

    document.querySelectorAll('#headlogo_img').forEach(function(t){
        t.setAttribute('src', '../source/logo_100x100.png')
    })
}

// ---- autoNumeric ----

function calculateTotal() {
    const saletax_rate = userData.saletax_rate
    const incometax_rate = userData.incometax_rate
    const elems = document.querySelectorAll('[name="amount"]')
    var total = 0
    for (let i = 0; i < elems.length; i++) {
        total += AutoNumeric.getNumber(elems[i])
    }
    AutoNumeric.set('#total',total)
    var saletax = total * saletax_rate
    AutoNumeric.set('#saletax',saletax)
    var incometax = total * incometax_rate
    AutoNumeric.set('#incometax',incometax)
    AutoNumeric.set('#finaltotal',AutoNumeric.getNumber('#adjust') + total + saletax + incometax)
}

// ---- config ----

function configUploadImage(img, upload) {
    var elemSet = document.querySelector(upload)
    var elemImg = document.querySelector(img)
    if (elemSet.files.length > 0) {
        elemImg.setAttribute('src', window.URL.createObjectURL(elemSet.files[0]))
    } else {
        elemImg.setAttribute('src', '../source/logo_100x100.png')
    }
}
function configSetTaxRate(label) {
    const key = label.slice(1)
    const tax_rate = userData[key] == undefined ? zummonData[key] : userData[key]
    const rate_show = tax_rate < 0 ? -tax_rate : tax_rate
    const elem = document.querySelector(label)
    var attr = 'textContent'
    if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value'}
    elem[attr] = (rate_show*100).toFixed(0) + '%'
}
function configSetDocLang() {
    const doc_title = userData.doc_title == undefined ? zummonData.doc_title : userData.doc_title
    const lang = userData.lang
    var lang_index = langs.indexOf(lang)+1
    if (lang_index < 1) { lang_index = 1 }

    doc_text.untitled.map(function(t){ return [t[0], t[lang_index]] }).forEach(function(t){
        var elem = document.querySelector(t[0])
        var attr = 'textContent'
        if (elem == null) { return }
        else if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value' }
        elem[attr] = t[1]
    })
    doc_text[doc_title].map(function(t){ return [t[0], t[lang_index]] }).forEach(function(t){
        var elem = document.querySelector(t[0])
        var attr = 'textContent'
        if (elem == null) { return }
        else if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value' }
        elem[attr] = t[1]
    })
}

// ---- action ----

function actionClear(applyto) {
    document.querySelectorAll(applyto).forEach(function(t){
        var attr = 'textContent'
        if (AutoNumeric.isManagedByAutoNumeric(t) ) {
            AutoNumeric.set(t, '')
        } else if (input_tags.indexOf(t.tagName) >= 0) {
            attr = 'value'
        }
        t[attr] = ''
    })
}
function actionConfig() {
    const elem = document.querySelector('#config')
    if ( isHidden(elem) ) {
        elem.setAttribute('style', '')
        return
    }
    elem.setAttribute('style', 'display: none;')
}
function actionPop() {
    const elems = document.querySelector('#tbody').children

    for (var z = elems.length-1; z > 0; z--) {
        
        if ( !isHidden(elems[z]) ) {
            elems[z].setAttribute('style', 'display: none;')
            elems[z].querySelector('[name="item"]').value = ''
            AutoNumeric.set(elems[z].querySelector('[name="price"]'), '')
            AutoNumeric.set(elems[z].querySelector('[name="qty"]'), '')
            AutoNumeric.set(elems[z].querySelector('[name="amount"]'), '')
            calculateTotal()
            return
        }
    }
}
function actionAdd() {
    const elems = document.querySelector('#tbody').children
    for (var z = 0; z < elems.length; z++) {
        
        if ( isHidden(elems[z]) ) {
            elems[z].setAttribute('style', '')
            return
        }
    }
}
function actionPrint() {
    window.print()
    userDataCreate()
    // userDataSend()
    window.location.href = '../forms/bulma_inv_tiles.html?' + userDataSend()
}

// ---- datalist ----

function autofillClient(e) {
    const index = cl.map(function(t){ return t[0] }).indexOf(e.target.value)
    if (index >= 0) {
        var elem = document.querySelector('#client_id')
        var elem_attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { elem_attr = 'value' }
        elem[elem_attr] = cl[index][1]

        var elem = document.querySelector('#client_address')
        var elem_attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { elem_attr = 'value' }
        elem[elem_attr] = cl[index][2]
    }
}
function autofillItem(e) {
    const tr = e.target.closest('[name="tr"]')
    const index = il.map(function(t){ return t[0] }).indexOf(e.target.value)
    if (index >= 0) {
        var elem = tr.querySelector('[name="price"]')
        AutoNumeric.set(elem, il[index][1])
    }
}

function userDataCreate() {
    ;['#vendor_name', '#vendor_id', '#vendor_address', '#payment', '#thank_message'].forEach(function(t){
        var elem = document.querySelector(t)
        var attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value' }
        userData[t.slice(1)] = elem[attr]
    })

    var client_list = []
    ;['#client_name', '#client_id', '#client_address'].forEach(function(t){
        var elem = document.querySelector(t)
        if (elem == null) { return }
        var attr = 'textContent'
        if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value' }
        client_list.push(elem[attr])
    })
    const index_client = cl.map(function(t){ return t[0] }).indexOf(client_list[0])
    if (index_client >= 0) {
        cl.splice(index_client, 1, client_list)
    } else if (client_list[0] !== '') {
        cl.push(client_list)
    }
    
    const items = document.querySelectorAll('[name="item"]')
    const prices = document.querySelectorAll('[name="price"]')
    for (let z = 0; z < items.length; z++) {
        var item, price, attr = 'textContent'
        if (input_tags.indexOf(items[z].tagName) >= 0) { attr = 'value' }
        if (items[z][attr] == '') { continue }
        item = items[z][attr]
        
        if (AutoNumeric.isManagedByAutoNumeric(prices[z])) {
            price = AutoNumeric.getNumericString(prices[z])
        } else {
            var attr = 'textContent'
            if (input_tags.indexOf(prices[z].tagName) >= 0) { attr = 'value' }
            price = prices[z][attr]
        }
        var item_list = [item, price]

        var index_item = il.map(function(t){ return t[0] }).indexOf(item_list[0])
        if (index_item >= 0) {
            il.splice(index_item, 1, item_list)
        } else if (item_list[0] !== '') {
            il.push(item_list)
        }
    }
}
// func actionConfig 
function isHidden(elem) {
    var style = window.getComputedStyle(elem)
    return (style.display === 'none')
}