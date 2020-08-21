var logo_fields, label_fields, price_fields, qty_fields, text_fields, number_fields, content_edit, input_fields

// uikit
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/css/uikit.min.css',
    // scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit.min.js',
    // scr_main_scr_cdn2:   'https://cdn.jsdelivr.net/npm/uikit@3.5.6/dist/js/uikit-icons.min.js',
// bulma
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css',

// foundation
    // scr_main_css_cdn:    'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css',
    // scr_main_scr_cdn1:   'https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js',
// bootstrap
    // scr_main_css_cdn:    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css',
    // scr_main_scr_cdn1:   'https://code.jquery.com/jquery-3.5.1.slim.min.js',
    // scr_main_scr_cdn2:   'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
    // scr_main_scr_cdn3:   'https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js',
// materialize
    // scr_main_css_cdn1:   'https://fonts.googleapis.com/icon?family=Material+Icons'
    // scr_main_css_cdn:    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    // scr_main_scr_cdn:    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'


document.addEventListener('DOMContentLoaded',function(){
    userDataLoad()
    headerFooterLoad()
    
})

// ----------------------------- header & footer ------------------------------------------------------------



function headerFooterLoad() {
    var div = document.createElement('div')
    div.id = 'zummon_header'
    document.body.insertBefore(div, document.body.firstChild)
    loadHtmltoElem('#zummon_header', '../source/header.html')

    var scr = document.scripts[0]
    var div = document.createElement('div')
    div.id = 'zummon_footer'
    document.body.insertBefore(div, scr)
    loadHtmltoElem('#zummon_footer', '../source/footer.html')

    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=K2D&display=swap'
    document.head.appendChild(link)

    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '../source/head_foot.css'
    document.head.appendChild(link)

}

// --------------------------------------------------------------------------------------------------------------------


function loadHtmltoElem(elem, html) {
    var xhr = XMLHttpRequest == undefined ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest()
    xhr.open('get', html, true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector(elem).innerHTML = xhr.responseText
        }
    }
    xhr.send()
}
// https://stackoverflow.com/questions/32938168/

// --------------------------------------------------------------------------------------------------------------------

//   function userDataCreate() {
//     userData.main = [main]
//     userData.lang = [lang]
//     userData.doc_title = [doc_title]
//     userData.doc_style = [doc_style]
//     userData.saletax_rate = [saletax_rate]
//     userData.incometax_rate = [incometax_rate] 
//     userData.an_price = [an_price]
//     userData.an_qty = [an_qty]
//     userData.vendor_name = [zummonGetElemText('#vendor_name')]
//     userData.vendor_id = [zummonGetElemText('#vendor_id')]
//     userData.vendor_address = [zummonGetElemText('#vendor_address')]
//     userData.payment = [zummonGetElemText('#payment')]

//     const cl = [
//       zummonGetElemText('#client_name'),
//       zummonGetElemText('#client_id'),
//       zummonGetElemText('#client_address')
//     ]
    
//     const index_client = userData.client_list.map(t => t[0]).indexOf(cl[0])
//     if (index_client >= 0) {
//       userData.client_list.splice(index_client, cl)
//     } else if (cl[0] !== '') {
//       userData.client_list.push(cl)
//     }

//     const items = document.querySelectorAll('[name="item"]')
//     const prices = document.querySelectorAll('[name="price"]')
//     for (var z = 0; z < items.length; z++) {
//       var il = [
//         zummonGetElemText(items[z]),
//         zummonGetElemText(prices[z])
//       ]
//       if (items[z] !== '') {
//         var index_item = userData.item_list.map(t => t[0]).indexOf(il[0])
//         if (index_item >= 0) {
//           userData.item_list.splice(index_item, il)
//         } else if (il[0] !== '') {
//           userData.item_list.push(il)
//         }
//       }
//     }
//   }




function userDataGenerate() {
    const userLink = window.location.search
}



function componentLoad() {
    var scr = document.createElement('script')
    scr.src = '../source/docs_inv.js'
    document.body.appendChild(scr)
}

