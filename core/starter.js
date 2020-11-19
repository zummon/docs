// declare uneditable global elements
const elCssDocStyle = document.querySelector('#css-docStyle'),
elCssDocFont = document.querySelector('#css-docFont'),
elAbove = document.querySelector('#above'),
elNav = document.querySelector('#nav'),
elDisplay = document.querySelector('#display'),
elEnd = document.querySelector('#end'),
elMdDate = document.querySelector('#modal-date'),
elMdUpload = document.querySelector('#modal-upload'),
elMdPrint = document.querySelector('#modal-print'),

elLang = elAbove.querySelector('#lang'),
elEra = elAbove.querySelector('#era'),
elTheme = elAbove.querySelector('#theme'),

elSetDoc = elNav.querySelector('#set-doc'),
elSetDateFormat = elNav.querySelector('#set-dateFormat'),
elSetAnPrice = elNav.querySelector('#set-anPrice'),
elSetAnQty = elNav.querySelector('#set-anQty'),
elSetLines = elNav.querySelector('#set-lines'),
elSetVatRate = elNav.querySelector('#set-vatRate'),
elSetWhtRate = elNav.querySelector('#set-whtRate'),
elDocSetFont = elNav.querySelector('#docSet-font'),
elDocActBack = elNav.querySelector('#docAct-back'),
elDocActPrint = elNav.querySelector('#docAct-print'),

elSourceused = elEnd.querySelector('#sourceused'),
elCreateby = elEnd.querySelector('#createby'),

elSourceusedSpan = elSourceused.querySelector('span'),
elsSourceusedTarget = elSourceused.querySelectorAll('[target]'),

elCreatebySpan = elCreateby.querySelector('span'),
elsCreatebyTarget = elCreateby.querySelectorAll('[target]'),
elCreatebySite = elCreateby.querySelector('#createby_site'),

elSetDocLabel = elSetDoc.querySelector('label'),
elSetDocSelect = elSetDoc.querySelector('select'),

// select set elements
elSetDateFormatLabel = elSetDateFormat.querySelector('label'),
elSetDateFormatSelect = elSetDateFormat.querySelector('select'),
elSetAnPriceLabel = elSetAnPrice.querySelector('label'),
elSetAnPriceSelect = elSetAnPrice.querySelector('select'),
elSetAnQtyLabel = elSetAnQty.querySelector('label'),
elSetAnQtySelect = elSetAnQty.querySelector('select'),
elSetLinesLabel = elSetLines.querySelector('label'),
elSetLinesInput = elSetLines.querySelector('input'),
elSetVatRateLabel = elSetVatRate.querySelector('label'),
elSetVatRateInput = elSetVatRate.querySelector('input'),
elSetWhtRateLabel = elSetWhtRate.querySelector('label'),
elSetWhtRateInput = elSetWhtRate.querySelector('input'),
elDocSetFontLabel = elDocSetFont.querySelector('label'),
elDocSetFontSelect = elDocSetFont.querySelector('select'),

// select modal elements
elMdUpTitle = elMdUpload.querySelector('h4'),
elMdUpInputLabel = elMdUpload.querySelector('[for=modal-upload-input]'),
elMdUpInput = elMdUpload.querySelector('#modal-upload-input'),
elMdUpWidth = elMdUpload.querySelector('#modal-upload-width'),
elMdUpWidthLabel = elMdUpload.querySelector('[for=modal-upload-width]'),
elMdUpHeight = elMdUpload.querySelector('#modal-upload-height'),
elMdUpHeightLabel = elMdUpload.querySelector('[for=modal-upload-height]'),
elMdUpDone = elMdUpload.querySelector('#modal-upload-done'),

elMdDateTitle = elMdDate.querySelector('h4'),
elMdDateInputLabel = elMdDate.querySelector('[for=modal-date-input]'),
elMdDateInput = elMdDate.querySelector('#modal-date-input'),
elMdDateOutput = elMdDate.querySelector('#modal-date-output'),
elMdDateOutputLabel = elMdDate.querySelector('[for=modal-date-output]'),
elMdDateDone = elMdDate.querySelector('#modal-date-done'),

elMdPrintOutputTitle = elMdPrint.querySelector('h4'),
elMdPrintOutput = elMdPrint.querySelector('#modal-print-output'),
elMdPrintOutputLabel = elMdPrint.querySelector('[for=modal-print-output]'),
elMdPrintDone = elMdPrint.querySelector('#modal-print-done'),

