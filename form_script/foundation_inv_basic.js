(function(){
    const align_center = [
        '[name="line"]','[name="price"]','[name="qty"]'
    ].toString()

    document.querySelectorAll(align_center).forEach(function(t){
        t.classList.add('text-center')
    })

    const align_right = [
        '[name="amount"]','#total','#saletax','#incometax','#incometax_rate','#adjust','#finaltotal'
    ].toString()

    document.querySelectorAll(align_right).forEach(function(t){
        t.classList.add('text-right')
    })
})()