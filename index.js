let add = document.querySelector(".add");
let todos = document.querySelector(".todos");
let search = document.querySelector(".search input");

/* ADD TODO */

const generate = ((todo) => {

  const html = `
    <li class="todo-item">
      <i class="fa fa-trash delete" aria-hidden="true"></i>
      <span>${todo}</span>
    </li>
  `;
  todos.innerHTML += html;

});

add.addEventListener('submit', e => {

  e.preventDefault();
  const todo = add.add.value.trim().toLowerCase();
  if(todo.length) {
    generate(todo);
    add.reset();
  }
  
});

/* DELETE TODO */

todos.addEventListener('click', e => {

  if(e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }

});

/* SEARCH TODOS */

const filterTodos = ((term) => {

  Array.from(todos.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term)
    })
    .forEach((todo) => {todo.classList.add("filtered")
  });

  Array.from(todos.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term)
    })
    .forEach((todo) => {
      todo.classList.remove("filtered")
    });

});

search.addEventListener("submit", (e) => {
  e.preventDefault();
});

search.addEventListener("keyup", () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});
