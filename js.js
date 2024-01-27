function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    
    if (todoInput.value.trim() !== "") {
      const newTodo = document.createElement('li');
      newTodo.textContent = todoInput.value;
      
      // delete nappi tähä jos haluut
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Poista';
      deleteButton.onclick = function() {
        todoList.removeChild(newTodo);
      };
      
      newTodo.appendChild(deleteButton);
      
      todoList.appendChild(newTodo);
      todoInput.value = "";
    }
  }