var userData = {}, cl=[], il=[]
var opts = {}
var elems_text
var lang_index = 1
var langs = [
  ['english','English','อังกฤษ'],
  ['thai','Thai','ไทย'],
]
var max_index = langs.length+1
var elem_text = [
  ['#footer_library', 'Library', 'ใช้ลักษณะ',],
  ['#footer_madeby', 'Made by', 'สร้างโดย',],
  ['#footer_github', 'zummon (GitHub)', 'zummon (GitHub)',],
  ['#footer_facebook', 'zummon (Facebook: zummontt)', 'zummon (เฟซบุ๊ก: zummontt)',],
  ['#footer_paypal', 'Donate to support (PayPal: zummontt)', 'โอนเงินเพื่อสนับสนุน (PayPal: zummontt)',],
  ['[for=config_lang]', 'Language', 'ภาษา',],
]
// var host = !host ? location.pathname.split('/')[1] : host
var elem_href = [
  ['#header_begin','../uikit/begin.html'],
  ['#header_browse','../uikit/browse.html'],
  ['#header_doc','../forms/uk_inv_tagcard.html'],
  ['#header_brief','../uikit/brief.html'],
]
var footer_links = { library: [
  ['Font Awesome','https://fontawesome.com/'],
  ['AutoNumeric','http://autonumeric.org'],
  ['Bootstrap','https://getbootstrap.com/'],
  ['Bulma','https://bulma.io/'],
  ['UIkit','https://getuikit.com'],
], madeby: [
  ['footer_github','https://github.com/zummon'],
  ['footer_facebook','https://www.facebook.com/zummontt'],
  ['footer_paypal','https://www.paypal.me/zummontt'],
] }
// https://www.sitepoint.com/get-url-parameters-with-javascript/
function userDataLoad(){
  const urlParams = new URLSearchParams(window.location.search)
  const keys = urlParams.keys()
  const keys_num = ['saletax_rate','incometax_rate']
  const keys_list = ['cl','il']
  const handle_list = [3, 2]
  var arr = []
  for (const key of keys) arr.push(key)
  arr.filter(onlyUnique).forEach(t=>{
    var values = urlParams.getAll(t)
    var list_index = keys_list.indexOf(t)
    if (keys_num.indexOf(t) >= 0) {
      values = parseFloat(values[0])
    } else if (list_index >= 0) {
      window[t] = listToMatrix(values, handle_list[list_index])
    } else {
      values = values[0]
    }
    userData[t] = values
  })
}
// https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
function userDataString(){
  const keys_list = ['cl','il']
  keys_list.forEach(t=>{
    if (window[t] == undefined) { return }
    var arr = []
    window[t].forEach(m=>{
      m.forEach(z=>{
        arr.push(z)
      })
    })
    userData[t] = arr
  })
  var str = []
  for (var values in userData) {
    if (userData.hasOwnProperty(values)) {
      var paste = userData[values]
      if (paste.constructor !== Array) { paste = [paste] }
      for (let z = 0; z < paste.length; z++) {
        str.push(encodeURIComponent(values) + "=" + encodeURIComponent(paste[z]))   
      }
    }
  }
  return '?' + str.join("&")
}
// https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
function listToMatrix(list, subArray){
  var matrix = [], i, k
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % subArray === 0) {
      k++
      matrix[k] = []
    }
    matrix[k].push(list[i])
  }
  return matrix
}
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function onlyUnique(value,index,self){ 
  return self.indexOf(value) === index
}
// https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
function isHidden(elem){
  var style = window.getComputedStyle(elem)
  return style.display === 'none'
}
// created by zummontt
// function setElemDataSty(data,sty){
//   data.forEach(t=>{
//     var elem = typeof t[0] === 'string' ? document.querySelector(t[0]) : t[0]
//     if(!elem){return}
//     elem.style[sty] = t[lang_index]
//   })
// }
// var elem_placeholder = [
//   ['#vendor_name', 'My name', 'ชื่อเรา',],
//   ['#vendor_id', 'Register', 'เลขประจำตัว',],
//   ['#vendor_address', 'Address', 'ที่อยู่',],
// ]
function setElemDataAttr(data,attr,islang,add){
  const index = islang ? lang_index : 1
  add = add ? add : ''
  data.forEach(t=>{
    const elem = document.querySelector(t[0])
    if(!elem){return}
    elem[attr] = t[index] + add
  })
}
function setElemsDataAttr(data,attr,islang,add){
  if(!data){return}
  const index = islang ? lang_index : 1
  add = add ? add : ''
  data.forEach(t=>{
    const elems = document.querySelectorAll(t[0])
    if(!elems[0]){return}
    elems.forEach(m=>{
      m[attr] = t[index] + add
    })
  })
}
function elemValue(el,val){
  const elem = typeof el == 'string' ? document.querySelector(el) : el
  var attr = 'textContent'
  if (['INPUT','TEXTAREA'].indexOf(elem.tagName) >= 0) { attr = 'value' }
  if (val !== undefined) { elem[attr] = val }
  else { return elem[attr] }
}
function htmlOptions(list,select){
  var strhtml = ''
  list.forEach(t=>{
    const addattr = select == t[0] ? 'selected' : ''
    strhtml += '<option value="' + t[0] + '"' + addattr + '>' + t[lang_index] + '</option>'
  })
  return strhtml
}
function setLangIndex(lang){
  lang_index = langs.map(t=>t[0]).indexOf(lang)+1
  if (lang_index < 1) { lang_index = 1 }
}
userData.lang = langs[0][0]
userDataLoad()
setLangIndex(userData.lang)
document.addEventListener('DOMContentLoaded',()=>{
  document.body.insertAdjacentHTML('afterbegin',html_header + html_option)
  document.body.querySelector('script').insertAdjacentHTML('beforebegin',html_footer)
  document.querySelector('#toggle_option').addEventListener('click',()=>{
    const elem = document.querySelector('#option')
    if (isHidden(elem)){
      elem.style.display = ''
    } else {
      elem.style.display = 'none'
    }
  })
  document.querySelector('#config_lang').addEventListener('change',m=>{
    const val = m.target.value
    userData.lang = val
    setLangIndex(val)
    setElemDataAttr(elem_text,'textContent',true)
    setElemsDataAttr(elems_text,'textContent',true)
  })
  setElemDataAttr(elem_href,'href',false,window.location.search)
  setElemDataAttr(elem_text,'textContent',true)
  setElemsDataAttr(elems_text,'textContent',true)
})