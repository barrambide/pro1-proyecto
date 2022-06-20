let qs= location.search;
let qsObj = new URLSearchParams(qs);

let id= qsObj.get('idArtista');




let artistaNombre = document.querySelector('#artistaNombre');
let artistaIMG = document.querySelector('#artistaIMG');
let artistaTrack = document.querySelector('#listaCanciones');

let cancionesContenido= '';

let endpoint = `https://api.deezer.com/artist/${id}`;
let Canciones = `https://api.deezer.com/artist/${id}/top?limit=5`;

let url= endpoint;
let url_Tracks = Canciones;




fetch(url)
.then(function(respuesta){
  return respuesta.json();


})
   .then(function(data){
    console.log(data);
   
    
   }).catch(function(errores){
     console.log(errores);

   })

   fetch(url_Tracks)
   .then(function(respuesta){
     return respuesta.json();
   
   
   })
      .then(function(data){
       console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        cancionesContenido += ` <li>
                                    <a href="./detail-canciones.html?idCanciones=${data.data[i].id}">
                                       <h3 class="letra">${data.data[i].title}</h3>
                                     </a>
                              </li>`
        
      }
       artistaTrack.innerHTML = cancionesContenido ; 
      }).catch(function(errores){
        console.log(errores);
   
      })
   