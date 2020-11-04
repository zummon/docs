/* declare global elements */
const
elDisplay = document.querySelector('#display'),
elCssDocStyle = document.querySelector('#css-docStyle'),
elCssDocFont = document.querySelector('#css-docFont'),
/* declare changing page */
browseLoad = function(){

  loadFileXmlHr('./core/browse.html',function(){
  elDisplay.innerHTML = this.responseText
  /* resetting */
  elDisplay.classList.remove('uk-box-shadow-large')
  elView.disabled = false
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
      /* showing */
      elHoldImg.style.backgroundImage = 'url('+ zm_tmps[key].img +')'
      elHoldText.textContent = zm_tmps[key].name
      /* to show and hide the options selected, like filtering */
      elWrapDiv.dataset.type = zm_tmps[key].type
      elWrapDiv.className = zm_tmps[key].doc.join(' ')
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
      'uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center uk-flex-middle uk-grid',
      'uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l uk-flex-center uk-flex-middle uk-grid uk-light',
    ][i]
  }; setBrowseTheme()
  function setBrowseView(){
    elSetDocType.classList.remove('uk-hidden')
    elSetDateFormat.classList.remove('uk-hidden')
    elSetAnPrice.classList.remove('uk-hidden')
    elSetAnQty.classList.remove('uk-hidden')
    elSetLines.classList.remove('uk-hidden')
    elSetVatRate.classList.remove('uk-hidden')
    elSetWhtRate.classList.remove('uk-hidden')
    if (['inv','tinv','qn'].indexOf(zm_user.view) >= 0) {
      elSetWhtRate.classList.add('uk-hidden')
    }
    /* revealDoc (view) */
    for (let z = 0; z < elsWrapDiv.length; z++) {
      elsWrapDiv[z].classList.add('uk-hidden')
    }
    /* re-select the elements */
    const
    elsBrowseSelect = elBrowse.querySelectorAll('.'+ zm_user.view)
    for (let z = 0; z < elsBrowseSelect.length; z++) {
      elsBrowseSelect[z].classList.remove('uk-hidden')
    }
  }; setBrowseView()
  function revealDocType(){
    for (let z = 0; z < elsWrapDiv.length; z++) {
      elsWrapDiv[z].classList.add('uk-hidden')
    }
    /* re-select the elements */
    const 
    elsBrowseSelect = elBrowse.querySelectorAll('[data-type='+ zm_user.docType +']')
    for (let z = 0; z < elsBrowseSelect.length; z++) {
      elsBrowseSelect[z].classList.remove('uk-hidden')
    }
  }; revealDocType()
  elLang.onchange = setBrowseLang
  elTheme.onchange = setBrowseTheme
  elView.onchange = setBrowseView
  elSetDocTypeSelect.onchange = revealDocType

  /* go to the selected form */
  for (let z = 0; z < elsBrowseA.length; z++) {
    elsBrowseA[z].addEventListener('click',function(){
      docLoad(this.dataset.tmp)
    })
  }
})},
docLoad = function(key){
  const
  tmp = zm_tmps[key],
  json = './doc_'+ zm_user.view +'/asset.json',
  html = './doc_'+ zm_user.view +'/'+ key +'.html'
  
  loadFileXmlHr(json,function(){
  /* resetting */
  zm_docAsset = JSON.parse(this.responseText)
  elView.disabled = true

  elDisplay.classList.add('uk-box-shadow-large')
  elSetDocType.classList.add('uk-hidden')
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

  loadFileXmlHr(html,function(){
  elDisplay.innerHTML = this.responseText
  /* get elements */
  const
  elDoc = elDisplay.querySelector('#doc'),
  elDataZmLines = elDoc.querySelector('[data-zm=lines]'),
  elDataZmLine = elDoc.querySelector('[data-zm=line]'),
  elDataZmVatRate = elDoc.querySelector('[data-zm=vatRate]'),
  elDataZmWhtRate = elDoc.querySelector('[data-zm=whtRate]')
  /* build rows */
  for (let z = 1; z <= zm_user.lines; z++) {
    const lineNum = elDataZmLine.querySelector('[data-zm=lineNum]')
    if (lineNum) setElemValue(lineNum, z)
    elDataZmLines.appendChild(elDataZmLine.cloneNode(true))
  }
  elDataZmLines.removeChild(elDataZmLine)
  /* build tax rate % label */
  setElemValue(elDataZmVatRate, (zm_user.vatRate*100).toFixed(2) +'%' )
  if (elDataZmWhtRate) {
    setElemValue(elDataZmWhtRate, (-zm_user.whtRate*100).toFixed(2) +'%' )
  }
  /* get elements after build */
  const
  elsDataLabel = elDoc.querySelectorAll('[data-label]'),
  elsDataFont = document.querySelectorAll('[data-font]'),
  elsDate = elDoc.querySelectorAll('[data-docs$=date], [data-docs$=Date]'),
  elsImgLogo = elDoc.querySelectorAll('[data-img=vendorImage], [data-img=vendorStamp]'),

  // elsDataDocs = elDoc.querySelectorAll('[data-docs]'),
  elsDataDocsNotitem = elDoc.querySelectorAll('[data-docs]:not([data-docs^=item])'),
  elsDocsitemDesc = elDoc.querySelectorAll('[data-docs=itemDesc]'),
  elsDocsitemPrice = elDoc.querySelectorAll('[data-docs=itemPrice]'),
  elsDocsitemQty = elDoc.querySelectorAll('[data-docs=itemQty]'),
  elsDocsitemAmount = elDoc.querySelectorAll('[data-docs=itemAmount]'),

  elsItemAmtAdj = elDoc.querySelectorAll('[data-docs=itemAmount], [data-docs=totalAdjust]');

  function setDocLang(){
    let i = zm_disc.lang
    const label = zm_docAsset.label
    for (let z = 0; z < elsDataLabel.length; z++) {
      // console.log(elsDataLabel[z].dataset.label);
      setElemValue(elsDataLabel[z], label[
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
  /* fill up from user data */
  for (let z = 0; z < elsDataDocsNotitem.length; z++) {
    const entry = zm_user[elsDataDocsNotitem[z].dataset.docs]
    if (AutoNumeric.isManagedByAutoNumeric(elsDataDocsNotitem[z])) {
      AutoNumeric.set(elsDataDocsNotitem[z], entry || '')
      if (!isElemInput(elsDataDocsNotitem[z])) {
        elsDataDocsNotitem[z].contentEditable = true
      }
    } else {
      let attr = 'value'
      if (!isElemInput(elsDataDocsNotitem[z])) {
        elsDataDocsNotitem[z].contentEditable = true
        attr = 'textContent'
      }
      elsDataDocsNotitem[z][attr] = entry || ''
    }
  }
  for (let z = 0; z < elsDocsitemDesc.length; z++) {
    elsDocsitemDesc[z].contentEditable = true
    if (zm_user.itemDesc) {
      if (!zm_user.itemDesc[z]) {continue}
      else if (typeof zm_user.itemDesc == 'string') {zm_user.itemDesc = [zm_user.itemDesc]}
      setElemValue(elsDocsitemDesc[z], zm_user.itemDesc[z])
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
    setofAnPrice[zm_user.anPrice].option
  )
  AutoNumeric.multiple(
    '[data-docs=itemQty]',
    setofAnQty[zm_user.anQty].option
  )
  if (zm_user.itemPrice) {
    for (let z = 0; z < elsDocsitemPrice.length; z++) {
      if (!zm_user.itemPrice[z]) {continue}
      else if (typeof zm_user.itemPrice == 'string') {zm_user.itemPrice = [zm_user.itemPrice]}
      AutoNumeric.set(elsDocsitemPrice[z], zm_user.itemPrice[z])
    }
  }
  if (zm_user.itemQty) {
    for (let z = 0; z < elsDocsitemQty.length; z++) {
      if (!zm_user.itemQty[z]) {continue}
      else if (typeof zm_user.itemQty == 'string') {zm_user.itemQty = [zm_user.itemQty]}
      AutoNumeric.set(elsDocsitemQty[z], zm_user.itemQty[z])
    }
  }
  if (zm_user.itemAmount) {
    for (let z = 0; z < elsDocsitemAmount.length; z++) {
      if (!zm_user.itemAmount[z]) {continue}
      else if (typeof zm_user.itemAmount == 'string') {zm_user.itemAmount = [zm_user.itemAmount]}
      AutoNumeric.set(elsDocsitemAmount[z], zm_user.itemAmount[z])
    }
  }
  /* auto calculate after fill */
  for(let z = 0; z < elsDocsitemQty.length; z++){
    elsDocsitemQty[z].addEventListener('change',function(){
      const elemPrice = this.closest('[data-zm=line]').querySelector('[data-docs=itemPrice]')
      const elemAmount = this.closest('[data-zm=line]').querySelector('[data-docs=itemAmount]')
      AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(this))
      calculateTotal()
    })
  }
  for(let z = 0; z < elsItemAmtAdj.length; z++){
    elsItemAmtAdj[z].addEventListener('change',calculateTotal)
  }

  elLang.onchange = setDocLang
  elDocSetFontSelect.onchange = setDocFont
  elTheme.onchange = setDocTheme

  })
  
  })
},
/* declare global variable */
isElemInput = function(elem){
  return [
    'INPUT',
    'TEXTAREA'
  ].indexOf(elem.tagName) >= 0
},
getElemValue = function(elem){
  if (AutoNumeric.isManagedByAutoNumeric(elem)) {
    return AutoNumeric.getNumber(elem)
  } else {
    return elem[isElemInput(elem) ? 'value' : 'textContent']
  }
},
setElemValue = function(elem,val){
  // console.log(elem);
  if (AutoNumeric.isManagedByAutoNumeric(elem)) {
    AutoNumeric.set(elem, val)
  } else {
    elem[isElemInput(elem) ? 'value' : 'textContent'] = val
  }
},
calculateTotal = function(){
  const elems = document.querySelectorAll('[data-docs=itemAmount]')
  let total = 0
  for(let z = 0; z < elems.length; z++){
    total += AutoNumeric.getNumber(elems[z])
  }
  let
  saletax = total * zm_user.vatRate,
  incometax = total * zm_user.whtRate
  AutoNumeric.set('[data-docs=totalAmount]',total)
  AutoNumeric.set('[data-docs=totalVat]',saletax)
  if (document.querySelector('[data-docs=totalWht]')) {
    AutoNumeric.set('[data-docs=totalWht]',incometax)
  } else {incometax = 0}
  AutoNumeric.set('[data-docs=totalFinal]',AutoNumeric.getNumber('[data-docs=totalAdjust]') + total + saletax + incometax)
},
gatherUserFill = function(){
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
    const value = getElemValue(elsDataDocs[z])
    if (value) {
      zm_user[elsDataDocs[z].dataset.docs] = value
    }
  }
  for (let z = 0; z < elsDocsitem.length; z++) {
    const value = getElemValue(elsDocsitem[z])
    const docs = elsDocsitem[z].dataset.docs
    if (value) {
      if (!zm_user[docs]) zm_user[docs] = []
      zm_user[docs].push(value)
    }
  }

},
loadFileXmlHr = function(file,cb){
  var xhr= new XMLHttpRequest()
  xhr.onload = typeof cb === 'function' ? cb : function(){
    console.log('** Need a callback function, otherwise nothing happens')
  }
  xhr.open('GET', file)
  xhr.send()
}