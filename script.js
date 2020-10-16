// Agregar sección

const addSection = document.getElementById('add-section')
const addSectionToMobile = document.getElementById('add-section-to-mobile')

const main = document.getElementById('main')

// PROXIMA TAREA: CAMBIAR EL inner html a textContent y etc. Así podemos usar un id creado por nosotros. Porque por innerHTML se ve que no se puede. 

addSection.addEventListener('click', () => {
    console.log('Hola mundo')

    let sectionTitlePositions = prompt("Titulo de la Sección (Ejemplo: Arqueros)").toUpperCase();

    const playerDescription =`
    <section class="section-title">
    <div class="add-buttons">
        <button class="add-section" id="add-section">Agregar sección</button>
        <button class="add-player">Agregar jugador</button>
    </div>
    <div class="add-buttons-to-mobile">
        <div class="add-section-to-mobile">
            <a class="add-section-icon-container" id="add-section-to-mobile" href="#"><img class="add-section-icon" src="icons/add.png" alt=""></a>
        </div>
        <div class="add-player-to-mobile">
            <a class="add-player-icon-container" href="#"><img class="add-player-icon" src="icons/add-friend.png" alt=""></a>
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

    const sectionTitle = document.createElement('section')
    sectionTitle.classList.add('section-title')
    document.body.appendChild


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
    const newElementTwo = document.createElement('section')
    main.appendChild(newElement)
    newElement.innerHTML = playerDescription
    main.appendChild(newElementTwo)
    newElementTwo.innerHTML = playerDescriptionTwo
})

addSectionToMobile.addEventListener('click', () => {
    console.log('Hola mundo')

    let sectionTitlePositions = prompt("Titulo de la Sección (Ejemplo: Arqueros)").toUpperCase();

    const playerDescription =`
    <section class="section-title">
    <div class="add-buttons">
        <button class="add-section" id="add-section">Agregar sección</button>
        <button class="add-player">Agregar jugador</button>
    </div>
    <div class="add-buttons-to-mobile">
        <div class="add-section-to-mobile">
            <a class="add-section-icon-container" id="add-section-to-mobile" href="#"><img class="add-section-icon" src="icons/add.png" alt=""></a>
        </div>
        <div class="add-player-to-mobile">
            <a class="add-player-icon-container" href="#"><img class="add-player-icon" src="icons/add-friend.png" alt=""></a>
        </div>
    </div>
    <h3 class="section-title-positions">${sectionTitlePositions}</h3>
    <div class="players-info">
        <div class="on-loan">
            <div class="on-loan-icon-container"><img class="on-loan-icon" src="icons/starred.png" alt=""></div>
            <p class="on-loan-p">Prestado</p>
        </div>
    </div>
    `

    const playerDescriptionTwo = `</section>
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

    const main = document.getElementById('main')
    const newElement = document.createElement('section')
    const newElementTwo = document.createElement('section')
    main.appendChild(newElement)
    newElement.innerHTML = playerDescription
    main.appendChild(newElementTwo)
    newElementTwo.innerHTML = playerDescriptionTwo
})

// Agregar jugador

/// La idea sería que al tocar el boton aparece el blank. 
/// El blank no se puede borar, solo reemplazar. 
/// Paso 1: Cuando tocas el boton agregar jugador, que se agregue un blank en la section-players.
/// Paso 2: Cuando tocas el blank, que se pueda reemplazar. Esto es fácil dentro de todo. 

