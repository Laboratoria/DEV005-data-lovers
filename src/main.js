import { top10, listPkmn } from './data.js';
import dataPkmn from './data/pokemon/pokemon.js';


//Pokemon - listado
const template = document.querySelector('template');
const dataList = document.querySelector('.dataList');
for (let i=0; i<listPkmn.length; i++){
  const dataListClone = template.content.cloneNode(true);
  dataListClone.querySelector('.container-num').innerHTML =listPkmn[i].numList;
  dataListClone.querySelector('.container-img').setAttribute("src", listPkmn[i].imgList);
  dataListClone.querySelector('.container-name').innerHTML =listPkmn[i].nameList.toUpperCase();
  if(listPkmn[i].typeList.length>1){
    dataListClone.querySelector('.container-type1').setAttribute("class", `container-type1  ${listPkmn[i].typeList[0]}`);
    dataListClone.querySelector('.container-type2').setAttribute("class", listPkmn[i].typeList[1]);
  }else{
    dataListClone.querySelector('.container-type1').setAttribute("class", listPkmn[i].typeList[0]);
  }
  dataList.appendChild(dataListClone);
} 

//Imprimir el valor de N°pokedex
const printPokedex = document.getElementById('printPokedex');
const menor = document.getElementById('menor');
const mayor = document.getElementById('mayor');
menor.addEventListener('click', function(){
  printPokedex.textContent = '0 - 251';
});
mayor.addEventListener('click', function(){
  printPokedex.textContent = '251 - 0';
});

//Imprimir el valor en región
const printRegion = document.getElementById('printRegion');
const regionK = document.getElementById('regionK');
const regionJ = document.getElementById('regionJ');
regionK.addEventListener('click', function(){
  printRegion.innerHTML = '<img class="regionImg" src="img/kanto.png">';
});
regionJ.addEventListener('click', function(){
  printRegion.innerHTML = '<img class="regionImg" src="img/johto.png">';
});

//Imprimir el valor en tipo
const printType = document.getElementById('printType');
const typeP = document.querySelectorAll('.type-p');
const typeNew = ['<img class="iconImg" src="img/veneno.png"><span class="poison"></span>',
  '<img class="iconImg" src="img/agua.png"><span class="water"></span>',
  '<img class="iconImg" src="img/dragon.png"><span class="dragon"></span>',
  '<img class="iconImg" src="img/fuego.png"><span class="fire"></span>',
  '<img class="iconImg" src="img/hada.png"><span class="fairy"></span>',
  '<img class="iconImg" src="img/lucha.png"><span class="fighting"></span>',
  '<img class="iconImg" src="img/hierba.png"><span class="grass"></span>',
  '<img class="iconImg" src="img/roca.png"><span class="rock"></span>',
  '<img class="iconImg" src="img/tierra.png"><span class="ground"></span>',
  '<img class="iconImg" src="img/acero.png"><span class="steel"></span>',
  '<img class="iconImg" src="img/bicho.png"><span class="bug"></span>',
  '<img class="iconImg" src="img/electrico.png"><span class="electric"></span>',
  '<img class="iconImg" src="img/fantasma.png"><span class="ghost"></span>',
  '<img class="iconImg" src="img/hielo.png"><span class="ice"></span>',
  '<img class="iconImg" src="img/normal.png"><span class="normal"></span>',
  '<img class="iconImg" src="img/psiquico.png"><span class="psychic"></span>',
  '<img class="iconImg" src="img/siniestro.png"><span class="dark"></span>',
  '<img class="iconImg" src="img/volador.png"><span class="flying"></span>'
];
for (let i=0; i<typeP.length; i++){
  typeP[i].addEventListener("click", function(){
    printType.innerHTML = typeNew[i];
  })
}

//Imprimir el valor en rareza
const printRarity = document.getElementById('printRarity');
const rarityN = document.getElementById('rarityN');
const rarityM = document.getElementById('rarityM');
const rarityL = document.getElementById('rarityL');
rarityN.addEventListener('click', function(){
  printRarity.innerHTML = '<img class="rarityImg" src="img/pokebola_normal.gif">';
});
rarityM.addEventListener('click', function(){
  printRarity.innerHTML = '<img class="rarityImg" src="img/pokebola_mitico.gif">';
});
rarityL.addEventListener('click', function(){
  printRarity.innerHTML = '<img class="rarityImg" src="img/pokebola_legendario.gif">';
});

//Imprimir el valor de PC
const printPC = document.getElementById('printPC');
const maxPC = document.getElementById('maxPC');
const minPC = document.getElementById('minPC');
maxPC.addEventListener('click', function(){
  printPC.textContent = 'Max PC';
});
minPC.addEventListener('click', function(){
  printPC.textContent = 'Min PC';
});




/* const pigdeyImg = document.getElementById('img11');
const imgOne = dataPkmn.pokemon[0].img;
pigdeyImg.setAttribute('src', imgOne);
 */
//console.log(dataPkmn.pokemon[0]['quick-move'][1].type);

//console.log(dataPkmn.pokemon[0]['quick-move'][1].type);     normal
//const prueba = data.top10(dataPkmn);

//console.log(prueba);
//console.log(example, dataPkmn);





//console.log(top10);
console.log(top10, dataPkmn);
