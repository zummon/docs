/* created by zummontt & searched for help from
https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
https://www.sitepoint.com/get-url-parameters-with-javascript/
https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
https://icons.getbootstrap.com/
*/

// config_lang
var langs = ['English', 'Thai']

document.addEventListener('DOMContentLoaded',function(){
    const queryStr = window.location.search
document.body.insertAdjacentHTML('afterbegin', `<nav id="header">
<a href="../source/begin.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eyeglasses" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M4 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z"/>
</svg>
</a>
<a href="../source/browse.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-layers" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z"/>
<path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"/>
</svg>
</a>
<a href="../forms/uikit_inv_business.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sticky" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v6.086a1.5 1.5 0 0 1-.44 1.06l-4.914 4.915a1.5 1.5 0 0 1-1.06.439H2.5A1.5 1.5 0 0 1 1 13.5v-11zM2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h6.086a.5.5 0 0 0 .353-.146l4.915-4.915A.5.5 0 0 0 14 8.586V2.5a.5.5 0 0 0-.5-.5h-11z"/>
<path fill-rule="evenodd" d="M9.5 9a.5.5 0 0 0-.5.5v5H8v-5A1.5 1.5 0 0 1 9.5 8h5v1h-5z"/>
</svg>
</a>
<a href="../source/brief.html` + queryStr + `">
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
<path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
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

function configHeadFootLang(lang, getonly) {
    var lang_index = langs.indexOf(lang)+1
    if (lang_index < 1) { lang_index = 1 }

    const footer = [
        ['#footer_library',
            'Library usage',
            'ใช้ลักษณะ',
        ],
        ['#footer_madeby',
            'Made by',
            'สร้างโดย',
        ],
        ['#footer_github',
            'zummon (Github)',
            'zummon (Github)',
        ],
        ['#footer_facebook',
            'zummon (Facebook: zummontt)',
            'zummon (Facebook: zummontt)',
        ],
        ['#footer_paypal',
            'Donate to support (PayPal: zummontt)',
            'โอนเงินเพื่อสนับสนุน (PayPal: zummontt)',
        ],
    ].map(function(t){ return [t[0], t[lang_index]] })

    if (getonly == true) { return footer.map(function(t){ return t[1] }) }
    
    footer.forEach(function(t){
        document.querySelector(t[0]).textContent = t[1]
    })
}