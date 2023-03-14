import dataPkmn from './data/pokemon/pokemon.js';

//Pokemon en Top 10
const topPkmn = dataPkmn.pokemon.map((x) => {
  return {
    nameTop: x.name,
    cpTop: x.stats['max-cp'],
    imgTop: x.img
  } 
});

topPkmn.sort((a, b) => {
  const cpA = a.cpTop;
  const cpB = b.cpTop;
  return cpB - cpA;
});

export const topPkmnSlice = topPkmn.slice(0, 10);

//Pokemon en lista

export const listPkmn = dataPkmn.pokemon.map((y) => {
  return {
    numList: y.num,
    nameList: y.name,
    typeList: y.type,
    imgList: y.img,
    pcList: y.stats
  }
});
console.log(listPkmn);












const nameP = dataPkmn.pokemon[0].name;
const spanP = dataPkmn.pokemon[0]['spawn-chance'];
export const top10 = (a, b) => {
  
  return a + b;
};
console.log(top10(nameP, spanP));

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */