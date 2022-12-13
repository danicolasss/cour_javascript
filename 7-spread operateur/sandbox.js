/*
 * Opérateur spread
 */

//******************************************************
// Utilisation avec les tableaux
//******************************************************
console.clear()
const nombres = [12,16,88,66,11]
console.log(nombres)

// Utilisation de l'opérateur spread ...
console.log(...nombres)

// Copie de tableau (shallow copie)
// 1. Array.from
// 2. tab.slice()
const nombresCopie = [...nombres]
console.log(nombres,nombresCopie)
nombresCopie.push(1000)
console.log(nombres,nombresCopie)

// Fusion (concaténation) de tableaux

const pairs = [0,2,4,6]
const impairs = [1,3,5,7]
const nombresPairsImpairs = pairs.concat(impairs)
console.log(nombresPairsImpairs)
const nombresPairsImpairs2 = [...pairs,...impairs]
console.log(nombresPairsImpairs2)

//******************************************************
// Utilisation avec les objets
//******************************************************

const utilisateur = {
    nom: 'dupond',
    age: 30,
    email: 'dupond@exemple.fr',
    ville: 'Besançon'
}

console.log(utilisateur)

// Copie d'objet (shallow copie)
const utilisateur2 = {...utilisateur}
console.log(utilisateur2)

// Copie d'objet avec modification d'un attribut
const utilisateur3 = {...utilisateur, email:'dupond@test.fr'}
console.log(utilisateur3)
const utilisateur4 = {...utilisateur,
    nom : 'Durand',
    email:'durand@test.fr'
}
console.log(utilisateur4)

// Copie d'objet avec ajout d'un nouvel attribut
const utilisateur5 = {...utilisateur, sexe: 'M', age:35}
console.log(utilisateur5)
