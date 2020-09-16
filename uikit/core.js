var html_header = `<div id="header" class="uk-container uk-container-small uk-light uk-text-center">
<hr>
<div class="uk-child-width-expand uk-grid-small uk-padding-small uk-margin-bottom" uk-grid>
<div><a id="header_begin"><i class="fas fa-info fa-3x"></i></a></div>
<div><a id="header_browse"><i class="fas fa-tags fa-3x"></i></a></div>
<div><a id="header_doc"><i class="fas fa-edit fa-3x"></i></a></div>
<div><a id="header_brief"><i class="fas fa-project-diagram fa-3x"></i></a></div>
</div>
<a id="toggle_option"><i class="fas fa-chevron-down fa-2x"></i></a>
</div>`
opts.library = ''
footer_links.library.forEach(t=>{
  opts.library += '<li><a target="_blank" href="' + t[1] + '">' + t[0] + '</a></li>'
})
opts.madeby = ''
footer_links.madeby.forEach(t=>{
  opts.madeby += '<li><a target="_blank" id="' + t[0] + '" href="' + t[1] + '"></a></li>'
})
var html_footer = `<div id="footer" class="uk-container uk-container-small uk-light uk-padding">
<div class="uk-child-width-1-2" uk-grid>
<div class="uk-text-right"><h2 class="uk-heading-line uk-text-right"><span id="footer_library"></span></h2>
<ul class="uk-list">` + opts.library + `</ul>
</div>
<div><h2 class="uk-heading-line"><span id="footer_madeby"></span></h2>
<ul class="uk-list">` + opts.madeby + `</ul>
</div>
</div>
</div>`

function openFillModal(elemSelector){
  UIkit.modal(elemSelector).show()
}
function closeFillModal(elemSelector){
  UIkit.modal(elemSelector).hide()
}
// created by zummontt