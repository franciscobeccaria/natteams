// Mini base de datos de jugadores

/* var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/predictions/157462");
xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "8e24c1ddadmsh14d300e160f7af5p1e6e9cjsnf29317490fbd");

xhr.send(data);

const apiTest = get("https://api-football-v1.p.rapidapi.com/v2/players/search/{lastname}"); */


const francoArmani01 = {
    name: 'FRANCO',
    lastname: 'ARMANI',
    league: "img/leagues/LPF.png",
    leagueText: "LPF de Argentina",
    club: "img/clubs/river.png",
    clubText: "River Plate",
    bornYear: 1986,
    positions: 'ARQ',
    valored: '6M',
    playerPhoto: "img/players/armani.png"
}

const emilianoMartinez01 = {
    name: 'EMILIANO',
    lastname: 'MARTINEZ',
    league: "img/leagues/EPL.png",
    leagueText: "Premier League",
    club: "img/clubs/villa.png",
    clubText: "Aston Villa",
    bornYear: 1990,
    positions: 'ARQ',
    valored: '18M',
    playerPhoto: "img/players/martinez.png"
}

const sergioAguero01 = {
    name:                       'SERGIO',
    lastname:                   'AGÜERO',
    league:         "img/leagues/EPL.png",
    leagueText:                 "Premier League",
    club:           "img/clubs/mancity.png",
    clubText:                   "Manchester City",
    bornYear:                   1990,
    positions:                  'DEL',
    valored:                    '40M',
    playerPhoto:    "img/players/aguero.png"
}

const playersListSearch = [
    {name: sergioAguero01.name         + " " +      sergioAguero01.lastname,
        team: sergioAguero01.clubText,
        firstName: sergioAguero01.name,
        lastName: sergioAguero01.lastname,
    },
    {name: emilianoMartinez01.name     + " " +      emilianoMartinez01.lastname},
    {name: francoArmani01.name         + " " +      francoArmani01.lastname},
    {name: "ESTEBAN ANDRADA"},
    {name: "JUAN MUSSO"},
    {name: "NICOLAS OTAMENDI"},
    {name: "GERMAN PEZZELLA"},
    {name: "JUAN FOYTH"},
    {name: "RENZO SARAVIA"},
    {name: "GONZALO MONTIEL"},
    {name: "TOMAS ANDRADA"}
]

