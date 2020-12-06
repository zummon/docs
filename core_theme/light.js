(function(){
  const elsModalDialog = document.querySelectorAll('.uk-modal-dialog')

  for (let z = 0; z < elsModalDialog.length; z++) {
    elsModalDialog[z].classList.remove('uk-background-secondary')
    elsModalDialog[z].classList.remove('uk-light')
  }

  document.querySelector('#above').classList.remove('uk-light')
  document.querySelector('#nav').classList.remove('uk-light')
  document.querySelector('#end').classList.remove('uk-light')
  document.documentElement.classList.remove('uk-background-secondary')

})()