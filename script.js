// Próximas funciones
// Borrar una sección. LISTO
// Agregar jugador. 
// Borrar jugador.
// Que se pueda agregar una sección encima o debajo. 
// Que blank-player no se pueda borrar, asi nunca va haber una sección vacia. 
// Crear página que se muestre cuando hay 0 secciones. LISTO
// Resolver el espacio vacio entre secciones y footer. LISTO
//// Probablemente lo mejor es que haya un fondo piola. LISTO
// Crear footer. LISTO
// Mover jugadores: cambiar orden dentro de la sección. Y mover a otra sección. 
// Otra cosa que me faltó, es que no se pueda repetir el nombre de las secciones, no puede haber dos arqueros y arqueros.
///sigue anterior: También faltó un máximo de caracteres que se pueda escribir. 

//IMPORTANTES
// Agregar que cuando posiciones el mouse encima de los buttons-to-mobile, apareza un mensajito de lo que hace. 

const body = document.getElementById('body')
const main = document.getElementById('main')

const arrayOfSections = ['arqueros', ]

// Agregar sección

// Problema: Terminé utilizando onclick en html, en vez de un addEventListener u otro en js. No encontré ninguna forma de realizar el proceso mediante js. getElementByClassName no funcionó. Y si funcionaba, terminaba no funcionando en los nuevos. 

// Agregar modal. En el que se preguntará, Agregar encima o agregar debajo de que section? Si no hay ninguna section se hace el appendChild de siempre. 
// El modal puede que se haga con condicionales. 

const addSectionClick = () => {
    console.log('Hola mundo')

    let sectionTitlePositions = prompt("Titulo de la Sección (Ejemplo: Arqueros)").toUpperCase()

    let sectionTitlePositionsDelete = sectionTitlePositions.toLowerCase().replace(/[" "]/gi, "-").concat("-delete")
    let sectionTitlePositionsDeleteToMobile = sectionTitlePositions.toLowerCase().replace(/[" "]/gi, "-").concat("-delete-to-mobile")

    const playerDescription =`
    <section class="section-title">
    <div class="add-buttons">
        <button class="add-section" id="add-section" onclick="addSectionClick()">Agregar sección</button>
        <button class="add-player">Agregar jugador</button>
        <button class="delete-section" id="${sectionTitlePositionsDelete}" onclick="deleteSectionClick()">Borrar sección</button>
    </div>
    <div class="add-buttons-to-mobile">
        <div class="add-section-to-mobile">
            <a class="add-section-icon-container" id="add-section-to-mobile" href="#" onclick="addSectionClick()"><img class="add-section-icon" src="icons/add.png" alt=""></a>
        </div>
        <div class="add-player-to-mobile">
            <a class="add-player-icon-container" href="#"><img class="add-player-icon" src="icons/add-friend.png" alt=""></a>
        </div>
        <div class="delete-section-to-mobile">
            <a class="delete-section-icon-container" id="${sectionTitlePositionsDeleteToMobile}" href="" onclick="deleteSectionClick()"><img class="delete-section-icon" src="icons/add-friend.png" alt=""></a>
        </div>
    </div>
    <h3 class="section-title-positions">${sectionTitlePositions}</h3>
    <div class="players-info">
        <div class="on-loan">
            <div class="on-loan-icon-container"><img class="on-loan-icon" src="icons/starred.png" alt=""></div>
            <p class="on-loan-p">Prestado</p>
        </div>
    </div>
    </section>
    `

    const playerDescriptionTwo = `
    <section class="section-players" id="${sectionTitlePositions.toLowerCase()+"-list"}">
    <div class="player-card">
            <div class="player-card-description">
                <div class="league">
                    <img class="league-photo" src="img/leagues/total-blank.png" alt="">
                </div>
                <div class="club">
                    <img class="club-photo" src="img/clubs/total-blank.png" alt="">
                </div>
                <div class="main-position">
                    <p class="main-position-description"><br></p>
                </div>
                <div class="valored">
                    <p class="valored-description"></p>
                </div>
                <div class="age">
                    <p class="age-description"></p>
                </div>
                <div class="born-year">
                    <p class="born-year-description"></p>
                </div>
                <div class="player-photo-container">
                    <img class="player-photo" src="img/players/blank.png" alt="">
                </div>
                <div class="player-on-loan">
                    <img class="player-on-loan-img" src="icons/total-blank.png" alt="">
                </div>
            </div>
            <div class="player-card-name">
                <a class="player-card-name-link" href="#"><p class="name"><span class="lastname">AGREGAR JUGADOR</span></p></a>
            </div>
            <div class="player-card-options">
            <img src="" alt="">
            </div>
        </div>`

    const newElement = document.createElement('section')
    const newElementID = newElement.id = sectionTitlePositions.toLowerCase().replace(/[" "]/gi, "-")
    newElement.classList.add('example')

    main.appendChild(newElement)
    newElement.innerHTML = playerDescription + playerDescriptionTwo

    arrayOfSections.push(newElementID)
    console.log(arrayOfSections)

    console.log(getComputedStyle(mainBehind).height)
    console.log(getComputedStyle(mainContainerBehind).height)

    changeHeight()

    matches = document.querySelectorAll('.example');

    noSectionsCreatedShow()
}

