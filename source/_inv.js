(function() {
    logo_fields = [
        '#headlogo_img','#footlogo_img'
    ].toString()
    label_fields = [
        '#doc_title','[id$="_label"]','[id$="_rate"]'
    ].toString()
    date_fields = [
        '#date','#duedate'
    ]
    price_fields = [
        '[name="price"]','[name="amount"]','#total','#saletax','#incometax','#adjust','#finaltotal'
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

    const tbody = document.querySelector('#tbody')
    const tr = document.querySelector('[name="tr"]')

    const tr_show_gen = form_tr_show
    const tr_hide_gen = form_tr_hide

    for (var z = 1; z <= +tr_show_gen+tr_hide_gen; z++) {
        
        if (z > tr_show_gen ) { tr.style.display = 'none' }

        var line = tr.querySelector('[name="line"]')
        var line_attr = 'textContent'
        if (input_tags.indexOf(line.tagName) >= 0) { line_attr = 'value' }

        line[line_attr] = z
        tbody.appendChild(tr.cloneNode(true))
    }
    tr.remove()

    document.querySelectorAll(content_edit).forEach(function(t){
        
        if (input_tags.indexOf(t.tagName) >= 0) { return }
        t.setAttribute('contenteditable', 'true')
    })
    document.querySelectorAll(number_fields).forEach(function(t){

        if (input_tags.indexOf(t.tagName) >= 0) { t.type = 'tel' }
    })

    document.querySelectorAll('[name="item"]').forEach(function(t){
        t.setAttribute('list', 'item_list')
        t.addEventListener('change', autofillClientIdAddress)
    })
    document.querySelector('#client_name').setAttribute('list', 'client_list')
    document.querySelector('#client_name').addEventListener('change', autofillItemPrice)
    
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