function config_doc_set(){
    
    logo_fields = [
        '#headlogo_img','#footlogo_img'
    ].toString()
    label_fields = [
        '#doc_title','[id$="_label"]','[id$="_rate"]','[id$="_message"]'
    ].toString()
    date_fields = [
        '#date','#duedate'
    ]
    price_fields = [
        '[name="price"]','[name="amount"]','#total','#saletax','#incometax','#adjust','#finaltotal',
        '#finaltotal_shadow'
    ].toString()
    qty_fields = [
        '[name="qty"]'
    ].toString()
    text_fields = [
        '#vendor_name','#vendor_id','#vendor_address','#vendor_sign','#vendor_rank',
        '#client_name','#client_id','#client_address','#client_sign','#client_rank',
        '#ref','#payment','#subject','#note','[name="line"]','[name="item"]'
    ].toString()
    
    number_fields = price_fields + ',' + qty_fields
    content_edit = label_fields + ',' + text_fields + ',' + number_fields + ',' + date_fields
    input_fields = text_fields + ',' + number_fields + ',' + date_fields

    document.querySelectorAll('[name="item"]').forEach(function(t){
        t.setAttribute('list', 'item_list')
        t.addEventListener('change', autofillClientIdAddress)
    })
    document.querySelector('#client_name').setAttribute('list', 'client_list')
    document.querySelector('#client_name').addEventListener('change', autofillItemPrice)
    
    const config_doc_set_lang = document.querySelector('#config_doc_set_lang')
    const config_doc_set_title = document.querySelector('#config_doc_set_title')
    const config_doc_set_saletax_rate = document.querySelector('#config_doc_set_saletax_rate')
    const config_doc_set_incometax_rate = document.querySelector('#config_doc_set_incometax_rate')
    const config_doc_set_an_price = document.querySelector('#config_doc_set_an_price')
    const config_doc_set_an_qty = document.querySelector('#config_doc_set_an_qty')

    

    anPriceSet()
    anQtySet()
    saletaxRateSet()
    incometaxRateSet()
    dateTypeSet()

    config_doc_set_lang.addEventListener('change',function(e){
        lang = e.target.value
        mainLangSet()
    })
    config_doc_set_title.addEventListener('change',function(e){
        doc_title = e.target.value
        docLangSet()
    })
    config_doc_set_an_price.addEventListener('change',function(e){
        an_price = e.target.value
        anPriceSet()
    })
    config_doc_set_an_qty.addEventListener('change',function(e){
        an_qty = e.target.value
        anQtySet()
    })
    config_doc_set_saletax_rate.addEventListener('change',function(e){
        saletax_rate = parseFloat(e.target.value)
        saletaxRateSet()
    })
    config_doc_set_incometax_rate.addEventListener('change',function(e){
        incometax_rate = parseFloat(e.target.value)
        incometaxRateSet()
    })
    document.querySelector('#config_doc_set_date_type').addEventListener('change',dateTypeSet)

    var act = document.querySelector('#scr_main_config')

    var datalist = document.createElement('datalist')
    client_list.forEach(function(t){
        var op = document.createElement('option')
        op.textContent = t[0]
        datalist.appendChild(op)
    })
    act.appendChild(datalist)

    var datalist = document.createElement('datalist')
    item_list.forEach(function(t){
        var op = document.createElement('option')
        op.textContent = t[0]
        datalist.appendChild(op)
    })
    act.appendChild(datalist)

    document.querySelector('#config_doc_act_clear').addEventListener('click', docActClear)
    document.querySelector('#config_doc_act_pop').addEventListener('click', docActPop)
    document.querySelector('#config_doc_act_set').addEventListener('click', docActSet)
    document.querySelector('#config_doc_act_add').addEventListener('click', docActAdd)
    document.querySelector('#config_doc_act_print').addEventListener('click', docActPrint)

    

    

}

// ----------------------------------------------------------------------------------------------------------

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


// --------------------------------------------------------------------------------------------------------------------

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

// #headlogo_img
// #footlogo_img
// #doc_title

// #vendor_name_label
// #vendor_name
// #vendor_id_label
// #vendor_id
// #vendor_address_label
// #vendor_address
// #vendor_sign_label
// #vendor_sign
// #vendor_rank_label
// #vendor_rank

// #client_name_label
// #client_name
// #client_id_label
// #client_id
// #client_address_label
// #client_address
// #client_sign_label
// #client_sign
// #client_rank_label
// #client_rank

// #ref_label
// #ref
// #date_label
// #date
// #duedate_label
// #duedate
// #payment_label
// #payment
// #subject_label
// #subject
// #note_label
// #note

// #line_label
// #item_label
// #price_label
// #qty_label
// #amount_label

// #tbody
// [name="tr"]
// [name="line"]
// [name="item"]
// [name="price"]
// [name="qty"]
// [name="amount"]

// #total_label
// #total
// #saletax_label
// #saletax
// #incometax_label
// #incometax
// #saletax_rate
// #incometax_rate
// #adjust_label
// #adjust
// #finaltotal_label
// #finaltotal