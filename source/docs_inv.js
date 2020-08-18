(function() {
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

    document.querySelectorAll(content_edit).forEach(function(t){
        if (input_tags.indexOf(t.tagName) >= 0) { return }
        t.setAttribute('contenteditable', 'true')
    })
    document.querySelectorAll('[name="item"]').forEach(function(t){
        t.setAttribute('list', 'item_list')
        t.addEventListener('change', autofillClientIdAddress)
    })
    document.querySelector('#client_name').setAttribute('list', 'client_list')
    document.querySelector('#client_name').addEventListener('change', autofillItemPrice)

    const tr_show_gen = form_tr_show
    const tr_hide_gen = form_tr_hide

    const tbody = document.querySelector('#tbody')
    const tr = document.querySelector('[name="tr"]')

    for (var z = 1; z <= +tr_show_gen+tr_hide_gen; z++) {
        if (z > tr_show_gen ) { tr.setAttribute('style', 'display: none;') }

        var line = tr.querySelector('[name="line"]')
        var line_attr = 'textContent'
        if (input_tags.indexOf(line.tagName) >= 0) { line_attr = 'value' }

        line[line_attr] = z
        tbody.appendChild(tr.cloneNode(true))
    }
    tr.remove()
    
    const config_doc_set_lang = document.querySelector('#config_doc_set_lang')
    const config_doc_set_title = document.querySelector('#config_doc_set_title')
    const config_doc_set_saletax_rate = document.querySelector('#config_doc_set_saletax_rate')
    const config_doc_set_incometax_rate = document.querySelector('#config_doc_set_incometax_rate')
    const config_doc_set_an_price = document.querySelector('#config_doc_set_an_price')
    const config_doc_set_an_qty = document.querySelector('#config_doc_set_an_qty')

    langs.forEach(function(t){
        var op = document.createElement('option')
        op.value = t
        op.textContent = t
        config_doc_set_lang.appendChild(op)
    })
    ans_price.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        op.textContent = t[0]
        config_doc_set_an_price.appendChild(op)
    })
    ans_qty.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        op.textContent = t[0]
        config_doc_set_an_qty.appendChild(op)
    })
    var keys = Object.keys(docs_inv_text)
    keys.forEach(function(t){
        var op = document.createElement('option')
        op.value = t
        op.textContent = t
        config_doc_set_title.appendChild(op)
    })

    config_doc_set_lang.value = lang
    config_doc_set_title.value = doc_title
    config_doc_set_saletax_rate.value = saletax_rate
    config_doc_set_incometax_rate.value = incometax_rate
    config_doc_set_an_price.value = an_price
    config_doc_set_an_qty.value = an_qty

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

    document.querySelector(qty_fields).addEventListener('change', calculate)
    document.querySelector('#adjust').addEventListener('change', calculateTotal)

    document.querySelectorAll(logo_fields).forEach(function(t){
        t.setAttribute('src', 'source/logo_100x100.png')
    })
    docsLangSet()

})()

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