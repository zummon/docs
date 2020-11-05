let zm_disc = {}, zm_user,
/* temporary element going to fill by using modal */
zm_active,
/* selected data doc set */
zm_docAsset
/* array of object */
const zm = {
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
/* others */
zm_tmps = {
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
  bookmark: {
    name: 'Bookmark',
    css: '',
    doc: ['inv','rcpt','qn','tinv'],
    img: './tmp_img/bookmark.png',
    type: 'Standard',
    // https://fonts.google.com/?category=Sans+Serif&selection.family=Athiti|Major+Mono+Display&subset=thai
    font: 'https://fonts.googleapis.com/css2?family=Athiti&family=Major+Mono+Display&display=swap',
    fontStyle: [
      'Athiti, sans-serif',
      'Major Mono Display, monospace',
    ],
  },
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
zm_font = [
  'Varela Round, sans-serif',
  'K2D, sans-serif',
],
zm_set = {
  /* main page */
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
  /* editing doc page */
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
zm_modal = {
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
/* main text  */
zm_title = [
  'Create Document - zummon webapp (Updating)',
  'สร้างเอกสาร - zummon เว็บแอป (พัฒนาเรื่อยๆ)',
],
zm_greet = [
  'Create Document',
  'สร้างเอกสาร',
],
zm_sourceused = {
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
zm_createby = {
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
/* each page text */
zm_browse = {
  title: [
    'Select the template you want to use',
    'เลือกแบบที่คุณต้องการใช้'
  ],
}
/* to do

* for taking a pic

http://127.0.0.1:5500/?lang=english&theme=dark&view=inv&docType=Standard&dateFormat=dmmmyyyy&anPrice=num&anQty=integer&lines=5&vatRate=0.07&whtRate=-0.03&itemDesc=creative%20fee&itemPrice=1000&itemQty=10&itemAmount=10000&vendorName=example%20zummon%20co%20ltd&vendorId=register%20%23%23%23&vendorAddress=address%20...&ref=NO%20%23%23%23&date=2%20Nov%202020&clientName=Customer%20name&clientId=register%20%23%23%23&clientAddress=address%20...&duedate=30%20Nov%202020&paymethod=pay%20to%20my%20PayPal...&totalFinal=10600&note=Adjust%20-100%20is%20discount...&totalAmount=10000&totalVat=700&totalAdjust=-100&vendorSignName=zummon&clientSignName=Customer&vendorSignDate=3%20Nov%202020&clientSignDate=3%20Nov%202020&subject=Create%20a%20template

http://127.0.0.1:5500/?lang=thai&theme=dark&view=rcpt&docType=Standard&dateFormat=dmmmyyyy&anPrice=num&anQty=integer&lines=5&vatRate=0.07&whtRate=-0.03&itemDesc=%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%20%E0%B8%A5%E0%B8%A7%E0%B8%94%E0%B8%A5%E0%B8%B2%E0%B8%A2&itemPrice=1000&itemQty=10&itemAmount=10000&vendorName=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%20%E0%B8%8B%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%99%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94&vendorId=%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%20%23%23%23&vendorAddress=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88...&ref=%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97%E0%B8%B5%E0%B9%88%20%23%23%23&date=2%20%E0%B8%9E.%E0%B8%A2.%202020&clientName=%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2&clientId=%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99...&clientAddress=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88&paymethod=%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%82%E0%B8%AD%E0%B8%99%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%20PayPal...&totalFinal=10200&note=%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%20-200%20%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%A5%E0%B8%94&totalAmount=10000&totalVat=700&totalWht=-300&totalAdjust=-200&vendorSignName=%E0%B8%8B%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%99&clientSignName=%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2

  "title": ["Document","เอกสาร"],
  "ref": ["No","เลขที่"],
  "date": ["Date","วันที่"],

  "title": ["Invoice","ใบแจ้งหนี้"],
  "ref": ["Inv-No","เลขที่"],
  "date": ["Inv-Date","วันที่"],

created by zummontt */