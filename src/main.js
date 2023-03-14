/* import { example } from './data/ghibli/ghibli.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js'; */

fetch("data/ghibli/ghibli.json")
  .then (response => response.json())
  .then(data => {
    crearTarjetas(data.films)})
  .catch(error => console.log(error));

/*Cards Peliculas*/
function crearTarjetas(peliculas){
  const container = document.querySelector("section");
  peliculas.forEach(pelicula => 
    container.innerHTML += `
        <div class="card">
            <div class="card-body-img">
                <img class="poster" src="${pelicula.poster}" alt="Imagen de la película"/>
            </div>
            <div class="card-body-text">
                    <h5 class="card-title">${pelicula.title}</h5>
                    <span class="info">${pelicula.release_date}</span>
            </div>
        </div>
        `
  )
  console.log(peliculas)
};

//Aqui colocar el código relacionado con el usuario 
// Aquí se debe pintar la data 



// console.log(example, data);