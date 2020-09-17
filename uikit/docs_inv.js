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
  configs_addon += `<div>
  <label for="config_color"></label>
  <select id="config_color" class="uk-select">`+ htmlOptions(colors,config_addon.color) +`</select>
  </div>`
}
if(config_addon.color2){
  configs_addon += `<div>
  <label for="config_color2"></label>
  <select id="config_color2" class="uk-select">`+ htmlOptions(colors,config_addon.color2) +`</select>
  </div>`
}
if(config_addon.font){
  opts.font = ''
  config_addon.font.forEach(t=>{
    opts.font += '<option>'+ t[0] +'</option>'
  })
  configs_addon += `<div>
  <label for="config_font"></label>
  <select id="config_font" class="uk-select">`+ opts.font +`</select>
  </div>`
}
var html_option = `<div id="option" class="uk-container uk-container-small">
<div class="uk-child-width-expand uk-text-lead uk-text-center uk-padding-small uk-light" uk-grid>
<div><a id="action_reset"></a></div>
<div><a id="action_pop"></a></div>
<div><a id="action_config"></a></div>
<div><a id="action_add"></a></div>
<div><a id="action_print"></a></div>
</div>

<div id="dialog_print" uk-modal>
<div class="uk-modal-dialog uk-modal-body uk-background-secondary uk-light uk-text-center">
<label for="dialog_print_link"></label>
<div class="uk-margin">
<textarea id="dialog_print_link" class="uk-textarea uk-resize-vertical" rows="3" onfocus="this.select()" readonly></textarea>
</div>
<p class="uk-text-center uk-margin-large-top">
<button id="dialog_print_cancel" class="uk-button uk-button-default" type="button"></button>
<button id="dialog_print_done" class="uk-button uk-button-primary" type="button"></button>
</p>
</div>
</div>

<div id="fill_date" uk-modal>
<div class="uk-modal-dialog uk-modal-body uk-background-secondary uk-light">
<div class="uk-flex-middle uk-text-center" uk-grid>
<div class="uk-width-1-3"><label for="fill_date_date"></label></div>
<div class="uk-width-2-3"><input id="fill_date_date" class="uk-input" type="date"></div>
<div class="uk-width-1-3"><label for="fill_date_result"></label></div>
<div class="uk-width-2-3"><input id="fill_date_result" class="uk-input"></div>
</div>
<p class="uk-text-center uk-margin-large-top">
<button id="fill_date_cancel" class="uk-button uk-button-default" type="button"></button>
<button id="fill_date_done" class="uk-button uk-button-primary" type="button"></button>
</p>
</div>
</div>

<div id="fill_il" uk-modal>
<div class="uk-modal-dialog uk-modal-body uk-background-secondary uk-light">
<datalist id="fill_il_data">`+ opts.il +`</datalist>
<div class="uk-grid-small uk-text-center" uk-grid>
<div class="uk-width-3-4">
<label for="fill_il_item"></label>
<input id="fill_il_item" class="uk-input" list="fill_il_data">
</div>
<div class="uk-width-1-4">
<label for="fill_il_price"></label>
<input id="fill_il_price" class="uk-input">
</div>
</div>
<p class="uk-text-center uk-margin-large-top">
<button id="fill_il_cancel" class="uk-button uk-button-default" type="button"></button>
<button id="fill_il_done" class="uk-button uk-button-primary" type="button"></button>
</p>
</div>
</div>

<div id="fill_cl" uk-modal>
<div class="uk-modal-dialog uk-modal-body uk-background-secondary uk-light">
<datalist id="fill_cl_data">`+ opts.cl +`</datalist>
<div class="uk-flex-middle uk-grid-small uk-text-center" uk-grid>
<div class="uk-width-1-3"><label for="fill_cl_name"></label></div>
<div class="uk-width-2-3"><input id="fill_cl_name" class="uk-input" list="fill_cl_data"></div>
<div class="uk-width-1-3"><label for="fill_cl_id"></label></div>
<div class="uk-width-2-3"><input id="fill_cl_id" class="uk-input"></div>
<div class="uk-width-1-3"><label for="fill_cl_address"></label></div>
<div class="uk-width-2-3"><textarea id="fill_cl_address" class="uk-textarea uk-resize-vertical"></textarea></div>
</div>
<p class="uk-text-center uk-margin-large-top">
<button id="fill_cl_cancel" class="uk-button uk-button-default" type="button"></button>
<button id="fill_cl_done" class="uk-button uk-button-primary" type="button"></button>
</p>
</div>
</div>

<div id="fill_img" uk-modal>
<div class="uk-modal-dialog uk-modal-body uk-background-secondary uk-light">
<div class="uk-flex-middle uk-text-center" uk-grid>
<div class="uk-width-1-3"><label for="fill_img_file"></label></div>
<div class="uk-width-2-3">
<div uk-form-custom>
<input id="fill_img_file" type="file">
<button class="uk-button uk-button-default" type="button" tabindex="-1">upload</button>
</div>
</div>
<div class="uk-width-1-3"><label for="fill_img_width"></label></div>
<div class="uk-width-1-3"><input id="fill_img_width" class="uk-input" type="number"></div>
<div class="uk-width-1-3"><input id="fill_img_height" class="uk-input" type="number"></div>
</div>
<p class="uk-text-center uk-margin-large-top">
<button id="fill_img_cancel" class="uk-button uk-button-default" type="button"></button>
<button id="fill_img_done" class="uk-button uk-button-primary" type="button"></button>
</p>
</div>
</div>

<div id="config" class="uk-modal-container" uk-modal>
<div class="uk-modal-dialog uk-modal-body uk-background-secondary uk-light">
<div class="uk-child-width-1-3 uk-light uk-grid-small" uk-grid>
<div>
<label for="config_lang"></label>
<select id="config_lang" class="uk-select">`+ htmlOptions(langs,userData.lang) +`</select>
</div>
<div>
<label for="config_saletax_rate"></label>
<input id="config_saletax_rate" class="uk-input" type="number" step="0.01" value="`+ userData.saletax_rate +`">
</div>
<div>
<label for="config_incometax_rate"></label>
<input id="config_incometax_rate" class="uk-input" type="number" step="0.01" value="`+ userData.incometax_rate +`">
</div>
<div>
<label for="config_title"></label>
<select id="config_title" class="uk-select">`+ htmlOptions(titles,userData.title) +`</select>
</div>
<div>
<label for="config_an_price"></label>
<select id="config_an_price" class="uk-select">`+ htmlOptions(ans_price,userData.an_price) +`</select>
</div>
<div>
<label for="config_an_qty"></label>
<select id="config_an_qty" class="uk-select">`+ htmlOptions(ans_qty,userData.an_qty) +`</select>
</div>
<div>
<label for="config_date_type"></label>
<select id="config_date_type" class="uk-select">`+ htmlOptions(date_types,date_types[0][0]) +`</select>
</div>`+ configs_addon +`</div>
<p class="uk-text-center uk-margin-large-top">
<button id="config_cancel" class="uk-button uk-button-default" type="button"></button>
<button id="config_done" class="uk-button uk-button-primary" type="button"></button>
</p>
</div>
</div>

</div>`
// created by zummontt