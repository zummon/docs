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
  configs_addon += `<div class="col mb-3">
<label for="config_color"></label>
<select id="config_color" class="form-control">`+ htmlOptions(colors,config_addon.color) +`</select>
</div>`
}
if(config_addon.color2){
  configs_addon += `<div class="col mb-3">
<label for="config_color2"></label>
<select id="config_color2" class="form-control">`+ htmlOptions(colors,config_addon.color2) +`</select>
</div>`
}
if(config_addon.font){
  opts.font = ''
  config_addon.font.forEach(t=>{
    opts.font += '<option>'+ t[0] +'</option>'
  })
  configs_addon += `<div class="col mb-3">
<label for="config_font"></label>
<select id="config_font" class="form-control">`+ opts.font +`</select>
</div>`
}
var html_option = `<div id="option" class="container-lg">
<nav class="nav nav-fill h4 py-3">
<a id="action_reset" class="nav-link text-white" style="cursor: pointer;"></a>
<a id="action_pop" class="nav-link text-white" style="cursor: pointer;"></a>
<a id="action_config" class="nav-link text-white" style="cursor: pointer;"></a>
<a id="action_add" class="nav-link text-white" style="cursor: pointer;"></a>
<a id="action_print" class="nav-link text-white" style="cursor: pointer;"></a>
</nav>

<div id="dialog_print" class="modal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<label for="dialog_print_link"></label>
<textarea id="dialog_print_link" class="form-control" rows="3" onfocus="this.select()" readonly></textarea>
</div>
<div class="text-center pb-3">
<button id="dialog_print_cancel" type="button" class="btn btn-light"></button>
<button id="dialog_print_done" type="button" class="btn btn-dark"></button>
</div>
</div>
</div>
</div>

<div id="fill_date" class="modal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<div class="row no-gutters text-center">
<div class="col-4 mb-3"><label for="fill_date_date"></label></div>
<div class="col-8 mb-3"><input id="fill_date_date" class="form-control" type="date"></div>
<div class="col-4 mb-3"><label for="fill_date_result"></label></div>
<div class="col-8 mb-3"><input id="fill_date_result" class="form-control"></div>
</div>
</div>
<div class="text-center pb-3">
<button id="fill_date_cancel" type="button" class="btn btn-light"></button>
<button id="fill_date_done" type="button" class="btn btn-dark"></button>
</div>
</div>
</div>
</div>

<div id="fill_il" class="modal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<datalist id="fill_il_data">`+ opts.il +`</datalist>
<div class="row no-gutters text-center">
<div class="col-4 mb-3"><label for="fill_il_item"></label></div>
<div class="col-8 mb-3"><input id="fill_il_item" class="form-control" list="fill_il_data"></div>
<div class="col-4 mb-3"><label for="fill_il_price"></label></div>
<div class="col-8 mb-3"><input id="fill_il_price" class="form-control"></div>
</div>
</div>
<div class="text-center pb-3">
<button id="fill_il_cancel" type="button" class="btn btn-light"></button>
<button id="fill_il_done" type="button" class="btn btn-dark"></button>
</div>
</div>
</div>
</div>

<div id="fill_cl" class="modal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<datalist id="fill_cl_data">`+ opts.cl +`</datalist>
<div class="row no-gutters text-center">
<div class="col-4 mb-3"><label for="fill_cl_name"></label></div>
<div class="col-8 mb-3"><input id="fill_cl_name" class="form-control" list="fill_cl_data"></div>
<div class="col-4 mb-3"><label for="fill_cl_id"></label></div>
<div class="col-8 mb-3"><input id="fill_cl_id" class="form-control"></div>
<div class="col-4 mb-3"><label for="fill_cl_address"></label></div>
<div class="col-8 mb-3"><input id="fill_cl_address" class="form-control"></div>
</div>
</div>
<div class="text-center pb-3">
<button id="fill_cl_cancel" type="button" class="btn btn-light"></button>
<button id="fill_cl_done" type="button" class="btn btn-dark"></button>
</div>
</div>
</div>
</div>

<div id="fill_img" class="modal" tabindex="-1">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-body">
<div class="row no-gutters text-center">
<div class="col-4 mb-3"><label for="fill_img_file"></label></div>
<div class="col-8 mb-3">
<div class="custom-file">
<input type="file" class="custom-file-input" id="fill_img_file">
<label class="custom-file-label"></label>
</div>
</div>
<div class="col-4 mb-3"><label for="fill_img_width"></label></div>
<div class="col-4 mb-3"><input id="fill_img_width" class="form-control" type="number"></div>
<div class="col-4 mb-3"><input id="fill_img_height" class="form-control" type="number"></div>
</div>
</div>
<div class="text-center pb-3">
<button id="fill_img_cancel" type="button" class="btn btn-light"></button>
<button id="fill_img_done" type="button" class="btn btn-dark"></button>
</div>
</div>
</div>
</div>

<div id="config" class="modal" tabindex="-1">
<div class="modal-dialog modal-xl">
<div class="modal-content">
<div class="modal-body">
<div class="row no-gutters row-cols-3">
<div class="col mb-3">
<label for="config_lang"></label>
<select id="config_lang" class="form-control">`+ htmlOptions(langs,userData.lang) +`</select>
</div>
<div class="col mb-3">
<label for="config_saletax_rate"></label>
<input id="config_saletax_rate" class="form-control" type="number" step="0.01" value="`+ userData.saletax_rate +`">
</div>
<div class="col mb-3">
<label for="config_incometax_rate"></label>
<input id="config_incometax_rate" class="form-control" type="number" step="0.01" value="`+ userData.incometax_rate +`">
</div>
<div class="col mb-3">
<label for="config_title"></label>
<select id="config_title" class="form-control">`+ htmlOptions(titles,userData.title) +`</select>
</div>
<div class="col mb-3">
<label for="config_an_price"></label>
<select id="config_an_price" class="form-control">`+ htmlOptions(ans_price,userData.an_price) +`</select>
</div>
<div class="col mb-3">
<label for="config_an_qty"></label>
<select id="config_an_qty" class="form-control">`+ htmlOptions(ans_qty,userData.an_qty) +`</select>
</div>
<div class="col mb-3">
<label for="config_date_type"></label>
<select id="config_date_type" class="form-control">`+ htmlOptions(date_types,date_types[0][0]) +`</select>
</div>`+ configs_addon +`</div>
</div>
<div class="text-center pb-3">
<button id="config_cancel" type="button" class="btn btn-light"></button>
<button id="config_done" type="button" class="btn btn-dark"></button>
</div>
</div>
</div>
</div>

</div>`
// created by zummontt