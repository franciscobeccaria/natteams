// Próximas funciones
// Borrar una sección. 
// Agregar jugador. 
// Borrar jugador.
// Que se pueda agregar una sección encima o debajo. 
// Que blank-player no se pueda borrar, asi nunca va haber una sección vacia. 
// Crear página que se muestre cuando hay 0 secciones. 
// Resolver el espacio vacio entre secciones y footer. 
//// Probablemente lo mejor es que haya un fondo piola. 
// Crear footer. 
// Mover jugadores: cambiar orden dentro de la sección. Y mover a otra sección. 
// Otra cosa que me faltó, es que no se pueda repetir el nombre de las secciones, no puede haber dos arqueros y arqueros.

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
    <section class="section-players">
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


// Agregar jugador

/// La idea sería que al tocar el boton aparece el blank. 
/// El blank no se puede borar, solo reemplazar. 
/// Paso 1: Cuando tocas el boton agregar jugador, que se agregue un blank en la section-players.
/// Paso 2: Cuando tocas el blank, que se pueda reemplazar. Esto es fácil dentro de todo. 

