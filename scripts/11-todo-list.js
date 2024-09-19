const Todolist = [];

rendertodolist();

function rendertodolist(){
    let TodolistHTML = '';

    for (let i = 0; i < Todolist.length; i++){
    const Todoobject = Todolist[i];
    //const name = Todoobject.name;
    //const duedate = Todoobject.duedate;
    const {name,duedate} = Todoobject;
    const html = `<div>${name}</div>
    <div> ${duedate}</div>
    <div><button class="button-delete"onclick="
    Todolist.splice(${i}, 1);
    rendertodolist();
    ">Delete</button></div>`
    ;
    TodolistHTML += html;
  }


  document.querySelector('.js-todo-list').
  innerHTML = TodolistHTML;

  
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const inputdate = document.querySelector('.js-date-input');
  const duedate = inputdate.value;


  Todolist.push({
    //name: name,
    //duedate: duedate,
    name,
    duedate
  });
  inputElement.value = '';

  
  rendertodolist();
}
function Enterkey (event){
  if (event.key === 'Enter'){
    addTodo();
  }
}