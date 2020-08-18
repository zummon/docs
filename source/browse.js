(function() {
    const main_elem = document.querySelector('#scr_main_form').firstElementChild.firstElementChild

    browse_images.forEach(function(t){
        var div = document.createElement('div')

        var a = document.createElement('a')
        a.className = 'uk-display-block uk-card uk-link-toggle'
        a.addEventListener('click',function(e){
            main = e.target.alt
            mainLoad()
        })

        var img = document.createElement('img')
        img.src = t[1]
        img.alt = t[0]

        a.appendChild(img)
        div.appendChild(a)
        main_elem.appendChild(div)
    })
})()