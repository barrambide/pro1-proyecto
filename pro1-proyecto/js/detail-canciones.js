


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