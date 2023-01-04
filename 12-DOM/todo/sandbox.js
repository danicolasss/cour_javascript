const todos = document.querySelectorAll(".todo")
const liste = document.querySelector("#liste-todos")

// Ajouter un listener à chaque todo
/*todos.forEach( todo => {
    todo.addEventListener("click", e => {
        //console.log(e.target)
        //e.target.style.textDecoration = 'line-through'
        //e.target.classList.toggle('todo-fait')
        e.target.remove()
    })
})*/

// Ajouter un listener à la liste
// Quand l'événement survient sur la liste, celui-ci va se propager
// à tous les descendants
liste.addEventListener("click" , e => {
    // tester si on clique sur un li
    if (e.target.tagName == "LI") {
        e.target.remove()
    }
})

// Récupérer le formulaire
const form = document.querySelector("#todo-form")
form.addEventListener("submit", e => {
    // Eviter le rafraichissement de la page
    e.preventDefault()
    // Récupérer la valeur saisie dans le formulaire
    const valeurSaisie = form.input.value.trim()

    // Vérifier si la valeur saisie est différente de ''
    if (valeurSaisie != '') {
        // Créer un nouvel élément : de type <li>
        const nouveauTodo = document.createElement("li")
        nouveauTodo.textContent = valeurSaisie
        nouveauTodo.classList.add("todo")

        /*nouveauTodo.addEventListener("click", e => {
            e.target.remove()
        })*/

        // Insérer ce nouvel élément dans la page
        //liste.append(nouveauTodo)
        liste.prepend(nouveauTodo)
        // Remettre à 0 le champs de saisie
        form.input.value = ''
    }
})
