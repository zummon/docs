zm_docLoadAsset = function(html,doc,lang){

  zm_loadFile(html,function(){
    elDisplay.innerHTML = this.responseText
    // get elements
    const elDoc = elDisplay.querySelector('#doc'),
    elDataZmLines = elDoc.querySelector('[data-zm=lines]'),
    elDataZmLine = elDoc.querySelector('[data-zm=line]'),
    elDataZmVatRate = elDoc.querySelector('[data-zm=vatRate]'),
    elDataZmWhtRate = elDoc.querySelector('[data-zm=whtRate]'),

    elsDataHide = elDoc.querySelectorAll('[data-hide*=_'+ doc +'_]')

    if (doc == 'receipt') {
      zm_docCalTotal = function(){
        var elems = document.querySelectorAll('[data-docs=itemAmount]'),
        total = 0
        for (let z = 0; z < elems.length; z++) {
          total += AutoNumeric.getNumber(elems[z])
        }
        var vat = total * zm_user.vatRate,
        wht = total * zm_user.whtRate
        AutoNumeric.set('[data-docs=totalAmount]',total)
        AutoNumeric.set('[data-docs=totalVat]',vat)
        AutoNumeric.set('[data-docs=totalWht]',wht)
        AutoNumeric.set('[data-docs=totalFinal]',AutoNumeric.getNumber('[data-docs=totalAdjust]') + total + vat + wht)
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
          whtRate: zm_user.whtRate,
        }

        const elsDataDocs = elDisplay.querySelectorAll('[data-docs]:not([data-docs^=item])'),
        elsDocsitem = elDisplay.querySelectorAll('[data-docs^=item]')
        // elsDocsitemDesc = elDisplay.querySelectorAll('[data-docs=itemDesc]'),
        // elsDocsitemPrice = elDisplay.querySelectorAll('[data-docs=itemPrice]'),
        // elsDocsitemQty = elDisplay.querySelectorAll('[data-docs=itemQty]'),
        // elsDocsitemAmount = elDisplay.querySelectorAll('[data-docs=itemAmount]')

        zm_user.itemDesc = []
        zm_user.itemPrice = []
        zm_user.itemQty = []
        zm_user.itemAmount = []

        for (let z = 0; z < elsDataDocs.length; z++) {
          const value = zm_getElemValue(elsDataDocs[z])
          if (value) {
            zm_user[elsDataDocs[z].dataset.docs] = value
          }
        }
        for (let z = 0; z < elsDocsitem.length; z++) {
          const value = zm_getElemValue(elsDocsitem[z])
          const docs = elsDocsitem[z].dataset.docs
          if (value) {
            if (!zm_user[docs]) zm_user[docs] = []
            zm_user[docs].push(value)
          }
        }
      }

    } else {
      zm_docCalTotal = function(){
        const elems = document.querySelectorAll('[data-docs=itemAmount]')
        var total = 0
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
          anPrice: zm_user.anPrice,
          anQty: zm_user.anQty,
          dateFormat: zm_user.dateFormat,
          doc: zm_user.doc,
          era: zm_user.era,
          lang: zm_user.lang,
          lines: zm_user.lines,
          vatRate: zm_user.vatRate,
        }
      
        const elsDataDocs = elDisplay.querySelectorAll('[data-docs]:not([data-docs^=item])'),
        elsDocsitem = elDisplay.querySelectorAll('[data-docs^=item]')
        // elsDocsitemDesc = elDisplay.querySelectorAll('[data-docs=itemDesc]'),
        // elsDocsitemPrice = elDisplay.querySelectorAll('[data-docs=itemPrice]'),
        // elsDocsitemQty = elDisplay.querySelectorAll('[data-docs=itemQty]'),
        // elsDocsitemAmount = elDisplay.querySelectorAll('[data-docs=itemAmount]')
      
        zm_user.itemDesc = []
        zm_user.itemPrice = []
        zm_user.itemQty = []
        zm_user.itemAmount = []
      
        for (let z = 0; z < elsDataDocs.length; z++) {
          const value = zm_getElemValue(elsDataDocs[z])
          if (value) {
            zm_user[elsDataDocs[z].dataset.docs] = value
          }
        }
        for (let z = 0; z < elsDocsitem.length; z++) {
          const value = zm_getElemValue(elsDocsitem[z])
          const docs = elsDocsitem[z].dataset.docs
          if (value) {
            if (!zm_user[docs]) zm_user[docs] = []
            zm_user[docs].push(value)
          }
        }
      
      }
    }
    
    for (let z = 0; z < elsDataHide.length; z++) {
      elsDataHide[z].remove()
      // elsDataHide[z].classList.add('uk-hidden')
    }

    // build rows
    for (let z = 1; z <= zm_user.lines; z++) {
      const lineNum = elDataZmLine.querySelector('[data-zm=lineNum]')
      if (lineNum) zm_setElemValue(lineNum, z)
      elDataZmLines.appendChild(elDataZmLine.cloneNode(true))
    }
    elDataZmLines.removeChild(elDataZmLine)
    // build tax rate % label
    zm_setElemValue(elDataZmVatRate, (zm_user.vatRate*100).toFixed(2) +'%' )
    if (elDataZmWhtRate) {
      zm_setElemValue(elDataZmWhtRate, (-zm_user.whtRate*100).toFixed(2) +'%' )
    }
    // get elements after build
    const elsDataLabel = elDoc.querySelectorAll('[data-label]'),
    elsDataFont = elDisplay.querySelectorAll('[data-font]'),
    elsDate = elDoc.querySelectorAll('[data-docs$=date], [data-docs$=Date]'),
    elsImgLogo = elDoc.querySelectorAll('[data-img=vendorImage], [data-img=vendorStamp]'),

    // elsDataDocs = elDoc.querySelectorAll('[data-docs]'),
    elsDataDocsNotitem = elDoc.querySelectorAll('[data-docs]:not([data-docs^=item])'),
    elsDocsitemDesc = elDoc.querySelectorAll('[data-docs=itemDesc]'),
    elsDocsitemPrice = elDoc.querySelectorAll('[data-docs=itemPrice]'),
    elsDocsitemQty = elDoc.querySelectorAll('[data-docs=itemQty]'),
    elsDocsitemAmount = elDoc.querySelectorAll('[data-docs=itemAmount]'),

    elsItemAmtAdj = elDoc.querySelectorAll('[data-docs=itemAmount], [data-docs=totalAdjust]')

    zm_setLangPage = function(doc,lang){
      var label = {}
      if (lang == 'english') {
        if (doc == 'invoice') {
          label = {
            client: 'Bill to',
            date: 'Inv-Date',
            ref: 'Inv-No',
            title: 'Invoice',
          }
        } else if (doc == 'receipt') {
          label = {
            client: 'Received from',
            date: 'Rec-Date',
            ref: 'Rec-No',
            title: 'Receipt',
            totalFinal: 'Paid Amount',
          }
        } else if (doc == 'taxinvoice') {
          label = {
            client: 'Bill to',
            date: 'TaxInv-Date',
            ref: 'TaxInv-No',
            title: 'Tax Invoice',
          }
        } else if (doc == 'quotation') {
          label = {
            client: 'Offer to',
            date: 'Qn-Date',
            duedate: 'Offer Until',
            ref: 'Qn-No',
            title: 'Quotation',
          }
        } else if (doc == 'cashsale') {
          label = {
            client: 'Received from',
            date: 'Rec-Date',
            ref: 'Rec-No',
            title: 'Cash Sale',
          }
        }
      } else if (lang == 'thai') {
        if (doc == 'invoice') {
          label = {
            client: 'ส่งถึง',
            date: 'วันที่',
            ref: 'เลขที่',
            title: 'ใบแจ้งหนี้',
          }
        } else if (doc == 'receipt') {
          label = {
            client: 'รับเงินจาก',
            date: 'วันที่',
            ref: 'เลขที่',
            title: 'ใบเสร็จรับเงิน',
            totalFinal: 'ยอดชำระ',
          }
        } else if (doc == 'taxinvoice') {
          label = {
            client: 'ส่งถึง',
            date: 'วันที่',
            ref: 'เลขที่',
            title: 'ใบกำกับภาษี',
          }
        } else if (doc == 'quotation') {
          label = {
            client: 'ส่งถึง',
            date: 'วันที่',
            duedate: 'สั่งซื้อก่อนวันที่',
            ref: 'เลขที่',
            title: 'ใบเสนอราคา',
          }
        } else if (doc == 'cashsale') {
          label = {
            client: 'รับเงินจาก',
            date: 'วันที่',
            ref: 'เลขที่',
            title: 'บิลเงินสด',
          }
        }
      }
      label = Object.assign(zm_docLabel, label)

      for (let z = 0; z < elsDataLabel.length; z++) {
        // console.log(elsDataLabel[z].dataset.label);
        zm_setElemValue(elsDataLabel[z], label[
          elsDataLabel[z].dataset.label
        ])
      }
    }
    zm_setLangPage(doc,lang)

    elTheme.onchange = function(){
    }
    elTheme.onchange()

    elDocSetFontSelect.onchange = function(){
      for (let z = 0; z < elsDataFont.length; z++) {
        elsDataFont[z].style.fontFamily = elDocSetFontSelect.value
      }
    }
    elDocSetFontSelect.onchange()

    // build date and date modal selection
    for (let z = 0; z < elsDate.length; z++) {
      elsDate[z].addEventListener('click',function(){
        zm_active = this
        UIkit.modal('#modal-date').show()
        elMdDateInput.focus()
      })
    }
    // build logos, source: https://imgur.com/WzWR2nA
    for(let z = 0; z < elsImgLogo.length; z++){
      elsImgLogo[z].src = 'https://i.imgur.com/WzWR2nA.png'
      elsImgLogo[z].addEventListener('click',function(){
        zm_active = this
        UIkit.modal('#modal-upload').show()
        elMdUpInput.focus()
      })
    }
    // fill up user data
    for (let z = 0; z < elsDataDocsNotitem.length; z++) {
      const entry = zm_user[elsDataDocsNotitem[z].dataset.docs]
      if (AutoNumeric.isManagedByAutoNumeric(elsDataDocsNotitem[z])) {
        AutoNumeric.set(elsDataDocsNotitem[z], entry || '')
        if (!zm_isElemInput(elsDataDocsNotitem[z])) {
          elsDataDocsNotitem[z].contentEditable = true
        }
      } else {
        let attr = 'value'
        if (!zm_isElemInput(elsDataDocsNotitem[z])) {
          elsDataDocsNotitem[z].contentEditable = true
          attr = 'textContent'
        }
        elsDataDocsNotitem[z][attr] = entry || ''
      }
    }
    for (let z = 0; z < elsDocsitemDesc.length; z++) {
      elsDocsitemDesc[z].contentEditable = true
      if (zm_user.itemDesc) {
        if (!zm_user.itemDesc[z]) {
          continue
        } else if (typeof zm_user.itemDesc == 'string') {
          zm_user.itemDesc = [zm_user.itemDesc]
        }
        zm_setElemValue(elsDocsitemDesc[z], zm_user.itemDesc[z])
      }
    }
    for (let z = 0; z < elsDocsitemPrice.length; z++) {
      elsDocsitemPrice[z].contentEditable = true
    }
    for (let z = 0; z < elsDocsitemQty.length; z++) {
      elsDocsitemQty[z].contentEditable = true
    }
    for (let z = 0; z < elsDocsitemAmount.length; z++) {
      elsDocsitemAmount[z].contentEditable = true
    }
    AutoNumeric.multiple(
      '[data-docs=itemPrice],'+
      '[data-docs=itemSaletax],'+
      '[data-docs=itemAmount],'+
      '[data-docs^=total]',
      zm_anPrices[zm_user.anPrice]
    )
    AutoNumeric.multiple(
      '[data-docs=itemQty]',
      zm_anQtys[zm_user.anQty]
    )
    if (zm_user.itemPrice) {
      for (let z = 0; z < elsDocsitemPrice.length; z++) {
        if (!zm_user.itemPrice[z]) {
          continue
        } else if (typeof zm_user.itemPrice == 'string') {
          zm_user.itemPrice = [zm_user.itemPrice]
        }
        AutoNumeric.set(elsDocsitemPrice[z], zm_user.itemPrice[z])
      }
    }
    if (zm_user.itemQty) {
      for (let z = 0; z < elsDocsitemQty.length; z++) {
        if (!zm_user.itemQty[z]) {
          continue
        } else if (typeof zm_user.itemQty == 'string') {
          zm_user.itemQty = [zm_user.itemQty]
        }
        AutoNumeric.set(elsDocsitemQty[z], zm_user.itemQty[z])
      }
    }
    if (zm_user.itemAmount) {
      for (let z = 0; z < elsDocsitemAmount.length; z++) {
        if (!zm_user.itemAmount[z]) {
          continue
        } else if (typeof zm_user.itemAmount == 'string') {
          zm_user.itemAmount = [zm_user.itemAmount]
        }
        AutoNumeric.set(elsDocsitemAmount[z], zm_user.itemAmount[z])
      }
    }
    // auto calculate after fill
    for(let z = 0; z < elsDocsitemQty.length; z++){
      elsDocsitemQty[z].addEventListener('change',function(){
        const elemPrice = this.closest('[data-zm=line]').querySelector('[data-docs=itemPrice]'),
        elemAmount = this.closest('[data-zm=line]').querySelector('[data-docs=itemAmount]')
        AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(this))
        zm_docCalTotal()
      })
    }
    for(let z = 0; z < elsItemAmtAdj.length; z++){
      elsItemAmtAdj[z].addEventListener('change',zm_docCalTotal)
    }

  })
}

// "image": {
//   "clientSignImage": ["",""],
//   "itemImage": ["",""],
//   "vendorImage": ["",""],
//   "vendorStamp": ["",""],
//   "vendorSignImage": ["",""]
// }