// made by zummontt
var main, lang, form ,doc_title ,saletax_rate ,incometax_rate ,an_price ,an_qty ,client_list ,item_list
var logo_fields, label_fields, price_fields, qty_fields, text_fields, number_fields, content_edit, input_fields

var userData = {}
var zummonData = {
    client_list: [['','','']],
    item_list: [['','']]
}
var input_tags = ['INPUT','TEXTAREA']
var an_price_obj, an_qty_obj
var form_tr_show, form_tr_hide

// uikit 
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
    // scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
    // scr_main_scr_cdn2:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit-icons.min.js',
// bulma
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css',

// bootstrap
    // scr_main_css_cdn:    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css',
    // scr_main_scr_cdn1:   'https://code.jquery.com/jquery-3.5.1.slim.min.js',
    // scr_main_scr_cdn2:   'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    // scr_main_scr_cdn3:   'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js',
// foundation
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css',
    // scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js',
// materialize
    // scr_main_css_cdn1:   'https://fonts.googleapis.com/icon?family=Material+Icons'
    // scr_main_css_cdn:    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    // scr_main_scr_cdn:   'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

var mains = [
    ['browse', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
        scr_main_form:       'source/browse.html',
        scr_main_scr_form:   'source/browse.js',
        scr_main_scr_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
    }],
    ['list', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
        scr_main_form:       'source/list.html',
        scr_main_scr_form:   'source/list.js',
        scr_main_scr_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
    }],
    ['uikit_inv_business', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
        scr_main_css_compat: 'form_style/uikit.css',
        scr_main_css_form:   'form_style/uikit_inv_business.css',

        scr_main_config:     'source/docs_inv.html',
        scr_main_config1:    'config/uikit_inv_business.html',
        scr_main_form:       'form/uikit_inv_business.html',

        scr_main_scr_form:   'form_script/uikit_inv_business.js',
        scr_main_scr_compat: 'source/docs_inv.js',
        scr_main_scr_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
    }],
    ['bulma_inv_tiles', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css',
        scr_main_css_compat: 'form_style/bulma.css',
        scr_main_css_form:   'form_style/bulma_inv_tiles.css',

        scr_main_config:     'source/docs_inv.html',
        scr_main_form:       'form/bulma_inv_tiles.html',

        scr_main_scr_form:   'form_script/bulma_inv_tiles.js',
        scr_main_scr_compat: 'source/docs_inv.js',
    }],

]

var langs = ['English', 'Thai']

var docs_inv_text = {
    all: [
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
            'Doc-no', 'เลขที่'],
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
        ['incometax_label',
            'Income tax','ภาษีหัก ณ ที่จ่าย'],
        ['adjust_label',
            'Adjust','ปรับปรุง'],
        ['finaltotal_label',
            'Total','รวมทั้งสิ้น'],
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

var ans_price = [
    ['num', {}],
    ['integer', { decimalPlaces: 0 }],
    ['DollarSuffix', { currencySymbol: '$', currencySymbolPlacement: 's' }],
    ['Dollar', { currencySymbol: '$' }],
    ['BahtSuffix', { currencySymbol: '฿', currencySymbolPlacement: 's' }],
    ['Baht', { currencySymbol: '฿' }],
]
var ans_qty = [
    ['num', {}],
    ['integer', { decimalPlaces: 0 }],
]

var main_lang_tooltip = [
    ['#main_header1', 
        'Choose a form', 
        'เลือกฟอร์ม'
    ],
    ['#main_header2', 
        'Create a document', 
        'สร้างเอกสาร'
    ],
    ['#main_header3', 
        'Edit data list', 
        'แก้ไขข้อมูล'
    ]
]
var main_lang_text = [
    ['#main_header_title', 
        'Docs zummon webapp', 
        'เอกสาร zummon webapp'],

    ['#main_header_subtitle', 
        'First version on Github', 
        'เวอร์ชั่นแรกบน Github'],

    ['#main_footer1_head', 'Library tools', 'เครื่องมือใช้งาน'],
    ['#main_footer1_item_1', 
        'AutoNumeric', 
        'AutoNumeric'
    ],

    ['#main_footer2_head', 'Made by', 'สร้างโดย'],
    ['#main_footer2_item_1', 
        'zummon (Github)', 
        'zummon (Github)'
    ],
    ['#main_footer2_item_2', 
        'zummon (Facebook: zummontt)', 
        'zummon (เฟสบุค: zummontt)'
    ],
    ['#main_footer2_item_3', 
        'donate to support (PayPal: zummontt)', 
        'สนับสนุนโดยการโอนเงิน (PayPal: zummontt)'
    ],

    ['#main_footer3_head', 'Style usage', 'รูปแบบเอกสาร'],
    ['#main_footer3_item_1', 
        'UIkit', 
        'UIkit'
    ],
    ['#main_footer3_item_2', 
        'Bootstrap', 
        'Bootstrap'
    ],
    ['#main_footer3_item_3', 
        'Foundation', 
        'Foundation'
    ],
    ['#main_footer3_item_4', 
        'Bulma', 
        'Bulma'
    ],
    ['#main_footer3_item_5', 
        'Materialize', 
        'Materialize'
    ],
]
var browse_images = mains.slice(2).map(function(t){
    return [t[0], 'images/' + t[0] + '.png']
})