// Borrar sección

// Problema: Se debería poder elegir que sección eliminar dando en el boton correspondiente de cada sección. 
// La otra opcion es que al usuario le aparezca un modal y ahi elija que sección eliminar, pero sin escribir. 

// La opción con modal y usar condicionales if es la mejor para mi. 

// IMPORTANTE: Usar querySelector para cuando resuelva los problemas de Agregar sección y Borrar sección.

const deleteSectionClick = () => {
    whatIWantToRemove = prompt("Elegí uno de estas opciones: " + arrayOfSections).toLowerCase()
    console.log(whatIWantToRemove)
    const myDiv = document.getElementById(whatIWantToRemove)
    const parent = myDiv.parentNode
    parent.removeChild(myDiv)

    changeHeight()

    matches = document.querySelectorAll('.example');

    noSectionsCreatedShow()
}

// PRINCIPAL TAREA DE SABADO: Hacer lo que va a ir detrás de las secciones, ese background. Lo que se va a mostrar cuando no haya ninguna sección. Etc. 

let mainBehind = document.getElementById('main')
let mainContainerBehind = document.getElementById('main-container')

// if mainBehind mide más de 1255px de height. 
/// mainContainerBehind.height=100%

let mainBehindHeight = parseInt(getComputedStyle(mainBehind).height)
let mainContainerBehindHeight = parseInt(getComputedStyle(mainContainerBehind).height)

const changeHeight = () => {
    mainBehindHeight = parseInt(getComputedStyle(mainBehind).height)
    if (mainBehindHeight >= 1255) {
        mainContainerBehind.classList.add('main-container-changed');
        mainContainerBehind.classList.remove('main-container');
    }
    else {
        mainContainerBehind.classList.remove('main-container-changed');
        mainContainerBehind.classList.add('main-container');
    }
}

addEventListener('resize', changeHeight)

// Lo que haremos ahora, es que sino aparece ningun elemento con la clase example, se le asignará la clase no-sections-created-no-show-it a id no-sections-created

let matches = document.querySelectorAll('.example');

let noSectionsCreatedId = document.getElementById('no-sections-created')

const noSectionsCreatedShow = () => {
    if (matches.length > 0) {
        noSectionsCreatedId.classList.remove('no-sections-created');
        noSectionsCreatedId.classList.add('no-sections-created-no-show-it');
    }
    else {
        noSectionsCreatedId.classList.add('no-sections-created');
        noSectionsCreatedId.classList.remove('no-sections-created-no-show-it');
    }
}

// QUERYSELECTOR ERA LA CLAVE DE LOS BOTONES, PARA NO USAR ONCLICK
var el = document.querySelector(".add-player");
console.log(el)
el.addEventListener('click',() => {
    console.log('funciona tio')
})

