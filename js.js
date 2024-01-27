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

  // lskin & kello


let display = document.getElementById('display');
let memo = document.getElementById('memo');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


function clearCalculator() {
    display.value = '';
  }
  
  function clearMemo() {
    memo.value = '';
  }