let disc = {}, user = {}, activeFillup, docAsset
const zm = {
  /* array of object */
  lang: [
    { type: 'english', text: 'English' },
    { type: 'thai', text: 'ไทย' },
  ],
  theme: [
    { type: 'light',
      text: ['Light',
        'สว่าง',
      ]
    },
    { type: 'dark',
      text: ['Dark',
        'มืด',
      ]
    },
  ],
  view: [
    { type: 'inv', 
      text: ['Invoice',
        'ใบแจ้งหนี้',
      ]
    },
    { type: 'tinv', 
      text: ['Tax Invoice',
        'ใบกำกับภาษี',
      ]
    },
    { type: 'rcpt', 
      text: ['Receipt',
        'ใบเสร็จรับเงิน',
      ]
    },
    { type: 'qn', 
      text: ['Quotation',
        'ใบเสนอราคา',
      ]
    },
  ],
},
font = [
  'Varela Round, sans-serif',
  'K2D, sans-serif',
],
title = [
  'Create Document - zummon webapp (Updating)',
  'สร้างเอกสาร - zummon เว็บแอป (พัฒนาเรื่อยๆ)',
],
greet = [
  'Create Document',
  'สร้างเอกสาร',
],
outsource = {
  title: [ 'Source Usage',
    'แหล่งการใช้งาน',
  ],
  content: [
    { text: 'AutoNumeric',
      link: 'http://autonumeric.org/',
    },
    { text: 'Font Awesome',
      link: 'https://fontawesome.com/',
    },
    { text: 'Google Fonts',
      link: 'https://fonts.google.com/',
    },
    { text: 'UIkit',
      link: 'https://getuikit.com/',
    },
    { text: 'unDraw',
      link: 'https://undraw.co/',
    },
  ],
},
createby = {
  title: [ 'Created by',
    'สร้างโดย',
  ],
  content: [
    { text: [ 'Donate to support (PayPal: zummontt)',
        'โอนเงินเพื่อสนับสนุน (PayPal: zummontt)',
      ],
      link: 'https://www.paypal.me/zummontt'
    },
    { text: [ 'Report issues (GitHub)',
        'แจ้งปัญหา (กิตฮับ)',
      ],
      link: 'https://github.com/zummon/docs/issues'
    },
    { text: [ 'Social (Facebook)',
        'พูดคุย (เฟซบุ๊ก)',
      ],
      link: 'https://www.facebook.com/zummontt/posts/185150049682455'
    },
    { text: [ 'Main website',
      'เว็บไซต์หลัก',
    ],
      link: 'https://zummon.github.io/site',
    },
  ],
},
/* others */
set = {
  docType: [
    'Style Type',
    'ประเภทรูปแบบ'
  ],
  dateFormat: [
    'Date Format',
    'รูปแบบวันที่'
  ],
  anPrice: [
    'Currency',
    'สกุลเงิน'
  ],
  anQty: [
    'Qty',
    'หน่วยนับ'
  ],
  lines: [
    'Rows',
    'บรรทัน'
  ],
  vatRate: [
    'VAT rate',
    'อัตราภาษีมูลค่าเพิ่ม'
  ],
  whtRate: [
    'Withholding tax rate',
    'อัตราภาษีหัก ณ ที่จ่าย'
  ],
  docFont: [
    'Font',
    'ตัวอักษร'
  ],
  actPrint: [
    'Print',
    'พิมพ์'
  ],
  actBack: [
    'Back',
    'ย้อนกลับ'
  ],
},
tmps = {
  tagcard: {
    name: 'Tagcard',
    css: '',
    doc: ['inv','rcpt','qn','tinv'],
    img: './tmp_img/tagcard.png',
    type: 'Standard',
    // https://fonts.google.com/?selection.family=Kaushan+Script|Srisakdi:wght@700
    font: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Srisakdi:wght@700&display=swap',
    fontStyle: [
      'Kaushan Script, cursive',
      'Srisakdi, cursive',
    ],
  },
  business: {
    name: 'Business',
    css: '',
    doc: ['inv','rcpt','qn','tinv'],
    img: './tmp_img/business.png',
    type: 'Standard',
    font: '',
    fontStyle: [
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    ],
  },
  // majors: {
  //   name: 'Majors',
  //   css: './tmp_css/majors.css',
  //   doc: ['inv','rcpt','qn','tinv'],
  //   img: './tmp_img/majors.png',
  //   type: 'Standard',
  //   font: '',
  //   fontStyle: [
  //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  //   ],
  // },
  // chocchip: {
  //   name: 'ChocChip',
  //   css: './tmp_css/chocchip.css',
  //   doc: ['inv','rcpt','qn','tinv'],
  //   img: './tmp_img/chocchip.png',
  //   type: 'Standard',
  //   // https://fonts.google.com/?query=Pacifico&selection.family=Itim|Pacifico
  //   font: 'https://fonts.googleapis.com/css2?family=Itim&family=Pacifico&display=swap',
  //   fontStyle: [
  //     'Itim, cursive',
  //     'Pacifico, cursive',
  //   ],
  // },
},
modal = {
  date: {
    title: [
      'Enter date',
      'ใส่วันที่'
    ],
    input: [
      'Select date',
      'เลือกวันที่'
    ],
    output: [
      'Display',
      'แสดง'
    ],
  },
  upload: {
    title: [
      'Upload Image',
      'ใส่รูปภาพ'
    ],
    input: [
      'Select Image',
      'เลือกรูปภาพ'
    ],
    height: [
      'Height (px)',
      'ยาว (px)'
    ],
    width: [
      'Width (px)',
      'กว้าง (px)'
    ],
  },
  print: {
    title: [
      'Link to get this document data',
      'ลิงก์เพื่อรับข้อมูลเอกสารนี้'
    ],
    output: [
      'Copy and save to use next time, [X] to go back to edit',
      'คัดลอก และบันทึกเพื่อใช้ในครั้งต่อไป, [X] เพื่อกลับไปแก้ไข'
    ],
  },
},
/* page */
browse = {
  title: [
    'Select the template you want to use',
    'เลือกแบบที่คุณต้องการใช้'
  ],
}
/* for taking a pic
http://127.0.0.1:5500/?lang=english&theme=dark&view=inv&docType=Standard&dateFormat=dmmmyyyy&anPrice=num&anQty=integer&lines=5&vatRate=0.07&whtRate=-0.03&itemDesc=creative%20fee&itemPrice=1000&itemQty=10&itemAmount=10000&vendorName=example%20zummon%20co%20ltd&vendorId=register%20%23%23%23&vendorAddress=address%20...&ref=NO%20%23%23%23&date=2%20Nov%202020&clientName=Customer%20name&clientId=register%20%23%23%23&clientAddress=address%20...&duedate=30%20Nov%202020&paymethod=pay%20to%20my%20PayPal...&totalFinal=10600&note=Adjust%20-100%20is%20discount...&totalAmount=10000&totalVat=700&totalAdjust=-100&vendorSignName=zummon&clientSignName=Customer

  "title": ["Document","เอกสาร"],
  "ref": ["No","เลขที่"],
  "date": ["Date","วันที่"],

  "title": ["Invoice","ใบแจ้งหนี้"],
  "ref": ["Inv-No","เลขที่"],
  "date": ["Inv-Date","วันที่"],
*/

/* created by zummontt */