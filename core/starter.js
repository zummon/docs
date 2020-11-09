/* declare global elements */
const 
/* select main elements */
elAbove = document.querySelector('#above'),
elNav = document.querySelector('#nav'),
elLang = elAbove.querySelector('#lang'),
elTheme = elAbove.querySelector('#theme'),
elGreet = elNav.querySelector('#greet'),
/* select setting elements */
elSetDoc = elNav.querySelector('#set-doc'),
elSetDocStyle = elNav.querySelector('#set-docStyle'),
elSetDateFormat = elNav.querySelector('#set-dateFormat'),
elSetAnPrice = elNav.querySelector('#set-anPrice'),
elSetAnQty = elNav.querySelector('#set-anQty'),
elSetLines = elNav.querySelector('#set-lines'),
elSetVatRate = elNav.querySelector('#set-vatRate'),
elSetWhtRate = elNav.querySelector('#set-whtRate'),
elDocSetFont = elNav.querySelector('#docSet-font'),
elDocActBack = elNav.querySelector('#docAct-back'),
elDocActPrint = elNav.querySelector('#docAct-print'),
/* select inside the elements */
elSetDocSelect = elSetDoc.querySelector('select'),
elSetDocStyleSelect = elSetDocStyle.querySelector('select'),
elSetDateFormatSelect = elSetDateFormat.querySelector('select'),
elSetAnPriceSelect = elSetAnPrice.querySelector('select'),
elSetAnQtySelect = elSetAnQty.querySelector('select'),
elSetLinesInput = elSetLines.querySelector('input'),
elSetVatRateInput = elSetVatRate.querySelector('input'),
elSetWhtRateInput = elSetWhtRate.querySelector('input'),
elDocSetFontSelect = elDocSetFont.querySelector('select'),
/* select modal elements */
elMdDate = document.querySelector('#modal-date'),
elMdUpload = document.querySelector('#modal-upload'),
elMdDateInput = elMdDate.querySelector('#modal-date-input'),
elMdUpInput = elMdUpload.querySelector('#modal-upload-input'),
/* temporary element */
nodeOption = document.createElement('option'),
/* declare global function */
zm_getStrObj = function(url){
  // https://www.sitepoint.com/get-url-parameters-with-javascript/
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? '' : decodeURIComponent(a[1]);
      if (paramName.match(/\[(\d+)?\]$/)) {
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];
        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          obj[key].push(paramValue);
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          obj[paramName].push(paramValue);
        }
      }
    }
  }
  return obj;
},
zm_getObjStr = function(obj) {
  // https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
  var str = [];
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var paste = obj[p]
      if (paste.constructor !== Array) paste = [paste]
      for (var z = 0; z < paste.length; z++) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(paste[z]))   
      }
    }
  }
  return str.join("&");
};

