var indiceImagenes = 1;
mostrarImagen(indiceImagenes);

function cambiarImagen(n) {
    mostrarImagen (indiceImagenes += n);
}

function miniaturaActiva(n) {
    mostrarImagen (indiceImagenes = n);
}


function mostrarImagen (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes");
    if (n > x.length) {indiceImagenes = 1}
    if (n < 1) {indiceImagenes = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenes-1].style.display = "flex";}