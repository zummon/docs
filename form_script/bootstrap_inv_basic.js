(function(){
    const align_right = [
        '[name="price"]','[name="qty"]','[name="amount"]',
        '#total','#saletax','#incometax','#incometax_rate','#adjust','#finaltotal'
    ].toString()

    document.querySelectorAll(align_right).forEach(function(t){
        t.classList.add('text-right')
    })
})()