/*
 * Les dates
 */

// Déclaration d'une date
const maintenant = new Date()
console.log(maintenant)
console.log(typeof maintenant)

// Quelques méthodes
console.clear()
console.log('Année :', maintenant.getFullYear())
console.log('Mois :', maintenant.getMonth())
console.log('N°jour dans le mois :', maintenant.getDate())
console.log('N°jour dans la semaine :', maintenant.getDay())
console.log('Heure :', maintenant.getHours())

// Conversion d'une date en chaine
console.clear()
console.log('Date complète : ', maintenant.toString())
console.log('Date : ', maintenant.toDateString())
console.log('Heure : ', maintenant.toTimeString())
console.log('Date complète : ', maintenant.toLocaleString())
console.log('Date : ', maintenant.toLocaleDateString())
console.log('Heure : ', maintenant.toLocaleTimeString())

// Conversion d'une date en timestamp
console.clear()
const timestamp = maintenant.getTime()
console.log(timestamp)

// Comparaison de dates
console.clear()
//const dateAvant = new Date(2022,6,12,12,0,0)
const dateAvant = new Date('2022-07-12 12:00:00')
console.log(dateAvant)
const difference = maintenant.getTime() - dateAvant.getTime()
console.log(difference)

if (maintenant.getTime() > dateAvant.getTime()) {
    console.log(`${maintenant.toLocaleDateString()} est après ${dateAvant.toLocaleDateString()}`)
} else {
    console.log(`${maintenant.toLocaleDateString()} est avant ${dateAvant.toLocaleDateString()}`)
}

// Conversion d'un timestamp en date
console.clear()
console.log(maintenant.getTime())
const ts = 1669199010465
const now = new Date(ts)
console.log(now)








