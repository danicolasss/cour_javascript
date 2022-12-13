const noms = ['Pierre','Jean','Anne','Pauline']
for (let nom of noms) {
    console.log(nom)
}
noms.forEach((nom,index) => console.log(nom,index))

const nomsCommenceParP =[]

for (let nom of noms) {
    if (nom.startsWith("P")){
        nomsCommenceParP.push(nom)
    }
}
console.log(nomsCommenceParP)

const nomD = noms.filter(nom=>nom.startsWith("P"))