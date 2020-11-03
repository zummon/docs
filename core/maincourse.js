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
  for (const key in tmps) {
    if (tmps.hasOwnProperty(key)) {
      /* to identify which form, an user selects to create */
      elAnchor.dataset.tmp = key
      /* showing */
      elHoldImg.style.backgroundImage = 'url('+ tmps[key].img +')'
      elHoldText.textContent = tmps[key].name
      /* to show and hide the options selected, like filtering */
      elWrapDiv.dataset.type = tmps[key].type
      elWrapDiv.className = tmps[key].doc.join(' ')
      elBrowse.appendChild(elWrapDiv.cloneNode(true))
    }
  }
  elBrowse.removeChild(elWrapDiv)
  /* get elements after build */
  const
  elsWrapDiv = elBrowse.querySelectorAll(':scope > div'),
  elsBrowseA = elBrowse.querySelectorAll('a')
  
  function setBrowseLang(){
    let i = disc.lang
    elBrowseTitle.textContent = browse.title[i]
  }; setBrowseLang();
  function setBrowseTheme(){
    let i = disc.theme
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
  }; setBrowseTheme();
  function setBrowseView(){
    elSetDocType.classList.remove('uk-hidden')
    elSetDateFormat.classList.remove('uk-hidden')
    elSetAnPrice.classList.remove('uk-hidden')
    elSetAnQty.classList.remove('uk-hidden')
    elSetLines.classList.remove('uk-hidden')
    elSetVatRate.classList.remove('uk-hidden')
    elSetWhtRate.classList.remove('uk-hidden')
    if (['inv','tinv','qn'].indexOf(user.view) >= 0) {
      elSetWhtRate.classList.add('uk-hidden')
    }
    /* revealDoc (view) */
    for (let z = 0; z < elsWrapDiv.length; z++) {
      elsWrapDiv[z].classList.add('uk-hidden')
    }
    /* re-select the elements */
    const
    elsBrowseSelect = elBrowse.querySelectorAll('.'+ user.view)
    for (let z = 0; z < elsBrowseSelect.length; z++) {
      elsBrowseSelect[z].classList.remove('uk-hidden')
    }
  }; setBrowseView();
  function revealDocType(){
    for (let z = 0; z < elsWrapDiv.length; z++) {
      elsWrapDiv[z].classList.add('uk-hidden')
    }
    /* re-select the elements */
    const 
    elsBrowseSelect = elBrowse.querySelectorAll('[data-type='+ user.docType +']')
    for (let z = 0; z < elsBrowseSelect.length; z++) {
      elsBrowseSelect[z].classList.remove('uk-hidden')
    }
  }; revealDocType();
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
  tmp = tmps[key],
  json = './doc_'+ user.view +'/asset.json',
  html = './doc_'+ user.view +'/'+ key +'.html'
  
  loadFileXmlHr(json,function(){
  /* resetting */
  docAsset = JSON.parse(this.responseText)
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
  for (let z = 1; z <= user.lines; z++) {
    const lineNum = elDataZmLine.querySelector('[data-zm=lineNum]')
    if (lineNum) setElemValue(lineNum, z)
    elDataZmLines.appendChild(elDataZmLine.cloneNode(true))
  }
  elDataZmLines.removeChild(elDataZmLine)
  /* build tax rate % label */
  setElemValue(elDataZmVatRate, (user.vatRate*100).toFixed(2) +'%' )
  if (elDataZmWhtRate) {
    setElemValue(elDataZmWhtRate, (-user.whtRate*100).toFixed(2) +'%' )
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
    let i = disc.lang
    const label = docAsset.label
    for (let z = 0; z < elsDataLabel.length; z++) {
      // console.log(elsDataLabel[z].dataset.label);
      setElemValue(elsDataLabel[z], label[
        elsDataLabel[z].dataset.label
      ][i])
    }
  }; setDocLang();
  function setDocFont(){
    for (let z = 0; z < elsDataFont.length; z++) {
      elsDataFont[z].style.fontFamily = elDocSetFontSelect.value
    }
  }; setDocFont();
  function setDocTheme(){
  }; setDocTheme();

  /* build date and date modal selection */
  for (let z = 0; z < elsDate.length; z++) {
    elsDate[z].addEventListener('click',function(){
      activeFillup = this
      UIkit.modal('#modal-date').show()
      elMdDateInput.focus()
    })
  }
  /* build logos, source: https://imgur.com/WzWR2nA */
  for(let z = 0; z < elsImgLogo.length; z++){
    elsImgLogo[z].src = 'https://i.imgur.com/WzWR2nA.png'
    elsImgLogo[z].addEventListener('click',function(){
      activeFillup = this
      UIkit.modal('#modal-upload').show()
      elMdUpInput.focus()
    })
  }
  /* fill up from user data */
  for (let z = 0; z < elsDataDocsNotitem.length; z++) {
    const entry = user[elsDataDocsNotitem[z].dataset.docs]
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
    if (user.itemDesc) {
      if (!user.itemDesc[z]) {continue}
      else if (typeof user.itemDesc == 'string') {user.itemDesc = [user.itemDesc]}
      setElemValue(elsDocsitemDesc[z], user.itemDesc[z])
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
    setofAnPrice[user.anPrice].option
  )
  AutoNumeric.multiple(
    '[data-docs=itemQty]',
    setofAnQty[user.anQty].option
  )
  if (user.itemPrice) {
    for (let z = 0; z < elsDocsitemPrice.length; z++) {
      if (!user.itemPrice[z]) {continue}
      else if (typeof user.itemPrice == 'string') {user.itemPrice = [user.itemPrice]}
      AutoNumeric.set(elsDocsitemPrice[z], user.itemPrice[z])
    }
  }
  if (user.itemQty) {
    for (let z = 0; z < elsDocsitemQty.length; z++) {
      if (!user.itemQty[z]) {continue}
      else if (typeof user.itemQty == 'string') {user.itemQty = [user.itemQty]}
      AutoNumeric.set(elsDocsitemQty[z], user.itemQty[z])
    }
  }
  if (user.itemAmount) {
    for (let z = 0; z < elsDocsitemAmount.length; z++) {
      if (!user.itemAmount[z]) {continue}
      else if (typeof user.itemAmount == 'string') {user.itemAmount = [user.itemAmount]}
      AutoNumeric.set(elsDocsitemAmount[z], user.itemAmount[z])
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
  saletax = total * user.vatRate,
  incometax = total * user.whtRate
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

  user.itemDesc = []
  user.itemPrice = []
  user.itemQty = []
  user.itemAmount = []

  for (let z = 0; z < elsDataDocs.length; z++) {
    const value = getElemValue(elsDataDocs[z])
    if (value) {
      user[elsDataDocs[z].dataset.docs] = value
    }
  }
  for (let z = 0; z < elsDocsitem.length; z++) {
    const value = getElemValue(elsDocsitem[z])
    const docs = elsDocsitem[z].dataset.docs
    if (value) {
      if (!user[docs]) user[docs] = []
      user[docs].push(value)
    }
  }

},
// https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
getObjStr = function(obj) {
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var paste = obj[p]
      if (paste.constructor !== Array) paste = [paste]
      for (let z = 0; z < paste.length; z++) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(paste[z]))   
      }
    }
  }
  return str.join("&");
},
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
onlyUnique = function(value,index,self){
  return self.indexOf(value) === index;
},
loadFileXmlHr = function(file,cb){
  var xhr= new XMLHttpRequest()
  xhr.onload = typeof cb === 'function' ? cb : function(){
    console.log('** Need a callback function, otherwise nothing happens')
  }
  xhr.open('GET', file)
  xhr.send()
}