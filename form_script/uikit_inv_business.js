(function(){
    form_tr_show = 4
    form_tr_hide = 16

// config

    document.querySelector('#config_insert_headlogo_img').addEventListener('change',function(){
        configUploadImage('#headlogo_img', '#config_insert_headlogo_img')
    })
    document.querySelector('#config_field_headlogo_img').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#headlogo_img'), e.target.checked)
    })
    document.querySelector('#config_field_vendor_id').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#vendor_id'), e.target.checked)
    })
    document.querySelector('#config_field_client_id').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#client_id'), e.target.checked)
    })
    document.querySelector('#config_field_duedate').addEventListener('change',function(e){
        configShowHideFields(document.querySelectorAll('#duedate, #duedate_label'), e.target.checked)
    })
    document.querySelector('#config_field_subject').addEventListener('change',function(e){
        configShowHideFields(document.querySelectorAll('#subject, #subject_label'), e.target.checked)
    })
    document.querySelector('#config_fields_price').addEventListener('change',function(e){
        configShowHideFields(document.querySelectorAll('[id="price_label"], [name="price"]'), e.target.checked)
    })
    document.querySelector('#config_fields_qty').addEventListener('change',function(e){
        configShowHideFields(document.querySelectorAll('[id="qty_label"], [name="qty"]'), e.target.checked)
    })
    document.querySelector('#config_fields_client_sign').addEventListener('change',function(e){
        var elems = document.querySelector('#client_sign').parentElement
        configShowHideFields(elems, e.target.checked)
    })
    document.querySelector('#config_field_saletax').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#saletax').parentElement, e.target.checked)
    })
    document.querySelector('#config_field_incometax').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#incometax').parentElement, e.target.checked)
    })
    document.querySelector('#config_field_adjust').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#adjust').parentElement, e.target.checked)
    })
    document.querySelector('#config_field_finaltotal').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#finaltotal').parentElement, e.target.checked)
    })

})()

// finaltotal_shadow_label
// finaltotal_shadow


// not used
//     footlogo_img
//     vendor_name_label
//     vendor_id_label
//     vendor_address_label
//     client_id_label
//     client_address_label
//     vendor_sign_label
//     vendor_sign
//     vendor_rank_label
//     vendor_rank
//     client_rank_label