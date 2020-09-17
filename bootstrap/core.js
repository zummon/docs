var html_header = `<div id="header" class="container-lg mb-2 text-center">
<div class="row pt-5 pb-4">
<div class="col"><a id="header_begin" class="text-white"><i class="fas fa-info fa-3x"></i></a></div>
<div class="col"><a id="header_browse" class="text-white"><i class="fas fa-tags fa-3x"></i></a></div>
<div class="col"><a id="header_doc" class="text-white"><i class="fas fa-edit fa-3x"></i></a></div>
<div class="col"><a id="header_brief" class="text-white"><i class="fas fa-project-diagram fa-3x"></i></a></div>
</div>
<a id="toggle_option" class="text-white" style="cursor: pointer;"><i class="fas fa-chevron-down fa-2x"></i></a>
</div>`
opts.library = ''
footer_links.library.forEach(t=>{
  opts.library += '<p><a target="_blank" href="' + t[1] + '" class="text-white">' + t[0] + '</a></p>'
})
opts.madeby = ''
footer_links.madeby.forEach(t=>{
  opts.madeby += '<p><a target="_blank" id="' + t[0] + '" href="' + t[1] + '" class="text-white"></a></p>'
})
var html_footer = `<div id="footer" class="container-lg">
<div class="row py-5">
<div class="col text-right">
<p id="footer_library" class="h3 text-white mb-4"></p>
` + opts.library + `</div>
<div class="col">
<p id="footer_madeby" class="h3 text-white mb-4"></p>
` + opts.madeby + `</div>
</div>
</div>`

function openFillModal(elemSelector){
  $(elemSelector).modal('show')
}
function closeFillModal(elemSelector){
  $(elemSelector).modal('hide')
}
// created by zummontt