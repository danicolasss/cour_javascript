// Premier div du document
const div = document.querySelector("div")
console.log(div)

const e1 = document.querySelector(".id2")
console.log(e1)

const e2 = document.querySelector("#promo")
console.log(e2)

const e3 = document.querySelector(".id2 p")
console.log(e3)

console.clear()
const e4 = document.getElementById("promo")
console.log(e4)

// Recupérer tous les paragraphes de la page
const paragraphes = document.getElementsByTagName("p")
console.log(paragraphes)
for (const paragraphe of paragraphes) {
    console.log(paragraphe)
}

const paragraphes2 = document.querySelectorAll("p")
paragraphes2.forEach( p => {
    console.log(p)
})

console.clear()
// Contenu d'un élément : innerHtml et textContent
const id2 = document.querySelector(".id2")
console.log(id2.innerHTML)
console.log(id2.textContent)

const promo = document.getElementById("promo")
console.log(promo.innerHTML)
promo.innerHTML = "BTS <strong>SIO2</strong>"
//promo.textContent = "BTS <strong>SIO2</strong>"
console.clear()
//console.log(promo.style)
//promo.style.color = 'green'
//promo.style.fontSize = '30px'
//promo.style.fontWeight = 'bold'
//promo.style.border = '2px solid red'

console.log(promo.classList)
promo.classList.add('texte-promo')
promo.classList.remove('texte-promo')

// Tous les paragraphes qui contiennent "succes"
// seront en vert, ceux qui contiennent "erreur"
// seront en rouge
console.clear()
const paras = document.querySelectorAll("#succes-erreur > p")
paras.forEach( p => {
    if (p.textContent.includes("succes")) {
        p.classList.add('succes')
    } else if (p.textContent.includes("erreur")) {
        p.classList.add('erreur')
    }
})

// Gestion des événements
const boutonClic = document.querySelector("#btn")
boutonClic.addEventListener("click",() => {
    //console.log("Bouton cliqué !")
    promo.classList.add('texte-promo')
})

const boutonBtn2 = document.querySelector("#btn2")
boutonBtn2.addEventListener("click",() => {
    promo.classList.remove('texte-promo')
})

const boutonBtn3 = document.querySelector("#btn3")
boutonBtn3.addEventListener("click",() => {
    promo.classList.toggle('texte-promo')
})

const boutonBtn4 = document.querySelector("#btn4")
boutonBtn4.addEventListener("click",() => {
    if (promo.style.display != 'none') {
        promo.style.display = 'none'
    } else {
        promo.style.display = 'block'
    }
})

const boutonBtn5 = document.querySelector("#btn5")
boutonBtn5.addEventListener("click",(e) => {
    console.log(e)
})

const coord = document.querySelector("#coordonnees")
document.addEventListener("mousemove", (e) => {
    const c = `(${e.pageX},${e.pageY})`
    coord.textContent = c
})






