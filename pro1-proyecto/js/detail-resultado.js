let qs = location.search;
let qsObj = new URLSearchParams(qs);

let resultado = qsObj.get('search');

let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${resultado}`;
let tracksContenido = document.querySelector(".contenedorTracks")
fetch(endpoint)
  .then(function (respuesta) {
    return respuesta.json();

  })

   .then(function(data){
    console.log(data);
 
    let tracks = data.data;

    let textoBusqueda = document.querySelector(".textoBusqueda")
    textoBusqueda.innerHTML =  `Resultados para : ${resultado}`
    for (let i = 0; i < 5 ; i++) {
      tracksContenido.innerHTML += ` <article class="articleArtistas">
      <div class="divPadre4">
          <div class="divHija4">
              <span class="saltopagina1"><a href="detail-canciones.html?id=${tracks[i].id}" class="aLetra"><i>${tracks[i].title_short}
                          <br><i>${tracks[i].type} </i></i></a></span>
              <br>
              <a href="detail-artistas.html"><img src="${tracks[i].album.cover}" alt="mariabecerra"
                      height="190px"></a>
          </div>
      </div>
  </article>`
    
     
    }

   }).catch(function(errores){
     console.log(errores);

   })