const hero = ()=>{
    const windowWidth = window.innerWidth;
    const miDiv = document.getElementById('imageDiv');

    if (windowWidth < 700) {
      // Ancho de pantalla menor a 700px
      miDiv.classList.remove('d-flex');
      miDiv.classList.add('d-none');
    } else {
      // Ancho de pantalla mayor o igual a 700px
      miDiv.classList.remove('d-none');
      miDiv.classList.add('d-flex');
    }
}
hero();
window.addEventListener('resize', function() {
    hero();
  });
  