/*
 Les callback
 */

const fonctionExterne = (fonctionCallback) => {
    const valeur = 10
    fonctionCallback(valeur)
}

const afficherValeur = valeur => console.log(valeur)

// Appel à la fonction externe en lui passant en argument
// la fonction afficherValeur : fonction de callback
fonctionExterne(afficherValeur)
fonctionExterne( valeur => console.log(valeur))

// Exemple 1 : afficher le contenu d'un tableau
const personnes = ['Pierre','Jean','Anne','Pauline']

// Affichage méthode classique
for (const personne of personnes) {
    console.log(`Hello ${personne}`)
}

// Version "moderne" ES6 : utiliser la méthode forEach (Array)
// Cette méthode permet d'exécuter une fonction de callback
// sur chaque élement du tableau
// Cette fonction de callback prend au moins un argument : élément courant
// Syntaxe : tableau.forEach(callback)

personnes.forEach( personne => console.log(`Hello ${personne}`))

// Exemple 2
console.clear()
const notes = [10,12,9,14,17]

notes.forEach( note => console.log(note))

// Récupérer dans un tableau toutes les notes > 10
console.clear()

const notesSup10 = []
for (const note of notes) {
    if (note >= 10) {
        notesSup10.push(note)
    }
}
notesSup10.forEach( note => console.log(note))

// version "moderne" ES6 : methode filter

notes.filter( note => note > 10)
     .forEach( note => console.log(note))

// Récupérer la note maximale
console.clear()
let max = 0

for (const note of notes) {
    if (note > max) {
        max= note
    }
}

console.log(max)

// version "moderne" ES6 : methode reduce
const noteMax = notes.reduce( (max,note) => Math.max(max,note),0)
console.log(noteMax)

// Somme des notes
const sommeNotes = notes.reduce( (sum,note) => sum+note,0)
console.log(sommeNotes)

const moyenne = notes.reduce( (sum,note) => sum+note,0) / notes.length