var handleto  = 'cl'
var head_textopt = [
  ['cl','Customers List','รายชื่อลูกค้า'],
  ['il','Item List','รายการสินค้า'],
]
var head_text = { cl: ['Name','Register','Address'], il: ['Item','Price'] }
function datalistLoad(header, list) {
  if (list == undefined) { return }
  const brief = document.querySelector('#brief')
  brief.innerHTML = ''
  var thead = document.createElement('thead')
  var tr = document.createElement('tr')
  header.forEach(function(t){
  var th = document.createElement('th')
  th.textContent = t
  tr.appendChild(th)
  })
  thead.appendChild(tr)
  brief.appendChild(thead)

  var tbody = document.createElement('tbody')
  list.forEach(t=>{
  var tr = document.createElement('tr')
  t.forEach(m=>{
    var td = document.createElement('td')
    td.textContent = m
    tr.appendChild(td)
  })
  tr.addEventListener('click',z=>{
    var name = z.target.parentElement.firstChild.textContent
    var action = window.confirm('Delete ' + name + ' ?')
    if (action) {
    var data = window[handleto]
    var index = data.map(t=>t[0]).indexOf(name)
    data.splice(index, 1)
    const a = document.querySelectorAll('#header a')
    const copy = userDataString()
    a[0].href = '../uikit/begin.html' + copy
    a[1].href = '../uikit/browse.html' + copy
    a[2].href = '../forms/uk_inv_tagcard.html' + copy
    a[3].href = '../uikit/brief.html' + copy
    datalistLoad(head_text[handleto], window[handleto])
    }
  })
  tbody.appendChild(tr)
  })
  brief.appendChild(tbody)
}
elem_text = elem_text.concat([
  ['[for=config_onlist]', 'Choose the data', 'เลือกชุดข้อมูล',],
  ['#hint', 'Click one of these lines to delete', 'คลิกบรรทัดที่จะลบข้อมูล',],
])
document.addEventListener('DOMContentLoaded',()=>{
  datalistLoad(head_text.cl, cl)
  document.querySelector('#config_onlist').addEventListener('change',m=>{
    const select = m.target.value
    handleto = select
    datalistLoad(head_text[select], window[select])
  })
  document.querySelector('#config_lang').addEventListener('change',()=>{
    setElemDataAttr(elem_href,'href',false,userDataString())
  })
})

// created by zummontt