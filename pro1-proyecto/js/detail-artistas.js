let qs= location.search;
let qsObj = new URLSearchParams(qs);

let id= qsObj.get('id');




let artista = document.querySelector('.artista');
;

let cancionesContenido= document.querySelector(".contenedorTracks");
let entrarACA = "https://cors-anywhere.herokuapp.com/corsdemo"
let endpoint = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;
let Canciones = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=5`;

let url= endpoint;
let url_Tracks = Canciones;




fetch(url)
.then(function(respuesta){
  return respuesta.json();
})
   .then(function(artist){
      console.log(artist);
   artista.innerHTML =  ` <article class="articleArtistas">
   <div class="divPadre4">
       <div class="divHija4">
           <span class="saltopagina1"><a href="detail-artistas.html?id=${artist.id}" class="aLetra"><i>${artist.name}
                       <br><i>${artist.type} </i></i></a></span>
           <br>
           <a href="detail-artistas.html"><img src="${artist.picture_big}" alt="mariabecerra"
                   height="190px"></a>
       </div>
   </div>
</article>`
    
   }).catch(function(errores){
     console.log(errores);

   })

   fetch(url_Tracks)
   .then(function(respuesta){
     return respuesta.json();
   
   
   })
      .then(function(tracksData){
       console.log(tracksData.data);
       let tracks = tracksData.data
      for (let i = 0; i <tracks.length; i++) {
        cancionesContenido.innerHTML += ` <article class="articleArtistas">
        <div class="divPadre4">
            <div class="divHija4">
                <span class="saltopagina1"><a href="./detail-artistas.html" class="aLetra"><i>${tracks[i].title_short}
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
   