import { topPkmnSlice } from './data.js';
//import dataPkmn from './data/pokemon/pokemon.js';

//Pokemon en Top 10
for (let i=0 ; i<topPkmnSlice.length; i++){
  const pkmTop10 = document.getElementById(`${'img'+(i+1)}`);
  pkmTop10.setAttribute("src", topPkmnSlice[i].imgTop);  
  const pkmNameTop10 = document.getElementById(`${'name'+(i+1)}`);
  pkmNameTop10.innerHTML = topPkmnSlice[i].nameTop.toUpperCase();
}


