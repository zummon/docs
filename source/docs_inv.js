var active_fill, an_price_obj, an_qty_obj
var colors = [
  ['lightgray','Light gray','เทาอ่อน','#999','#000'],
  ['davysgrey','Davys grey','เทา','#555','#fff'],
  ['darkgray','Dark gray','เทาเข้ม','#222','#fff'],
  ['black','Black','ดำ','#000','#fff'],
  // uikit
  ['dodgerblue','Dodger blue','ฟ้าหลบ','#1e87f0','#fff'],
  ['limegreen','Lime green','เขียวมะนาว','#32d296','#fff'],
  ['orange','Orange','ส้ม','#faa05a','#fff'],
  ['rosepearl','Rose pearl','กุหลาบไข่มุก','#f0506e','#fff'],
  ['whitesmoke','White smoke','ควัน','#f8f8f8','#000'],
  // bulma
  ['turquoise','Turquoise','เทอร์ควอยซ์','#00d1b2','#fff'],
  ['blue','Blue','น้ำเงิน','#3273dc','#fff'],
  ['summersky','Summer sky','ท้องฟ้าฤดูร้อน','#3298dc','#fff'],
  ['cyan','Cyan','ฟ้า','#faa05a','#fff'],
  ['green','Green','เขียว','#48c774','#fff'],
  ['yellow','Yellow','เหลือง','#ffdd57','rgba(0,0,0,0.7)'],
  ['red','Red','แดง','#f14668','#fff'],
  // bootstrap
  ['indigo','Indigo','ม่วง','#6610f2','#fff'],
  ['pink','Pink','ชมพู','#e83e8c','#fff'],
]
// var colors_bulma = [
//   ['Grey darker', '#363636', '#fff'],
//   ['Black',       '#0a0a0a', '#fff']
// ]
// var colors_bootstrap = [
//   ['Blue',      '#007bff', '#fff'],
// ['purple','Purple','ม่วงอ่อน','#6f42c1','#fff'],
//   ['Red',       '#dc3545', '#fff'],
//   ['Orange',    '#fd7e14', '#fff'],
//   ['Yellow',    '#ffc107', '#343a40'],
//   ['Green',     '#28a745', '#fff'],
//   ['Teal',      '#20c997', '#fff'],
//   ['Cyan',      '#17a2b8', '#fff'],
//   ['Gray',      '#6c757d', '#fff'],
//   ['Gray-dark', '#343a40', '#fff'],
// ]
var titles = [
  ['invoice','Invoice','ใบแจ้งหนี้'],
  ['quotation','Quotation','ใบเสนอราคา'],
  ['receipt','Receipt','ใบเสร็จรับเงิน'],
  ['taxinvoice','Tax Invoice','ใบกำกับภาษี'],
]
var doc_text = {invoice: [
  ['[data-label=title]','Invoice','ใบแจ้งหนี้'],
  ['[data-label=client_label]','Bill to','ส่งถึง'],
  ['[data-label=ref_label]','Inv-No','เลขที่'],
  ['[data-label=date_label]','Inv-Date','วันที่'],
  ['[data-label=duedate_label]','Due Date','ชำระภายในวันที่'],
  ['[data-label=payment_label]','Payment','วิธีชำระเงิน'],
  ['[data-label=finaltotal_label]','Pay Amount','ยอดชำระ'],
  ['[data-label=line_label]','No','#'],
  ['[data-label=item_label]','Description','รายการ'],
  ['[data-label=price_label]','Price','ราคา'],
  ['[data-label=qty_label]','Qty','จำนวน'],
  ['[data-label=amount_label]','Amount','เป็นเงิน'],
  ['[data-label=note_label]','Note','บันทึก'],
  ['[data-label=total_label]','Subtotal','รวม'],
  ['[data-label=saletax_label]','Vat','ภาษีมูลค่าเพิ่ม'],
  ['[data-label=adjust_label]','Adjust','ปรับปรุง'],
  ['[data-label=vendor_sign_label]','Vendor Sign','ลายเซ็นต์ผู้ขาย/ให้บริการ'],
  ['[data-label=client_sign_label]','Client Sign','ลายเซ็นต์ผู้ซื้อ/ใช้บริการ'],
  ['[data-label=subject_label]','Project','โครงการ'],
],quotation: [
  ['[data-label=title]','Quotation','ใบเสนอราคา'],
  ['[data-label=client_label]','Offer to','ส่งถึง'],
  ['[data-label=ref_label]','Quo-No','เลขที่'],
  ['[data-label=date_label]','Quo-Date','วันที่'],
  ['[data-label=duedate_label]','Offer Until','สั่งซื้อก่อนวันที่'],
  ['[data-label=finaltotal_label]','Amount','มูลค่า'],
  ['[data-label=line_label]','No','#'],
  ['[data-label=item_label]','Description','รายการ'],
  ['[data-label=price_label]','Price','ราคา'],
  ['[data-label=qty_label]','Qty','จำนวน'],
  ['[data-label=amount_label]','Amount','เป็นเงิน'],
  ['[data-label=note_label]','Note','บันทึก'],
  ['[data-label=total_label]','Subtotal','รวม'],
  ['[data-label=saletax_label]','Vat','ภาษีมูลค่าเพิ่ม'],
  ['[data-label=adjust_label]','Adjust','ปรับปรุง'],
  ['[data-label=vendor_sign_label]','Vendor Sign','ลายเซ็นต์ผู้ขาย/ให้บริการ'],
  ['[data-label=client_sign_label]','Client Sign','ลายเซ็นต์ผู้ซื้อ/ใช้บริการ'],
  ['[data-label=subject_label]','Project','โครงการ'],
],receipt: [
  ['[data-label=title]','Receipt','ใบเสร็จรับเงิน'],
  ['[data-label=client_label]','Received from','รับเงินจาก'],
  ['[data-label=ref_label]','Rec-No','เลขที่'],
  ['[data-label=date_label]','Rec-Date','วันที่'],
  ['[data-label=payment_label]','Payment','วิธีชำระเงิน'],
  ['[data-label=finaltotal_label]','Paid Amount','ยอดชำระ'],
  ['[data-label=line_label]','No','#'],
  ['[data-label=item_label]','Description','รายการ'],
  ['[data-label=price_label]','Price','ราคา'],
  ['[data-label=qty_label]','Qty','จำนวน'],
  ['[data-label=amount_label]','Amount','เป็นเงิน'],
  ['[data-label=note_label]','Note','บันทึก'],
  ['[data-label=total_label]','Subtotal','รวม'],
  ['[data-label=saletax_label]','Vat','ภาษีมูลค่าเพิ่ม'],
  ['[data-label=incometax_label]','Tax withheld','หัก ณ ที่จ่าย'],
  ['[data-label=adjust_label]','Adjust','ปรับปรุง'],
  ['[data-label=vendor_sign_label]','Vendor Sign','ลายเซ็นต์ผู้ขาย/ให้บริการ'],
  ['[data-label=client_sign_label]','Client Sign','ลายเซ็นต์ผู้ซื้อ/ใช้บริการ'],
  ['[data-label=subject_label]','Project','โครงการ'],
],taxinvoice: [
  ['[data-label=title]','Tax Invoice','ใบกำกับภาษี'],
  ['[data-label=client_label]','Bill to','ส่งถึง'],
  ['[data-label=ref_label]','Taxinv-No','เลขที่'],
  ['[data-label=date_label]','Taxinv-Date','วันที่'],
  ['[data-label=duedate_label]','Due Date','ชำระภายในวันที่'],
  ['[data-label=payment_label]','Payment','วิธีชำระเงิน'],
  ['[data-label=finaltotal_label]','Pay Amount','ยอดชำระ'],
  ['[data-label=line_label]','No','#'],
  ['[data-label=item_label]','Description','รายการ'],
  ['[data-label=price_label]','Price','ราคา'],
  ['[data-label=qty_label]','Qty','จำนวน'],
  ['[data-label=amount_label]','Amount','เป็นเงิน'],
  ['[data-label=note_label]','Note','บันทึก'],
  ['[data-label=total_label]','Subtotal','รวม'],
  ['[data-label=saletax_label]','Vat','ภาษีมูลค่าเพิ่ม'],
  ['[data-label=vendor_sign_label]','Vendor Sign','ลายเซ็นต์ผู้ขาย/ให้บริการ'],
  ['[data-label=client_sign_label]','Client Sign','ลายเซ็นต์ผู้ซื้อ/ใช้บริการ'],
  ['[data-label=subject_label]','Project','โครงการ'],
],}
var docs_field = {
  invoice: ['incometax'],
  quotation: ['payment','incometax','client_sign'],
  receipt: ['duedate'],
  taxinvoice: ['incometax','adjust'],
}
var ans_price = [
  ['num','9,999.99','9,999.99',{}],
  ['integer','9,999','9,999',{ decimalPlaces: 0 }],
  ['dollarsuffix','Dollar 9,999.00$','Dollar 9,999.00$',{ currencySymbol: '$', currencySymbolPlacement: 's' }],
  ['dollar','Dollar $9,999.00','Dollar $9,999.00',{ currencySymbol: '$' }],
  ['bahtsuffix','Thai Baht 9,999.00฿','ไทยบาท 9,999.00฿',{ currencySymbol: '฿', currencySymbolPlacement: 's' }],
  ['baht','Thai Baht ฿9,999.00','ไทยบาท ฿9,999.00',{ currencySymbol: '฿' }],
  ['poundsuffix','Pound 9,999.00£','Pound 9,999.00£',{ currencySymbol: '£', currencySymbolPlacement: 's' }],
  ['pound','Pound £9,999.00','Pound £9,999.00',{ currencySymbol: '£' }],
  ['yensuffix','Yen 9,999.00¥','Yen 9,999.00¥',{ currencySymbol: '¥', currencySymbolPlacement: 's' }],
  ['yen','Yen ¥9,999.00','Yen ¥9,999.00',{ currencySymbol: '¥' }],
]
var ans_qty = [
  ['num','9,999.00','9,999.00',{}],
  ['integer','9,999','9,999',{ decimalPlaces: 0 }],
]
var date_types = [
  ['short','Jan, Feb','ม.ค., ก.พ.'],
  ['full','January, February','มกราคม, กุมภาพันธ์'],
]
var date_format = {}
date_format.month = {short: [
  [1, ' Jan ',' ม.ค. '],
  [2, ' Feb ',' ก.พ. '],
  [3, ' Mar ',' มี.ค. '],
  [4, ' Apr ',' เม.ย. '],
  [5, ' May ',' พ.ค. '],
  [6, ' Jun ',' มิ.ย. '],
  [7, ' Jul ',' ก.ค. '],
  [8, ' Aug ',' ส.ค. '],
  [9, ' Sep ',' ก.ย. '],
  [10,' Oct ',' ต.ค. '],
  [11,' Nov ',' พ.ย. '],
  [12,' Dec ',' ธ.ค. '],
],full: [
  [1, ' January ',' มกราคม '],
  [2, ' February ',' กุมภาพันธ์ '],
  [3, ' March ',' มีนาคม '],
  [4, ' April ',' เมษายน '],
  [5, ' May ',' พฤษภาคม '],
  [6, ' June ',' มิถุนายน '],
  [7, ' July ',' กรกฎาคม '],
  [8, ' August ',' สิงหาคม '],
  [9, ' September ',' กันยายน '],
  [10,' October ',' ตุลาคม '],
  [11,' November ',' พฤศจิกายน '],
  [12,' December ',' ธันวาคม '],
]}
var elems_text = [
  ['[id$=_cancel]', 'Cancel', 'ยกเลิก',],
  ['[id$=_done]', 'Done', 'ตกลง',],
]
elem_text = elem_text.concat([
  ['#action_reset', 'Reset', 'เริ่มใหม่',],
  ['#action_pop', 'Remove', 'ลบ',],
  ['#action_config', 'Setting', 'ตั้งค่า',],
  ['#action_add', 'Add', 'เพิ่ม',],
  ['#action_print', 'Print', 'พิมพ์',],
  
  ['[for=dialog_print_link]',
    'Copy and save this link to use next time (just in case) then click [Done] to start new one',
    'คัดลอก และเก็บลิงค์นี้ ไว้ใช้งานครั้งต่อไป (ป้องกันข้อมูลหาย) จากนั้นกด [ตกลง] เพื่อสร้างใหม่',],

  ['[for=config_title]', 'Title', 'เอกสาร',],
  ['[for=config_saletax_rate]', 'Vat RATE', 'อัตราภาษีมูลค่าเพิ่ม',],
  ['[for=config_incometax_rate]', 'WHT RATE', 'อัตราหัก ณ ที่จ่าย',],
  ['[for=config_an_price]', 'Currency', 'เงินตรา',],
  ['[for=config_an_qty]', 'Qty', 'หน่วย',],
  ['[for=config_date_type]', 'Date format', 'วันที่',],

  ['[for=fill_date_date]', 'Select Date', 'เลือกวันที่'],
  ['[for=fill_date_result]', 'Enter Date', 'ใส่วันที่'],

  ['[for=fill_il_item]', 'Enter Item', 'ใส่รายการ'],
  ['[for=fill_il_price]', 'Enter Price', 'ใส่ราคา'],

  ['[for=fill_cl_name]', 'Enter Client Name', 'ใส่ชื่อลูกค้า'],
  ['[for=fill_cl_id]', 'Enter Client Register', 'ใส่เลขประจำตัวลูกค้า'],
  ['[for=fill_cl_address]', 'Enter Client Address', 'ใส่ที่อยู่ลูกค้า'],

  ['[for=fill_img_file]', 'Choose your image', 'เลือกรูป'],
  ['[for=fill_img_width]', 'Define size (px) or leave it blank for original size', 'ระบุขนาด (px) หรือปล่อยว่างตามขนาดภาพ'],

  ['[for=config_color]', 'Theme Color', 'สีธีม',],
  ['[for=config_color2]', '2nd Theme Color', 'สีธีม 2',],
  ['[for=config_font]', 'Font', 'ตัวอักษร',],
])
function configSetTaxRate(label){
  const key = label.slice(12,-1)
  const tax_rate = userData[key] == undefined ? 0 : userData[key]
  const rate_show = tax_rate < 0 ? -tax_rate : tax_rate
  elemValue(label,(rate_show*100).toFixed(0) + '%')
}
function calculateTotal(){
  const saletax_rate = userData.saletax_rate
  const incometax_rate = userData.incometax_rate
  const elems = document.querySelectorAll('[data-fill=amount]')
  var total = 0
  for(let z = 0; z < elems.length; z++){
    total += AutoNumeric.getNumber(elems[z])
  }
  AutoNumeric.set('[data-fill=total]',total)
  var saletax = total * saletax_rate
  AutoNumeric.set('[data-fill=saletax]',saletax)
  var incometax = total * incometax_rate
  AutoNumeric.set('[data-fill=incometax]',incometax)
  AutoNumeric.set('[data-fill=finaltotal]',AutoNumeric.getNumber('[data-fill=adjust]') + total + saletax + incometax)
}
function configDone(){
// an_price
  var option = ans_price.filter(t=>t[0] == userData.an_price)
  option = option == '' ? ans_price[0][max_index] : option[0][max_index]
  an_price_obj.forEach(t=>{
    t.options.reset()
    t.update(option)
  })
// an_qty
  var option = ans_qty.filter(t=>t[0] == userData.an_qty)
  option = option == '' ? ans_qty[0][max_index] : option[0][max_index]
  an_qty_obj.forEach(t=>{
    t.options.reset()
    t.update(option)
  })
  fieldsLoad()
  configSetTaxRate('[data-label=saletax_rate]')
  configSetTaxRate('[data-label=incometax_rate]')
  calculateTotal()
  if(config_addon.color){
    const val = document.querySelector('#config_color').value
    const select = colors.filter(t=>t[0]==val)
    const bg = document.querySelectorAll('[data-color=bg]')
    if(bg){
      bg.forEach(z=>{
        z.style.backgroundColor = select[0][max_index]
        z.style.color = select[0][max_index+1]
      })
    }
    const txt = document.querySelectorAll('[data-color=text]')
    if(txt){
      txt.forEach(z=>{
        z.style.color = select[0][max_index]
      })
    }
    const border = document.querySelectorAll('[data-color=border]')
    if(border){
      border.forEach(z=>{
        z.style.borderColor = select[0][max_index]
      })
    }
  }
  if(config_addon.color2){
    const val = document.querySelector('#config_color2').value
    const select = colors.filter(t=>t[0]==val)
    const bg = document.querySelectorAll('[data-color2=bg]')
    if(bg){
      bg.forEach(z=>{
        z.style.backgroundColor = select[0][max_index]
        z.style.color = select[0][max_index+1]
      })
    }
    const txt = document.querySelectorAll('[data-color2=text]')
    if(txt){
      txt.forEach(z=>{
        z.style.color = select[0][max_index]
      })
    }
    const border = document.querySelectorAll('[data-color2=border]')
    if(border){
      border.forEach(z=>{
        z.style.borderColor = select[0][max_index]
      })
    }
  }
  if(config_addon.font){
    const val = document.querySelector('#config_font').value
    const select = config_addon.font.filter(t=>t[0]==val)
    document.querySelectorAll('[data-font]').forEach(m=>{
      m.style.fontFamily = select[0][1]
    })
  }
}
function fieldsLoad(){
  Object.keys(fields).forEach(t=>{
    if(!fields[t]){return}
    fields[t].style.display = ''
  })
  docs_field[userData.title].forEach(t=>{
    if(!fields[t]){return}
    fields[t].style.display = 'none'
    if(t == 'incometax'){
      userData.incometax_rate = 0
    }else if(t == 'adjust'){
      AutoNumeric.set('[data-fill=adjust]','')
    }
  })
}
function userDataCreate(){
  ;['[data-fill=vendor_name]','[data-fill=vendor_id]','[data-fill=vendor_address]','[data-fill=payment]','[data-fill=thank_message]'].forEach(t=>{
    const elem = document.querySelector(t)
    if(!elem){return}
    userData[t.slice(11,-1)] = elemValue(elem)
  })

  var client_list = []
  ;['[data-fill=client_name]','[data-fill=client_id]','[data-fill=client_address]'].forEach(t=>{
    client_list.push(elemValue(t))
  })

  if(cl){
    const index_client = cl.map(t=>t[0]).indexOf(client_list[0])
    if (index_client >= 0){
      cl.splice(index_client, 1, client_list)
    } else if (client_list[0] !== ''){
      cl.push(client_list)
    }
  }
  
  if(il){
    const items = document.querySelectorAll('[data-fill=item]')
    const prices = document.querySelectorAll('[data-fill=price]')
    for (let z = 0; z < items.length; z++){
      var item, price
      var val = elemValue(items[z])
      if (val == ''){continue}else{item = val}
      
      if (AutoNumeric.isManagedByAutoNumeric(prices[z])) {
        price = AutoNumeric.getNumericString(prices[z])
      } else {
        price = elemValue(prices[z])
      }
      var item_list = [item, price]

      const index_item = il.map(t=>t[0]).indexOf(item_list[0])
      if (index_item >= 0){
        il.splice(index_item, 1, item_list)
      } else if (item_list[0] !== ''){
        il.push(item_list)
      }
    }
  }
}
if(userData.saletax_rate == undefined){userData.saletax_rate = 0.07}
if(userData.incometax_rate == undefined){userData.incometax_rate = -0.01}
if(userData.title == undefined){userData.title = titles[0][0]}
if(userData.an_price == undefined){userData.an_price = ans_price[0][0]}
if(userData.an_qty == undefined){userData.an_qty = ans_qty[0][0]}
if(userData.date_type == undefined){userData.date_type = date_types[0][0]}
document.addEventListener('DOMContentLoaded',()=>{
  setElemDataAttr(doc_text[userData.title],'textContent',true)
  const elem_lines = document.querySelector('[data-ut=lines]')
  const elem_line = document.querySelector('[data-ut=line]')
  for (let z = 1; z <= line_show + line_hide; z++){
    const el_line = elem_line.querySelector('[data-label=line]')
    if (el_line){ el_line.textContent = z }
    if (z > line_show){ elem_line.style.display = 'none' }
    elem_lines.appendChild(elem_line.cloneNode(true))
  }
  elem_line.remove()

  document.querySelector('#action_reset').addEventListener('click',()=>{location.reload()})
  document.querySelector('#action_pop').addEventListener('click',()=>{
    const elems = document.querySelectorAll('[data-ut=line]')
    for(let z = elems.length-1; z > 0; z--){
      if(!isHidden(elems[z])){
        elems[z].style.display = 'none'
        elems[z].querySelector('[data-fill=item]').value = ''
        AutoNumeric.set(elems[z].querySelector('[data-fill=price]'), '')
        AutoNumeric.set(elems[z].querySelector('[data-fill=qty]'), '')
        AutoNumeric.set(elems[z].querySelector('[data-fill=amount]'), '')
        calculateTotal()
        return
      }
    }
  })
  document.querySelector('#action_config').addEventListener('click',()=>{
    if (isHidden(document.querySelector('#config'))){
      openFillModal('#config')
    } else {
      closeFillModal('#config')
    }
  })
  document.querySelector('#action_add').addEventListener('click',()=>{
    const elems = document.querySelectorAll('[data-ut=line]')
    for(let z = 0; z < elems.length; z++){
      if(isHidden(elems[z])){
        elems[z].style.display = ''
        return
      }
    }
  })
  document.querySelector('#action_print').addEventListener('click',()=>{
    window.print()
  })
  document.querySelector('#dialog_print_done').addEventListener('click',()=>{
    window.location.href = document.querySelector('#dialog_print_link').value
  })
  document.querySelector('#dialog_print_cancel').addEventListener('click',()=>{
    closeFillModal('#dialog_print')
  })

  fieldsLoad()
  configSetTaxRate('[data-label=saletax_rate]')
  configSetTaxRate('[data-label=incometax_rate]')
  ;[
    [ans_price, userData.an_price, 'an_price_obj', '[data-fill=price],[data-fill=amount],[data-fill=total],[data-fill=saletax],[data-fill=incometax],[data-fill=adjust],[data-fill=finaltotal],#fill_il_price'],
    [ans_qty, userData.an_qty, 'an_qty_obj', '[data-fill=qty]'],
  ].forEach(t=>{
    var option = t[0].filter(m=>m[0] == t[1])
    option = option == '' ? t[0][max_index] : option[0][max_index]
    window[t[2]] = new AutoNumeric.multiple(t[3], option)
  })
  document.querySelectorAll('[data-fill=qty]').forEach(z=>{
    z.addEventListener('change',m=>{
      const elemPrice = m.target.closest('[data-ut=line]').querySelector('[data-fill=price]')
      const elemAmount = m.target.closest('[data-ut=line]').querySelector('[data-fill=amount]')
      AutoNumeric.set(elemAmount, AutoNumeric.getNumber(elemPrice) * AutoNumeric.getNumber(m.target))
      calculateTotal()
    })
  })
  document.querySelectorAll('[data-fill=amount],[data-fill=adjust]').forEach(t=>{
    t.addEventListener('change',calculateTotal)
  })

  document.querySelector('#config_done').addEventListener('click',()=>{
    userData.saletax_rate = document.querySelector('#config_saletax_rate').value
    userData.incometax_rate = document.querySelector('#config_incometax_rate').value
    userData.title = document.querySelector('#config_title').value
    userData.an_price = document.querySelector('#config_an_price').value
    userData.an_qty = document.querySelector('#config_an_qty').value
    userData.date_type = document.querySelector('#config_date_type').value
    configDone()
    closeFillModal('#config')
    setElemDataAttr(elem_href,'href',false,userDataString())
    setElemDataAttr(doc_text[userData.title],'textContent',true)
  })
  document.querySelector('#config_cancel').addEventListener('click',()=>{
    closeFillModal('#config')
  })

  document.querySelectorAll('[data-fill=date],[data-fill=duedate]').forEach(t=>{
    t.addEventListener('focus',m=>{
      active_fill = m.target
      document.querySelector('#fill_date_result').value = elemValue(active_fill)
      openFillModal('#fill_date')
      document.querySelector('#fill_date_date').focus()
    })
  })
  document.querySelector('#fill_date_date').addEventListener('change',z=>{
    const values = z.target.value.split('-')
    const month = date_format.month[userData.date_type].filter(t=>t[0] == values[1])
    document.querySelector('#fill_date_result').value = values[2] + month[0][lang_index] + values[0]
  })
  document.querySelector('#fill_date_done').addEventListener('click',()=>{
    elemValue(active_fill, document.querySelector('#fill_date_result').value)
    closeFillModal('#fill_date')
    active_fill = undefined
  })
  document.querySelector('#fill_date_cancel').addEventListener('click',()=>{
    closeFillModal('#fill_date')
  })
  document.querySelectorAll('[data-fill=item]').forEach(t=>{
    t.addEventListener('focus',m=>{
      active_fill = [m.target, m.target.closest('[data-ut=line]').querySelector('[data-fill=price]')]
      const doing = document.querySelector('#fill_il_item')
      doing.value = elemValue(active_fill[0])
      AutoNumeric.set('#fill_il_price', AutoNumeric.getNumber(active_fill[1]))
      openFillModal('#fill_il')
      doing.focus()
    })
  })
  if(il){
    document.querySelector('#fill_il_item').addEventListener('change',m=>{
      const index = il.map(t=>t[0]).indexOf(m.target.value)
      if (index >= 0) {
        AutoNumeric.set('#fill_il_price', il[index][1])
      }
    })
  }
  document.querySelector('#fill_il_done').addEventListener('click',()=>{
    elemValue(active_fill[0], document.querySelector('#fill_il_item').value)
    AutoNumeric.set(active_fill[1], AutoNumeric.getNumber('#fill_il_price'))
    closeFillModal('#fill_il')
    active_fill = undefined
  })
  document.querySelector('#fill_il_cancel').addEventListener('click',()=>{
    closeFillModal('#fill_il')
  })
  document.querySelectorAll('[data-fill=client_name]').forEach(t=>{
    t.addEventListener('focus',m=>{
      active_fill = [m.target,document.querySelector('[data-fill=client_id]'),document.querySelector('[data-fill=client_address]')]
      const doing = document.querySelector('#fill_cl_name')
      doing.value = elemValue(active_fill[0])
      document.querySelector('#fill_cl_id').value = elemValue(active_fill[1])
      document.querySelector('#fill_cl_address').value = elemValue(active_fill[2])
      openFillModal('#fill_cl')
      doing.focus()
    })
  })
  if(cl){
    document.querySelector('#fill_cl_name').addEventListener('change',m=>{
      const index = cl.map(t=>t[0]).indexOf(m.target.value)
      if (index >= 0) {
        document.querySelector('#fill_cl_id').value = cl[index][1]
        document.querySelector('#fill_cl_address').value = cl[index][2]
      }
    })
  }
  document.querySelector('#fill_cl_done').addEventListener('click',()=>{
    elemValue(active_fill[0], document.querySelector('#fill_cl_name').value)
    elemValue(active_fill[1], document.querySelector('#fill_cl_id').value)
    elemValue(active_fill[2], document.querySelector('#fill_cl_address').value)
    closeFillModal('#fill_cl')
    active_fill = undefined
  })
  document.querySelector('#fill_cl_cancel').addEventListener('click',()=>{
    closeFillModal('#fill_cl')
  })

  document.querySelectorAll('[data-image]').forEach(t=>{
    t.src = '../images/100x100_logo.png'
    t.addEventListener('click',m=>{
      active_fill = m.target
      document.querySelector('#fill_img_file').value = elemValue(active_fill)
      openFillModal('#fill_img')
    })
  })
  document.querySelector('#fill_img_done').addEventListener('click',()=>{
    var imgSrc = '../images/100x100_logo.png'
    const elemSet = document.querySelector('#fill_img_file')
    if (elemSet.files.length > 0){
      imgSrc = window.URL.createObjectURL(elemSet.files[0])
    }
    active_fill.src = imgSrc
    const width = document.querySelector('#fill_img_width').value
    const height = document.querySelector('#fill_img_height').value
    if(width){active_fill.width = width}else{active_fill.removeAttribute('width')}
    if(height){active_fill.height = height}else{active_fill.removeAttribute('height')}
    closeFillModal('#fill_img')
    active_fill = undefined
  })
  document.querySelector('#fill_img_cancel').addEventListener('click',()=>{
    closeFillModal('#fill_img')
  })

  // https://stackoverflow.com/questions/18325025/how-to-detect-window-print-finish
  var afterPrint = function(){
    userDataCreate()
    document.querySelector('#dialog_print_link').value = window.location.href.split('?')[0] + userDataString()
    openFillModal('#dialog_print')
  }

  if(window.matchMedia){
    window.matchMedia('print').addListener(mql=>{
      if(mql.matches){}else{afterPrint()}
    })
  }
  window.onafterprint = afterPrint

  ;['[data-fill=vendor_name]','[data-fill=vendor_id]','[data-fill=vendor_address]','[data-fill=payment]','[data-fill=thank_message]'].forEach(t=>{
    const elem = document.querySelector(t)
    const key = t.slice(11,-1)
    if (elem == null || userData[key] == null){return}
    elemValue(elem,userData[key])
  })
  
})

// created by zummontt