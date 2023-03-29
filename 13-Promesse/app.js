// cree une prommesse
const reussirBTS = () => {
  return new Promise((resolve, reject)=>{
      //passe le  bts et obtenir le reulstat

      setTimeout(()=>{
          let BTS = true

          if (BTS){
              resolve("BTS OBTENU")
          }else {
              reject("BTS NON OBTENU")
          }
      },5000)

  })
}
reussirBTS()
    .then(resultat => {
        console.log(resultat)
        console.log("Félicitations tu as obtenue le BTS ")
    })
    .catch(resultat=>{
        console.log(resultat)
        console.log("Déception, tu n'as pas obtenue ton BTS ")
    })