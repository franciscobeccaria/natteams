// Mini base de datos de jugadores

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
    name: 'SERGIO',
    lastname: 'AGÜERO',
    league: "img/leagues/EPL.png",
    leagueText: "Premier League",
    club: "img/clubs/mancity.png",
    clubText: "Manchester City",
    bornYear: 1990,
    positions: 'DEL',
    valored: '40M',
    playerPhoto: "img/players/aguero.png"
}

const playersListSearch = [
    {name: sergioAguero01.name         + " " +      sergioAguero01.lastname,
        team: sergioAguero01.clubText
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