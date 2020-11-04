/* declare global elements */
const 
elView = document.querySelector('#view'),
elLang = document.querySelector('#lang'),
elTheme = document.querySelector('#theme'),
/* select setting elements */
elSetDocType = document.querySelector('#set-docType'),
elSetDateFormat = document.querySelector('#set-dateFormat'),
elSetAnPrice = document.querySelector('#set-anPrice'),
elSetAnQty = document.querySelector('#set-anQty'),
elSetLines = document.querySelector('#set-lines'),
elSetVatRate = document.querySelector('#set-vatRate'),
elSetWhtRate = document.querySelector('#set-whtRate'),
elDocSetFont = document.querySelector('#docSet-font'),
elDocActBack = document.querySelector('#docAct-back'),
elDocActPrint = document.querySelector('#docAct-print'),
/* select inside the elements */
elSetDocTypeSelect = elSetDocType.querySelector('select'),
elSetDateFormatSelect = elSetDateFormat.querySelector('select'),
elSetAnPriceSelect = elSetAnPrice.querySelector('select'),
elSetAnQtySelect = elSetAnQty.querySelector('select'),
elSetLinesInput = elSetLines.querySelector('input'),
elSetVatRateInput = elSetVatRate.querySelector('input'),
elSetWhtRateInput = elSetWhtRate.querySelector('input'),
elDocSetFontSelect = elDocSetFont.querySelector('select'),
/* select modal elements */
elMdUpload = document.querySelector('#modal-upload'),
elMdDate = document.querySelector('#modal-date'),

elMdUpInput = elMdUpload.querySelector('#modal-upload-input'),
elMdDateInput = elMdDate.querySelector('#modal-date-input'),
/* other */
nodeOption = document.createElement('option');