let testingTT = document.querySelectorAll('.add-player')

let proba = document.getElementsByClassName('add-player')

// Agregar jugador

/// La idea sería que al tocar el boton aparece el blank. 
/// El blank no se puede borar, solo reemplazar. 
/// Paso 1: Cuando tocas el boton agregar jugador, que se agregue un blank en la section-players.
/// Paso 2: Cuando tocas el blank, que se pueda reemplazar. Esto es fácil dentro de todo. 

// Al crear un jugador
/// Se crea una clase para cada jugador
/// Y se crea una funcion para cada clase
/// Y se le debe aplicar la clase unica al boton. 
/// O sea, mediante un ciclo, se crea una clase para el boton de "ese" jugador 
//          y también se crea una funcion especifica para "esa" clase de "ese jugador".

const titleT = document.querySelector(".add-player")

const holaMundoT = e => console.log(e.target.classList.value)
const holaMundoTe = e => console.log(e.target.classList)

titleT.addEventListener('click', e => {
    holaMundoT(e)
    holaMundoTe(e)
})

// Lo que a mi se me ocurre:
//      Tenemos cada boton con un class personalizado, cada boton tiene class=francoarmani, class=estebanandrada, etc. ESTO LO TENGO QUE CREAR. 
//      Utilizamos lo de "e" para imprimir un string, digamos que damos click en el boton de Armani, hacemos todo para que 
//              imprima en el string francoarmani y eso se guarde en una variable. LINEA 209.
//      Y después hacemos que el elemento que tiene la class francoarmani se elimine. LINEA 231

/* <p id ="remove" style = "color: green; font-size: 24px; font-weight: bold;"> 
 on click remove this section
</p> 

<button onClick = "remove()"> 
   click here 
</button> 
var htmlElement = document.getElementById('remove'); //use getElemeyId or getElementsByClassName According to your need;
    
function remove() { 
  htmlElement.remove();
} */

// OBJETIVO DIA DOMINGO / DIA LUNES
//      Entender lo de e. Básicamente se explica en Los Eventos en el curso de JS DOM. Repasar el video sería una buena idea. 


main.addEventListener('click', (event) => {
    if (event.target.className == 'name') {
        console.log('tocaste un nombre')
        const name = event.target
        const nameContainer = name.parentNode
        const divName = nameContainer.parentNode
        const playerCard = divName.parentNode
        // aparece modal con buscador y vista previa
        // elegimos jugador del modal
        // se aplican cambios al html segun el jugador que elijamos
        modalBg.classList.add('modal-bg-active')
    }
    if (event.target.className == 'lastname') {
        console.log('tocaste un apellido')
        const lastname = event.target
        const name = lastname.parentNode
        const nameContainer = name.parentNode
        const divName = nameContainer.parentNode
        const playerCard = divName.parentNode
        // aparece modal con buscador y vista previa
        // elegimos jugador del modal
        // se aplican cambios al html segun el jugador que elijamos
        modalBg.classList.add('modal-bg-active')
    } 
})

main.addEventListener('click', (event) => {
    if (event.target.className == 'add-player') {
        console.log('tocaste boton agregar jugador')
    }
})

// Función para que aparezca modal de buscador de jugadores

let modalBtn
let modalBg = document.getElementById('modal-bg')
let closeModal = document.querySelector('.close-modal')

/* modalBg.addEventListener('click', (event) => {
    if (event.target.className == 'close-modal') {
        console.log('bien')
    }
}) */

closeModal.addEventListener('click', () => {
    console.log('clase active de modal removida')
    modalBg.classList.remove('modal-bg-active')
})

// Video buscador:

// después cambiar nombre de listVideo
const listVideo = document.getElementById('list')

