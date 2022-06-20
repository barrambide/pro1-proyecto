let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get('id');

let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/tracks/${id}`;
let albumesContenido = document.querySelector(".divHija7")
fetch(endpoint)
  .then(function (respuesta) {
    return respuesta.json();


  })
  .then(function (albums) {
    console.log(albums);
      albumesContenido.innerHTML = `
     <span class="saltopagina1"><a href="detail-albumes.html?id=${albums.id}" class="aLetra"><i>${albums.title_short}
                 <br><i>${albums.type}</i></i></a></span>
     <br>
     <a href="detail-albumes.html?id=${albums.id}"><img src=${albums.album.cover_big} alt="mariabecerra"
             height="190px"></a>
          <ul class="saltopagina1"> <li class="li" ><a href="detail-artistas.html?id=${albums.artist.id}"><h3 class="aLetra"> ${albums.artist.name}</h3></a></li><li class="li" ><a><h3 class="aLetra">Bpm : ${track.bpm}</h3></a></li>
             <li class="li"><a href="detail-albumes.html?id=${albums.album.id}"><h3 class="aLetra">Album: ${albums.album.title}</h3></a></li>
             </ul>       
    
`

  }).catch(function (errores) {
    console.log(errores);

  })