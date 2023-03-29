// const listContainer = document.querySelector('[data-lists]')
// const newListForm = document.querySelector('[data-new-list-form]')
// const newListInput = document.querySelector('[data-new-list-input]')

// let lists = []

// newListForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const listName = newListInput.value
//     if (listName === null || listName === '') return
//     const list = createList(listName)
//     newListInput.value = null
//     lists.push(list)
//     render()
// })

// function createList(name) {
//     return {id: Date.now().toString(), name: name}
// }

// function render() {
//     clearElement(listContainer)
//     lists.forEach(function(list) {
//         const item = document.createElement('li')
//         item.classList.add('item')
//         item.innerText = list.name
//         listContainer.appendChild(item)
//     })
// }

// function clearElement(element) {
//     while (element.firstChild) {
//         element.removeChild(element.firstChild)
//     }
// }
// render()

let genero = "M";

if (genero == "M") {
    console.log("Macho");
} else {
    console.log("Femea");
}

// if ternario (condição) ? verdadeiro : falso;
console.log(genero == "M" ? "Macho" : "Femea");