function setList(group) {
    clearList();
    for (let person of group) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(person.name);
        console.log(text)
        item.appendChild(text);
        listVideo.appendChild(item);
    }
    if (group.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (listVideo.firstChild) {
        listVideo.removeChild(listVideo.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    listVideo.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    }
    // Se podría poner else {return 0}, en vez de ese último else if
}

const searchInput = document.getElementById('search')

searchInput.addEventListener('input', (event) => {
    let value = event.target.value
    if (value && value.trim().length > 2) {
        value = value.trim().toUpperCase();
        setList(playersListSearch.filter(person => {
            return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));
    } else {
        clearList();
    }
})

// Borrar jugador:

main.addEventListener('click', (event) => {
    if (event.target.className == 'player-card-options') {
        const button = event.target
        const parent = button.parentNode
        parent.remove()
    }
})

// SORTABLE

const listSortable = document.getElementById('section-players')

Sortable.create(listSortable, {
    animation: 300,
    chosenClass: "chosen",
    ghostClass: "ghost",
    dragClass: "drag",
    group: {
        name: "players-list"
    },
/*     store: {
        // Para guardar el orden de la lista en memoria. 
        set: (sortable) => {
            const orderOfTheList = sortable.toArray()
            console.log(orderOfTheList)
            localStorage.setItem(sortable.options.group.name, orderOfTheList.join('|'))
        },

        // Obtenemos el orden de la lista al cargar la página
        get: (sortable) => {
            const orderObtained = localStorage.getItem(sortable.options.group.name)
            console.log(orderObtained)
            return orderObtained ? orderObtained.split('|') : []
        }
    }, */
/*     onUnchoose: () => {
        const htmlContents = document.getElementById('main');
        const htmlContentsInner = htmlContents.innerHTML;
        const saving = localStorage.setItem('myBook', JSON.stringify(htmlContentsInner));
        console.log(htmlContentsInner)
    } */
})

const listSortableTwo = document.getElementById('section-players-two')

Sortable.create(listSortableTwo, {
    animation: 300,
    chosenClass: "chosen",
    ghostClass: "ghost",
    dragClass: "drag",
    group: {
        name: "players-list"
    },
/*     store: {
        // Para guardar el orden de la lista en memoria. 
        set: (sortable) => {
            const orderOfTheList = sortable.toArray()
            console.log(orderOfTheList)
            localStorage.setItem(sortable.options.group.name, orderOfTheList.join('|'))
        },

        // Obtenemos el orden de la lista al cargar la página
        get: (sortable) => {
            const orderObtained = localStorage.getItem(sortable.options.group.name)
            console.log(orderObtained)
            return orderObtained ? orderObtained.split('|') : []
        }
    }, */
/*     onUnchoose: () => {
        const htmlContents = document.getElementById('main');
        const htmlContentsInner = htmlContents.innerHTML;
        const saving = localStorage.setItem('myBook', JSON.stringify(htmlContentsInner));
        console.log(htmlContentsInner)
    } */
})



/* body.addEventListener('click', () => {
    const htmlContents = document.getElementById('main');
    const htmlContentsInner = htmlContents.innerHTML;
    const saving = localStorage.setItem('myBook', JSON.stringify(htmlContentsInner));
    console.log(htmlContentsInner)
})

const extracting = localStorage.getItem('myBook')
const extractingTo = JSON.parse(extracting)

const footer = document.getElementById('footer')

footer.addEventListener('click', () => {
    const newElement = document.createElement('section') 
    main.appendChild(newElement)
    newElement.innerHTML = extractingTo
    console.log('pipi')
}) */


// Para mover las secciones.
/* Sortable.create(main, {
    animation: 300,
    chosenClass: "chosen",
    ghostClass: "ghost",
    dragClass: "drag",
    group: {
        name: "main-list"
    },
    store: {
        // Para guardar el orden de la lista en memoria. 
        set: (sortable) => {
            const orderOfTheList = sortable.toArray()
            console.log(orderOfTheList)
            localStorage.setItem(sortable.options.group.name, orderOfTheList.join('|'))
        },

        // Obtenemos el orden de la lista al cargar la página
        get: (sortable) => {
            const orderObtained = localStorage.getItem(sortable.options.group.name)
            console.log(orderObtained)
            return orderObtained ? orderObtained.split('|') : []
        }
    }
}) */