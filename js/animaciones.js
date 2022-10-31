var indiceImagenesBuenosAires = 1;
mostrarImagenBuenosAires(indiceImagenesBuenosAires);

function cambiarImagenBuenosAires(n) {
    mostrarImagenBuenosAires (indiceImagenesBuenosAires += n);
}

function miniaturaActivaBuenosAires(n) {
    mostrarImagenBuenosAires (indiceImagenesBuenosAires = n);
}


function mostrarImagenBuenosAires (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes-BuenosAires");
    if (n > x.length) {indiceImagenesBuenosAires = 1}
    if (n < 1) {indiceImagenesBuenosAires = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenesBuenosAires-1].style.display = "flex";}

/*patagonia*/
var indiceImagenesPatagonia = 1;
mostrarImagenPatagonia(indiceImagenesPatagonia);

function cambiarImagenPatagonia(n) {
    mostrarImagenPatagonia (indiceImagenesPatagonia += n);
}

function miniaturaActivaPatagonia(n) {
    mostrarImagenPatagonia (indiceImagenesPatagonia = n);
}


function mostrarImagenPatagonia (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes-patagonia");
    if (n > x.length) {indiceImagenesPatagonia = 1}
    if (n < 1) {indiceImagenesPatagonia = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenesPatagonia-1].style.display = "flex";}

/*cuyo*/
var indiceImagenesCuyo = 1;
mostrarImagenCuyo(indiceImagenesCuyo);

function cambiarImagenCuyo(n) {
    mostrarImagenCuyo (indiceImagenesCuyo += n);
}

function miniaturaActivaCuyo(n) {
    mostrarImagenCuyo (indiceImagenesCuyo = n);
}


function mostrarImagenCuyo (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes-cuyo");
    if (n > x.length) {indiceImagenesCuyo = 1}
    if (n < 1) {indiceImagenesCuyo = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenesCuyo-1].style.display = "flex";}

/*cordoba*/
var indiceImagenesCordoba = 1;
mostrarImagenCordoba(indiceImagenesCordoba);

function cambiarImagenCordoba(n) {
    mostrarImagenCordoba (indiceImagenesCordoba += n);
}

function miniaturaActivaCordoba(n) {
    mostrarImagenCordoba (indiceImagenesCordoba = n);
}


function mostrarImagenCordoba (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes-cordoba");
    if (n > x.length) {indiceImagenesCordoba = 1}
    if (n < 1) {indiceImagenesCordoba = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenesCordoba-1].style.display = "flex";}

/*Noa*/
var indiceImagenesNoa = 1;
mostrarImagenNoa(indiceImagenesNoa);

function cambiarImagenNoa(n) {
    mostrarImagenNoa (indiceImagenesNoa += n);
}

function miniaturaActivaNoa(n) {
    mostrarImagenNoa (indiceImagenesNoa = n);
}


function mostrarImagenNoa (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes-noa");
    if (n > x.length) {indiceImagenesNoa = 1}
    if (n < 1) {indiceImagenesNoa = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenesNoa-1].style.display = "flex";}

/*Mesopotamia*/
var indiceImagenesMesopotamia = 1;
mostrarImagenMesopotamia(indiceImagenesMesopotamia);

function cambiarImagenMesopotamia(n) {
    mostrarImagenMesopotamia (indiceImagenesMesopotamia += n);
}

function miniaturaActivaMesopotamia(n) {
    mostrarImagenMesopotamia (indiceImagenesMesopotamia = n);
}


function mostrarImagenMesopotamia (n) {
    let i;
    let x = document.getElementsByClassName("galeria-de-imagenes-mesopotamia");
    if (n > x.length) {indiceImagenesMesopotamia = 1}
    if (n < 1) {indiceImagenesMesopotamia = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[indiceImagenesMesopotamia-1].style.display = "flex";}