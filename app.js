const addForm = document.querySelector('.add')
const todos = document.querySelector('.todos')
const search = document.querySelector('.search input')

const createTodo = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <img src='trash-alt-regular.svg' class="far delete"></img>
</li>`
  todos.innerHTML += html;
}

addForm.addEventListener('submit', e => {
  e.preventDefault()
  const todo = addForm.add.value.trim()
  if(todo.length){
    createTodo(todo)
    addForm.reset()
  }
})


todos.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
})

const filterTodos = term => {
  console.log(term)
  Array.from(todos.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('d-none'))
  
  Array.from(todos.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('d-none'))
}

search.addEventListener('keyup', e => {
  const term = search.value.trim().toLowerCase()
  filterTodos(term)
})