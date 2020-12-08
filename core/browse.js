zm_loadFile('./core/browse.html',function(){

const elDisplay = document.querySelector('#display')
elDisplay.innerHTML = this.responseText
// resetting the setting
elDisplay.classList.remove('uk-box-shadow-large')
document.querySelector('#docSet-font').parentElement.classList.add('uk-hidden')
document.querySelector('#docAct-select').parentElement.classList.add('uk-hidden')
document.querySelector('#docAct-print').parentElement.classList.add('uk-hidden')
document.querySelector('#docAct-get').parentElement.classList.add('uk-hidden')
zm_loadLinkCss('css-docStyle')
zm_loadLinkCss('css-docFont')
// get elements
const elBrowse = document.querySelector('#browse')
const elWrapDiv = elBrowse.firstElementChild
const elAnchor = elWrapDiv.querySelector('a')
const elHoldImg = elWrapDiv.querySelector('.uk-card-media-top')
const elHoldText = elWrapDiv.querySelector('.uk-card-body')
// build elements
for (const key in zm_tmps) {
  if (zm_tmps.hasOwnProperty(key)) {
    // to identify which form, an user selects to create
    elAnchor.dataset.tmp = key
    // showing item detail
    elHoldImg.style.backgroundImage = 'url('+ zm_tmps[key].img +')'
    elHoldText.textContent = key
    // to show and hide the options selected, for filtering
    elWrapDiv.className = zm_tmps[key].doc.join(' ') +' uk-grid-margin'
    elBrowse.appendChild(elWrapDiv.cloneNode(true))
  }
}
elBrowse.removeChild(elWrapDiv)
// get elements after build
document.querySelector('#set-doc').onload()

const view = localStorage.getItem('view')
zm_loadScript('scr-lang-view','./core_lang/'+ localStorage.getItem('lang') +'_'+ view +'.js')
zm_loadScript('scr-theme-view','./core_theme/'+ localStorage.getItem('theme') +'_'+ view +'.js')

})