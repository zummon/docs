(function(){
  const elsModalDialog = document.querySelectorAll('.uk-modal-dialog')

  for (let z = 0; z < elsModalDialog.length; z++) {
    elsModalDialog[z].classList.add('uk-background-secondary','uk-light')
  }
  
  document.querySelector('#above').classList.add('uk-light')
  document.querySelector('#nav').classList.add('uk-light')
  document.querySelector('#end').classList.add('uk-light')
  document.documentElement.className = 'uk-background-secondary'

})()