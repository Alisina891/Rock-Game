const Todolist = [{
  name: 'watch TV',
duedate: '2022-3-12'
}];

rendertodolist();

function rendertodolist(){
    let TodolistHTML = '';
   Todolist.forEach((Todoobject,index)=>{
   
    const {name,duedate} = Todoobject;
    const html = `<div>${name}</div>
    <div> ${duedate}</div>
    <div>
    <button class="button-delete js-delete-button">Delete</button></div>`
    ;
    TodolistHTML += html;
   });
    


  document.querySelector('.js-todo-list').
  innerHTML = TodolistHTML;

  document.querySelectorAll('.js-delete-button')
   .forEach((DeletButton,index) => {
    DeletButton.addEventListener('click',()=>{
      Todolist.splice(index, 1);
      rendertodolist();
    });
   });
  
}
 document.querySelector('.js-add-button')
 .addEventListener('click',()=> {
  addTodo();
 })
 

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