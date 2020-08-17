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
// bootstrap
    // scr_main_css_cdn:    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css',
    // scr_main_scr_cdn1:   'https://code.jquery.com/jquery-3.5.1.slim.min.js',
    // scr_main_scr_cdn2:   'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    // scr_main_scr_cdn3:   'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js',
// foundation
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css',
    // scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js',
// bulma
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css',

var mains = [
    ['_browse', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
        scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
        scr_main_form:       'form/_browse.html',
        scr_main_scr_compat: 'form_script/_browse.js',
    }],
    ['_list', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
        scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
        scr_main_form:       'form/_list.html',
        scr_main_scr_compat: 'form_script/_list.js',
    }],

    ['uikit_inv_business', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
        scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
        scr_main_css_compat: 'form_style/_uikit.css',
        scr_main_css_form:   'form_style/uikit_inv_business.css',
        scr_main_form:       'form/uikit_inv_business.html',
        scr_main_config:     'config/_inv.html',
        scr_main_config1:    'config/uikit_inv_business.html',
        scr_main_scr_form:   'form_script/uikit_inv_business.js',
        scr_main_scr_compat: 'source/_inv.js',
        scr_main_scr_config: 'config/_inv.js',
    }],

    ['bootstrap_inv_basic', {
        scr_main_css_cdn:    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css',
        scr_main_form:       'form/bootstrap_inv_basic.html',
        scr_main_scr_form:   'form_script/bootstrap_inv_basic.js',
        scr_main_scr_compat: 'source/_inv.js',
        scr_main_config:     'config/inv.html',
        scr_main_scr_config: 'config/inv.js',
    }],

    ['foundation_inv_basic', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css',
        scr_main_css_compat: 'form_style/_foundation.css',
        scr_main_css_form:   'form_style/foundation_inv_basic.css',
        scr_main_form:       'form/foundation_inv_basic.html',
        scr_main_scr_form:   'form_script/foundation_inv_basic.js',
        scr_main_scr_compat: 'source/_inv.js',
        scr_main_config:     'config/inv.html',
        scr_main_scr_config: 'config/inv.js',
    }],

    ['bulma_inv_primary', {
        scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css',
        scr_main_css_compat: 'form_style/_bulma.css',
        scr_main_css_form:   'form_style/bulma_inv_primary.css',
        scr_main_form:       'form/bulma_inv_primary.html',
        scr_main_scr_form:   'form_script/bulma_inv_primary.js',
        scr_main_scr_compat: 'source/_inv.js',
        scr_main_config:     'config/inv.html',
        scr_main_scr_config: 'config/inv.js',
    }],
]

var langs = ['English', 'Thai']

var docs_inv_title = [
    ['Invoice', {}],
    ['Quotation', {}],
    ['Receipt', {}],
    ['TaxInvoice', {}],
]

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
        // langs
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
        // langs
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