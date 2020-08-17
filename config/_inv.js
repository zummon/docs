(function() {
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
    ans_qty.forEach(function(t){
        var op = document.createElement('option')
        op.value = t[0]
        op.textContent = t[0]
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

})()

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