/*
 * Les fonctions
 */

// Déclaration d'une fonction (methode "classique avant ES6/ES2105")
function hello() {
    console.log('Hello BTS SIO2 !')
}
hello()

// Fonction anonyme (à préférer)
const hello2 = function () {
    console.log('Hello BTS SIO2 !')
}
hello2() // Appel de la fonction contenue dans la variable hello2

// Fonction avec paramètres
const hello3 = function (nom) {
    console.log(`Hello ${nom.toUpperCase()}`)
}
hello3("Dupond")
hello3("dupond")
hello3("DUpond")

// Fonction retournant un résultat
const calculerAire = function (rayon) {
    return 3.14 * rayon ** 2
}
const aire = calculerAire(5)
console.log(`Aire = ${aire}`)
console.log(`Aire ! ${calculerAire(5)}`)

// Fonction fléchée (introduit par ES6 : arrow function)
console.clear()
// Une fonction fléchée est une fonction anonyme avec une
// syntaxe particulière
const calculerAire2 = (rayon) => {
    return 3.14 * rayon ** 2
}
console.log(`Aire = ${calculerAire2(5)}`)

// Simplification avec un seul paramètre
const calculerAire3 = rayon => {
    return 3.14 * rayon ** 2
}

// Simplification avec une seule instruction return
const calculerAire4 = rayon => 3.14 * rayon ** 2
console.log(`Aire = ${calculerAire4(5)}`)

// Exemple : fonction permettant de calculer le montant total TTC
// d'un ensemble de produits avec un taux de TVA donné
const calculerMontantTTC = (tabPrix,tva) => {
    let total = 0
    for (const prix of tabPrix) {
        total += prix + prix*tva
    }
    return total
}
console.log(`Le montant est de ${calculerMontantTTC([10,20,30],0.20)}`)