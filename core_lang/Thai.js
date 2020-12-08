(function(){
const elsAboveNavEndModal = document.querySelectorAll('#above, #nav, #end, [id^=modal]')
const elSetDocOption = document.querySelectorAll('#set-doc option')
const elsCreatebyTarget = document.querySelectorAll('#createby [target]')

let zm_font = 'K2D, sans-serif'

const elEra = document.querySelector('#era')
elEra.querySelector('[value=Christ]').text = 'คริสต์'
elEra.querySelector('[value=Buddhist]').text = 'พุทธ'

const elTheme = document.querySelector('#theme')
elTheme.querySelector('[value=light]').text = 'สว่าง'
elTheme.querySelector('[value=dark]').text = 'มืด'

let zm_docsTexts = {
  CashSale: 'บิลเงินสด*',
  document: 'เอกสาร*',
  Invoice: 'ใบแจ้งหนี้',
  Quotation: 'ใบเสนอราคา*',
  Receipt: 'ใบเสร็จรับเงิน',
  TaxInvoice: 'ใบกำกับภาษี*',
}
let zm_createbyTexts = [
  'แจ้งปัญหา (กิตฮับ)',
  'พูดคุย (เฟซบุ๊ก)',
  'เว็บไซต์หลัก',
  'โอนเงินเพื่อสนับสนุน (PayPal)',
]

for (let z = 0; z < elsAboveNavEndModal.length; z++) {
  elsAboveNavEndModal[z].style.fontFamily = zm_font
}
for (let z = 0; z < elSetDocOption.length; z++) {
  elSetDocOption[z].text = zm_docsTexts[elSetDocOption[z].value]
}
for (let z = 0; z < elsCreatebyTarget.length; z++) {
  elsCreatebyTarget[z].textContent = zm_createbyTexts[z]
}

document.title = 'สร้างเอกสาร - zummon เว็บแอป (พัฒนาเรื่อยๆ)'
document.querySelector('#greet').textContent = 'สร้างเอกสาร'

document.querySelector('[for=set-doc]').textContent = 'ฟอร์ม'
document.querySelector('[for=set-dateFormat]').textContent = 'รูปแบบวันที่'
document.querySelector('[for=set-anPrice]').textContent = 'สกุลเงิน'
document.querySelector('[for=set-anQty]').textContent = 'หน่วยนับ'
document.querySelector('[for=set-lines]').textContent = 'บรรทัด'
document.querySelector('[for=set-vatRate]').textContent = 'อัตราภาษีมูลค่าเพิ่ม'
document.querySelector('[for=set-whtRate]').textContent = 'อัตราภาษีหัก ณ ที่จ่าย'

document.querySelector('[for=docSet-font]').textContent = 'ตัวอักษร'
document.querySelector('#docAct-select').textContent = 'เลือกแบบ'
document.querySelector('#docAct-print').textContent = 'พิมพ์'
document.querySelector('#docAct-get').textContent = 'รับข้อมูล'

document.querySelector('#sourceused label').textContent = 'แหล่งการใช้งาน'
document.querySelector('#createby label').textContent = 'สร้างโดย'

document.querySelector('#modal-date h4').textContent = 'ใส่วันที่'
document.querySelector('[for=modal-date-input]').textContent = 'เลือกวันที่'
document.querySelector('[for=modal-date-output]').textContent = 'แสดง'

document.querySelector('#modal-upload h4').textContent = 'ใส่รูปภาพ'
document.querySelector('[for=modal-upload-input]').textContent = 'เลือกรูปภาพ'
document.querySelector('[for=modal-upload-height]').textContent = 'ยาว (px)'
document.querySelector('[for=modal-upload-width]').textContent = 'กว้าง (px)'

document.querySelector('#modal-get h4').textContent = 'รับข้อมูลเอกสารของคุณ'
// document.querySelector('#modal-get-copy').textContent = 'คัดลอก และเก็บลิงค์นี้'
// document.querySelector('#modal-get-post').textContent = '*โพสต์ไปที่ Mini Dashboard'

})()