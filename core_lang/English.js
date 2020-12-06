(function(){

  const elsAboveNavEndModal = document.querySelectorAll('#above, #nav, #end, [id^=modal]')
  const elsEraOption = document.querySelectorAll('#era option')
  const elsThemeOption = document.querySelectorAll('#theme option')
  const elSetDocOption = document.querySelectorAll('#set-doc option')
  const elsCreatebyTarget = document.querySelectorAll('#createby [target]')

  let zm_font = 'Varela Round, sans-serif'
  let zm_erasTexts = {
    Christ: 'Christ',
    Buddhist: 'Buddhist',
  }
  let zm_themesTexts = {
    light: 'Light',
    dark: 'Dark',
  }
  let zm_docsTexts = {
    CashSale: 'Cash Sale*',
    document: 'Document*',
    Invoice: 'Invoice',
    Quotation: 'Quotation*',
    Receipt: 'Receipt',
    TaxInvoice: 'Tax Invoice*',
  }
  let zm_createbyTexts = [
    'Report issues (GitHub)',
    'Social (Facebook)',
    'Main website',
    'Donate to support (PayPal)',
  ]

  for (let z = 0; z < elsAboveNavEndModal.length; z++) {
    elsAboveNavEndModal[z].style.fontFamily = zm_font
  }
  for (let z = 0; z < elsEraOption.length; z++) {
    elsEraOption[z].text = zm_erasTexts[elsEraOption[z].value]
  }
  for (let z = 0; z < elsThemeOption.length; z++) {
    elsThemeOption[z].text = zm_themesTexts[elsThemeOption[z].value]
  }
  for (let z = 0; z < elSetDocOption.length; z++) {
    elSetDocOption[z].text = zm_docsTexts[elSetDocOption[z].value]
  }
  for (let z = 0; z < elsCreatebyTarget.length; z++) {
    elsCreatebyTarget[z].textContent = zm_createbyTexts[z]
  }

  document.title = 'Create Document - zummon webapp (Updating)'
  document.querySelector('#greet').textContent = 'Create Document'

  document.querySelector('[for=set-doc]').textContent = 'Form'
  document.querySelector('[for=set-dateFormat]').textContent = 'Date Format'
  document.querySelector('[for=set-anPrice]').textContent = 'Currency'
  document.querySelector('[for=set-anQty]').textContent = 'Qty'
  document.querySelector('[for=set-lines]').textContent = 'Rows'
  document.querySelector('[for=set-vatRate]').textContent = 'Value Added Tax Rate'
  document.querySelector('[for=set-whtRate]').textContent = 'Withholding Tax Rate'

  document.querySelector('[for=docSet-font]').textContent = 'Font'
  document.querySelector('#docAct-select').textContent = 'Select Template'
  document.querySelector('#docAct-print').textContent = 'Print'
  document.querySelector('#docAct-get').textContent = 'Get Data'

  document.querySelector('#sourceused label').textContent = 'Source Usage'
  document.querySelector('#createby label').textContent = 'Created by'

  document.querySelector('#modal-date h4').textContent = 'Enter date'
  document.querySelector('[for=modal-date-input]').textContent = 'Select date'
  document.querySelector('[for=modal-date-output]').textContent = 'Display'

  document.querySelector('#modal-upload h4').textContent = 'Upload Image'
  document.querySelector('[for=modal-upload-input]').textContent = 'Select Image'
  document.querySelector('[for=modal-upload-height]').textContent = 'Height (px)'
  document.querySelector('[for=modal-upload-width]').textContent = 'Width (px)'

  document.querySelector('#modal-get h4').textContent = 'Get your document data'
  // document.querySelector('#modal-get-copy').textContent = 'Copy and save this link'
  // document.querySelector('#modal-get-post').textContent = '*Post to Mini Dashboard'

})()