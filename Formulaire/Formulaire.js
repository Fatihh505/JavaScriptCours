let listMenu = document.querySelectorAll('li')

listMenu.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active')
   
    if (this.classList.contains('tabmenu1')) {
      document.getElementById('contenu1').classList.add('afficher-contenu')
    }
    
  }) /* fin du EventListener */
})