const jugadores = [
        {firstName:                 'EMILIANO',
        lastName:                   'MARTINEZ',
        name:                       'EMILIANO MARTINEZ',
        nation:         "img/nations/argentina.png",
        league:         "img/leagues/EPL.png",
        leagueText:                 "Premier League",
        leagueNation:   "img/nations/england.png",
        club:           "img/clubs/villa.png",
        clubText:                   "Aston Villa",
        bornYear:                   1990,
        positions:                  'ARQ',
        mainPosition:               'Arquero',
        otherPosition:              'Ninguna',
        valored:                    '40,00 mill. $',
        playerPhoto:    "img/players/martinez.png",
        transfermarkt:  "https://www.transfermarkt.es/franco-armani/profil/spieler/119634",
        sofascore:      "https://www.sofascore.com/es/jugador/franco-armani/221140",},

        {firstName:                 'EMILIANO',
        lastName:                   'MARTINEZ',
        name:                       'EMILIANO MARTINEZ',
        nation:         "img/nations/argentina.png",
        league:         "img/leagues/EPL.png",
        leagueText:                 "Premier League",
        leagueNation:   "img/nations/england.png",
        club:           "img/clubs/villa.png",
        clubText:                   "Aston Villa",
        bornYear:                   1990,
        positions:                  'ARQ',
        mainPosition:               'Arquero',
        otherPosition:              'Ninguna',
        valored:                    '40,00 mill. $',
        playerPhoto:    "img/players/martinez.png",
        transfermarkt:  "https://www.transfermarkt.es/franco-armani/profil/spieler/119634",
        sofascore:      "https://www.sofascore.com/es/jugador/franco-armani/221140",},

        {firstName:                 'FRANCO',
        lastName:                   'ARMANI',
        name:                       'FRANCO ARMANI',
        nation:         "img/nations/argentina.png",
        league:         "img/leagues/LPF.png",
        leagueText:                 "LPF de Argentina",
        leagueNation:   "img/nations/argentina.png",
        club:           "img/clubs/river.png",
        clubText:                   "River Plate",
        bornYear:                   1990,
        positions:                  'DEL',
        mainPosition:               'Delantero centro',
        otherPosition:              'Extremo izquierdo<br>Extremo derecho',
        valored:                    '40,00 mill. $',
        playerPhoto:    "img/players/armani.png",
        transfermarkt:  "https://www.transfermarkt.es/franco-armani/profil/spieler/119634",
        sofascore:      "https://www.sofascore.com/es/jugador/franco-armani/221140",},
        
        {firstName:                 'FRANCO',
        lastName:                   'ARMANI',
        name:                       'FRANCO ARMANI',
        nation:         "img/nations/argentina.png",
        league:         "img/leagues/LPF.png",
        leagueText:                 "LPF de Argentina",
        leagueNation:   "img/nations/argentina.png",
        club:           "img/clubs/river.png",
        clubText:                   "River Plate",
        bornYear:                   1990,
        positions:                  'DEL',
        mainPosition:               'Delantero centro',
        otherPosition:              'Extremo izquierdo<br>Extremo derecho',
        valored:                    '40,00 mill. $',
        playerPhoto:    "img/players/armani.png",
        transfermarkt:  "https://www.transfermarkt.es/franco-armani/profil/spieler/119634",
        sofascore:      "https://www.sofascore.com/es/jugador/franco-armani/221140",},

        {firstName:                 'FRANCO',
        lastName:                   'ARMANI',
        name:                       'FRANCO ARMANI',
        nation:         "img/nations/argentina.png",
        league:         "img/leagues/LPF.png",
        leagueText:                 "LPF de Argentina",
        leagueNation:   "img/nations/argentina.png",
        club:           "img/clubs/river.png",
        clubText:                   "River Plate",
        bornYear:                   1990,
        positions:                  'DEL',
        mainPosition:               'Delantero centro',
        otherPosition:              'Extremo izquierdo<br>Extremo derecho',
        valored:                    '40,00 mill. $',
        playerPhoto:    "img/players/armani.png",
        transfermarkt:  "https://www.transfermarkt.es/franco-armani/profil/spieler/119634",
        sofascore:      "https://www.sofascore.com/es/jugador/franco-armani/221140",},

        {firstName:                 'FRANCO',
        lastName:                   'ARMANI',
        name:                       'FRANCO ARMANI',
        nation:         "img/nations/argentina.png",
        league:         "img/leagues/LPF.png",
        leagueText:                 "LPF de Argentina",
        leagueNation:   "img/nations/argentina.png",
        club:           "img/clubs/river.png",
        clubText:                   "River Plate",
        bornYear:                   1990,
        positions:                  'DEL',
        mainPosition:               'Delantero centro',
        otherPosition:              'Extremo izquierdo<br>Extremo derecho',
        valored:                    '40,00 mill. $',
        playerPhoto:    "img/players/armani.png",
        transfermarkt:  "https://www.transfermarkt.es/franco-armani/profil/spieler/119634",
        sofascore:      "https://www.sofascore.com/es/jugador/franco-armani/221140",},
]

// Base de datos y ciclos dejarlos para más tarde. Y tratar de hacerlo con Firebase. 
// Primero, vamos a trabajar con algunos jugadores y hacer que aparezcan en pantalla, y se impriman en el HTML. 

const teamsListSearch = [
    {team: sergioAguero01.clubText},
    {team: emilianoMartinez01.clubText},
    {team: francoArmani01.clubText}
]

const people = [
    {name: 'DAVID' },
    {name: 'ROCK' },
    {name: 'BROCK' },
]