// created by zummontt & searched for help from
// https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
// https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
// https://www.sitepoint.com/get-url-parameters-with-javascript/
// https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
// https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object

// config_lang
var langs = ['English', 'Thai']
var input_tags = ['INPUT','TEXTAREA']
var an_price_obj, an_qty_obj, cl, il
var userData = {}
var zummonData = {
    lang: 'English',
    doc_title: 'invoice',
    saletax_rate: 0.07,
    incometax_rate: -0.03,
    an_price: 'num',
    an_qty: 'integer',
    cl: [['','','']],
    il: [['','']],
}

// var head_foot_lang_tooltip = [
//     ['#main_header1', 
//         'Choose a form', 
//         'เลือกฟอร์ม'
//     ],
//     ['#main_header2', 
//         'Create a document', 
//         'สร้างเอกสาร'
//     ],
//     ['#main_header3', 
//         'Edit data list', 
//         'แก้ไขข้อมูล'
//     ]
// ]
// var head_foot_lang_text = [
//     ['#main_header_title', 
//         'Docs zummon webapp', 
//         'เอกสาร zummon webapp'],

//     ['#main_header_subtitle', 
//         'First version on Github', 
//         'เวอร์ชั่นแรกบน Github'],

//     ['#main_footer1_head', 'Library tools', 'เครื่องมือใช้งาน'],
//     ['#main_footer1_item_1', 
//         'AutoNumeric', 
//         'AutoNumeric'
//     ],

//     ['#main_footer2_head', 'Made by', 'สร้างโดย'],
//     ['#main_footer2_item_1', 
//         'zummon (Github)', 
//         'zummon (Github)'
//     ],
//     ['#main_footer2_item_2', 
//         'zummon (Facebook: zummontt)', 
//         'zummon (เฟสบุค: zummontt)'
//     ],
//     ['#main_footer2_item_3', 
//         'donate to support (PayPal: zummontt)', 
//         'สนับสนุนโดยการโอนเงิน (PayPal: zummontt)'
//     ],

//     ['#main_footer3_head', 'Style usage', 'รูปแบบเอกสาร'],
//     ['#main_footer3_item_1', 
//         'UIkit', 
//         'UIkit'
//     ],
//     ['#main_footer3_item_2', 
//         'Bootstrap', 
//         'Bootstrap'
//     ],
//     ['#main_footer3_item_3', 
//         'Foundation', 
//         'Foundation'
//     ],
//     ['#main_footer3_item_4', 
//         'Bulma', 
//         'Bulma'
//     ],
//     ['#main_footer3_item_5', 
//         'Materialize', 
//         'Materialize'
//     ],
// ]

// function configSetLang() {
//     var lang_index = langs.indexOf(lang)+1
//     if (lang_index < 1) { lang_index = 1 }

//     head_foot_lang_text.map(function(t){ return [[t[0], t[lang_index]]] }).forEach(function(t){

//         document.querySelector(t[0][0]).textContent = t[0][1]
//     })
//     head_foot_lang_tooltip.map(function(t){ return [[t[0], t[lang_index]]] }).forEach(function(t){

//         document.querySelector(t[0][0]).title = t[0][1]
//     })
// }

document.addEventListener('DOMContentLoaded',function(){
    const queryStr = window.location.search

    const browse = document.querySelector('#header_browse')
    const docs = document.querySelector('#header_docs')
    const brief = document.querySelector('#header_brief')

    if (browse !== null) { browse.href = '../source/browse.html' + queryStr }
    if (docs !== null) { docs.href = '../forms/bulma_inv_tiles.html' + queryStr }
    if (brief !== null) { brief.href = '../source/brief.html' + queryStr }

})