let proxi = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"
let endpoint =   " https://api.allorigins.win/raw?url=https://api.deezer.com/chart";
let URL = endpoint;
let artistasContenido= document.querySelector(".contenedorArtistas")
let tracksContenido =document.querySelector(".contenedorTracks")
let ablumsContenido =document.querySelector(".contenedorAlbums")

fetch(URL)
.then(function(respuesta){
  return respuesta.json();


})
   .then(function(data){
    console.log(data);
    let albums = data.albums.data;
for (let i = 0; i < 5 ; i++) {
  ablumsContenido.innerHTML += ` <article class="articleArtistas">
  <div class="divPadre4G">
      <div class="divHija4G">
          <span class="saltopagina1"><a href="album.html?id=${albums[i].id}" <h1 class="aLetra"><i>${albums[i].title}
                      <br><i>${albums[i].type}<h1 class="aLetra">${albums[i].artist.name}</i></a></span>
          <br>
          <a href="album.html"><img src=" ${albums[i].cover}" alt="mariabecerra"
                  height="190px"></a>
      </div>
  </div>
</article>`


}}).catch(function(errores){
  console.log(errores);

})