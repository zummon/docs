document.addEventListener('DOMContentLoaded',function(){
  // set user data not to get error of undefined
  zm_user = {
    anPrice: 'num',
    anQty: 'integer',
    dateFormat: 'd mmm yyyy',
    doc: 'invoice',
    era: 'christ',
    lang: 'english',
    lines: 4,
    vatRate: 0.07,
    whtRate: -0.03,
  }
  // get link parameters paste to user data
  var userLinkObj = zm_getStrObj()
  for (const key in userLinkObj) {
    if (userLinkObj.hasOwnProperty(key)) {
      zm_user[key] = userLinkObj[key]
    }
  }
  // paste to local storage
  if (zm_themes.hasOwnProperty(zm_user.theme)) {
    window.localStorage.setItem('theme',zm_user.theme)
  }
  // clear not used parts
  delete zm_user.fbclid
  delete zm_user.theme
  // build options to select
  for (const [key, value] of Object.entries(zm_langs)) {
    nodeOption.value = key
    nodeOption.text = value
    elLang.appendChild(nodeOption.cloneNode(true))
  }
  for (const key of Object.keys(zm_themes)) {
    nodeOption.value = key
    elTheme.appendChild(nodeOption.cloneNode(true))
  }
  for (const key of Object.keys(zm_eras)) {
    nodeOption.value = key
    elEra.appendChild(nodeOption.cloneNode(true))
  }
  for (const key in zm_docs) {
    if (zm_docs.hasOwnProperty(key)) {
      nodeOption.value = key
      nodeOption.dataset = zm_docs[key] // for filter tmps
      elSetDocSelect.appendChild(nodeOption.cloneNode(true))
    }
  }
  for (const key in zm_dateFormats) {
    if (zm_dateFormats.hasOwnProperty(key)) {
      nodeOption.value = key
      nodeOption.text = key
      elSetDateFormatSelect.appendChild(nodeOption.cloneNode(true))
    }
  }
  for (const key in zm_anPrices) {
    if (zm_anPrices.hasOwnProperty(key)) {
      nodeOption.value = key
      nodeOption.text = key
      elSetAnPriceSelect.appendChild(nodeOption.cloneNode(true))
    }
  }
  for (const key in zm_anQtys) {
    if (zm_anQtys.hasOwnProperty(key)) {
      nodeOption.value = key
      nodeOption.text = key
      elSetAnQtySelect.appendChild(nodeOption.cloneNode(true))
    }
  }
  // set selected option
  elTheme.value = window.localStorage.getItem('theme')
  elLang.value = zm_user.lang
  elEra.value = zm_user.era
  elSetDocSelect.value = zm_user.doc
  elSetDateFormatSelect.value = zm_user.dateFormat
  elSetAnPriceSelect.value = zm_user.anPrice
  elSetAnQtySelect.value = zm_user.anQty
  elSetLinesInput.value = zm_user.lines
  elSetVatRateInput.value = zm_user.vatRate
  elSetWhtRateInput.value = zm_user.whtRate
  // build end credit
  for (let z = 0; z < elsSourceusedTarget.length; z++) {
    elsSourceusedTarget[z].textContent = zm_sourceusedContent[z].text
    elsSourceusedTarget[z].href = zm_sourceusedContent[z].link
  }
  for (let z = 0; z < elsCreatebyTarget.length; z++) {
    elsCreatebyTarget[z].href = zm_createbyLinks[z]
  }
  // run functions
  zm_setLang()
  zm_setTheme()
  zm_setUrl()
  zm_setConnect()

  zm_browseLoad()
  
})
// select and do something
elLang.addEventListener('change',function(){
  zm_user.lang = this.value
  zm_setLang()
  zm_setUrl()
  zm_setConnect()
})
elTheme.addEventListener('change',function(){
  window.localStorage.setItem('theme',this.value)
  zm_setTheme()
  zm_setUrl()
  zm_setConnect()
})
elEra.addEventListener('change',function(){
  zm_user.era = this.value
  zm_setUrl()
})
elSetDocSelect.addEventListener('change',function(){
  zm_user.doc = this.value
  zm_setUrl()
})
elSetDateFormatSelect.addEventListener('change',function(){
  zm_user.dateFormat = this.value
  zm_setUrl()
})
elSetAnPriceSelect.addEventListener('change',function(){
  zm_user.anPrice = this.value
  zm_setUrl()
})
elSetAnQtySelect.addEventListener('change',function(){
  zm_user.anQty = this.value
  zm_setUrl()
})
elSetLinesInput.addEventListener('change',function(){
  zm_user.lines = this.value
  zm_setUrl()
})
elSetVatRateInput.addEventListener('change',function(){
  zm_user.vatRate = this.value
  zm_setUrl()
})
elSetWhtRateInput.addEventListener('change',function(){
  zm_user.whtRate = this.value
  zm_setUrl()
})
// click and do something
elDocActBack.addEventListener('click',zm_browseLoad)
elDocActPrint.addEventListener('click',function(){
  window.print()
})
// handle modals to fill form in doc page
elMdDateInput.addEventListener('change',function(){
  elMdDateOutput.value = zummon.dateFormat({
    date: this.value,
    format: zm_user.dateFormat,
    language: zm_user.lang, 
    era: zm_user.era
  })
})
elMdDateDone.addEventListener('click',function(){
  zm_setElemValue(zm_active, elMdDateOutput.value)
  UIkit.modal('#modal-date').hide()
  zm_active.focus()
  zm_active = undefined
})
elMdUpDone.addEventListener('click',function(){
  var imgSrc = 'https://i.imgur.com/WzWR2nA.png'
  if (elMdUpInput.files.length > 0){
    imgSrc = window.URL.createObjectURL(elMdUpInput.files[0])
  }
  zm_active.src = imgSrc
  var width = elMdUpWidth.value,
  height = elMdUpHeight.value
  if (width) {
    zm_active.width = width
  } else {
    zm_active.removeAttribute('width')
  }
  if (height) {
    zm_active.height = height
  } else {
    zm_active.removeAttribute('height')
  }
  UIkit.modal('#modal-upload').hide()
  zm_active.focus()
  zm_active = undefined
})
elMdPrintDone.addEventListener('click',function(){
  window.location.href = elMdPrintOutput.value
})

// listen to call print
if (window.matchMedia) {
  // https://stackoverflow.com/questions/18325025/how-to-detect-window-print-finish
  window.matchMedia('print').addListener(function(mql){
    if (!mql.matches) zm_afterPrint()
  })
} else {
  window.onafterprint = zm_afterPrint
}