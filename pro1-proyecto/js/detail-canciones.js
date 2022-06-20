let qs = location.search;
let qsObj = new URLSearchParams(qs);

let id = qsObj.get('id');

let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;

let endpointArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;

let generoTitulo = document.querySelector(".generoTitulo")
let artistasContenido = document.querySelector(".contenedorTracks")
fetch(endpoint)
  .then(function (respuesta) {
    return respuesta.json();


  })

   .then(function(data){
    console.log(data);

  generoTitulo.innerHTML += data.name

   }).catch(function(errores){
     console.log(errores);

   })

fetch(endpointArtistas)
  .then(function (respuesta) {
    return respuesta.json();


  })

   .then(function(data){
    console.log(data.data);
let artistas = data.data


for (let i = 0; i <artistas.length ; i++) {
  artistasContenido.innerHTML += ` <article class="articleArtistas">
  <div class="divPadre4">
      <div class="divHija4">
          <span class="saltopagina1"><a href="detail-artistas.html?id=${artistas[i].id}" class="aLetra"><i>${artistas[i].name}
                      <br><i>${artistas[i].type} </i></i></a></span>
          <br>
          <a href="detail-artistas.html"><img src="${artistas[i].picture_big}" alt="mariabecerra"
                  height="190px"></a>
      </div>
  </div>
</article>`
}


   }).catch(function(errores){
     console.log(errores);

   })
