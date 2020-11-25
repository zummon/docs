zm_docLoadAsType = function(elsDataDate){

  // build tax rate % label
  // https://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number
  var vat = (zm_user.vatRate *100).toFixed(2), depth = vat % 1 == 0 ? 0 : 2
  zm_setElemValue(document.querySelector('[data-zm=vatRate]'), Number(vat).toFixed(depth) +'%')

  zm_docCalTotal = function(){
    var elems = document.querySelectorAll('[data-docs=itemAmount]'), total = 0
    for (let z = 0; z < elems.length; z++) {
      total += AutoNumeric.getNumber(elems[z])
    }
    var vat = total * zm_user.vatRate
    AutoNumeric.set('[data-docs=totalAmount]',total)
    AutoNumeric.set('[data-docs=totalVat]',vat)
    AutoNumeric.set('[data-docs=totalFinal]',AutoNumeric.getNumber('[data-docs=totalAdjust]') + total + vat)
  }

  zm_docGetData = function(){
    zm_user = {
      lang: zm_user.lang,
      doc: zm_user.doc,
      dateFormat: zm_user.dateFormat,
      anPrice: zm_user.anPrice,
      anQty: zm_user.anQty,
      lines: zm_user.lines,
      tmp: zm_user.tmp,
      vatRate: zm_user.vatRate,

      itemDesc: [],
      itemPrice: [],
      itemQty: [],
      itemAmount: [],
    }

    var elsDataDocs = document.querySelectorAll('[data-docs]:not([data-docs^=item])'),
    elsDocsitem = document.querySelectorAll('[data-docs^=item]')

    for (let z = 0; z < elsDataDocs.length; z++) {
      var value = zm_getElemValue(elsDataDocs[z])
      if (value) {
        zm_user[elsDataDocs[z].dataset.docs] = value
      }
    }
    for (let z = 0; z < elsDocsitem.length; z++) {
      var value = zm_getElemValue(elsDocsitem[z]),
      docs = elsDocsitem[z].dataset.docs
      if (value) {
        if (!zm_user[docs]) zm_user[docs] = []
        zm_user[docs].push(value)
      }
    }
    for (let z = 0; z < elsDataDate.length; z++) {
      var value = elsDataDate[z].dataset.raw
      if (value) {
        zm_user[elsDataDate[z].dataset.date] = value
      }
    }
  }

}