let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get('id');

let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`;


let trackTitulo = document.querySelector(".trackTitulo")
let trackContenido = document.querySelector(".contenedorTracks")
fetch(endpoint)
  .then(function (respuesta) {
    return respuesta.json();


  })

   .then(function(data){
    console.log(data);

  trackTitulo.innerHTML = data.title

  trackContenido.innerHTML +=` <article class="articleArtistas">
  <div class="divPadre4">
      <div class="divHija4">

          <span class="saltopagina1"><a href="detail-artistas.html?id=${data.artist.id}" class="aLetra"><i>Album: ${data.album.title}
                      <br><i> ${data.artist.name}</i></i></a></span>
          <br>
          <a href="detail-artistas.html"><img src=" ${data.album.cover_big}" alt="mariabecerra"
                  height="190px"></a>


      </div>
  </div>

</article>`

   }).catch(function(errores){
     console.log(errores);

   })






 
