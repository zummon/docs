// created by zummontt 
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
    ['', 'manual']
]

// config_doc_title
var doc_text = {
    untitled: [
        ['#doc_title', 
            'Document', 'เอกสาร'],
        ['#vendor_name_label',
            'Vendor name','ชื่อผู้ขาย'],
        ['#vendor_id_label',
            'Vendor register','ทะเบียนเลขที่ผู้ขาย'],
        ['#vendor_address_label',
            'Vendor address','ที่อยู่ผู้ขาย'],
        ['#vendor_sign_label',
            'Vendor signature','ลายมือชื่อผู้ขาย'],
        ['#vendor_rank_label',
            'Vendor position','ตำแหน่งผู้ขาย'],
        ['#client_name_label',
            'Client name','ชื่อผู้ซื้อ'],
        ['#client_id_label',
            'Client register','ทะเบียนเลขที่ผู้ซื้อ'],
        ['#client_address_label',
            'Client address','ที่อยู่ผู้ซื้อ'],
        ['#client_sign_label',
            'Client signature','ลายมือชื่อผู้ซื้อ'],
        ['#client_rank_label',
            'Client position','ตำแหน่งผู้ซื้อ'],
        ['#ref_label',
            'No', 'เลขที่'],
        ['#date_label',
            'Date','วันที่'],
        ['#duedate_label',
            'Due date','ครบกำหนด'],
        ['#payment_label',
            'Payment','การชำระเงิน'],
        ['#subject_label',
            'Project','โครงการ'],
        ['#note_label',
            'Note','หมายเหตุ'],
        ['#line_label',
            'No','ลำดับ'],
        ['#item_label',
            'Description','รายการ'],
        ['#price_label',
            'Price','ราคา'],
        ['#qty_label',
            'Qty','จำนวน'],
        ['#amount_label',
            'Amount','รวม'],
        ['#total_label',
            'Subtotal','รวม'],
        ['#saletax_label',
            'Sales tax','ภาษีมูลค่าเพิ่ม'],
        ['#incometax_label',
            'Income tax','ภาษีหัก ณ ที่จ่าย'],
        ['#adjust_label',
            'Adjust','ปรับปรุง'],
        ['#finaltotal_label',
            'Total','รวมทั้งสิ้น'],
        ['#thank_message',
            'Thank you','^_^']
    ],
    invoice: [
        ['#doc_title', 
            'Invoice', 'ใบแจ้งหนี้'],
    ],
    quotation: [
        ['#doc_title', 
            'Quotation', 'ใบเสนอราคา'],
        ['#duedate_label',
            'Order before', 'สั่งซื้อก่อนวันที่'],
    ],
    receipt: [
        ['#doc_title', 
            'Receipt', 'ใบเสร็จรับเงิน'],
    ],
    taxinvoice: [
        ['#doc_title', 
            'Tax Invoice', 'ใบกำกับภาษี'],
        ['#vendor_id_label',
            'Vendor register', 'เลขประจำตัวผู้เสียภาษีผู้ขาย'],
        ['#client_id_label',
            'Client register', 'เลขประจำตัวผู้เสียภาษีผู้ซื้อ'],
        ['#ref_label',
            'tax-inv-no', 'เลขที่ใบกำกับภาษี'],
    ],
}

function calculateTotal() {
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
    const rate_show = incometax_rate < 0 ? -incometax_rate : incometax_rate
    const elem = document.querySelector(label)
    var attr = 'textContent'
    if (input_tags.indexOf(elem.tagName) >= 0) { attr = 'value'}
    elem[attr] = (rate_show*100).toFixed(0) + '%'
}
function configSetDocLang() {
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