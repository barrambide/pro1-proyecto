let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get('id');

let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;
let cancionesContenido = document.querySelector(".divHija6")
fetch(endpoint)
  .then(function (respuesta) {
    return respuesta.json();


  })
  .then(function (track) {
    console.log(track);
      cancionesContenido.innerHTML = `
     <span class="saltopagina1"><a href="detail-canciones.html?id=${track.id}" class="aLetra"><i>${track.title_short}
                 <br><i>${track.type}</i></i></a></span>
     <br>
     <a href="detail-canciones.html?id=${track.id}"><img src=${track.album.cover_big} alt="mariabecerra"
             height="190px"></a>
          <ul class="saltopagina1"> <li class="li" ><a href="detail-artistas.html?id=${track.artist.id}"><h3 class="aLetra"> ${track.artist.name}</h3></a></li><li class="li" ><a><h3 class="aLetra">Bpm : ${track.bpm}</h3></a></li>
             <li class="li"><a href="detail-albumes.html?id=${track.album.id}"><h3 class="aLetra">Album: ${track.album.title}</h3></a></li>
             </ul>       
    
`

  }).catch(function (errores) {
    console.log(errores);

  })