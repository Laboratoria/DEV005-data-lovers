import { buscar, ordenar, filtrar } from "./dataHandler.js"

//Elementos DOM en variable
const btnBuscar = document.getElementById("btnBuscar")
const booksContainer = document.getElementById("booksContainer")
const btnOrdenarAscendente = document.getElementById("btnOrdenar1")
const btnOrdenarDescendente = document.getElementById("btnOrdenar2")
const btnFiltrar = document.querySelector('#btnFiltrar')
const charactersContainer = document.getElementById("charactersContaine")



// const btnOrdenar = document.getElementsById("ordenar")
// const books = document.getElementsByName("books")

//Eventos del DOM
btnBuscar.addEventListener('click', buscarInfo)
btnOrdenarAscendente.addEventListener('click', ordenarPorTituloAscedente)
btnOrdenarDescendente.addEventListener('click', ordenarPorTituloDescedente)
btnFiltrar.addEventListener('click',filtrarPersj)
// btnFiltrar.addEventListener('click',)
// btnOrdenar.addEventListener('click',)

//Funciones que interactuan con el DOM
function buscarInfo() {
  const resultado = buscar() //a const resultado, le estoy asignado el retorno de la funcion buscar

  insertarLibros(resultado)
}

function ordenarPorTituloAscedente() {
  const resultado = ordenar("a-z")

  insertarLibros(resultado)

}

function ordenarPorTituloDescedente() {
  const resultado = ordenar("z-a")

  insertarLibros(resultado)

}  function filtrarPersj(){
  const resultado= filtrar
  filtrarPersonaje(resultado)
}

function filtrarPersonaje(BuscarPersonajes){
  charactersContainer.removeChild(document.getElementById("characters"))

  const filtrar= document.createElement("div")
  filtrar.setAttribute("id", "characters");
  filtrar.setAttribute("class","characters");
  charactersContainer.appendChild(filtrar)

  BuscarPersonajes.forEach(filtrar=> {
    const characteres= document.createElement("div")
    characteres.setAttribute("id","character"+filtrar.id)
    filtrar.appendChild(characteres)

    const name= document.createElement("label")
    name.setAttribute("id", "characters"+filtrar.name.value);
    name.setAttribute("class","characters");
    charactersContainer.appendChild(name)

    const birth= document.createElement("label")
    birth.setAttribute("id", "characters"+filtrar.birth.value);
    birth.setAttribute("class","characters");
    charactersContainer.appendChild(birth)

    const species = document.createElement("label")
    species.setAttribute("id", "characters"+filtrar.species.value);
    species.setAttribute("class","characters");
    charactersContainer.appendChild(species)
 
    const gender = document.createElement("label")
    gender.setAttribute("id", "characters"+filtrar.gender.value);
    gender.setAttribute("class","characters");
    charactersContainer.appendChild(gender)
 
    const house = document.createElement("label")
    house.setAttribute("id", "characters"+filtrar.house.value);
    house.setAttribute("class","characters");
    charactersContainer.appendChild(house)

    const associated_groups = document.createElement("label")
    associated_groups.setAttribute("id", "characters"+filtrar.associated_groups.value);
    associated_groups.setAttribute("class","characters");
    charactersContainer.appendChild(associated_groups)


  });
}

function insertarLibros(librosAInsertar) {
  booksContainer.removeChild(document.getElementById("books")) // removeChild elimina todo lo que esté en el elemento Html de id=books al presionar boton buscar (de no hacerlo se vuelve agregar la info al presionar boton buscar )

  const books = document.createElement("div") // le estoy asignado crear un elemento div en Html (este div contendrá todo los libros)
  books.setAttribute("id", "books"); // le asigna al div creado un atributo id con valor books para invocarlo desde Js
  books.setAttribute("class", "books");//le asigna al div creado un atributo class con valor books  para invocarlo desde Css
  booksContainer.appendChild(books) // Inserta el div creado con los 2 atributos en el elemento con id booksContainer del Html

  librosAInsertar.forEach(book => { // forEach recorre el arrow function es una funcion anónima
    const libro = document.createElement("div");
    libro.setAttribute("id", "book" + book.id);
    libro.setAttribute("class", "book");
    books.appendChild(libro)

    const cover = document.createElement("div");
    cover.setAttribute("id", "cover" + book.id);
    cover.setAttribute("class", "cover");
    libro.appendChild(cover)

    const titulo = document.createElement("label");
    titulo.setAttribute("id", "bookTitle" + book.id);
    titulo.setAttribute("class", "book-title");
    titulo.appendChild(document.createTextNode(book.title))
    cover.appendChild(titulo)

    const imagen = document.createElement("img");
    imagen.setAttribute("src", "imagen/" + book.image);
    imagen.setAttribute("class", "book-image");
    cover.appendChild(imagen)

    const backCover = document.createElement("div");
    backCover.setAttribute("id", "backCover" + book.id);
    backCover.setAttribute("class", "backCover");
    libro.appendChild(backCover)

    const fecha = document.createElement("label");
    fecha.setAttribute("id", "bookReleaseDay" + book.id);
    fecha.setAttribute("class", "book-release-day")
    fecha.appendChild(document.createTextNode(book.releaseDay))
    backCover.appendChild(fecha)

    const author = document.createElement("label");
    author.setAttribute("id", "bookAuthor" + book.id);
    author.setAttribute("class", "book-author")
    author.appendChild(document.createTextNode(book.author))
    backCover.appendChild(author)

    const description = document.createElement("label");
    description.setAttribute("id", "bookDescription" + book.id);
    description.setAttribute("class", "book-description")
    description.appendChild(document.createTextNode(book.description))
    backCover.appendChild(description)
  });
}

