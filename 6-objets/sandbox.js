/*
 * Les objets
 */

// Création d'un objet littéral
const utilisateur = {
    nom : 'Dupond',
    age : 30,
    email : 'dupond@exemple.fr',
    ville : 'Besançon'
}
console.log(utilisateur)

// Accès aux attributs (propriétés) d'un objet
console.log(utilisateur.nom) // notation à préférée !
console.log(utilisateur['nom'])

// Modification d'un objet
utilisateur.age = 31
console.log(utilisateur)
utilisateur['age'] = 32
console.log(utilisateur)

// Copie d'objets (copie par référence)
let utilisateurCopie = utilisateur
utilisateurCopie.email = 'dupond@test.fr'
console.log(utilisateur,utilisateurCopie)
// Il faudrait faire une shallow copie : plus tard !

// Création d'un objet complexe
const utilisateur2 = {
    nom : 'Dupond',
    prenoms : ['Pierre','Jean','Albert'],
    email : 'dupond@exemple.fr',
    adresse : {
        rue : '20 rue de la gare',
        codePostal : '25000',
        ville : 'Besançon'
    }
}
// Afficher la ville
console.log(utilisateur2.adresse.ville)
// Afficher les prenoms
console.log(utilisateur2.prenoms.join(','))
// Afficher le prénom principal
console.log(utilisateur2.prenoms[0].toUpperCase())



