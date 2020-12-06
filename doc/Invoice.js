(function(){
  var vatRate = Number(localStorage.getItem('vatRate'))
  // build tax rate % label
  // https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number
  var vat = (vatRate *100).toFixed(2), depth = vat % 1 == 0 ? 0 : 2
  zm_setElemValue(document.querySelector('[data-zm=vatRate]'), Number(vat).toFixed(depth) +'%')

  zm_docCalTotal = function(){
    var elems = document.querySelectorAll('[data-docs=itemAmount]'), total = 0
    for (let z = 0; z < elems.length; z++) {
      total += AutoNumeric.getNumber(elems[z])
    }
    var vat = total * vatRate
    AutoNumeric.set('[data-docs=totalAmount]',total)
    AutoNumeric.set('[data-docs=totalVat]',vat)
    AutoNumeric.set('[data-docs=totalFinal]',AutoNumeric.getNumber('[data-docs=totalAdjust]') + total + vat)
  }

})()