zm_docLoadAsType = function(){

  zm_docCalTotal = function(){
    var elems = document.querySelectorAll('[data-docs=itemAmount]'), total = 0
    for (let z = 0; z < elems.length; z++) {
      total += AutoNumeric.getNumber(elems[z])
    }
    AutoNumeric.set('[data-docs=totalAmount]',total)
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

      itemDesc: [],
      itemPrice: [],
      itemQty: [],
      itemAmount: [],
    }

    const elsDataDocs = document.querySelectorAll('[data-docs]:not([data-docs^=item])'),
    elsDocsitem = document.querySelectorAll('[data-docs^=item]')

    for (let z = 0; z < elsDataDocs.length; z++) {
      const value = zm_getElemValue(elsDataDocs[z])
      if (value) {
        zm_user[elsDataDocs[z].dataset.docs] = value
      }
    }
    for (let z = 0; z < elsDocsitem.length; z++) {
      const value = zm_getElemValue(elsDocsitem[z]),
      docs = elsDocsitem[z].dataset.docs
      if (value) {
        if (!zm_user[docs]) zm_user[docs] = []
        zm_user[docs].push(value)
      }
    }
  }

}