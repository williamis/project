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
    
  // KELLO
    function updateClock() {
      const now = new Date();
      const gmtPlus2Time = new Date(now.getTime() + (2 * 60 * 60 * 1000));
    
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = gmtPlus2Time.toLocaleDateString('en-US', options);
    
      const clockElement = document.getElementById('clock');
      clockElement.textContent = formattedDate;
    
      const seconds = gmtPlus2Time.getSeconds();
      const minutes = gmtPlus2Time.getMinutes();
      const hours = gmtPlus2Time.getHours();
    
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      const timeElement = document.getElementById('time');
      timeElement.textContent = formattedTime;
    }
    
    updateClock();
    
    setInterval(updateClock, 1000);
    
   
  // jatka todo
  const todoPanel = document.getElementById('todoPanel');
const moveTodoButton = document.getElementById('moveTodo');
const addTodoButton = document.getElementById('addTodo');

let isDragging = false;
let offsetX, offsetY;

moveTodoButton.addEventListener('click', toggleDrag);
addTodoButton.addEventListener('click', addTodo);

function addTodo() {
  const todoText = todoInput.value;
  if (todoText.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}

function toggleDrag(event) {
  if (!isDragging) {
    // Aloita liikuttaminen
    isDragging = true;
    moveTodoButton.textContent = 'Lopeta siirtäminen';
    offsetX = event.clientX - todoPanel.getBoundingClientRect().left;
    offsetY = event.clientY - todoPanel.getBoundingClientRect().top;
    startDrag();
  } else {
    // Lopeta liikuttaminen
    isDragging = false;
    moveTodoButton.textContent = 'Siirrä tästä';
  }
}

function startDrag() {
  function dragMove(event) {
    todoPanel.style.left = event.clientX - offsetX + 'px';
    todoPanel.style.top = event.clientY - offsetY + 'px';
  }

  function dragEnd() {
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
  }

  document.addEventListener('mousemove', dragMove);
  document.addEventListener('mouseup', dragEnd);
}

