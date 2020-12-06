(function(){
  
  // get elements for building stuff
  const elDataZmLines = document.querySelector('[data-zm=lines]')
  const elDataZmLine = document.querySelector('[data-zm=line]')
  const elsDataHide = document.querySelectorAll('[data-hide*=_'+ localStorage.getItem('doc') +'_]')
  // building stuff
  for (let z = 0; z < elsDataHide.length; z++) {
    elsDataHide[z].remove()
  }
  const elDataZmRowspans = document.querySelector('[data-zm=rowspans]')
  const elDataZmRowspan = document.querySelector('[data-zm=rowspan]')
  if (elDataZmRowspans) {
    elDataZmRowspan.setAttribute('rowspan',elDataZmRowspans.childElementCount)
  }

  for (let z = 1; z <= localStorage.getItem('lines'); z++) {
    const lineNum = elDataZmLine.querySelector('[data-zm=lineNum]')
    if (lineNum) zm_setElemValue(lineNum, z)
    elDataZmLines.appendChild(elDataZmLine.cloneNode(true))
  }
  elDataZmLine.remove()

  // get elements after build
  const elsDataImg = document.querySelectorAll('[data-img]')
  const elsDataDate = document.querySelectorAll('[data-date]')

  const elsDataDocsNotitem = document.querySelectorAll('[data-docs]:not([data-docs^=item])')
  const elsDocsitemDesc = document.querySelectorAll('[data-docs=itemDesc]')
  const elsDocsitemPrice = document.querySelectorAll('[data-docs=itemPrice]')
  const elsDocsitemQty = document.querySelectorAll('[data-docs=itemQty]')
  const elsDocsitemAmount = document.querySelectorAll('[data-docs=itemAmount]')
  const elsItemAmtAdj = document.querySelectorAll('[data-docs=itemAmount], [data-docs=totalAdjust]')

  // build date and date modal selection
  for (let z = 0; z < elsDataDate.length; z++) {
    let attr = 'value'
    if (!zm_isElemInput(elsDataDate[z])) {
      elsDataDate[z].contentEditable = true
      attr = 'textContent'
    }
    const value = zm_user[elsDataDate[z].dataset.date]
    if (value) {
      elsDataDate[z][attr] = zummon.dateFormat({
        date: value,
        format: localStorage.getItem('dateFormat'),
        language: localStorage.getItem('lang'),
        era: localStorage.getItem('era'),
      })
      elsDataDate[z].dataset.raw = value
    }
    elsDataDate[z].onclick = function(){
      zm_active = this
      const elem = document.querySelector('#modal-date')
      elem.classList.add('uk-open')
      elem.style.display = 'block'
      document.body.style.overflowY = 'scroll'
      document.documentElement.classList.add('uk-modal-page')
      // UIkit.modal('#modal-date').show()
      document.querySelector('#modal-date-input').focus()
    }
  }
  // build logos, source: https://imgur.com/WzWR2nA
  for (let z = 0; z < elsDataImg.length; z++) {
    elsDataImg[z].src = 'https://i.imgur.com/WzWR2nA.png'
    elsDataImg[z].onclick = function(){
      zm_active = this
      const elem = document.querySelector('#modal-upload')
      elem.classList.add('uk-open')
      elem.style.display = 'block'
      document.body.style.overflowY = 'scroll'
      document.documentElement.classList.add('uk-modal-page')
      // UIkit.modal('#modal-upload').show()
      document.querySelector('#modal-upload-input').focus()
    }
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
    if (!zm_isElemInput(elsDocsitemDesc[z])) {
      elsDocsitemDesc[z].contentEditable = true
    }
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
    if (!zm_isElemInput(elsDocsitemPrice[z])) {
      elsDocsitemPrice[z].contentEditable = true
    }
  }
  for (let z = 0; z < elsDocsitemQty.length; z++) {
    if (!zm_isElemInput(elsDocsitemQty[z])) {
      elsDocsitemQty[z].contentEditable = true
    }
  }
  for (let z = 0; z < elsDocsitemAmount.length; z++) {
    if (!zm_isElemInput(elsDocsitemAmount[z])) {
      elsDocsitemAmount[z].contentEditable = true
    }
  }
  const optAn = zummon.autoNumeric()
  AutoNumeric.multiple(
    '[data-docs=itemPrice],'+
    '[data-docs=itemSaletax],'+
    '[data-docs=itemAmount],'+
    '[data-docs^=total]',
    optAn[zm_user.anPrice]
  )
  AutoNumeric.multiple(
    '[data-docs=itemQty]',
    optAn[zm_user.anQty]
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
  for (let z = 0; z < elsDocsitemQty.length; z++) {
    elsDocsitemQty[z].onchange = function(){
      const elemPrice = this.closest('[data-zm=line]').querySelector('[data-docs=itemPrice]')
      const elemAmount = this.closest('[data-zm=line]').querySelector('[data-docs=itemAmount]')
      AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(this))
      zm_docCalTotal()
    }
  }
  for (let z = 0; z < elsDocsitemPrice.length; z++) {
    elsDocsitemPrice[z].onchange = function(){
      const elemPrice = this.closest('[data-zm=line]').querySelector('[data-docs=itemQty]')
      const elemAmount = this.closest('[data-zm=line]').querySelector('[data-docs=itemAmount]')
      AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(this))
      zm_docCalTotal()
    }
  }
  for (let z = 0; z < elsItemAmtAdj.length; z++) {
    elsItemAmtAdj[z].onchange = zm_docCalTotal
  }

})()