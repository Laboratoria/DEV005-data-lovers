import { pokemonData, filterByLetter } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';


//secciones
const homeSecction = document.getElementById("homeSecction");
const pokedexSecction = document.getElementById("pokedexSecction");
const mapSecction = document.getElementById("mapSecction");
const extraSecction = document.getElementById("extraSecction");
const pokemonDiv = document.getElementById("pokemons");
//botones de barra menu
const btnHome = document.getElementById("buttonHome");
const btnPokedex = document.getElementById("buttonPokedex");
const btnMap = document.getElementById("buttonMap");
const btnExtra = document.getElementById("buttonExtra");

//botones de tipos
const btnAllTypes = document.getElementById("allTypes");
const btnTypeNormal = document.getElementById('typeNormal');
const btnTypeFighting = document.getElementById('typeFighting');
const btnTypeFlying = document.getElementById('typeFlying');
const btnTypePoison = document.getElementById('typePoison');
const btnTypeGround = document.getElementById('typeGround');
const btnTypeRock = document.getElementById('typeRock');
const btnTypeBug = document.getElementById('typeBug');
const btnTypeGhost = document.getElementById('typeGhost');
const btnTypeSteel = document.getElementById('typeSteel');
const btnTypeFire = document.getElementById('typeFire');
const btnTypeWater   = document.getElementById('typeWater');
const btnTypeGrass   = document.getElementById('typeGrass');
const btnTypeElectric    = document.getElementById('typeElectric');
const btnTypePsychic    = document.getElementById('typePsychic');
const btnTypeIce   = document.getElementById('typeIce');
const btnTypeDragon    = document.getElementById('typeDragon');
const btnTypeDark     = document.getElementById('typeDark');
const btnTypeFairy    = document.getElementById('typeFairy');

//Filtro Asc y desc
//const filterAsc = document.getElementById('asc');
//const filterDes = document.getElementById('des');
const filterLetter = document.getElementById('filterLetter').value;;

//Ocultar secciones
function mostrarSeccion(seccion) {
  switch (seccion) {
  case "home":
    homeSecction.style.display = "block";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "pokedex":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "block";
    mapSecction.style.display = "none";
    extraSecction.style.display = "none";
    break;
  case "map":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "block";
    extraSecction.style.display = "none";
    break;
  case "extra":
    homeSecction.style.display = "none";
    pokedexSecction.style.display = "none";
    mapSecction.style.display = "none";
    extraSecction.style.display = "block";
    break;
  default:
    console.error("Sección no válida");
  }
}

btnHome.addEventListener("click", () => mostrarSeccion("home"));
btnPokedex.addEventListener("click", () => mostrarSeccion("pokedex"));
btnMap.addEventListener("click", () => mostrarSeccion("map"));
btnExtra.addEventListener("click", () => mostrarSeccion("extra"));


console.log(pokemonData);
console.log(data);
//const allType = data.pokemon;


// Función para filtrar Pokémon por tipo
function filtrarPorTipo(tipo) {
  return data.pokemon.filter(pokemon => pokemon.type.includes(tipo));
}

// Función para mostrar los Pokémon en el contenedor
function mostrarPokemon(pokemon) {
  
  pokemon.forEach(pokemon => {
    pokemonDiv.innerHTML += `<div class="pokemon-container">
      <img src="${pokemon.img}"><br>
      <strong>N°: </strong>${pokemon.num}<br> 
      <strong>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong><br> 
      <strong>Type</strong>: ${pokemon.type}<br>
      <strong>Resistant</strong>: ${pokemon.resistant.join(", ")}<br>
      <strong>Weaknesses</strong>: ${pokemon.weaknesses.join(", ")}<br>
    </div>`;
  });
}

// Mostrar todos los Pokémon
btnAllTypes.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(data.pokemon);
});

// Mostrar Pokémon de tipo Normal
btnTypeNormal.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("normal"));
});

// Mostrar Pokémon de tipo Lucha
btnTypeFighting.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("fighting"));
});

// Mostrar Pokémon de tipo Volador
btnTypeFlying.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("flying"));
});

// Mostrar Pokémon de tipo Veneno
btnTypePoison.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("poison"));
});

// Mostrar Pokémon de tipo Tierra
btnTypeGround.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("ground"));
});

// Mostrar Pokémon de tipo Roca
btnTypeRock.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("rock"));
});

// Mostrar Pokémon de tipo bicho
btnTypeBug.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("bug"));
});

// Mostrar Pokémon de tipo Acero
btnTypeSteel.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("steel"));
});

// Mostrar Pokémon de tipo fuego
btnTypeFire.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("fire"));
});

// Mostrar Pokémon de tipo Agua
btnTypeWater.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("water"));
});

// Mostrar Pokémon de tipo Planta
btnTypeGrass.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("grass"));
});

// Mostrar Pokémon de tipo Fantasma
btnTypeGhost.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("ghost"));
});

// Mostrar Pokémon de tipo eletrico
btnTypeElectric.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("electric"));
});

// Mostrar Pokémon de tipo Psiquico
btnTypePsychic.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("psychic"));
});

// Mostrar Pokémon de tipo Hielo
btnTypeIce.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("ice"));
});

// Mostrar Pokémon de tipo Dragon
btnTypeDragon.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("dragon"));
});

// Mostrar Pokémon de tipo Siniestro
btnTypeDark.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("dark"));
});

// Mostrar Pokémon de tipo Hada
btnTypeFairy.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(filtrarPorTipo("fairy"));
});

//Filtrar por abecedario 

/*function sortData(data, name, sortOrder){
if (sortOrder === 'asc') {
  filterData.sort((a, b) => (a.name > b.name) ? 1 : -1);
} else if (sortOrder === 'desc') {
  filterData.sort((a, b) => (a.name < b.name) ? 1 : -1);
  
}
console.log(sortData ())
return filterData;
}


function sortData(data, name, sortOrder) {
  if (sortOrder === 'asc') {
    data.sort((a, b) => (a[name] > b[name]) ? 1 : -1);
  } else if (sortOrder === 'desc') {
    data.sort((a, b) => (a[name] < b[name]) ? 1 : -1);
  }
  console.log(data);
  return data;
}*/

/*filterAsc.addEventListener("click", function() {
  pokemonDiv.innerHTML = "";
  mostrarPokemon(sortData());
});*/

/*function ordenarPokemon(pokemon, sortBy, sortOrder) {
  // Se ordenan los pokemons por el campo especificado en 'sortBy' y en el orden especificado en 'sortOrder'
  pokemon = sortData(pokemon, sortBy, sortOrder);

  // Se devuelve el array de pokemons ordenado
  return pokemon;
  console.log(pokemon);
} */



