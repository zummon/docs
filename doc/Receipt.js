zm_docLoadAsType = function(){

  var vat = (zm_user.vatRate *100).toFixed(2), depth = vat % 1 == 0 ? 0 : 2
  zm_setElemValue(document.querySelector('[data-zm=vatRate]'), Number(vat).toFixed(depth) +'%')
  var wht = (-zm_user.whtRate *100).toFixed(2), depth = wht % 1 == 0 ? 0 : 2
  zm_setElemValue(document.querySelector('[data-zm=whtRate]'), Number(wht).toFixed(depth) +'%')

  zm_docCalTotal = function(){
    var elems = document.querySelectorAll('[data-docs=itemAmount]'), total = 0
    for (let z = 0; z < elems.length; z++) {
      total += AutoNumeric.getNumber(elems[z])
    }
    var vat = total * zm_user.vatRate, wht = total * zm_user.whtRate
    AutoNumeric.set('[data-docs=totalAmount]',total)
    AutoNumeric.set('[data-docs=totalVat]',vat)
    AutoNumeric.set('[data-docs=totalWht]',wht)
    AutoNumeric.set('[data-docs=totalFinal]',AutoNumeric.getNumber('[data-docs=totalAdjust]') + total + vat + wht)
  }

}