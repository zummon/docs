elem_text = elem_text.concat([
  ['#title_begin','ntroduction','เริ่มต้น'],
  ['#begin_p1',
    'This FREE website application (Webapp) will help you create Invoice, Quotation, Receipt, and Tax Invoice fast and decent. The result will print out as a wonderful document',
    'เว็บไซต์แอปพลิเคชั่นใช้งานฟรี (เว็บแอป) นี้จะช่วยให้คุณสร้างใบแจ้งหนี้, ใบเสนอราคา, ใบเสร็จรับเงิน และใบกำกับภาษี ได้อย่างดี และรวดเร็ว ผลลัพธ์จากการใช้งานจะพิมพ์ออกมาเป็นเอกสารที่สวยงาม',
  ],
  ['#begin_li1',
    'Beautiful templates to choose and be able to change color',
    'มีแบบฟอร์มสวยๆ ให้เลือก และสามารถเปลี่ยนสีได้',
  ],
  ['#begin_li2',
    'Auto calculate total, tax amount and also have currency symbol attached',
    'คำนวณยอดเงินรวม, ภาษี ให้อัตโนมัติ และมีสัญลักษณ์เงินตรา',
  ],
  ['#begin_li3',
    '** FUTURE DELETE ** Your "Customers List" and "Item List" will be stored as a link - you will understand more if you are done creating the first one',
    '** จะไม่มีในอนาคต ** "รายชื่อลูกค้า" และ "รายการสินค้า" ของคุณจะถูกเก็บไว้เป็นแบบลิงค์ - คุณจะเข้าใจมากขึ้นหากคุณสร้างเอกสารใบแรกเสร็จแล้ว',
  ],
  ['#begin_li4',
    'Compatible to use on a mobile - if the mobile is able to print',
    'สามารถใช้งานบนมือถือได้ - ถ้ามือถือมีคำสั่งพิมพ์ (ปริ้น)',
  ],
  ['#begin_p2',
    'This is kinda my first Webapp and try to update a better version, as the current version is usable as well',
    'เป็นครั้งแรกที่สร้างเว็บแอปนี้ จะพยายามอัปเดตให้ดีขึ้นเรื่อยๆ และเวอร์ชันปัจจุบันสามารถใช้งานได้เช่นกัน',
  ],
  ['#begin_p3',
    'If anything seems not to work properly please let me know on GitHub or Facebook (see at the end of this page) Also any ideas from you would be able to help me improve this Webapp (new template ideas, appropriate text labels, more languages, and others more)',
    'หากมีสิ่งใดทำงานไม่ถูกต้อง การแสดงผลแปลกๆ โปรดแจ้งผ่าน GitHub หรือ เฟซบุ๊ก (ดูที่ส่วนท้ายของหน้านี้) นอกจากนี้ความคิดเห็น จากคุณก็สามารถช่วยพัฒนาเว็บแอปนี้ได้ (เสนอแบบฟอร์มใหม่ๆ, แก้ไขข้อความบนเอกสารให้เหมาะสม, เพิ่มภาษา, และอื่นๆ)',
  ],
  ['#begin_p4',
    'I hope this is going to help you with document stuff. If you like it and want to support me, you can donate to my PayPal (see at the end of this page) Thank you',
    'หวังว่าเว็บแอปนี่จะช่วยคุณทำงานเกี่ยวกับเอกสารได้ง่ายขึ้น หากคุณชอบ และต้องการจะสนับสนุน สามารถโอนเงินผ่าน PayPal ของผมได้ (ดูที่ส่วนท้ายของหน้านี้)',
  ],

  ['#title_browse','Choose the template you want to use','เลือกแบบฟอร์มที่ต้องการใช้งาน'],

  ['#title_doc','Create the document','สร้างเอกสาร'],

  ['#title_brief','Manage your data','จัดการข้อมูลของคุณ'],
  ['#brief_p1',
    'Choose "Customers List" or "Item List" by each to remove, about Add and Edit you are already done it on Create the document',
    'เลือก "รายชื่อลูกค้า" หรือ "รายการสินค้า" ทีละรายการเพื่อลบข้อมูล, ส่วนการเพิ่ม และแก้ไขข้อมูล สามารถทำได้ตอนสร้างเอกสารแล้ว',
  ],
])
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('#config_lang').addEventListener('change',()=>{
    setElemDataAttr(elem_href,'href',false,userDataString())
  })
})

// created by zummontt
