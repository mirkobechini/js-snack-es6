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
const summary = []
for (let i = 0; i < team.length; i++) {
    team[i]['points'] = randomNumberGenerator()
    team[i]['foulsSuffered'] = randomNumberGenerator()
    
    summary[i] = {
        name: team[i]['name'],
        foulsSuffered: team[i]['foulsSuffered']
    }
    console.log(summary[i]);
}