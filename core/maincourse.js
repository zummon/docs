const 
/* declare global elements */
elDisplay = document.querySelector('#display'),
elCssDocStyle = document.querySelector('#css-docStyle'),
elCssDocFont = document.querySelector('#css-docFont'),
// elScrDoc = document.querySelector('#scr-doc'), *need replacing
/* declare global functions */
zm_isElemInput = function(elem){
  return [
    'INPUT',
    'TEXTAREA'
  ].indexOf(elem.tagName) >= 0
},
zm_getElemValue = function(elem){
  if (AutoNumeric.isManagedByAutoNumeric(elem)) {
    return AutoNumeric.getNumber(elem)
  } else {
    return elem[zm_isElemInput(elem) ? 'value' : 'textContent']
  }
},
zm_setElemValue = function(elem,val){
  // console.log(elem);
  if (AutoNumeric.isManagedByAutoNumeric(elem)) {
    AutoNumeric.set(elem, val)
  } else {
    elem[zm_isElemInput(elem) ? 'value' : 'textContent'] = val
  }
},
zm_loadFileXmlHr = function(file,cb){
  var xhr= new XMLHttpRequest()
  xhr.onload = typeof cb === 'function' ? cb : function(){
    console.log('** Need a callback function, otherwise nothing happens')
  }
  xhr.open('GET', file)
  xhr.send()
},
/* declare changing page */
zm_browseLoad = function(){
  zm_loadFileXmlHr('./core/browse.html',function(){
  elDisplay.innerHTML = this.responseText
  /* resetting the setting */
  elDisplay.classList.remove('uk-box-shadow-large')
  elDocSetFont.classList.add('uk-hidden')
  elDocActBack.classList.add('uk-hidden')
  elDocActPrint.classList.add('uk-hidden')
  elCssDocStyle.href = ''
  elCssDocFont.href = ''
  /* get elements */
  const
  elBrowseTitle = elDisplay.querySelector('#browse-title'),
  elBrowse = elDisplay.querySelector('#browse'),
  elWrapDiv = elBrowse.firstElementChild,
  elAnchor = elWrapDiv.querySelector('a'),
  elHoldImg = elWrapDiv.querySelector('.uk-card-media-top'),
  elHoldText = elWrapDiv.querySelector('.uk-card-body')
  /* build elements */
  for (const key in zm_tmps) {
    if (zm_tmps.hasOwnProperty(key)) {
      /* to identify which form, an user selects to create */
      elAnchor.dataset.tmp = key
      /* showing items */
      elHoldImg.style.backgroundImage = 'url('+ zm_tmps[key].img +')'
      elHoldText.textContent = zm_tmps[key].name
      /* to show and hide the options selected, for filtering */
      elWrapDiv.className = zm_tmps[key].doc.join(' ') +' '+ zm_tmps[key].type.join(' ')
      elBrowse.appendChild(elWrapDiv.cloneNode(true))
    }
  }
  elBrowse.removeChild(elWrapDiv)
  /* get elements after build */
  const
  elsWrapDiv = elBrowse.querySelectorAll(':scope > div'),
  elsBrowseA = elBrowse.querySelectorAll('a')
  
  function setBrowseLang(){
    let i = zm_disc.lang
    elBrowseTitle.textContent = zm_browse.title[i]
  }; setBrowseLang()

  function setBrowseTheme(){
    let i = zm_disc.theme
    elBrowseTitle.style.color = [
      '',
      '#fff',
    ][i]
    elBrowseTitle.className = [
      'uk-text-lead uk-margin uk-text-primary uk-text-center',
      'uk-text-lead uk-margin uk-text-center',
    ][i]
    elBrowse.className = [
      'uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@xl uk-flex-center uk-flex-middle uk-grid',
      'uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@xl uk-flex-center uk-flex-middle uk-grid uk-light',
    ][i]
  }; setBrowseTheme()

  function revealDoc(){ let doc = zm_user.doc
    /* resetting the setting */
    elSetDoc.classList.remove('uk-hidden')
    elSetDocStyle.classList.remove('uk-hidden')
    elSetDateFormat.classList.remove('uk-hidden')
    elSetAnPrice.classList.remove('uk-hidden')
    elSetAnQty.classList.remove('uk-hidden')
    elSetLines.classList.remove('uk-hidden')
    elSetVatRate.classList.remove('uk-hidden')
    elSetWhtRate.classList.remove('uk-hidden')
    /* show the setting needed */
    if (['invoice','taxinvoice','quotation'].indexOf(doc) >= 0) {
      // receipt,
      elSetWhtRate.classList.add('uk-hidden')
    }
    /* resetting all items */
    for (let z = 0; z < elsWrapDiv.length; z++) {
      elsWrapDiv[z].classList.add('uk-hidden')
    }
    /* re-select the items */
    const elsBrowseSelect = elBrowse.querySelectorAll('.'+ doc)
    for (let z = 0; z < elsBrowseSelect.length; z++) {
      elsBrowseSelect[z].classList.remove('uk-hidden')
    }
  }; revealDoc()

  function revealDocStyle(){ let type = zm_user.docStyle
    /* resetting all items */
    for (let z = 0; z < elsWrapDiv.length; z++) {
      elsWrapDiv[z].classList.add('uk-hidden')
    }
    /* re-select the items */
    const elsBrowseSelect = elBrowse.querySelectorAll('.'+ type)
    for (let z = 0; z < elsBrowseSelect.length; z++) {
      elsBrowseSelect[z].classList.remove('uk-hidden')
    }
  }; revealDocStyle()

  elLang.onchange = setBrowseLang
  elTheme.onchange = setBrowseTheme
  elSetDocSelect.onchange = revealDoc
  elSetDocStyleSelect.onchange = revealDocStyle

  /* go to the selected form */
  for (let z = 0; z < elsBrowseA.length; z++) {
    elsBrowseA[z].addEventListener('click',function(){
      zm_docLoad(this.dataset.tmp)
    })
  }
  })
},
zm_docLoad = function(key){
  let 
  doc = zm_user.doc,
  folder = './doc_'+ zm_docs[doc].type +'/'
  const
  tmp = zm_tmps[key],
  json = folder +'as_'+ doc +'.json',
  html = folder + key +'.html'
  
  // elScrDoc.src = js
  zm_loadFileXmlHr(json,function(){
  zm_docAsset = JSON.parse(this.responseText)
  // elScrDoc.onload = (function(){
  /* resetting */
  elDisplay.classList.add('uk-box-shadow-large')
  elSetDoc.classList.add('uk-hidden')
  elSetDocStyle.classList.add('uk-hidden')
  elSetDateFormat.classList.add('uk-hidden')
  elSetAnPrice.classList.add('uk-hidden')
  elSetAnQty.classList.add('uk-hidden')
  elSetLines.classList.add('uk-hidden')
  elSetVatRate.classList.add('uk-hidden')
  elSetWhtRate.classList.add('uk-hidden')

  elDocSetFont.classList.remove('uk-hidden')
  elDocActBack.classList.remove('uk-hidden')
  elDocActPrint.classList.remove('uk-hidden')
  elDocSetFontSelect.innerHTML = ''

  elCssDocStyle.href = tmp.css
  elCssDocFont.href = tmp.font
  /* build docFonts to select */
  for (let z = 0; z < tmp.fontStyle.length; z++) {
    nodeOption.value = tmp.fontStyle[z]
    nodeOption.text = tmp.fontStyle[z].split(',')[0]
    elDocSetFontSelect.appendChild(nodeOption.cloneNode(true))
  }

  zm_loadFileXmlHr(html,function(){
  elDisplay.innerHTML = this.responseText
  /* get elements */
  const
  elDoc = elDisplay.querySelector('#doc'),
  elDataZmLines = elDoc.querySelector('[data-zm=lines]'),
  elDataZmLine = elDoc.querySelector('[data-zm=line]'),
  elDataZmVatRate = elDoc.querySelector('[data-zm=vatRate]'),
  elDataZmWhtRate = elDoc.querySelector('[data-zm=whtRate]'),

  elsDataHide = elDoc.querySelectorAll('[data-hide*=_'+ doc +']');
  
  for (let z = 0; z < elsDataHide.length; z++) {
    elsDataHide[z].remove()
    // elsDataHide[z].classList.add('uk-hidden')
  }

  /* build rows */
  for (let z = 1; z <= zm_user.lines; z++) {
    const lineNum = elDataZmLine.querySelector('[data-zm=lineNum]')
    if (lineNum) zm_setElemValue(lineNum, z)
    elDataZmLines.appendChild(elDataZmLine.cloneNode(true))
  }
  elDataZmLines.removeChild(elDataZmLine)
  /* build tax rate % label */
  zm_setElemValue(elDataZmVatRate, (zm_user.vatRate*100).toFixed(2) +'%' )
  if (elDataZmWhtRate) {
    zm_setElemValue(elDataZmWhtRate, (-zm_user.whtRate*100).toFixed(2) +'%' )
  }
  /* get elements after build */
  const
  elsDataLabel = elDoc.querySelectorAll('[data-label]'),
  elsDataFont = elDisplay.querySelectorAll('[data-font]'),
  elsDate = elDoc.querySelectorAll('[data-docs$=date], [data-docs$=Date]'),
  elsImgLogo = elDoc.querySelectorAll('[data-img=vendorImage], [data-img=vendorStamp]'),

  // elsDataDocs = elDoc.querySelectorAll('[data-docs]'),
  elsDataDocsNotitem = elDoc.querySelectorAll('[data-docs]:not([data-docs^=item])'),
  elsDocsitemDesc = elDoc.querySelectorAll('[data-docs=itemDesc]'),
  elsDocsitemPrice = elDoc.querySelectorAll('[data-docs=itemPrice]'),
  elsDocsitemQty = elDoc.querySelectorAll('[data-docs=itemQty]'),
  elsDocsitemAmount = elDoc.querySelectorAll('[data-docs=itemAmount]'),

  elsItemAmtAdj = elDoc.querySelectorAll('[data-docs=itemAmount], [data-docs=totalAdjust]');

  function setDocLang(){ let i = zm_disc.lang
    const label = zm_docAsset.label
    for (let z = 0; z < elsDataLabel.length; z++) {
      // console.log(elsDataLabel[z].dataset.label);
      zm_setElemValue(elsDataLabel[z], label[
        elsDataLabel[z].dataset.label
      ][i])
    }
  }; setDocLang()

  function setDocFont(){
    for (let z = 0; z < elsDataFont.length; z++) {
      elsDataFont[z].style.fontFamily = elDocSetFontSelect.value
    }
  }; setDocFont()

  function setDocTheme(){
  }; setDocTheme()

  /* build date and date modal selection */
  for (let z = 0; z < elsDate.length; z++) {
    elsDate[z].addEventListener('click',function(){
      zm_active = this
      UIkit.modal('#modal-date').show()
      elMdDateInput.focus()
    })
  }
  /* build logos, source: https://imgur.com/WzWR2nA */
  for(let z = 0; z < elsImgLogo.length; z++){
    elsImgLogo[z].src = 'https://i.imgur.com/WzWR2nA.png'
    elsImgLogo[z].addEventListener('click',function(){
      zm_active = this
      UIkit.modal('#modal-upload').show()
      elMdUpInput.focus()
    })
  }
  /* fill up user data */
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
    zm_setofAnPrice[zm_user.anPrice].option
  )
  AutoNumeric.multiple(
    '[data-docs=itemQty]',
    zm_setofAnQty[zm_user.anQty].option
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
  /* auto calculate after fill */
  for(let z = 0; z < elsDocsitemQty.length; z++){
    elsDocsitemQty[z].addEventListener('change',function(){
      const elemPrice = this.closest('[data-zm=line]').querySelector('[data-docs=itemPrice]'),
      elemAmount = this.closest('[data-zm=line]').querySelector('[data-docs=itemAmount]')
      AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(this))
      calculateTotal()
    })
  }
  for(let z = 0; z < elsItemAmtAdj.length; z++){
    elsItemAmtAdj[z].addEventListener('change',calculateTotal)
  }

  elLang.onchange = setDocLang
  elTheme.onchange = setDocTheme
  elDocSetFontSelect.onchange = setDocFont

  })
  
  })
  // ();
}
let
/* replace able functions */
calculateTotal = function(){
  const elems = document.querySelectorAll('[data-docs=itemAmount]')
  let total = 0
  for(let z = 0; z < elems.length; z++){
    total += AutoNumeric.getNumber(elems[z])
  }
  let saletax = total * zm_user.vatRate,
  incometax = total * zm_user.whtRate
  AutoNumeric.set('[data-docs=totalAmount]',total)
  AutoNumeric.set('[data-docs=totalVat]',saletax)
  if (document.querySelector('[data-docs=totalWht]')) {
    AutoNumeric.set('[data-docs=totalWht]',incometax)
  } else {incometax = 0}
  AutoNumeric.set('[data-docs=totalFinal]',AutoNumeric.getNumber('[data-docs=totalAdjust]') + total + saletax + incometax)
},
getDocFill = function(){
  const 
  elsDataDocs = elDisplay.querySelectorAll('[data-docs]:not([data-docs^=item])'),
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