// temporary elements for preparing
nodeOption = document.createElement('option'),
// declare uneditable global functions
zm_afterPrint = function(){ // print completed
  zm_docGetData()
  elMdPrintOutput.value = window.location.href.split('?')[0] +'?'+ zm_getObjStr(zm_user)
  UIkit.modal('#modal-print').show()
},
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
zm_getObjStr = function(obj){
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
},
zm_loadFile = function(file,call){
  var xhr = new XMLHttpRequest()
  xhr.onload = call
  xhr.open('GET', file)
  xhr.send()
},
zm_loadScript = function(id,url,call){
  // https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
  // delete an old script
  var elScrDoc = document.querySelector('#'+ id)
  if (elScrDoc) elScrDoc.remove()
  // add a script
  var script = document.createElement('script')
  script.id = id
  script.src = url
  script.onload = call
  document.body.appendChild(script)
},
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
  // console.log(elem)
  if (AutoNumeric.isManagedByAutoNumeric(elem)) {
    AutoNumeric.set(elem,val)
  } else {
    elem[zm_isElemInput(elem) ? 'value' : 'textContent'] = val
  }
},
zm_setConnect = function(){ // paste URL parameters to zummon web creations
  const langStr = 'lang='+ zm_user.lang,
  themeStr = 'theme='+ window.localStorage.getItem('theme')

  elCreatebySite.href = elCreatebySite.href.split('?')[0] +'?'+ langStr +'&'+ themeStr
},
zm_setUrl = function(){ // refresh the url
  window.history.replaceState('','','?'+ zm_getObjStr(zm_user))
},
// doing stuff
zm_setLang = function(){
  // get existing value
  var lang = zm_user.lang
  if (!zm_langs.hasOwnProperty(lang)) {
    lang = Object.keys(zm_langs)[0]
    zm_user.lang = lang
  }
  // load which lang
  zm_loadScript('scr-lang','./core_lang/'+ lang +'.js',function(){
  // get elements for changing language
  const elsTheme = elTheme.querySelectorAll('option'),
  elsEra = elEra.querySelectorAll('option'),
  elGreet = elNav.querySelector('#greet'),
  elSetDocOption = elSetDocSelect.querySelectorAll('option'),
  elActBackLabel = elDocActBack.querySelector('label'),
  elActPrintLabel = elDocActPrint.querySelector('label')
  // doing
  for (let z = 0; z < elsTheme.length; z++) {
    elsTheme[z].text = zm_themesTexts[elsTheme[z].value]
  }
  for (let z = 0; z < elsEra.length; z++) {
    elsEra[z].text = zm_eraTexts[elsEra[z].value]
  }
  for (let z = 0; z < elSetDocOption.length; z++) {
    elSetDocOption[z].text = zm_docsTexts[elSetDocOption[z].value]
  }
  for (let z = 0; z < elsCreatebyTarget.length; z++) {
    elsCreatebyTarget[z].textContent = zm_createbyTexts[z]
  }
  document.title = zm_title
  document.documentElement.style.fontFamily = zm_font

  elGreet.textContent = zm_greet
  elSourceusedSpan.textContent = zm_sourceused
  elCreatebySpan.textContent = zm_createby

  elSetDocLabel.textContent = zm_setDoc
  elSetDateFormatLabel.textContent = zm_setDateFormat
  elSetAnPriceLabel.textContent = zm_setAnPrice
  elSetAnQtyLabel.textContent = zm_setAnQty
  elSetLinesLabel.textContent = zm_setLines
  elSetVatRateLabel.textContent = zm_setVatRate
  elSetWhtRateLabel.textContent = zm_setWhtRate

  elDocSetFontLabel.textContent = zm_docSetFont
  elActBackLabel.textContent = zm_docActBack
  elActPrintLabel.textContent = zm_docActPrint

  elMdDateTitle.textContent = zm_modal_date.title
  elMdDateInputLabel.textContent = zm_modal_date.input
  elMdDateOutputLabel.textContent = zm_modal_date.output
  elMdUpTitle.textContent = zm_modal_upload.title
  elMdUpInputLabel.textContent = zm_modal_upload.input
  elMdUpWidthLabel.textContent = zm_modal_upload.width
  elMdUpHeightLabel.textContent = zm_modal_upload.height
  elMdPrintOutputTitle.textContent = zm_modal_print.title
  elMdPrintOutputLabel.textContent = zm_modal_print.output

  zm_setLangPage(zm_user.doc, zm_user.lang)
  })
},
zm_setTheme = function(){
  // get existing value
  var theme = window.localStorage.getItem('theme')
  if (!zm_themes.hasOwnProperty(theme)) {
    theme = Object.keys(zm_themes)[0]
    window.localStorage.setItem('theme',theme)
    theme = theme
  }
  // get the elements for changing theme
  const elsCssModal = document.querySelectorAll('.uk-modal-dialog')
  // doing
  for (let z = 0; z < elsCssModal.length; z++) {
    elsCssModal[z].className = {
      light: 'uk-modal-dialog uk-modal-body',
      dark: 'uk-modal-dialog uk-modal-body uk-background-secondary uk-light',
    }[theme]
  }
  elAbove.className = {
    light: 'uk-container uk-container-small uk-margin-large-top',
    dark: 'uk-container uk-container-small uk-margin-large-top uk-light',
  }[theme]
  elNav.className = {
    light: 'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-grid',
    dark: 'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-grid uk-light',
  }[theme]
  elEnd.className = {
    light: 'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-flex-middle uk-grid',
    dark: 'uk-child-width-1-2 uk-grid-collapse uk-margin-large uk-flex-middle uk-grid uk-light',
  }[theme]
  document.documentElement.className = {
    light: '',
    dark: 'uk-background-secondary',
  }[theme]
},
// declare changing page
zm_browseLoad = function(){
  zm_loadFile('./core/browse.html',function(){
    elDisplay.innerHTML = this.responseText
    // resetting the setting
    elDisplay.classList.remove('uk-box-shadow-large')
    elDocSetFont.classList.add('uk-hidden')
    elDocActBack.classList.add('uk-hidden')
    elDocActPrint.classList.add('uk-hidden')
    elCssDocStyle.href = ''
    elCssDocFont.href = ''
    // get elements
    const elBrowseTitle = elDisplay.querySelector('#browse-title'),
    elBrowse = elDisplay.querySelector('#browse'),
    elWrapDiv = elBrowse.firstElementChild,
    elAnchor = elWrapDiv.querySelector('a'),
    elHoldImg = elWrapDiv.querySelector('.uk-card-media-top'),
    elHoldText = elWrapDiv.querySelector('.uk-card-body')
    // build elements
    for (const key in zm_tmps) {
      if (zm_tmps.hasOwnProperty(key)) {
        // to identify which form, an user selects to create
        elAnchor.dataset.tmp = key
        // showing item detail
        elHoldImg.style.backgroundImage = 'url('+ zm_tmps[key].img +')'
        elHoldText.textContent = key
        // to show and hide the options selected, for filtering
        elWrapDiv.className = zm_tmps[key].doc.join(' ')
        elBrowse.appendChild(elWrapDiv.cloneNode(true))
      }
    }
    elBrowse.removeChild(elWrapDiv)
    // get elements after build
    const elsWrapDiv = elBrowse.querySelectorAll(':scope > div'),
    elsBrowseA = elBrowse.querySelectorAll('a')
    
    zm_setLangPage = function(){
      elBrowseTitle.textContent = zm_browse
    }
    zm_setLangPage()

    elTheme.onchange = function(){
      var theme = window.localStorage.getItem('theme')
      elBrowseTitle.style.color = {
        light: '',
        dark: '#fff',
      }[theme]
      elBrowseTitle.className = {
        light: 'uk-text-lead uk-margin uk-text-primary uk-text-center',
        dark: 'uk-text-lead uk-margin uk-text-center',
      }[theme]
      elBrowse.className = {
        light: 'uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@xl uk-flex-center uk-flex-middle uk-grid',
        dark: 'uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@xl uk-flex-center uk-flex-middle uk-grid uk-light',
      }[theme]
    }
    elTheme.onchange()

    elSetDocSelect.onchange = function(){
      var doc = zm_user.doc
      // resetting the setting
      elSetDoc.classList.remove('uk-hidden')
      elSetDateFormat.classList.remove('uk-hidden')
      elSetAnPrice.classList.remove('uk-hidden')
      elSetAnQty.classList.remove('uk-hidden')
      elSetLines.classList.remove('uk-hidden')
      elSetVatRate.classList.remove('uk-hidden')
      elSetWhtRate.classList.remove('uk-hidden')
      // show the setting needed
      if (['document','invoice','taxinvoice','quotation'].indexOf(doc) >= 0) {
        // receipt,
        elSetWhtRate.classList.add('uk-hidden')
      }
      // resetting all items
      for (let z = 0; z < elsWrapDiv.length; z++) {
        elsWrapDiv[z].classList.add('uk-hidden')
      }
      // re-select the items
      const elsBrowseSelect = elBrowse.querySelectorAll('.'+ doc)
      for (let z = 0; z < elsBrowseSelect.length; z++) {
        elsBrowseSelect[z].classList.remove('uk-hidden')
      }
    }
    elSetDocSelect.onchange()

    // go to the selected form
    for (let z = 0; z < elsBrowseA.length; z++) {
      elsBrowseA[z].addEventListener('click',function(){
        zm_user.tmp = this.dataset.tmp
        zm_docLoad()
      })
    }
  })
},
zm_docLoad = function(){
  var doc = zm_user.doc,
  lang = zm_user.lang,
  tmp = zm_user.tmp,
  opt = zm_tmps[tmp],
  type = zm_docs[doc],
  asset = './doc_'+ type +'/asset.js',
  html = './doc_'+ type +'/'+ tmp +'.html'
  
  zm_loadScript('scr-docAsset',asset,function(){
    // resetting
    elDisplay.classList.add('uk-box-shadow-large')
    elSetDoc.classList.add('uk-hidden')
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

    elCssDocStyle.href = opt.css
    elCssDocFont.href = opt.font
    // build docFonts to select
    for (let z = 0; z < opt.fontStyle.length; z++) {
      nodeOption.value = opt.fontStyle[z]
      nodeOption.text = opt.fontStyle[z].split(',')[0]
      elDocSetFontSelect.appendChild(nodeOption.cloneNode(true))
    }
    zm_docLoadAsset(html,doc,lang)
  
  })
}
// declare editable global functions
let zm_docLoadAsset = function(html){
  // load the chosen doc
},
zm_docCalTotal = function(){
  // calculate total amount of the doc
},
zm_docGetData = function(){
  // reset user data before print
  // get all fill form data
},
zm_setLangPage = function(){
  // each page has different texts to display
}