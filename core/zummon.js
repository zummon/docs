// polyfill faster maybe, leave it here
// https://stackoverflow.com/questions/3535055/load-html-file-contents-to-div-without-the-use-of-iframes
if(!window.XMLHttpRequest && 'ActiveXObject' in window){
  window.XMLHttpRequest = function(){
    return new ActiveXObject('MSXML2.XMLHttp')
  }
}
// to check, is a mobile usable
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
// declare uneditable global variables
const zm_anPrices = zummon.autoNumeric(),
zm_anQtys = {
  integer: zm_anPrices.integer,
  integerD: zm_anPrices.integerD,
  num: zm_anPrices.num,
  numD: zm_anPrices.numD,
},
zm_createbyLinks = [
  'https://www.paypal.me/zummontt',//paypal
  'https://github.com/zummon/docs/issues',//github
  'https://www.facebook.com/zummontt/posts/185150049682455',//facebook
  'https://zummon.github.io/site',//website
],
zm_dateFormats = zummon.dateFormat(),
zm_docs = {
  // cashsale: 'inv',
  // document: 'inv',
  invoice: 'inv',
  quotation: 'inv',
  receipt: 'inv',
  taxinvoice: 'inv',
},
zm_eras = {
  christ: true,
  buddhist: true,
},
zm_langs = {
  english: 'English',
  thai: 'ไทย',
},
zm_themes = {
  light: true,
  dark: true,
},
zm_sourceusedContent = [
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
zm_tmps = {
  Bookmark: {
    css: '',
    doc: [
      'document','invoice','taxinvoice','quotation','receipt',
    ],
    font: 'https://fonts.googleapis.com/css2?family=Athiti&family=Major+Mono+Display&display=swap',
    fontStyle: [// https://fonts.google.com/?selection.family=Athiti|Major+Mono+Display
      'Athiti, sans-serif',
      'Major Mono Display, monospace',
    ],
    img: './tmp_img/Bookmark.png',
  },
  Business: {
    css: '',
    doc: [
      'document','invoice','taxinvoice','quotation','receipt'
    ],
    font: '',
    fontStyle: [
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    ],
    img: './tmp_img/Business.png',
  },
  ChocChip: {
    css: './tmp_css/ChocChip.css',
    doc: [
      'document','invoice','taxinvoice','quotation','receipt'
    ],
    font: 'https://fonts.googleapis.com/css2?family=Itim&family=Pacifico&display=swap',
    fontStyle: [// https://fonts.google.com/?selection.family=Itim|Pacifico
      'Itim, cursive',
      'Pacifico, cursive',
    ],
    img: './tmp_img/ChocChip.png',
  },
  // Hero: {
  //   css: './tmp_css/Hero.css',
  //   doc: [
  //     'document','invoice','taxinvoice','quotation','receipt'
  //   ],
  //   font: '',
  //   fontStyle: [
  //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  //   ],
  //   img: './tmp_img/Hero.png',
  // },
  // Lite: {
  //   css: '',
  //   doc: [
  //     'cashsale',
  //   ],
  //   font: '',
  //   fontStyle: [
  //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  //   ],
  //   img: './tmp_img/Lite.png',
  // },
  Majors: {
    css: './tmp_css/Majors.css',
    doc: [
      'document','invoice','taxinvoice','quotation','receipt'
    ],
    font: '',
    fontStyle: [
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    ],
    img: './tmp_img/Majors.png',
  },
  Tagcard: {
    css: '',
    doc: [
      'document','invoice','taxinvoice','quotation','receipt'
    ],
    font: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Srisakdi:wght@700&display=swap',
    fontStyle: [// https://fonts.google.com/?selection.family=Kaushan+Script|Srisakdi:wght@700
      'Srisakdi, cursive',
      'Kaushan Script, cursive',
    ],
    img: './tmp_img/Tagcard.png',
  },
}
// declare editable global variables
// user interaction data
let zm_user,
// temporary element going to fill by using modal
zm_active,
// replacing from core lang
zm_browse,
zm_createby,
zm_createbyTexts,
zm_docActBack,
zm_docActPrint,
zm_docLabel,
zm_docSetFont,
zm_docsTexts,
zm_eraTexts,
zm_font,
zm_greet,
zm_modal_date,
zm_modal_upload,
zm_modal_print,
zm_setAnPrice,
zm_setAnQty,
zm_setDateFormat,
zm_setDoc,
zm_setLines,
zm_setVatRate,
zm_setWhtRate,
zm_sourceused,
zm_themesTexts,
zm_title

/* to fix

currently none

* for taking a pic

http://127.0.0.1:5500/?lang=english&theme=dark&doc=invoice&docStyle=Standard&dateFormat=dmmmyyyy&anPrice=dollar&anQty=integer&lines=6&vatRate=0.07&whtRate=-0.03&itemDesc=Item%201...&itemDesc=Item%202...&itemPrice=600&itemPrice=1000&itemQty=10&itemQty=4&itemAmount=6000&itemAmount=4000&ref=DOC%20%23%23%23%23%23%23&date=9%20Nov%202020&duedate=30%20Nov%202020&vendorName=Vendor%20name...&vendorId=register%20%23%23%23&vendorAddress=address%20...&clientName=Customer%20name...&clientId=register%20%23%23%23&clientAddress=address%20...&paymethod=pay%20to%20my%20PayPal...&subject=create%20templates...&totalFinal=10600&totalAmount=10000&totalVat=700&totalAdjust=-100&note=Adjust%20-100%20is%20discount...&clientSignName=Customer%20name...&clientSignRank=Position...&clientSignDate=9%20Nov%202020&vendorSignName=Vendor%20name...&vendorSignRank=Position...&vendorSignDate=9%20Nov%202020

http://127.0.0.1:5500/?lang=thai&theme=dark&doc=receipt&docStyle=Standard&dateFormat=dmmmyyyy&anPrice=baht&anQty=integer&lines=6&vatRate=0.07&whtRate=-0.03&itemDesc=%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%20%E0%B8%A5%E0%B8%A7%E0%B8%94%E0%B8%A5%E0%B8%B2%E0%B8%A2%20(%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87)&itemPrice=1000&itemQty=10&itemAmount=10000&vendorName=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%20%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%20%E0%B8%8B%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%99%20%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94&vendorId=%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%20%23%23%23&vendorAddress=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88...&ref=%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97%E0%B8%B5%E0%B9%88%20%23%23%23&date=2%20%E0%B8%9E.%E0%B8%A2.%202020&clientName=%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2&clientId=%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99...&clientAddress=%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88&paymethod=%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%82%E0%B8%AD%E0%B8%99%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%20PayPal...&totalFinal=10200&note=%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87%20-200%20%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%A5%E0%B8%94&totalAmount=10000&totalVat=700&totalWht=-300&totalAdjust=-200&vendorSignName=%E0%B8%8B%E0%B8%B1%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%99&clientSignName=%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2

created by zummontt */