(function(){
/* set user data not to get error of undefined */
zm_user = { lang: '', theme: '',
  doc: 'invoice',
  docStyle: 'Standard',
  dateFormat: 'dmmmyyyy',
  anPrice: 'num',
  anQty: 'integer',
  lines: 4,
  vatRate: 0.07,
  whtRate: -0.03,
}
/* reset user data before print */
function clearUserData(){
  zm_user = { lang: zm_user.lang, theme: zm_user.theme,
    doc: zm_user.doc,
    docStyle: zm_user.docStyle,
    dateFormat: zm_user.dateFormat,
    anPrice: zm_user.anPrice,
    anQty: zm_user.anQty,
    lines: zm_user.lines,
    vatRate: zm_user.vatRate,
    whtRate: zm_user.whtRate,
  }
}
/* get link paste to user data */
const userLinkObj = zm_getStrObj()
for (const key in userLinkObj) {
  if (userLinkObj.hasOwnProperty(key)) {
    zm_user[key] = userLinkObj[key]
  }
}; delete zm_user.fbclid

/* set the existing options */
function setDisc(key){
  // force user data to be existed value, and for getting index easily
  zm_disc[key] = zm[key].map(function(t){return t.type}).indexOf(zm_user[key])
  if (zm_disc[key] == -1) {
    zm_user[key] = zm[key][0].type
    zm_disc[key] = 0
  }
}; setDisc('lang'); setDisc('theme')

document.addEventListener('DOMContentLoaded',function(){
const
/* select main elements */
elEnd = document.querySelector('#end'),
elSourceused = elEnd.querySelector('#sourceused'),
elCreateby = elEnd.querySelector('#createby'),
/* select inside the elements */
elSourceusedSpan = elSourceused.querySelector('span'),
elsSourceusedTarget = elSourceused.querySelectorAll('[target]'),
elCreatebySpan = elCreateby.querySelector('span'),
elsCreatebyTarget = elCreateby.querySelectorAll('[target]'),
elCreatebySite = elCreateby.querySelector('#createby_site'),

elSetDocLabel = elSetDoc.querySelector('label'),
elSetDocStyleLabel = elSetDocStyle.querySelector('label'),
elSetDateFormatLabel = elSetDateFormat.querySelector('label'),
elSetAnPriceLabel = elSetAnPrice.querySelector('label'),
elSetAnQtyLabel = elSetAnQty.querySelector('label'),
elSetLinesLabel = elSetLines.querySelector('label'),
elSetVatRateLabel = elSetVatRate.querySelector('label'),
elSetWhtRateLabel = elSetWhtRate.querySelector('label'),
elDocSetFontLabel = elDocSetFont.querySelector('label'),
/* select modal elements */
elMdPrint = document.querySelector('#modal-print'),

elMdUpTitle = elMdUpload.querySelector('h4'),
elMdUpInputLabel = elMdUpload.querySelector('[for=modal-upload-input]'),
elMdUpWidth = elMdUpload.querySelector('#modal-upload-width'),
elMdUpWidthLabel = elMdUpload.querySelector('[for=modal-upload-width]'),
elMdUpHeight = elMdUpload.querySelector('#modal-upload-height'),
elMdUpHeightLabel = elMdUpload.querySelector('[for=modal-upload-height]'),
elMdUpDone = elMdUpload.querySelector('#modal-upload-done'),

elMdDateTitle = elMdDate.querySelector('h4'),
elMdDateInputLabel = elMdDate.querySelector('[for=modal-date-input]'),
elMdDateOutput = elMdDate.querySelector('#modal-date-output'),
elMdDateOutputLabel = elMdDate.querySelector('[for=modal-date-output]'),
elMdDateDone = elMdDate.querySelector('#modal-date-done'),

elMdPrintOutputTitle = elMdPrint.querySelector('h4'),
elMdPrintOutput = elMdPrint.querySelector('#modal-print-output'),
elMdPrintOutputLabel = elMdPrint.querySelector('[for=modal-print-output]'),
elMdPrintDone = elMdPrint.querySelector('#modal-print-done')

/* build options to select from zm[array of object] */
for (let z = 0; z < zm.lang.length; z++) {
  nodeOption.text = zm.lang[z].text
  nodeOption.value = zm.lang[z].type
  elLang.appendChild(nodeOption.cloneNode(true))
}
for (let z = 0; z < zm.theme.length; z++) {
  nodeOption.value = zm.theme[z].type
  elTheme.appendChild(nodeOption.cloneNode(true))
}
for (const key in zm_docs) {
  if (zm_docs.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.dataset = zm_docs[key].type // for filter tmps
    elSetDocSelect.appendChild(nodeOption.cloneNode(true))
  }
}
/* build zm end credit */
for (let z = 0; z < elsSourceusedTarget.length; z++) {
  elsSourceusedTarget[z].textContent = zm_sourceused.content[z].text
  elsSourceusedTarget[z].href = zm_sourceused.content[z].link
}
for (let z = 0; z < elsCreatebyTarget.length; z++) {
  elsCreatebyTarget[z].href = zm_createby.content[z].link
}
/* build setting options */
for (const key in zm_setofDocType) {
  if (zm_setofDocType.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.text = key
    elSetDocStyleSelect.appendChild(nodeOption.cloneNode(true))
  }
}
for (const key in zm_setofDateFormat) {
  if (zm_setofDateFormat.hasOwnProperty(key)) {
    nodeOption.value = key
    elSetDateFormatSelect.appendChild(nodeOption.cloneNode(true))
  }
}
for (const key in zm_setofAnPrice) {
  if (zm_setofAnPrice.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.text = zm_setofAnPrice[key].text
    elSetAnPriceSelect.appendChild(nodeOption.cloneNode(true))
  }
}
for (const key in zm_setofAnQty) {
  if (zm_setofAnQty.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.text = zm_setofAnQty[key].text
    elSetAnQtySelect.appendChild(nodeOption.cloneNode(true))
  }
}
/* setting selected value */
elLang.value = zm_user.lang
elTheme.value = zm_user.theme
elSetDocSelect.value = zm_user.doc
elSetDocStyleSelect.value = zm_user.docStyle
elSetDateFormatSelect.value = zm_user.dateFormat
elSetAnPriceSelect.value = zm_user.anPrice
elSetAnQtySelect.value = zm_user.anQty
elSetLinesInput.value = zm_user.lines
elSetVatRateInput.value = zm_user.vatRate
elSetWhtRateInput.value = zm_user.whtRate

/* get elements for changing languages only */
const elsTheme = elTheme.querySelectorAll('option'),
elSetDocOption = elSetDocSelect.querySelectorAll('option'),
elSetDateFormatOption = elSetDateFormatSelect.querySelectorAll('option'),
elActBackLabel = elDocActBack.querySelector('label'),
elActPrintLabel = elDocActPrint.querySelector('label')
/* setup language */
function setLang(){ let i = zm_disc.lang
  for (let z = 0; z < elsTheme.length; z++) {
    elsTheme[z].text = zm.theme[z].text[i]
  }
  for (let z = 0; z < elSetDocOption.length; z++) {
    elSetDocOption[z].text = zm_docs[elSetDocOption[z].value].text[i]
  }
  for (let z = 0; z < elSetDateFormatOption.length; z++) {
    elSetDateFormatOption[z].text = zm_setofDateFormat[
      elSetDateFormatOption[z].value
    ].text[i]
  }
  for (let z = 0; z < elsCreatebyTarget.length; z++) {
    elsCreatebyTarget[z].textContent = zm_createby.content[z].text[i]
  }
  document.title = zm_title[i]
  document.documentElement.style.fontFamily = zm_font[i]

  elGreet.textContent = zm_greet[i]
  elSourceusedSpan.textContent = zm_sourceused.title[i]
  elCreatebySpan.textContent = zm_createby.title[i]

  elSetDocLabel.textContent = zm_set.doc[i]
  elSetDocStyleLabel.textContent = zm_set.docStyle[i]
  elSetDateFormatLabel.textContent = zm_set.dateFormat[i]
  elSetAnPriceLabel.textContent = zm_set.anPrice[i]
  elSetAnQtyLabel.textContent = zm_set.anQty[i]
  elSetLinesLabel.textContent = zm_set.lines[i]
  elSetVatRateLabel.textContent = zm_set.vatRate[i]
  elSetWhtRateLabel.textContent = zm_set.whtRate[i]

  elDocSetFontLabel.textContent = zm_set.docFont[i]
  elActBackLabel.textContent = zm_set.actBack[i]
  elActPrintLabel.textContent = zm_set.actPrint[i]

  elMdDateTitle.textContent = zm_modal.date.title[i]
  elMdDateInputLabel.textContent = zm_modal.date.input[i]
  elMdDateOutputLabel.textContent = zm_modal.date.output[i]
  elMdUpTitle.textContent = zm_modal.upload.title[i]
  elMdUpInputLabel.textContent = zm_modal.upload.input[i]
  elMdUpWidthLabel.textContent = zm_modal.upload.width[i]
  elMdUpHeightLabel.textContent = zm_modal.upload.height[i]
  elMdPrintOutputTitle.textContent = zm_modal.print.title[i]
  elMdPrintOutputLabel.textContent = zm_modal.print.output[i]

}; setLang()
/* get the elements for changing theme only */
const elsCssModal = document.querySelectorAll('.uk-modal-dialog')
/* setup Theme */
function setTheme(){ let i = zm_disc.theme
  for (let z = 0; z < elsCssModal.length; z++) {
    elsCssModal[z].className = [
      'uk-modal-dialog uk-modal-body',
      'uk-modal-dialog uk-modal-body uk-background-secondary uk-light',
    ][i]
  }
  elAbove.className = [
    'uk-container uk-container-small uk-margin-large-top',
    'uk-container uk-container-small uk-margin-large-top uk-light',
  ][i]
  elNav.className = [
    'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-grid',
    'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-grid uk-light',
  ][i]
  elEnd.className = [
    'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-flex-middle uk-grid',
    'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-flex-middle uk-grid uk-light',
  ][i]
  document.documentElement.className = [
    '',
    'uk-background-secondary',
  ][i]
}; setTheme()
/* setup current URL */
function setUrl(){
  const userStr = zm_getObjStr(zm_user)
  window.history.replaceState('','','?'+ userStr)
  /* connect and paste URL parameters to zummon web creations */
  const
  langStr = 'lang='+ zm_user.lang,
  themeStr = 'theme='+ zm_user.theme

  elCreatebySite.href = elCreatebySite.href.split('?')[0] +'?'+ langStr +'&'+ themeStr
}; setUrl()
/* main select event listener */
elLang.addEventListener('change',function(){
  zm_user.lang = this.value
  setDisc('lang')
  setLang()
  setUrl()
})
elTheme.addEventListener('change',function(){
  zm_user.theme = this.value
  setDisc('theme')
  setTheme()
  setUrl()
})
elSetDocSelect.addEventListener('change',function(){
  zm_user.doc = this.value
  setUrl()
})
/* setting of event listener */
elSetDocStyleSelect.addEventListener('change',function(){ zm_user.docStyle = this.value })
elSetDateFormatSelect.addEventListener('change',function(){ zm_user.dateFormat = this.value })
elSetAnPriceSelect.addEventListener('change',function(){ zm_user.anPrice = this.value })
elSetAnQtySelect.addEventListener('change',function(){ zm_user.anQty = this.value })
elSetLinesInput.addEventListener('change',function(){ zm_user.lines = this.value })
elSetVatRateInput.addEventListener('change',function(){ zm_user.vatRate = this.value })
elSetWhtRateInput.addEventListener('change',function(){ zm_user.whtRate = this.value })

/* buttons of event listener */
elDocActBack.addEventListener('click',zm_browseLoad)
elDocActPrint.addEventListener('click',function(){
  window.print()
})
/* handle modals to fill form in doc page */
elMdDateInput.addEventListener('change',function(){
  elMdDateOutput.value = zm_setofDateFormat[zm_user.dateFormat].call(this.value)
})
elMdDateDone.addEventListener('click',function(){
  zm_setElemValue(zm_active, elMdDateOutput.value)
  UIkit.modal('#modal-date').hide()
  zm_active.focus()
  zm_active = undefined
})

elMdUpDone.addEventListener('click',function(){
  let imgSrc = 'https://i.imgur.com/WzWR2nA.png'
  if (elMdUpInput.files.length > 0){
    imgSrc = window.URL.createObjectURL(elMdUpInput.files[0])
  }
  zm_active.src = imgSrc
  const width = elMdUpWidth.value,
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
/* print completed */
function afterPrint(){
  clearUserData()
  getDocFill()
  elMdPrintOutput.value = window.location.href.split('?')[0] +'?'+ zm_getObjStr(zm_user)
  UIkit.modal('#modal-print').show()
}
/* listen to call print */
if (window.matchMedia) {
  // https://stackoverflow.com/questions/18325025/how-to-detect-window-print-finish
  window.matchMedia('print').addListener(function(mql){
    if (!mql.matches) afterPrint()
  })
} else {
  window.onafterprint = afterPrint
}

zm_browseLoad()

})

})()