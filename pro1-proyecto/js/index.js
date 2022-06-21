let proxy = "https://api.allorigins.win/raw?url=";
let endpoint = "https://api.deezer.com/chart";
let URL = proxy + endpoint;
let artistasContenido= document.querySelector(".contenedorArtistas")
let tracksContenido =document.querySelector(".contenedorTracks")
let ablumsContenido =document.querySelector(".contenedorAlbums")


fetch(URL)
.then(function(respuesta){
  return respuesta.json();


})
   .then(function(data){
    console.log(data);

    let artistas = data.artists.data;


   for (let i = 0; i <5 ; i++) {
     artistasContenido.innerHTML += `
  <article class="articleArtistas">
     <div class="divPadre4">
         <div class="divHija4">
             <span class="saltopagina1"><a href="detail-artistas.html?id=${artistas[i].id}" class="aLetra"><i>${artistas[i].name}
                         <br><i>${artistas[i].type} </i></i></a></span>
             <br>
             <a href="detail-artistas.html?id=${artistas[i].id}"><img src="${artistas[i].picture_big}" alt="mariabecerra"
                     height="190px"></a>
         </div>
     </div>
 </article>`
   
    
   }
   let tracks = data.tracks.data;


   for (let i = 0; i < 5 ; i++) {
     tracksContenido.innerHTML += ` <article class="articleArtistas">
     <div class="divPadre4">
         <div class="divHija4">
             <span class="saltopagina1"><a href="detail-canciones.html?id=${tracks[i].id}" class="aLetra"><i>${tracks[i].title_short}
                         <br><i>${tracks[i].type} </i><i></i>${tracks[i].artist.name}</i></a></span>
             <br>
             <a href="detail-canciones.html"><img src="${tracks[i].album.cover}" alt="mariabecerra"
                     height="190px"></a>
         </div>
     </div>
 </article>`
   
    
   }
   let albums = data.albums.data;


   for (let i = 0; i < 5 ; i++) {
     ablumsContenido.innerHTML += ` <article class="articleArtistas">
     <div class="divPadre4G">
         <div class="divHija4G">
             <span class="saltopagina1"><a href="detail-albumes.html?id=${albums[i].id}" class="aLetra"><i>${albums[i].title}
                         <br><i>${albums[i].type}</i><br><i>${albums[i].artist.name}</i></a></span>
             <br>
             <a href="detail-artistas.html"><img src="${albums[i].cover}" alt="mariabecerra"
                     height="190px">a>
         </div>
     </div>
 </article>`
   
    
   }





   }).catch(function(errores){
     console.log(errores);

   })




 
