opts.il = ''
if(il){
  il.forEach(t=>{
    opts.il += '<option>'+ t[0] +'</option>'
  })
}
opts.cl = ''
if(cl){
  cl.forEach(t=>{
    opts.cl += '<option>'+ t[0] +'</option>'
  })
}
var configs_addon = ''
if(config_addon.color){
  configs_addon += `<div class="column is-4">
<label for="config_color" class="label"></label>
<div class="select is-fullwidth"><select id="config_color">`+ htmlOptions(colors,config_addon.color) +`</select></div>
</div>`
}
if(config_addon.color2){
  configs_addon += `<div class="column is-4">
<label for="config_color2" class="label"></label>
<div class="select is-fullwidth"><select id="config_color2">`+ htmlOptions(colors,config_addon.color2) +`</select></div>
</div>`
}
if(config_addon.font){
  opts.font = ''
  config_addon.font.forEach(t=>{
    opts.font += '<option>'+ t[0] +'</option>'
  })
  configs_addon += `<div class="column is-4">
<label for="config_font" class="label"></label>
<div class="select is-fullwidth"><select id="config_font">`+ opts.font +`</select></div>
</div>`
}
var html_option = `<div id="option" class="container">
<div id="action" class="columns is-mobile has-text-centered py-2">
<div class="column"><a id="action_reset" class="title is-4 has-text-white"></a></div>
<div class="column"><a id="action_pop" class="title is-4 has-text-white"></a></div>
<div class="column"><a id="action_config" class="title is-4 has-text-white"></a></div>
<div class="column"><a id="action_add" class="title is-4 has-text-white"></a></div>
<div class="column"><a id="action_print" class="title is-4 has-text-white"></a></div>
</div>

<div id="dialog_print" class="modal"><div class="modal-background"></div>
<div class="modal-card">
<section class="modal-card-body has-text-centered">
<div class="field">
<label for="dialog_print_link" class="label"></label>
<textarea id="dialog_print_link" class="textarea" onfocus="this.select()" readonly></textarea>
</div>
<button id="dialog_print_cancel" class="button" type="button"></button>
<button id="dialog_print_done" class="button is-dark" type="button"></button>
</section>
</div>
</div>

<div id="fill_date" class="modal"><div class="modal-background"></div>
<div class="modal-card">
<section class="modal-card-body has-text-centered">
<div class="columns is-mobile is-multiline">
<div class="column is-4"><label for="fill_date_date" class="label"></label></div>
<div class="column is-8"><input id="fill_date_date" class="input" type="date"></div>
<div class="column is-4"><label for="fill_date_result" class="label"></label></div>
<div class="column is-8"><input id="fill_date_result" class="input"></div>
</div>
<button id="fill_date_cancel" class="button" type="button"></button>
<button id="fill_date_done" class="button is-dark" type="button"></button>
</section>
</div>
</div>

<div id="fill_il" class="modal"><div class="modal-background"></div>
<div class="modal-card">
<section class="modal-card-body has-text-centered">
<datalist id="fill_il_data">`+ opts.il +`</datalist>
<div class="columns is-mobile">
<div class="column is-9">
<label for="fill_il_item" class="label"></label>
<input id="fill_il_item" class="input" list="fill_il_data">
</div>
<div class="column is-3">
<label for="fill_il_price" class="label"></label>
<input id="fill_il_price" class="input">
</div>
</div>
<button id="fill_il_cancel" class="button" type="button"></button>
<button id="fill_il_done" class="button is-dark" type="button"></button>
</section>
</div>
</div>

<div id="fill_cl" class="modal"><div class="modal-background"></div>
<div class="modal-card">
<section class="modal-card-body has-text-centered">
<datalist id="fill_cl_data">`+ opts.cl +`</datalist>
<div class="columns is-mobile is-multiline">
<div class="column is-4"><label for="fill_cl_name" class="label"></label></div>
<div class="column is-8"><input id="fill_cl_name" class="input" list="fill_cl_data"></div>
<div class="column is-4"><label for="fill_cl_id" class="label"></label></div>
<div class="column is-8"><input id="fill_cl_id" class="input"></div>
<div class="column is-4"><label for="fill_cl_address" class="label"></label></div>
<div class="column is-8"><textarea id="fill_cl_address" class="textarea"></textarea></div>
</div>
<button id="fill_cl_cancel" class="button" type="button"></button>
<button id="fill_cl_done" class="button is-dark" type="button"></button>
</section>
</div>
</div>

<div id="fill_img" class="modal"><div class="modal-background"></div>
<div class="modal-card">
<section class="modal-card-body has-text-centered">
<div class="columns is-mobile is-multiline">
<div class="column is-4"><label for="fill_img_file" class="label"></label></div>
<div class="column is-8">
<div class="file">
<label class="file-label">
<input class="file-input" id="fill_img_file" type="file">
<span class="file-cta"><span class="file-label">UPLOAD</span></span>
</label>
</div>
</div>
<div class="column is-4"><label for="fill_img_width" class="label"></label></div>
<div class="column is-4"><input id="fill_img_width" class="input" type="number"></div>
<div class="column is-4"><input id="fill_img_height" class="input" type="number"></div>
</div>
<button id="fill_img_cancel" class="button" type="button"></button>
<button id="fill_img_done" class="button is-dark" type="button"></button>
</section>
</div>
</div>

<div id="config" class="modal"><div class="modal-background"></div>
<div class="modal-card">
<section class="modal-card-body">
<div class="columns is-mobile is-multiline is-variable is-1">
<div class="column is-4">
<label for="config_lang" class="label"></label>
<div class="select is-fullwidth"><select id="config_lang">`+ htmlOptions(langs,userData.lang) +`</select></div>
</div>
<div class="column is-4">
<label for="config_saletax_rate" class="label"></label>
<input id="config_saletax_rate" class="input" type="number" step="0.01" value="`+ userData.saletax_rate +`">
</div>
<div class="column is-4">
<label for="config_incometax_rate" class="label"></label>
<input id="config_incometax_rate" class="input" type="number" step="0.01" value="`+ userData.incometax_rate +`">
</div>
<div class="column is-4">
<label for="config_title" class="label"></label>
<div class="select is-fullwidth"><select id="config_title">`+ htmlOptions(titles,userData.title) +`</select></div>
</div>
<div class="column is-4">
<label for="config_an_price" class="label"></label>
<div class="select is-fullwidth"><select id="config_an_price">`+ htmlOptions(ans_price,userData.an_price) +`</select></div>
</div>
<div class="column is-4">
<label for="config_an_qty" class="label"></label>
<div class="select is-fullwidth"><select id="config_an_qty">`+ htmlOptions(ans_qty,userData.an_qty) +`</select></div>
</div>
<div class="column is-4">
<label for="config_date_type" class="label"></label>
<div class="select is-fullwidth"><select id="config_date_type">`+ htmlOptions(date_types,date_types[0][0]) +`</select></div>
</div>
`+ configs_addon +`</div>
<button id="config_cancel" class="button" type="button"></button>
<button id="config_done" class="button is-dark" type="button"></button>
</section>
</div>
</div>

</div>`
// created by zummontt