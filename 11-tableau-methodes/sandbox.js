/*
    Les méthodes principales de traitement de tableau
 */

// Déclaration d'un tableau
let comptes = [
    {prenom: 'Jean', nom: 'Dupond', age : 45, premium : true},
    {prenom: 'Pierre', nom: 'Durand', age : 54, premium : false},
    {prenom: 'Anne', nom: 'Martin', age : 25, premium : false},
    {prenom: 'Pauline', nom: 'Sapin', age : 32, premium : true},
]

// ---------------------------------
// FILTRER UN TABLEAU
// ---------------------------------
// Exemple : recupérer tous les comptes premium
const comptesPremium = comptes.filter( ({premium}) => premium)
comptes
    .filter( ({premium}) => premium)
    .forEach( ({prenom,nom}) => console.log(`${prenom} ${nom}`))

// ---------------------------------
// MAPPER (transformer) UN TABLEAU
// ---------------------------------

// Exemple 1 : récupérer l'identité de la personne liée au compte
//             "prenom NOM"
console.clear()
const identites = comptes.map( ({prenom,nom}) =>
    `${prenom} ${nom.toUpperCase()}`)
console.log(identites)

// Exemple 2 : récupérer l'identité de la personne liée au compte
//             sous la forme d'objet {prenom : 'prenom', nom: 'nom}
console.clear()
const identites2 = comptes.map( compte => (
    {
            prenom : compte.prenom,
            nom : compte.nom
    })
)
console.log(identites2)

// Exemple 3
const identitesPremium = comptes
    .filter( compte => compte.premium)
    .map( compte => (
        {
            prenom : compte.prenom,
            nom : compte.nom
        }
    ))
console.log(identitesPremium)

// ---------------------------------
// TRIER UN TABLEAU
// ---------------------------------
let prenoms = ["pierre","anne","jean","pauline"]

// Exemple 1 : tri alphabétique (tri ascendant)
console.clear()
prenoms.sort()
console.log(prenoms)

// Exemple 2 : tri alphabétique (minuscules,majuscules)
prenoms = ["pierre","anne","Jean","pauline"]
prenoms.sort()
console.log("Exemple 2 : ",prenoms)

// Exemple 3 : tri alphabétique (case-insensitive)
prenoms = ["pierre","anne","Jean","pauline"]
prenoms.sort( (a,b) => {
    if ( a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if ( a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
})
console.log("Exemple 3 : ",prenoms)
// Exemple 4 : tri alphabétique (case-insensitive) en utilisant la locale

prenoms = ["pierre","anne","Jean","pauline"]
prenoms.sort( (a,b) => {
    return a.localeCompare(b);
})
console.log("Exemple 4 : ",prenoms)

// Exemple 5 : tri ascendant d'un tableau de numériques
let notes = [14,8,6,17,15];
notes.sort() // Tri par défaut
console.log("Exemple 5 : ",notes)  // PROBLEME !!!!!

// Exemple 6 : tri ascendant d'un tableau de numériques
notes = [14,8,6,17,15];
notes.sort( (a,b) => a-b)
console.log("Exemple 6 : ",notes)

// Exemple 7 : tri descandant d'un tableau de numériques
notes = [14,8,6,17,15];
notes.sort( (a,b) => b-a)
console.log("Exemple 7 : ",notes)
// Exemple 8 : tri descandant d'un tableau de chaines

prenoms = ["pierre","anne","Jean","pauline"]
prenoms.sort( (a,b) => {
    return b.localeCompare(a)
})
console.log("Exemple 8 : ",prenoms)

// Exemple 9 : tri ascendant d'un tableau d'objets
// Tri ascendant sur l'age
comptes = [
    {prenom: 'Jean', nom: 'Dupond', age : 45, premium : true},
    {prenom: 'Pierre', nom: 'Durand', age : 54, premium : false},
    {prenom: 'Anne', nom: 'Martin', age : 25, premium : false},
    {prenom: 'Pauline', nom: 'Sapin', age : 32, premium : true},
]
comptes.sort((a,b) => a.age - b.age)
console.log("Exemple 9 : ",comptes)

// Exemple 10 : Tri ascendant dans un autre tableau
notes = [14,8,6,17,15];
//const notesSorted = notes
//    .slice()
//    .sort((a,b) => a-b)
//console.log(notesSorted)
const notesSorted = [...notes].sort((a,b) => a-b)

//---------------------------------------
// Exercices supplémentaires
//---------------------------------------

// Personne la plus jeune
const personnePlusJeune = [...comptes]
    .sort( (a,b) => a.age - b.age)[0]
console.log("Personne la plus jeune",personnePlusJeune)

// Nombre de comptes premium


// Age de la personne la plus agée (reduce)


// Moyenne des ages (reduce)




