export const filtro = {
  porNombrePokemon: (listaPokemones, nombreBuscar) => {
    const busca = nombreBuscar.toLowerCase();
    const dataFiltrada = listaPokemones.filter((pokemon) => pokemon.name.startsWith(busca))
    return  dataFiltrada;
  },
  elPrimeroPorNombre: (listaPokemones, nombreBuscar) => {
    const busca = nombreBuscar.trim();
    const dataFiltrada = listaPokemones.filter((pokemon) => pokemon.name === busca)
    return  dataFiltrada[0];
  } 
};

export const ordenar = {
  ascendente:(listaPokemones) => { 
    // use slice() para ordenar una copia y no el array original
    return listaPokemones.slice().sort(compararNombresAscendente );
  },
  descendente:(listaPokemones) => { 
    // use slice() para ordenar una copia y no el array original
    return listaPokemones.slice().sort(compararNombresDescendente );
  }
}

function compararNombresAscendente( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


function compararNombresDescendente( a, b ) {
  if (  b.name < a.name){
    return -1;
  }
  if ( b.name > a.name ){
    return 1;
  }
  return 0;
}

export const buscarPorNombre = (data, nombreBuscar) => {
  const busca = nombreBuscar.trim();
  const dataFiltrada = data.pokemon.filter((pokemon) => pokemon.name.startsWith(busca))
  return { pokemon: dataFiltrada }
};

//te devuelve un string que contiene la estructura html , la cual se forma apartir
// de la lista recibida por parametro

export const filtrarTipos = (data, tipo) => {
  const dataFiltrada = data.pokemon.filter((pokemon) =>
    pokemon.type.includes(tipo)
  );
  return { pokemon: dataFiltrada };
}
export const cartillasHtml = (listaPokemons) => {
  let cartillaString = ""; 
  listaPokemons.forEach ((pokemon)=>{
    cartillaString = cartillaString + `
    <article>
      <h3>${pokemon.name}</h3>
      <p>
      ${pokemon.about} 
      </p>
      <img src=${pokemon.img}>
      <a href="pokemon.html?nombre=${pokemon.name}" target="_blank" >ver mas</a>
    </article>`;
  });
  return cartillaString;
}

