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
    document.querySelector('#config_fields_client_sign').addEventListener('change',function(e){
        configShowHideFields(document.querySelector('#client_sign').parentElement, e.target.checked)
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

// headlogo_img
// vendor_name
// vendor_id
// vendor_address
// doc_title
// ref_label
// ref
// date_label
// date
// client_name_label
// client_name
// client_id
// client_address
// duedate_label
// duedate
// payment_label
// payment
// subject_label
// subject
// finaltotal_shadow_label
// finaltotal_shadow
// line_label
// item_label
// price_label
// qty_label
// amount_label
// line
// item
// price
// qty
// amount
// client_sign_label
// client_sign
// client_rank
// total_label
// total
// saletax_label
// saletax_rate
// saletax
// incometax_label
// incometax_rate
// incometax
// adjust_label
// adjust
// finaltotal_label
// finaltotal
// note_label
// note
// thank_message