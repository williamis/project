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
  
  let moveTodoActive = false;
  
  function toggleMoveTodo() {
    moveTodoActive = !moveTodoActive;
    const moveTodoButton = document.getElementById('moveTodo');
    const todoPanel = document.getElementById('todoPanel');
  
    if (moveTodoActive) {
      moveTodoButton.classList.add('active');
      todoPanel.style.cursor = 'move';
    } else {
      moveTodoButton.classList.remove('active');
      todoPanel.style.cursor = 'default';
    }
  }
  
  todoPanel.addEventListener('dragstart', (e) => {
    if (!moveTodoActive) {
      e.dataTransfer.setDragImage(document.createElement('div'), 0, 0);
      offsetX = e.clientX - todoPanel.getBoundingClientRect().left;
      offsetY = e.clientY - todoPanel.getBoundingClientRect().top;
    }
  });
  
  document.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  
  document.addEventListener('drop', (e) => {
    if (!moveTodoActive && offsetX !== undefined && offsetY !== undefined) {
      todoPanel.style.left = `${e.clientX - offsetX}px`;
      todoPanel.style.top = `${e.clientY - offsetY}px`;
    }
  });