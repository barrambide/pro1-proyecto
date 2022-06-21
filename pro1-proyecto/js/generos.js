

let urlUser = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;
let contenedor =document.querySelector(".contenedorGeneros")

fetch(urlUser)
    .then(function(response){
        return response.json()
    }).then(function(generos){
      
        console.log(generos)

        for (let i = 0; i < 5; i++) {

             contenedor.innerHTML +=  ` <article class="articleGeneroos">
             <div class="divPadre4G">
             <div class="divHija4G">
                 <span class="saltopagina1">
                        <a href="detail-generos.html?id=${generos.data[i].id}"><img src="${generos.data[i].picture_small}" alt="mariabecerra"
                             height="190px">
                        </a>
                 </span>
                 <ul class="saltopagina1">
                 <li class="li">
                 <a href="detail-generos.html?id=${generos.data[i].id}"><h1 class="aLetra">${generos.data[i].name}
                 </h1>
                 <br><h1 class="aLetra">${generos.data[i].type} </h1></a>
                 </li>
             </div>
         </div>
             
               </article>`  
             
               
        }
          
            
            
        

         
        
    })
    .catch(function(error){
        console.log(error);
    })
