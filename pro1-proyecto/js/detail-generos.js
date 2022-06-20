

let urlUser = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre`;
 
fetch(urlUser)
    .then(function(response){
        return response.json()
    }).then(function(generos){
        let contenedor = document.querySelector(".canciones");
        console.log(generos)

        for (let i = 0; i < generos.data.length; i++) {

             contenedor.innerHTML +=    
             
             `<div class="divPadre8">
                  <div class="divHija8">
                    <span class="saltopagina1">
                          <a href="detail-generos.html"><img src="${generos.data[i].picture}" ></a>
                   </span>
                        <ul class="saltopagina1">
                          <li class="li"><a href="./detail-generos.html?idgeneros=${generos.data[i].id}"><h1 class="aLetra"></h1></a></li>
                      </ul>

                  </div>  
                </div> `   
        }
          
            
            
        

         
        
    })
    .catch(function(error){
        console.log(error);
    })
