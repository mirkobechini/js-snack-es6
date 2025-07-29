
/*

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/



//create array of object runningBike
const runningBike = [{
    name: "Bianchi",
    weight: 30
},
{
    name: "Rosso",
    weight: 45
},
{
    name: "Black",
    weight: 10
},
{
    name: "Arancio",
    weight: 90
}
]

//find less weight bike
const bikeKey = 'weight'
let lightierBike = runningBike[0]

for (let i = 0; i < runningBike.length; i++) {
    if (lightierBike[bikeKey] >= runningBike[i][bikeKey]) {
        for (let key in runningBike[i]) {
            lightierBike[key] = runningBike[i][key]
        }
    }
    /*
    
    if (lightierBike.weight >= runningBike[i].weight) {
        lightierBike = runningBike[i]
    }

    */
}

//log lightier bike

console.log(`The lightier running bike is ${lightierBike['name']} with a weight of ${lightierBike['weight']}kg`);
