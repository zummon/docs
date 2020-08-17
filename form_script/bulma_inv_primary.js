(function(){
    form_tr_show = 4
    form_tr_hide = 16

    const align_center = [
        '[name="price"]','[name="qty"]'
    ].toString()

    document.querySelectorAll(align_center).forEach(function(t){
        t.setAttribute('style', 'text-align: center;')
    })

    const align_right = [
        '[name="amount"]','#total','#saletax','#incometax','#incometax_rate','#adjust','#finaltotal'
    ].toString()

    document.querySelectorAll(align_right).forEach(function(t){
        t.setAttribute('style', 'text-align: right;')
    })
})()