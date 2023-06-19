function agregarFavorito(icono) {
  icono.classList.toggle('far'); // Quitar clase "far" (corazón vacío)
  icono.classList.toggle('fas'); // Agregar clase "fas" (corazón lleno)

  var nombreCancion = icono.previousElementSibling.textContent; // Obtener el nombre de la canción desde el elemento anterior

  var listaFavoritos = document.getElementById('lista-favoritos');

  if (icono.classList.contains('fas')) {
    // Agregar canción a favoritos
    var listItem = document.createElement('li');
    listItem.textContent = nombreCancion;
    listaFavoritos.appendChild(listItem);
  } else {
    // Quitar canción de favoritos
    var cancionesFavoritas = listaFavoritos.getElementsByTagName('li');
    for (var i = 0; i < cancionesFavoritas.length; i++) {
      if (cancionesFavoritas[i].textContent === nombreCancion) {
        listaFavoritos.removeChild(cancionesFavoritas[i]);
        break;
      }
    }
  }
}
