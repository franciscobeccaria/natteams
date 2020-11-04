// INDICE
    // Variables globales
    // Variables globales para search-modal
    // Agregar sección
    // Borrar sección
    // Cambiar funcionamiento de main, conforme a la cantidad de secciones creadas.  
    // Mostrar diseño para cuando no hay ninguna sección creada. 
    // Agregar jugador
        // Mostrar search-modal
        // Cerrar search-modal con tecla Esc
        // Detectar en que jugador hice click e insertarlo en sección seleccionada
        // Cerrar search-modal con click en cruz
        // Función para crear la lista de jugadores encontrados (setList)
        // clearList
        // setNoResults
        // getRelevancy
        //  Función del input del search-modal
            // filtrado por nombre (le entrega el parametro a setList, para que este pueda crear la lista)
            // ordenado por relevancia (mediante getRelevancy, que recibe parametros)
            // sino hay nada escrito en el input lleva a cabo clearList()
        // Borrar jugador
        // SortableJS

// Variables globales

const body = document.getElementById('body')
const main = document.getElementById('main')

const arrayOfSections = ['arqueros', ]

// Variables globales para el modal

let modalBtn
let modalBg = document.getElementById('modal-bg')
let closeModal = document.querySelector('.close-modal')

// Agregar sección

const addSectionClick = () => {
    console.log('Agregaste una sección')

    // Pregunta nombre de la sección y lo guarda en variable
        // También posteriormente, mediante innerHTML, la variable se inserta dentro del h3, titulo de la sección, ejemplo: "MEDIOCAMPISTAS"
    let sectionTitlePositions = prompt("Titulo de la Sección (Ejemplo: Arqueros)").toUpperCase()

    // ESTO SERÁ BORRADO, LUEGO DE MEJORAR LA FUNCIÓN DE BORRAR SECCIÓN
    // Agarra el nombre de la sección
        // Lo pasa a minuscula
        // Reemplaza los espacios por guiones
        // Le agrega -delete y -delete-to-mobile
        // Luego, mediante el innerHTML, se le agrega estas variables como id, al boton delete-section
            // Ya que después la forma de eliminar las secciones es poniendo en un prompt el nombre de la sección
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
                <a class="player-card-name-link" href="#"><p class="add-name"><span class="add-lastname">AGREGAR JUGADOR</span></p></a>
            </div>
            <div class="player-card-options">
            <img src="" alt="">
            </div>
        </div>`

    // Se crea elemento section en el DOM
        // Se le agrega un id al elemento section, ejemplo: mediocampistas
        // Se le agrega la clase example, más adelante será explicado su cometido
    const newElement = document.createElement('section')
    const newElementID = newElement.id = sectionTitlePositions.toLowerCase().replace(/[" "]/gi, "-")
    newElement.classList.add('example')

    // Se agrega el elemento section mediante appendChild al main, por lo tanto aparecerá abajo de todas las secciones creadas. 
        // Al elemento section, se le agrega el HTML mediante innerHTML
    main.appendChild(newElement)
    newElement.innerHTML = playerDescription + playerDescriptionTwo

    // Se agrega la sección creada a un array de Secciones. 
        // Posteriormente será utilizado para la función de borrar sección. 
        // Para la función de borrar sección quedara inservible, pero se puede usar para la función de sortable.     
    arrayOfSections.push(newElementID)
    console.log(arrayOfSections)

    // Imprime en consola el alto de todas las secciones creadas sumadas. 
    // Imprime en consola el alto del contenedor de las secciones. 
        // El contenedor de las secciones tiene un alto predeterminado de 1254px, si todas las secciones sumadas dan más de 1254 px, entonces el contenedor deja de tener un alto predeterminado y se ajusta al alto de todas las secciones sumadas. 
    console.log(getComputedStyle(mainBehind).height)
    console.log(getComputedStyle(mainContainerBehind).height)
    // Lleva a cabo la función explicada anteriormente. 
        // Cada vez que se agrega una función se ejecuta. 
        // Si la sumatoria de las secciones creadas es mayor de 1254px, le saca una class y le agrega otra. 
    changeHeight()

    // matches podría ser sectionsCreated
    // matches = todas las secciones creadas
    // Esto lo que hace es actualizar matches. 
    // Luego una función se ocupa, de que si no hay matches, agrega una class que hace que se muestre una boton para Agregar sección, cuando no hay ninguna sección en el sitio.
    matches = document.querySelectorAll('.example');
    // Se lleva a cabo la función explicada anteriormente. Sino hay matches, se agrega una class y se muestra un boton para Agregar sección. 
    noSectionsCreatedShow()
}

// Borrar sección

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
// Borrar sección lo haría desde cero. La borraría todo. Pero es importante que en la nueva sección pongamos changeHeight, matches y noSectionsCreatedShow. 

// Cambiar funcionamiento de main, conforme a la cantidad de secciones creadas.  

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

// Mostrar diseño para cuando no hay ninguna sección creada. 

// Lo que haremos ahora, es que sino aparece ningun elemento con la clase example, se le asignará la clase no-sections-created-no-show-it a id no-sections-created
// Elemento con la clase example = seccion creada
// Se le asignará una clase para que se muestre un diseño que solo debe mostrarse cuando no haya ninguna seccion creda. 

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

// Acá habían cosas sobre querySelector y querySelectorAll. Si en algun momento hago repaso de qué aprendí escribiendo este proyecto, agregarlos. 

// Agregar jugador 

let addPlayerButton
let addButtonsContainer
let sectionTitle
let sectionPlayers
let playerSelected

const searcher = document.getElementById('search')

// Cuando hago click en un elemento que tenga la class add-player pasa:
    // Se asigna valor a las variables para luego usarlas en la inyección del jugador a la sección elegida. 
    // Se muestra el search-modal
    // Se le hace focus al input del search-modal

main.addEventListener('click', (event) => {
    if (event.target.className == 'add-player') {
        console.log('tocaste boton agregar jugador')
        addPlayerButton = event.target
        addButtonsContainer = addPlayerButton.parentNode
        sectionTitle = addButtonsContainer.parentNode
        sectionPlayers = sectionTitle.nextSibling.nextSibling
        modalBg.classList.add('modal-bg-active')
        searcher.focus()
    }
})

// Función para que cuando el search-modal está visible, apretando la tecla Escape se ponga en modo no visible. 
    // Además hace otras cosas. Lo cierra. Pone la lista vacia. Borra lo que había escrito en input. 

document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        modalBg.classList.remove('modal-bg-active')
        clearList()
        searcher.value = ""
    }
});

// Detectar en qué jugador hice el click
// Insertar jugador seleccionado en la sección que hicimos click

// Problema: Hago click en un list-group-item y dentro tiene imagenes y otros div, por lo tanto, tenía que crear una función diferente para cada div y cada elemento dentro de list-group-item.
// Solución: Creamos list-group-item-inside-container, un div con z index superior, para cada vez que hagamos click sea sobre ese div. 

modalBg.addEventListener('click', (event) => {
    const searcher = document.getElementById('search')
    if (event.target.className == 'list-group-item-inside-container') {
        console.log('tocaste un jugador')
        //console.log(event.target.parentNode.childNodes)
        playerSelected = event.target.parentNode
        playerSelected.classList.remove('player-card-in-search-modal')
        playerSelected.classList.add('player-card')
        const divToRemoveClassNoneOne = playerSelected.childNodes[5]
        const divToRemoveClassNoneTwo = playerSelected.childNodes[7]
        const divToRemove = playerSelected.childNodes[9]
        divToRemoveClassNoneOne.classList.remove('none')
        divToRemoveClassNoneTwo.classList.remove('none')
        divToRemove.remove()
        sectionPlayers.appendChild(playerSelected)
        modalBg.classList.remove('modal-bg-active')
        clearList()
        searcher.value = ""
    }
})

// Función para cerrar el modal haciendo click en la cruz. 

closeModal.addEventListener('click', () => {
    console.log('clase active de modal removida')
    modalBg.classList.remove('modal-bg-active')
})

// Video buscador:
// Funciones que trabajan en conjunto para hacer funcional el buscador. 

// después cambiar nombre de listVideo
const listVideo = document.getElementById('list')

// Acá antes, estaba la función de setList creada por el que hizo el video en el que aprendí a crear un buscador. 

// Función para crear la lista de jugadores encontrados 

function setList(group) {
    clearList();
    for (let person of group) {
        // Creando cada elemento HTML
        const item = document.createElement('div');
        // Acá estaba la creación de cada elemento HTML mediante createElement, pero decidi hacerlo con backticks. 
        // Acá estaba todas las clases que añadimos con classList.add a cada elemento HTML, agregado anteriormente.
        // Acá estaba la creación del contenido. Mediante document.createTextNode, agarrabamos un dato desde person de un array y lo asignabamos a una variable.  
        // Acá estaba la inserción de contenido a cada elemento HTML mediante appendChild o elemento.src + wholeText, para resolver los problemas de las imagenes. 
        // Acá estaba la inserción de cada elemento HTML dentro de otro, para construir código html usando appendChild y otras. 

        // NUEVA VERSIÓN: Creando contenido para luego meterlo dentro de cada elemento HTML 
        const text = document.createTextNode(person.name);
        const newLeagueImage = document.createTextNode(person.league).wholeText;
        const newClubImage = document.createTextNode(person.club).wholeText;
        const newPlayerImage = document.createTextNode(person.playerPhoto).wholeText;
        const newPlayerFirstName = document.createTextNode(person.firstName).wholeText;
        const newPlayerLastName = document.createTextNode(person.lastName).wholeText;
        const newNationImage = document.createTextNode(person.nation).wholeText;
        const newLeagueText = document.createTextNode(person.leagueText).wholeText;
        const newLeagueNationImage = document.createTextNode(person.leagueNation).wholeText;
        const newClubText = document.createTextNode(person.clubText).wholeText;
        const newPlayerBornYear = document.createTextNode(person.bornYear).wholeText;
        const newPlayerPosition = document.createTextNode(person.positions).wholeText;
        const newPlayerMainPosition = document.createTextNode(person.mainPosition).wholeText;
        const newPlayerOtherPosition = document.createTextNode(person.otherPosition).wholeText;
        const newPlayerValored = document.createTextNode(person.valored).wholeText;
        const newPlayerTransfermarkt = document.createTextNode(person.transfermarkt).wholeText;
        const newPlayerSofascore = document.createTextNode(person.sofascore).wholeText;

        // Usando backticks para crear el HTML y usando dentro de este HTML variables JS:
        const playerCardToModal = `

        <div class="player-card-in-search-modal">
                        <div class="player-card-description">
                            <div class="player-card-info">
                                <div class="main-position">
                                    <p class="main-position-description">${newPlayerPosition}</p>
                                </div>
                                <div class="nation">
                                    <img class="nation-photo" src="${newNationImage}" alt="">
                                </div>
                                <div class="club">
                                    <img class="club-photo" src="${newClubImage}" alt="">
                                </div>
                            </div>
                            <div class="player-photo-container">
                                <img class="player-photo" src="${newPlayerImage}" alt="">
                            </div>
                        </div>
                        <div class="player-card-name">
                            <a class="player-card-name-link" href="#"><p class="name">${newPlayerFirstName} <span class="lastname">${newPlayerLastName}</span></p></a>
                        </div>
                        <div class="player-card-options ignore-elements none"></div>
                        <div class="player-card-modal ignore-elements none">
                            <div class="modal-photo">
                                <img class="modal-photo-content" src="img/dynamic players/virgil-van-dijk-liverpool-fc-1597837549-45582.jpg" alt="">
                            </div>
                            <div class="modal-description-container">
                                <div class="modal-main-position">
                                    <p class="modal-normal"><span class="modal-bold">Posición principal:</span><br>${newPlayerMainPosition}</p>
                                </div>
                                <div class="modal-other-position">
                                    <p class="modal-normal"><span class="modal-bold">Posición secundaria:</span><br>${newPlayerOtherPosition}</p>
                                </div>
                                <div class="modal-age">
                                    <p class="modal-normal"><span class="modal-bold">Nacimiento / Edad:</span><br>${newPlayerBornYear} <span>(29)</span></p>
                                </div>
                                <div class="modal-league-description">
                                    <p class="modal-normal">${newClubText}<br>${newLeagueText}</p>
                                </div>
                                <div class="modal-links">
                                    <a class="modal-normal" href="${newPlayerTransfermarkt}" target="_blank">Transfermarkt <span class="link-icon"><img src="icons/foreign.png" alt=""></span></a>
                                    <a class="modal-normal" href="${newPlayerSofascore}" target="_blank">SofaScore <span class="link-icon"><img src="icons/foreign.png" alt=""></span></a>
                                </div>
                                <div class="modal-valored">
                                    <p class="modal-normal"><span class="modal-bold">Valor de mercado:<br>${newPlayerValored}</span></p>
                                </div>
                            </div>
                            <div class="modal-description-info">
                                <div class="modal-on-loan">
                                    <p class="modal-on-loan-text">PRESTADO</p>
                                </div>
                                <div class="modal-league-icon">
                                    <img class="modal-league-icon-photo" src="${newLeagueImage}" alt="">
                                </div>
                                <div class="modal-league-nation">
                                    <img class="modal-league-nation-photo" src="${newLeagueNationImage}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="list-group-item-inside-container"></div>

                    </div>`

        // Insertando HTML backticks dentro de const item
        item.innerHTML = playerCardToModal

        // Insertando todos los resultados de la busqueda. 
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
        setList(jugadores.filter(person => {
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
    if (event.target.className == 'player-card-options ignore-elements') {
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
    filter: ".ignore-elements",
    onChoose: () => {
        const cbox = document.querySelectorAll(".player-card-modal");

        for (let i = 0; i < cbox.length; i++) {
            //console.log(cbox[i])
            cbox[i].classList.add('none-class')
        };
    },
    onUnchoose: () => {
        const cbox = document.querySelectorAll(".player-card-modal");

        for (let i = 0; i < cbox.length; i++) {
            //console.log(cbox[i])
            //cbox[i].style.remove(opacity)
            cbox[i].classList.remove('none-class')
        };
    },
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
    filter: ".ignore-elements",
    onChoose: () => {
        const cbox = document.querySelectorAll(".player-card-modal");

        for (let i = 0; i < cbox.length; i++) {
            //console.log(cbox[i])
            cbox[i].classList.add('none-class')
        };
    },
    onUnchoose: () => {
        const cbox = document.querySelectorAll(".player-card-modal");

        for (let i = 0; i < cbox.length; i++) {
            //console.log(cbox[i])
            //cbox[i].style.remove(opacity)
            cbox[i].classList.remove('none-class')
        };
    },
    group: {
        name: "players-list"
    },
})

const culos = document.querySelectorAll('.section-players')

Sortable.create(culos[0], {
    animation: 300,
    chosenClass: "chosen",
    ghostClass: "ghost",
    dragClass: "drag",
    filter: ".ignore-elements",
    onChoose: () => {
        const cbox = document.querySelectorAll(".player-card-modal");

        for (let i = 0; i < cbox.length; i++) {
            //console.log(cbox[i])
            cbox[i].classList.add('none-class')
        };
    },
    onUnchoose: () => {
        const cbox = document.querySelectorAll(".player-card-modal");

        for (let i = 0; i < cbox.length; i++) {
            //console.log(cbox[i])
            //cbox[i].style.remove(opacity)
            cbox[i].classList.remove('none-class')
        };
    },
    group: {
        name: "players-list"
    },
})

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