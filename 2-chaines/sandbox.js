/*
 * Les chaines de caractères
 */

// chaine littérale
console.log('BTS SIO2')
console.log("BTS SIO2")

// Déclaration d'une variable de type chaine
console.clear()
let email = 'test@exemple.fr'
console.log(email)

// Concaténation de chaines
console.clear()
const prenom = 'franck'
const nom = 'lamy'
const identite = prenom + ' ' + nom
console.log(identite)

// Accès à un caractère
console.log(identite[2])

// Longueur d'une chaine
const longueur = identite.length
console.log('Longueur de la chaine : ' + longueur)
console.log('Longueur de la chaine : ' + identite.length)
console.log('Longueur de la chaine : ',identite.length)

// Quelques méthodes
console.clear()
console.log(identite.toUpperCase())
console.log(email.indexOf('@'))
let domaine = email.substring(email.indexOf('@')+1)
//let domaine = email.slice(email.indexOf('@')+1)
console.log(domaine)

// Template string (interpolation)
console.clear()
const titre = 'Cours javascript'
const auteur = 'Jean DUPOND'
const phrase = 'Le cours ' + titre + ' a été ecrit par ' + auteur
console.log(phrase)
const phrase2 = `Le cours ${titre} a été écrit par ${auteur}`
console.log(phrase2)