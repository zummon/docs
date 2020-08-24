// created by zummontt

// config_lang
var langs = ['English', 'Thai']
var input_tags = ['INPUT','TEXTAREA']
var an_price_obj, an_qty_obj, cl, il
var userData = {}
var zummonData = {
    lang: 'English',
    doc_title: 'invoice',
    saletax_rate: 0.07,
    incometax_rate: -0.03,
    an_price: 'num',
    an_qty: 'integer',
    cl: [['','','']],
    il: [['','']],
}

document.addEventListener('DOMContentLoaded',function userDataLoad(){

    // ---- userDataLoad ----

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
})

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