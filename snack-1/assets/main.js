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
const lightierBike = {
    name: "",
    weight: 100000
}

for(let i = 0; i < runningBike.length; i++){
    console.log(i);
    if (lightierBike[bikeKey] >= runningBike[i][bikeKey]){
        for(let key in runningBike[i]){
            lightierBike[key] = runningBike[i][key]
        }
    }
}

//log lightier bike

console.log(`The lightier running bike is ${lightierBike['name']} with a weight of ${lightierBike['weight']}kg`);
