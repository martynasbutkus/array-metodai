const cars = ["BMW", "VW", "Audi"]
cars.forEach(function (index, marke){
    console.log('"'+marke +":", index +'"')
})



const names = ['peTras', 'joNas', 'anTanaS', 'JuoZAS']
names.map((vardai) => {
    const correctNames = vardai.charAt(0).toUpperCase()+vardai.slice(1).toLocaleLowerCase()
    console.log(correctNames)
})



const age = [18, 21, 1, 5, 17, 19,41,22,55]
var filter = age.filter(function(x){
    return x >= 18
})
console.log(filter)



const city = ['Kaunas', 'Vilnius', 'Zarasai', 'Marijampole']
const findk = city.find(miestai => miestai.startsWith("K"))
console.log(findk)
const lowCase = city.some(miestai => miestai.charAt(0).toLowerCase() == miestai.charAt(0))
console.log(lowCase)
const upCase = city.every(miestai => miestai.charAt(0).toUpperCase() == miestai.charAt(0))
console.log(upCase)