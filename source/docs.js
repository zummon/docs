// created by zummontt

// find all elements that are in document
function testGather() {
    var arr = []
    var doc = document.querySelector('#doc')
    doc.querySelectorAll('[id]').forEach(function(t){
        arr.push('#' + t.id)
    })
    doc.querySelectorAll('[name]').forEach(function(t){
        if (t.name == undefined) { return }
        arr.push('[name=' + t.name + ']')
    })
    // console.log(arr.join(','))
    return arr.join(',')
}