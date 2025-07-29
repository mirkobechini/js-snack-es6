
/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console.

*/

//array of teams
const team = [
    {
        name: "Squadra A",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Squadra B",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Squadra C",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Squadra D",
        points: 0,
        foulsSuffered: 0
    },
    {
        name: "Squadra E",
        points: 0,
        foulsSuffered: 0
    }
]

//random number generator
function randomNumberGenerator() {
    return Math.floor(Math.random() * 101);
}

//setting points and fouls suffered and generation array with name and fouls
//const summary = []
for (let i = 0; i < team.length; i++) {
    team[i]['points'] = randomNumberGenerator() //team[i].points
    team[i]['foulsSuffered'] = randomNumberGenerator() //team[i].foulsSuffered

    /*
    summary[i] = {
        name: team[i]['name'],
        foulsSuffered: team[i]['foulsSuffered']
    }
    console.log(summary[i]);*/
}

const summary = team.map(thisTeam => {
    return {
        name: thisTeam.name,
        foulsSuffered: thisTeam.foulsSuffered
    }
})
console.log(summary);
