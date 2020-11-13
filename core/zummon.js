/* dev tool to check, is mobiles usable */
// https://dev.opera.com/articles/better-error-handling-with-window-onerror/
window.onerror = function(message,url,linenumber){
  UIkit.modal.dialog('<div class="uk-card uk-card-body uk-card-small">'+
    '<h5 class="uk-margin">'+
      '*Something went wrong. Let tell the developer '+
      '<a href="https://github.com/zummon/docs/issues" target="_blank">GitHub</a> or '+
      '<a href="https://www.facebook.com/zummontt/posts/185150049682455" target="_blank">Facebook</a>'+
    '</h5>'+
    '<h5 class="uk-margin">'+
      '*มีบางอย่างผิดพลาด โปรดแจ้งให้ผู้พัฒนาทราบ '+
      '<a href="https://github.com/zummon/docs/issues" target="_blank">กิตฮับ</a> หรือ '+
      '<a href="https://www.facebook.com/zummontt/posts/185150049682455" target="_blank">เฟซบุ๊ก</a>'+
    '</h5>'+
    '<hr>'+
    '<p class="uk-text-center">'+
      message +'<br>'+ linenumber +'<br>'+ url +
    '</p>'+
    '<p class="uk-text-right">'+
      '<a class="uk-button uk-button-primary uk-modal-close">'+
        '<i class="fas fa-check"></i>'+
      '</a>'+
    '</p>'+
  '</div>')
}
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
},
/* options for setting */
zm_setofDoc = {
  /* basic doc for tmps only */
  inv: ['document','invoice','taxinvoice','quotation','receipt'],
},
zm_setofDocType = {
  Standard: [],
},
zm_setofDateFormat = (function(){
  /* import include
    identify language: zm_disc.lang */
  
  /* special text set */
  const month = {
    short: [
      [],
      ['Jan', 'ม.ค.'],
      ['Feb', 'ก.พ.'],
      ['Mar', 'มี.ค.'],
      ['Apr', 'เม.ย.'],
      ['May', 'พ.ค.'],
      ['Jun', 'มิ.ย.'],
      ['Jul', 'ก.ค.'],
      ['Aug', 'ส.ค.'],
      ['Sep', 'ก.ย.'],
      ['Oct', 'ต.ค.'],
      ['Nov', 'พ.ย.'],
      ['Dec', 'ธ.ค.'],
    ],
    full: [
      [],
      ['January', 'มกราคม'],
      ['February', 'กุมภาพันธ์'],
      ['March', 'มีนาคม'],
      ['April', 'เมษายน'],
      ['May', 'พฤษภาคม'],
      ['June', 'มิถุนายน'],
      ['July', 'กรกฎาคม'],
      ['August', 'สิงหาคม'],
      ['September', 'กันยายน'],
      ['October', 'ตุลาคม'],
      ['November', 'พฤศจิกายน'],
      ['December', 'ธันวาคม'],
    ],
  }
  /* read from date input that look like "2020-12-31" */
  return {
    yyyyDmmDdd: { text: ['2020-12-31','2020-12-31'],
      call: function(d){
        return d
      }
    },
    mmDddDyyyy: { text: ['12-31-2020','12-31-2020'],
      call: function(d){
        d = d.split('-')
        return d[1] +'-'+ d[2] +'-'+ d[0]
      }
    },
    ddDmmDyyyy: { text: ['31-12-2020','31-12-2020'],
      call: function(d){
        d = d.split('-')
        return d[2] +'-'+ d[1] +'-'+ d[0]
      }
    },
    ddSmmSyyyy: { text: ['31/12/2020','31/12/2020'],
      call: function(d){
        d = d.split('-')
        return d[2] +'/'+ d[1] +'/'+ d[0]
      }
    },
    dSmSyy: { text: ['d/m/yy','ว/ด/ปป'],
      call: function(d){
        d = d.split('-')
        return parseInt(d[2]) +'/'+ parseInt(d[1]) +'/'+ d[0].slice(2)
      }
    },
    dmmmyy: { text: ['1 Dec 20','1 ธ.ค. 20'],
      call: function(d){
        d = d.split('-')
        return parseInt(d[2]) +' '+ month.short[parseInt(d[1])][zm_disc.lang] +' '+ d[0].slice(2)
      }
    },
    dmmmyyyy: { text: ['31 Dec 2020','31 ธ.ค. 2020'],
      call: function(d){
        d = d.split('-')
        return parseInt(d[2]) +' '+ month.short[parseInt(d[1])][zm_disc.lang] +' '+ d[0]
      }
    },
    dmmmmyyyy: { text: ['2 December 2020','2 ธันวาคม 2020'],
      call: function(d){
        d = d.split('-')
        return parseInt(d[2]) +' '+ month.full[parseInt(d[1])][zm_disc.lang] +' '+ d[0]
      }
    },
  }
})(),
zm_setofAnPrice = (function(){
  return {
    num: { text: '9,999.99',
      option: {},
    },
    numD: { text:'9.999,00',
      option: { 
        decimalPlaces: 0, 
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    integer: { text: '9,999',
      option: { 
        decimalPlaces: 0,
      }
    },
    integerD: { text:'9.999',
      option: { 
        decimalPlaces: 0,
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    baht: { text: '฿ 9,999.00',
      option: { 
        currencySymbol: '฿' 
      }
    },
    bahtSuffix: { text: '9,999.00 ฿',
      option: { 
        currencySymbol: '฿', 
        currencySymbolPlacement: 's' 
      }
    },
    dollar: { text: '$ 9,999.00',
      option: { 
        currencySymbol: '$' 
      },
    },
    dollarSuffix: { text: '9,999.00 $',
      option: { 
        currencySymbol: '$',
        currencySymbolPlacement: 's',
      }
    },
    french: { text: '€ 9.999,00',
      option: { 
        currencySymbol: '€',
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    frenchSuffix: { text: '9.999,00 €',
      option: { 
        currencySymbol: '€',
        currencySymbolPlacement: 's',
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    pound: { text: '£ 9,999.00',
      option: { 
        currencySymbol: '£' 
      }
    },
    poundSuffix: { text: '9,999.00 £',
      option: { 
        currencySymbol: '£', 
        currencySymbolPlacement: 's' 
      }
    },
    yen: { text: '¥ 9,999.00',
      option: { 
        currencySymbol: '¥',
      }
    },
    yenSuffix: { text: '9,999.00 ¥',
      option: { 
        currencySymbol: '¥', 
        currencySymbolPlacement: 's',
      }
    },
    swiss: { text: 'CHF 9,999.00',
      option: { 
        currencySymbol: 'CHF',
        digitGroupSeparator: '\'',
      }
    },
    swissSuffix: { text: '9,999.00 CHF',
      option: { 
        currencySymbol: 'CHF',
        currencySymbolPlacement: 's',
        digitGroupSeparator: '\'',
      }
    },
    brazilian: { text: 'R$ 9.999,00',
      option: { 
        currencySymbol: 'R$',
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    brazilianSuffix: { text: '9.999,00 R$',
      option: { 
        currencySymbol: 'R$',
        currencySymbolPlacement: 's',
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    turkish: { text: '₺ 9.999,00',
      option: { 
        currencySymbol: '₺',
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
    turkishSuffix: { text: '9.999,00 ₺',
      option: { 
        currencySymbol: '₺',
        currencySymbolPlacement: 's',
        digitGroupSeparator: '.', 
        decimalCharacter: ',',
      }
    },
  }
})(),
zm_setofAnQty = {
  integer: zm_setofAnPrice.integer,
  integerD: zm_setofAnPrice.integerD,
  num: zm_setofAnPrice.num,
  numD: zm_setofAnPrice.numD,
},
/* others */
zm_font = [
  'Varela Round, sans-serif',
  'K2D, sans-serif',
  /* basic font for tmps only */
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
],
zm_docs = {
  // document: { type: 'inv',
  //   text: ['Document',
  //     'เอกสาร',
  //   ],
  // },
  invoice: { type: 'inv',
    text: ['Invoice',
      'ใบแจ้งหนี้',
    ],
  },
  quotation: { type: 'inv',
    text: ['Quotation*',
      'ใบเสนอราคา*',
    ],
  },
  receipt: { type: 'inv',
    text: ['Receipt',
      'ใบเสร็จรับเงิน',
    ],
  },
  taxinvoice: { type: 'inv',
    text: ['Tax Invoice*',
      'ใบกำกับภาษี*',
    ],
  },
  // cashsale: { type: 'cashsale',
  //   text: ['Cash Sale*',
  //     'บิลเงินสด*',
  //   ],
  // },
},
zm_tmps = {
  /* {doc} and {type} keys don't be the same word, to stop collide filtering */
  bookmark: { name: 'Bookmark',
    doc: zm_setofDoc.inv,
    type: ['Standard'],
    img: './tmp_img/bookmark.png',
    css: '',
    // https://fonts.google.com/?selection.family=Athiti|Major+Mono+Display
    font: 'https://fonts.googleapis.com/css2?family=Athiti&family=Major+Mono+Display&display=swap',
    fontStyle: [
      'Athiti, sans-serif',
      'Major Mono Display, monospace',
    ],
  },
  business: { name: 'Business',
    doc: zm_setofDoc.inv,
    type: ['Standard'],
    img: './tmp_img/business.png',
    css: '',
    font: '',
    fontStyle: zm_font,
  },
  tagcard: { name: 'Tagcard',
    doc: zm_setofDoc.inv,
    type: ['Standard'],
    img: './tmp_img/tagcard.png',
    css: '',
    // https://fonts.google.com/?selection.family=Kaushan+Script|Srisakdi:wght@700
    font: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Srisakdi:wght@700&display=swap',
    fontStyle: [
      'Srisakdi, cursive',
      'Kaushan Script, cursive',
    ],
  },
  majors: { name: 'Majors',
    doc: zm_setofDoc.inv,
    type: ['Standard'],
    img: './tmp_img/majors.png',
    css: './tmp_css/majors.css',
    font: '',
    fontStyle: zm_font,
  },
  chocchip: { name: 'ChocChip',
    doc: zm_setofDoc.inv,
    type: ['Standard'],
    img: './tmp_img/chocchip.png',
    css: './tmp_css/chocchip.css',
    // https://fonts.google.com/?selection.family=Itim|Pacifico
    font: 'https://fonts.googleapis.com/css2?family=Itim&family=Pacifico&display=swap',
    fontStyle: [
      'Itim, cursive',
      'Pacifico, cursive',
    ],
  },
  // hero: { name: 'Hero',
  //   doc: zm_setofDoc.inv,
  //   type: ['Standard'],
  //   img: './tmp_img/hero.png',
  //   css: './tmp_css/hero.css',
  //   font: '',
  //   fontStyle: zm_font,
  // },
  // basicbill: { name: 'Basic Bill',
  //   doc: ['cashsale'],
  //   type: ['Standard'],
  //   img: './tmp_img/hero.png',
  //   css: './tmp_css/hero.css',
  //   font: '',
  //   fontStyle: zm_font,
  // },
},
zm_set = {
  /* main page */
  doc: [
    'Form',
    'ฟอร์ม'
  ],
  docStyle: [
    'Style',
    'รูปแบบ'
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
    'บรรทัด'
  ],
  vatRate: [
    'Value Added Tax Rate',
    'อัตราภาษีมูลค่าเพิ่ม'
  ],
  whtRate: [
    'Withholding Tax Rate',
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
      'Get your document data',
      'รับข้อมูลเอกสารของคุณ'
    ],
    output: [
      'Copy and save this link, [X] to go back to edit',
      'คัดลอก และเก็บลิงค์นี้, [X] เพื่อกลับไปแก้ไข'
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

http://127.0.0.1:5500/?lang=english&theme=dark&doc=invoice&docStyle=Standard&dateFormat=dmmmyyyy&anPrice=dollar&anQty=integer&lines=6&vatRate=0.07&whtRate=-0.03&itemDesc=Item%201...&itemDesc=Item%202...&itemPrice=600&itemPrice=1000&itemQty=10&itemQty=4&itemAmount=6000&itemAmount=4000&ref=DOC%20%23%23%23%23%23%23&date=9%20Nov%202020&duedate=30%20Nov%202020&vendorName=Vendor%20name...&vendorId=register%20%23%23%23&vendorAddress=address%20...&clientName=Customer%20name...&clientId=register%20%23%23%23&clientAddress=address%20...&paymethod=pay%20to%20my%20PayPal...&subject=create%20templates...&totalFinal=10600&totalAmount=10000&totalVat=700&totalAdjust=-100&note=Adjust%20-100%20is%20discount...&clientSignName=Customer%20name...&clientSignRank=Position...&clientSignDate=9%20Nov%202020&vendorSignName=Vendor%20name...&vendorSignRank=Position...&vendorSignDate=9%20Nov%202020

http://127.0.0.1:5500/?lang=thai&theme=dark&doc=receipt&docStyle=Standard&dateFormat=dmmmyyyy&anPrice=baht&anQty=integer&lines=6&vatRate=0.07&whtRate=-0.03&itemDesc=%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%20%E0%B8%A5%E0%B8%A7%E0%B8%94%E0%B8%A5%E0%B8%B2%E0%B8%A2%20(%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87)&itemPrice=1000&itemQty=10&itemAmount=10000&vendorName=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%20%E0%B8%8B%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%99%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94&vendorId=%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%20%23%23%23&vendorAddress=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88...&ref=%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97%E0%B8%B5%E0%B9%88%20%23%23%23&date=2%20%E0%B8%9E.%E0%B8%A2.%202020&clientName=%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2&clientId=%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99...&clientAddress=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88&paymethod=%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%82%E0%B8%AD%E0%B8%99%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%20PayPal...&totalFinal=10200&note=%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%20-200%20%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%A5%E0%B8%94&totalAmount=10000&totalVat=700&totalWht=-300&totalAdjust=-200&vendorSignName=%E0%B8%8B%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%99&clientSignName=%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2

created by zummontt */