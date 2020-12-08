(function(){
const doc = localStorage.getItem('doc')
const tmp =  localStorage.getItem('tmp')
const opt = zm_tmps[tmp]
const type = zm_docs[doc]
const asset = './doc/as_'+ type +'.js'
const as_doc = './doc/'+ doc +'.js'
const html = './tmp_html/'+ tmp +'.html'

zm_loadFile(html,function(){
  const elDisplay = document.querySelector('#display')
  elDisplay.innerHTML = this.responseText

  const elSetVatRate = document.querySelector('#set-vatRate').parentElement
  const elSetWhtRate = document.querySelector('#set-whtRate').parentElement
  const elDocSetFontSelect = document.querySelector('#docSet-font')
  const elDocSetFont = elDocSetFontSelect.parentElement
  const nodeOption = document.createElement('option')
  // resetting
  elDisplay.classList.add('uk-box-shadow-large')
  document.querySelector('#set-doc').parentElement.classList.add('uk-hidden')
  document.querySelector('#set-dateFormat').parentElement.classList.add('uk-hidden')
  document.querySelector('#set-anPrice').parentElement.classList.add('uk-hidden')
  document.querySelector('#set-anQty').parentElement.classList.add('uk-hidden')
  document.querySelector('#set-lines').parentElement.classList.add('uk-hidden')
  elSetVatRate.classList.add('uk-hidden')
  elSetWhtRate.classList.add('uk-hidden')
  elDocSetFont.classList.remove('uk-hidden')
  document.querySelector('#docAct-select').parentElement.classList.remove('uk-hidden')
  document.querySelector('#docAct-print').parentElement.classList.remove('uk-hidden')
  document.querySelector('#docAct-get').parentElement.classList.remove('uk-hidden')
  elDocSetFontSelect.innerHTML = ''

  zm_loadLinkCss('css-docStyle',opt.css)
  zm_loadLinkCss('css-docFont',opt.font)
  // build docFonts to select
  for (let z = 0; z < opt.fontStyle.length; z++) {
    nodeOption.value = opt.fontStyle[z]
    nodeOption.text = opt.fontStyle[z].split(',')[0]
    elDocSetFontSelect.appendChild(nodeOption.cloneNode(true))
  }
  elDocSetFontSelect.onchange()
  
  zm_loadScript('scr-docAsset',asset,function(){
    zm_loadScript('scr-docAsDoc',as_doc,function(){
      zm_loadScript('scr-lang-view','./core_lang/'+ localStorage.getItem('lang') +'_doc.js')
    })
  })
})

})()