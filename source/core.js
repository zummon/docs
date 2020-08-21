// created by zummontt & got helped from
// https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
// https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
// https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript

var input_tags = ['INPUT','TEXTAREA']
var an_price, an_qty, an_price_obj, an_qty_obj
var userData = {}
var zummonData = {
    client_list: [['','','']],
    item_list: [['','']]
}
// config_lang
var langs = ['English', 'Thai']
var lang ,doc_title ,saletax_rate ,incometax_rate ,an_price ,an_qty ,client_list ,item_list

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

// ?main=uikit_inv_business&lang=Thai&cl=Par&cl=123&cl=Mogo&il=jj&il=99&il=ee&il=88
function userDataLoad() {
    const urlParams = new URLSearchParams(window.location.search)
    const keys = urlParams.keys()
    const keys_list = ['cl','il']

    userData.saletax_rate = 0.07
    userData.incometax_rate = -0.03
    
    for (const key of keys) {
        var getby = 'get'
        if (keys_list.indexOf(key) >= 0) { getby = 'getAll' }
        userData[key] = urlParams[getby](key)
    }

    if (userData.cl == undefined) { client_list = zummonData.client_list }
    else { client_list = listToMatrix(userData.cl, 3); delete userData.cl }

    if (userData.il == undefined) { item_list = zummonData.item_list }
    else { item_list = listToMatrix(userData.il, 2); delete userData.il }

    lang = userData.lang == undefined ? 'English' : userData.lang
    doc_title = userData.doc_title == undefined ? 'invoice' : userData.doc_title
    saletax_rate = isNaN(userData.saletax_rate) ? 0.07 : parseFloat(userData.saletax_rate)
    incometax_rate = isNaN(userData.incometax_rate) ? -0.03 : parseFloat(userData.incometax_rate)
    an_price = userData.an_price
    an_qty = userData.an_qty
}
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
// func actionConfig 
function isHidden(elem) {
    var style = window.getComputedStyle(elem)
    return (style.display === 'none')
}

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