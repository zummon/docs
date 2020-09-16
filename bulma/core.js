var html_header = `<div id="header" class="container has-text-centered mb-5">
<div class="columns is-mobile pb-2 pt-6">
<div class="column"><a id="header_begin" class="has-text-white"><i class="fas fa-info fa-3x"></i></a></div>
<div class="column"><a id="header_browse" class="has-text-white"><i class="fas fa-tags fa-3x"></i></a></div>
<div class="column"><a id="header_doc" class="has-text-white"><i class="fas fa-edit fa-3x"></i></a></div>
<div class="column"><a id="header_brief" class="has-text-white"><i class="fas fa-project-diagram fa-3x"></i></a></div>
</div>
<a id="toggle_option" class="has-text-white"><i class="fas fa-chevron-down fa-2x"></i></a>
</div>`
opts.library = ''
footer_links.library.forEach(t=>{
  opts.library += '<p class="mt-4"><a target="_blank" href="' + t[1] + '" class="has-text-white">' + t[0] + '</a></p>'
})
opts.madeby = ''
footer_links.madeby.forEach(t=>{
  opts.madeby += '<p class="mt-4"><a target="_blank" id="' + t[0] + '" href="' + t[1] + '" class="has-text-white"></a></p>'
})
var html_footer = `<div id="footer" class="container">
<div class="columns is-mobile py-5">
<div class="column has-text-right">
<p id="footer_library" class="title is-4 has-text-white"></p>
` + opts.library + `</div>
<div class="column">
<p id="footer_madeby" class="title is-4 has-text-white"></p>
` + opts.madeby + `</div>
</div>
</div>`

function openFillModal(elemSelector){
  document.querySelector(elemSelector).classList.add('is-active')
  document.documentElement.classList.add('is-clipped')
}
function closeFillModal(elemSelector){
  document.querySelector(elemSelector).classList.remove('is-active')
  document.documentElement.classList.remove('is-clipped')
}
// created by zummontt