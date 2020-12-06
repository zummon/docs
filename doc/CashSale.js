(function(){

  zm_docCalTotal = function(){
    var elems = document.querySelectorAll('[data-docs=itemAmount]'), total = 0
    for (let z = 0; z < elems.length; z++) {
      total += AutoNumeric.getNumber(elems[z])
    }
    AutoNumeric.set('[data-docs=totalAmount]',total)
  }

})()