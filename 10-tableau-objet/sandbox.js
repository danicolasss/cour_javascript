/*
 * Les tableaux d'objets
 */

// Déclaration
const articles = [
    {titre: 'Article 1', auteur : 'Dupond', likes:30},
    {titre: 'Article 2', auteur : 'Martin', likes:25},
    {titre: 'Article 3', auteur : 'Dupond', likes:50},
    {titre: 'Article 4', auteur : 'Durand', likes:45}
]

// Affichage console
console.log(articles)

// Boucle for-of
for (const article of articles) {
    console.log(`${article.titre} a ${article.likes} likes !`)
}

// Méthode forEach (ES6)
// Version 1
articles.forEach( article =>
    console.log(`${article.titre} a ${article.likes} likes !`)
)

// Version 2
articles.forEach( ({titre,likes}) =>
    console.log(`${titre} a ${likes} likes !`)
)
