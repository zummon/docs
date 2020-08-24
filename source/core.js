// created by zummontt & searched for help from
// https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
// https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
// https://www.sitepoint.com/get-url-parameters-with-javascript/
// https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript
// https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object

document.addEventListener('DOMContentLoaded',function(){
    const queryStr = window.location.search
    ;[
        ['#header_begin', '../index.html' + queryStr,
            '📖*'
        ],
        ['#header_browse', '../source/browse.html' + queryStr,
            'Templates'
        ],
        ['#header_docs', '../forms/bulma_inv_tiles.html' + queryStr,
            'Create'
        ],
        ['#header_brief', '../source/brief.html' + queryStr,
            'Data*'
        ],
    ].forEach(function(t){
        var elem = document.querySelector(t[0])
        if (elem == null) { return }
        elem.href = t[1]
        elem.textContent = t[2]
    })

    ;[
            ['#footer_library', false,
                'Library usage',
            ],

        ['#footer_github', 'https://github.com/zummon',
            'zummon (Github)',
        ],
        ['#footer_facebook', 'https://www.facebook.com/zummontt',
            'zummon (Facebook: zummontt)',
        ],
        ['#footer_paypal', 'https://www.paypal.me/zummontt',
            'donate to support (PayPal: zummontt)',
        ],

            ['#footer_madeby', false,
                'Made by',
            ],

        ['#footer_uikit', 'https://getuikit.com',
            'UIkit',
        ],
        ['#footer_autonumeric', 'http://autonumeric.org',
            'AutoNumeric',
        ],
        ['#footer_bulma', 'https://bulma.io/',
            'Bulma',
        ],
    ].forEach(function(t){
        var elem = document.querySelector(t[0])
        if (elem == null) { return }
        elem.textContent = t[2]
        if (t[1] == false) { return }
        elem.href = t[1]
        elem.target = '_blank'
    })
    
})

// future plan
// function configSetLang() {
//     var lang_index = langs.indexOf(lang)+1
//     if (lang_index < 1) { lang_index = 1 }

//     head_foot_lang_text.map(function(t){ return [[t[0], t[lang_index]]] }).forEach(function(t){

//         document.querySelector(t[0][0]).textContent = t[0][1]
//     })
//     head_foot_lang_tooltip.map(function(t){ return [[t[0], t[lang_index]]] }).forEach(function(t){

//         document.querySelector(t[0][0]).title = t[0][1]
//     })
// }