/* created by zummontt & searched for help from
https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
https://www.sitepoint.com/get-url-parameters-with-javascript/
https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
https://icons.getbootstrap.com/
https://stackoverflow.com/questions/18325025/how-to-detect-window-print-finish
*/
var footer_text = [
    ['#footer_library',
        'Library',
        'ใช้ลักษณะ',
    ],
    ['#footer_madeby',
        'Made by',
        'สร้างโดย',
    ],
    ['#footer_github',
        'zummon (GitHub)',
        'zummon (กิตฮับ)',
    ],
    ['#footer_facebook',
        'zummon (Facebook: zummontt)',
        'zummon (เฟซบุ๊ก: zummontt)',
    ],
    ['#footer_paypal',
        'Donate to support (PayPal: zummontt)',
        'โอนเงินเพื่อสนับสนุน (PayPal: zummontt)',
    ],
]
// config_lang
var langs = ['english', 'thai']
var input_tags = ['INPUT','TEXTAREA']
var an_price_obj, an_qty_obj, cl, il
var userData = {}
var zummonData = {
    lang: 'english',
    doc_title: 'invoice',
    saletax_rate: 0.07,
    incometax_rate: -0.03,
    an_price: 'num',
    an_qty: 'integer',
    cl: [['','','']],
    il: [['','']],
}

document.addEventListener('DOMContentLoaded',function(){
    const queryStr = window.location.search
document.body.insertAdjacentHTML('afterbegin', `<nav id="header">
<a href="../source/begin.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
</a>
<a href="../source/browse.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z"/>
<path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"/>
</svg>
</a>
<a href="../forms/uikit_inv_business.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v6.086a1.5 1.5 0 0 1-.44 1.06l-4.914 4.915a1.5 1.5 0 0 1-1.06.439H2.5A1.5 1.5 0 0 1 1 13.5v-11zM2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h6.086a.5.5 0 0 0 .353-.146l4.915-4.915A.5.5 0 0 0 14 8.586V2.5a.5.5 0 0 0-.5-.5h-11z"/>
<path fill-rule="evenodd" d="M9.5 9a.5.5 0 0 0-.5.5v5H8v-5A1.5 1.5 0 0 1 9.5 8h5v1h-5z"/>
</svg>
</a>
<a href="../source/brief.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
</a>
</nav>`)

const urlParams = new URLSearchParams(window.location.search)
const lang = urlParams.get('lang')
const txt = configHeadFootLang(lang, true)

document.querySelector('body script').insertAdjacentHTML('beforebegin', `<div id="footer">
<div><h2 id="footer_library">` + txt[0] + `</h2>
<ul>
<li><a href="http://autonumeric.org" target="_blank">AutoNumeric</a></li>
<li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
<li><a href="https://bulma.io/" target="_blank">Bulma</a></li>
<li><a href="https://getuikit.com" target="_blank">UIkit</a></li>
</ul>
</div>
<div><h2 id="footer_madeby">` + txt[1] + `</h2>
<ul>
<li><a id="footer_github" href="https://github.com/zummon" target="_blank">` + txt[2] + `</a></li>
<li><a id="footer_facebook" href="https://www.facebook.com/zummontt" target="_blank">` + txt[3] + `</a></li>
<li><a id="footer_paypal" href="https://www.paypal.me/zummontt" target="_blank">` + txt[4] + `</a></li>
</ul>
</div>
</div>`)
})

function userDataLoad(){
    const urlParams = new URLSearchParams(window.location.search)
    const keys = urlParams.keys()
    // const keys_str = ['lang','doc_title','an_price','an_qty']
    const keys_num = ['saletax_rate','incometax_rate']
    const keys_list = ['cl','il']

    for (const key of keys) {
        var value = urlParams.get(key)
        var paste = value == undefined ? zummonData[key] : value

        if (keys_num.indexOf(key) >= 0) {
            userData[key] = isNaN(paste) ? zummonData[key] : parseFloat(paste)
            
        } else if (keys_list.indexOf(key) >= 0) {
            userData[key] = urlParams.getAll(key)
        } else {
            userData[key] = paste
        }
    }

    if (userData.saletax_rate == undefined) { userData.saletax_rate = zummonData.saletax_rate }
    if (userData.incometax_rate == undefined) { userData.incometax_rate = zummonData.incometax_rate }
    cl = userData.cl == undefined ? zummonData.cl : listToMatrix(userData.cl, 3)
    il = userData.il == undefined ? zummonData.il : listToMatrix(userData.il, 2)
}

function userDataSend() {
    var new_cl = []
    for (let z = 0; z < cl.length; z++) {
        var copy = cl[z].slice()
        new_cl = new_cl.concat(copy)
    }
    userData.cl = new_cl
    var new_il = []
    for (let z = 0; z < il.length; z++) {
        var copy = il[z].slice()
        new_il = new_il.concat(copy)
    }
    userData.il = new_il
    var str = []
    for (var value in userData) {
        if (userData.hasOwnProperty(value)) {
            var paste = userData[value]
            if (paste.constructor !== Array) {
                paste = [paste]
            }
            for (let m = 0; m < paste.length; m++) {
                str.push(encodeURIComponent(value) + "=" + encodeURIComponent(paste[m]))   
            }
        }
    }
    return str.join("&")
}

function listToMatrix(list, subArray) {
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

function configHeadFootLang(lang, getonly) {
    var lang_index = langs.indexOf(lang)+1
    if (lang_index < 1) { lang_index = 1 }

    var footer = footer_text.map(function(t){ return [t[0], t[lang_index]] })

    if (getonly == true) { return footer.map(function(t){ return t[1] }) }

    const font = ['Roboto','Kanit']
    document.querySelector('#footer').style.fontFamily = font[lang_index-1]

    footer.forEach(function(t){
        document.querySelector(t[0]).textContent = t[1]
    })
}