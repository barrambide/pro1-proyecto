let proxi = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"
let endpoint =   " https://api.allorigins.win/raw?url=https://api.deezer.com/chart";
let URL = endpoint;
let artistasContenido= ``
let artistasSection = ""


fetch(URL)
.then(function(respuesta){
  return respuesta.json();


})
   .then(function(data){
    console.log(data);

    let artistas = data.artists.data;


   for (let i = 0; i < 5 ; i++) {
     artistasContenido += `  <article class="canciones">
     <span class="portada">
         <a href="detail-artistas.html"><img src="${data.artists.picture}" alt="mariabecerra"
                 ></a>
     </span>
     <ul class="detalle">
         <li class="tituloname"><a href="./detail-artistas.html">
                 <h1>"${data.artists.data.name}"</h1>
             </a></li>
         <li class="fechapeli">2021</li>
     </ul>
 </article>`
   
    
   }

     artistasSection.innerHTML= artistasContenido;




   }).catch(function(errores){
     console.log(errores);

   })




 