(function(){
/* set user data not to get error of undefined */
user = { lang: '', theme: '', view: 'inv',
  docType: 'Standard',
  dateFormat: 'dmmmyyyy',
  anPrice: 'num',
  anQty: 'integer',
  lines: 4,
  vatRate: 0.07,
  whtRate: -0.03,
}
/* get link pasting */
const userLinkObj = (function(url){
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
})()
for (const key in userLinkObj) {
  if (userLinkObj.hasOwnProperty(key)) {
    user[key] = userLinkObj[key]
  }
}
delete user.fbclid

/* set the existing options */
function setDisc(key){
  // force user data to be existed value, and for getting index easily
  disc[key] = zm[key].map(function(t){return t.type}).indexOf(user[key])
  if (disc[key] == -1) {
    user[key] = zm[key][0].type
    disc[key] = 0
  }
}; setDisc('lang'); setDisc('theme');

document.addEventListener('DOMContentLoaded',function(){
const
/* select main elements */
elAbove = document.querySelector('#above'),
elNav = document.querySelector('#nav'),
  elGreet = document.querySelector('#greet'),
elEnd = document.querySelector('#end'),
  elsourceused = document.querySelector('#sourceused span'),
  elCreateby = document.querySelector('#createby span'),
  elssourceused = document.querySelectorAll('#sourceused [target]'),
  elsCreateby = document.querySelectorAll('#createby [target]'),
  /* get specific connect elements */
  elsCreatebySite = document.querySelector('#createby_site'),
/* select inside the elements */
elSetDocTypeLabel = elSetDocType.querySelector('label'),
elSetDateFormatLabel = elSetDateFormat.querySelector('label'),
elSetAnPriceLabel = elSetAnPrice.querySelector('label'),
elSetAnQtyLabel = elSetAnQty.querySelector('label'),
elSetLinesLabel = elSetLines.querySelector('label'),
elSetVatRateLabel = elSetVatRate.querySelector('label'),
elSetWhtRateLabel = elSetWhtRate.querySelector('label'),
elDocSetFontLabel = elDocSetFont.querySelector('label'),
/* select modal elements */
elMdPrint = document.querySelector('#modal-print'),

elMdUpTitle = elMdUpload.querySelector('.uk-modal-title'),
elMdUpInputLabel = elMdUpload.querySelector('[for=modal-upload-input]'),
elMdUpWidth = elMdUpload.querySelector('#modal-upload-width'),
elMdUpWidthLabel = elMdUpload.querySelector('[for=modal-upload-width]'),
elMdUpHeight = elMdUpload.querySelector('#modal-upload-height'),
elMdUpHeightLabel = elMdUpload.querySelector('[for=modal-upload-height]'),
elMdUpDone = elMdUpload.querySelector('#modal-upload-done'),

elMdDateTitle = elMdDate.querySelector('.uk-modal-title'),
elMdDateInputLabel = elMdDate.querySelector('[for=modal-date-input]'),
elMdDateOutput = elMdDate.querySelector('#modal-date-output'),
elMdDateOutputLabel = elMdDate.querySelector('[for=modal-date-output]'),
elMdDateDone = elMdDate.querySelector('#modal-date-done'),

elMdPrintOutputTitle = elMdPrint.querySelector('.uk-modal-title'),
elMdPrintOutput = elMdPrint.querySelector('#modal-print-output'),
elMdPrintOutputLabel = elMdPrint.querySelector('[for=modal-print-output]'),
elMdPrintDone = elMdPrint.querySelector('#modal-print-done')

/* build options to select from zm[array of object] */
for(let z = 0; z < zm.lang.length; z++){
  nodeOption.textContent = zm.lang[z].text
  nodeOption.value = zm.lang[z].type
  elLang.appendChild(nodeOption.cloneNode(true))
}
for(let z = 0; z < zm.theme.length; z++){
  nodeOption.value = zm.theme[z].type
  elTheme.appendChild(nodeOption.cloneNode(true))
}
for(let z = 0; z < zm.view.length; z++){
  nodeOption.value = zm.view[z].type
  elView.appendChild(nodeOption.cloneNode(true))
}
/* build zm end credit */
for(let z = 0; z < elssourceused.length; z++){
  elssourceused[z].textContent = sourceused.content[z].text
  elssourceused[z].href = sourceused.content[z].link
}
for(let z = 0; z < elsCreateby.length; z++){
  elsCreateby[z].href = createby.content[z].link
}
/* build setting options */
let options = [];
for (const key in tmps) {
  if (tmps.hasOwnProperty(key)) {
    if (options.indexOf(tmps[key].type) == -1) {
      nodeOption.value = tmps[key].type
      nodeOption.text = tmps[key].type
      elSetDocTypeSelect.appendChild(nodeOption.cloneNode(true))
      options.push(tmps[key].type)
    }
  }
}
for (const key in setofDateFormat) {
  if (setofDateFormat.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.text = setofDateFormat[key].text[disc.lang]
    elSetDateFormatSelect.appendChild(nodeOption.cloneNode(true))
  }
}
for (const key in setofAnPrice) {
  if (setofAnPrice.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.text = setofAnPrice[key].text
    elSetAnPriceSelect.appendChild(nodeOption.cloneNode(true))
  }
}
for (const key in setofAnQty) {
  if (setofAnQty.hasOwnProperty(key)) {
    nodeOption.value = key
    nodeOption.text = setofAnQty[key].text
    elSetAnQtySelect.appendChild(nodeOption.cloneNode(true))
  }
}

elLang.value = user.lang
elTheme.value = user.theme
elView.value = user.view
elSetDocTypeSelect.value = user.docType
elSetDateFormatSelect.value = user.dateFormat
elSetAnPriceSelect.value = user.anPrice
elSetAnQtySelect.value = user.anQty
elSetLinesInput.value = user.lines
elSetVatRateInput.value = user.vatRate
elSetWhtRateInput.value = user.whtRate

/* get elements for changing languages */
const
elsTheme = elTheme.querySelectorAll('option'),
elsView = elView.querySelectorAll('option'),
elActBackLabel = elDocActBack.querySelector('label'),
elActPrintLabel = elDocActPrint.querySelector('label');
/* setup language */
function setLang(i){
  for (let z = 0; z < elsTheme.length; z++) {
    elsTheme[z].textContent = zm.theme[z].text[i]
  }
  for (let z = 0; z < elsView.length; z++) {
    elsView[z].textContent = zm.view[z].text[i]
  }
  for (let z = 0; z < elsCreateby.length; z++) {
    elsCreateby[z].textContent = createby.content[z].text[i]
  }
  document.title = title[i]
  document.documentElement.style.fontFamily = font[i]

  elGreet.textContent = greet[i]
  elsourceused.textContent = sourceused.title[i]
  elCreateby.textContent = createby.title[i]

  elSetDocTypeLabel.textContent = set.docType[i]
  elSetDateFormatLabel.textContent = set.dateFormat[i]
  elSetAnPriceLabel.textContent = set.anPrice[i]
  elSetAnQtyLabel.textContent = set.anQty[i]
  elSetLinesLabel.textContent = set.lines[i]
  elSetVatRateLabel.textContent = set.vatRate[i]
  elSetWhtRateLabel.textContent = set.whtRate[i]

  elDocSetFontLabel.textContent = set.docFont[i]
  elActBackLabel.textContent = set.actBack[i]
  elActPrintLabel.textContent = set.actPrint[i]

  elMdDateTitle.textContent = modal.date.title[i]
  elMdDateInputLabel.textContent = modal.date.input[i]
  elMdDateOutputLabel.textContent = modal.date.output[i]
  elMdUpTitle.textContent = modal.upload.title[i]
  elMdUpInputLabel.textContent = modal.upload.input[i]
  elMdUpWidthLabel.textContent = modal.upload.width[i]
  elMdUpHeightLabel.textContent = modal.upload.height[i]
  elMdPrintOutputTitle.textContent = modal.print.title[i]
  elMdPrintOutputLabel.textContent = modal.print.output[i]

}; setLang(disc.lang);
/* get the elements for changing theme only */
const
elsCssModal = document.querySelectorAll('.uk-modal-dialog');
/* setup Theme */
function setTheme(i){
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
}; setTheme(disc.theme);
/* setup current URL */
function setUrl(){
  const userStr = getObjStr(user)
  window.history.replaceState('','','?'+ userStr)
  /* connect and paste URL parameters to zummon web creations */
  const
  langStr = 'lang='+ user.lang,
  themeStr = 'theme='+ user.theme
  elsCreatebySite.href = elsCreatebySite.href.split('?')[0] +'?'+ langStr +'&'+ themeStr
}; setUrl()
/* main select event listener */
elLang.addEventListener('change',function(){
  user.lang = this.value
  setDisc('lang')
  setLang(disc.lang)
  setUrl()
})
elTheme.addEventListener('change',function(){
  user.theme = this.value
  setDisc('theme')
  setTheme(disc.theme)
  setUrl()
})
elView.addEventListener('change',function(){
  user.view = this.value
  setUrl()
})
/* setting of event listener */
elSetDocTypeSelect.addEventListener('change',function(){
  user.docType = this.value
})
elSetDateFormatSelect.addEventListener('change',function(){
  user.dateFormat = this.value
})
elSetAnPriceSelect.addEventListener('change',function(){
  user.anPrice = this.value
})
elSetAnQtySelect.addEventListener('change',function(){
  user.anQty = this.value
})
elSetLinesInput.addEventListener('change',function(){
  user.lines = this.value
})
elSetVatRateInput.addEventListener('change',function(){
  user.vatRate = this.value
})
elSetWhtRateInput.addEventListener('change',function(){
  user.whtRate = this.value
})

/* buttons of event listener */
elDocActBack.addEventListener('click',browseLoad)
elDocActPrint.addEventListener('click',function(){
  window.print()
})
/* handle modals which these need opening from editing form page first */
elMdDateInput.addEventListener('change',function(){
  elMdDateOutput.value = setofDateFormat[user.dateFormat].call(this.value)
})
elMdDateDone.addEventListener('click',function(){
  setElemValue(activeFillup, elMdDateOutput.value)
  UIkit.modal('#modal-date').hide()
  activeFillup.focus()
  activeFillup = undefined
})

elMdUpDone.addEventListener('click',function(){
  let imgSrc = 'https://i.imgur.com/WzWR2nA.png'
  if (elMdUpInput.files.length > 0){
    imgSrc = window.URL.createObjectURL(elMdUpInput.files[0])
  }
  activeFillup.src = imgSrc
  const width = elMdUpWidth.value
  const height = elMdUpHeight.value
  if(width){activeFillup.width = width}else{activeFillup.removeAttribute('width')}
  if(height){activeFillup.height = height}else{activeFillup.removeAttribute('height')}
  UIkit.modal('#modal-upload').hide()
  activeFillup.focus()
  activeFillup = undefined
})

elMdPrintDone.addEventListener('click',function(){
  window.location.href = elMdPrintOutput.value
})
/* print completed */
const afterPrint = function(){
  gatherUserFill()
  elMdPrintOutput.value = window.location.href.split('?')[0] +'?'+ getObjStr(user)
  UIkit.modal('#modal-print').show()
}
/* print listener command */
if (window.matchMedia) {
  // https://stackoverflow.com/questions/18325025/how-to-detect-window-print-finish
  window.matchMedia('print').addListener(function(mql){
    if (!mql.matches) afterPrint()
  })
} else {
  window.onafterprint = afterPrint
}

browseLoad()

})

})()