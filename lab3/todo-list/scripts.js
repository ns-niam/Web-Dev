
const input = document.querySelector(".input input");
const addButton = document.querySelector(".input button");
const tasksList = document.querySelector(".tasks ul");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  tasksList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="task">
                <div class="task-left">
                    <div class="checkbox"> 
                        <input type="checkbox" ${
                          task.completed ? "checked" : ""
                        } onchange="toggleTask(${index})"/>
                    </div>
                    <div class="text" style="${
                      task.completed ? "text-decoration: line-through" : ""
                    }">${task.text}</div>
                </div>
                <div class="delete" onclick="deleteTask(${index})">
                    <img class="litter" src="images/litter.png" alt="delete" />
                </div>
            </div>
        `;
    tasksList.appendChild(li);
  });
}

function addTask() {
  const text = input.value.trim();
  if (text) {
    tasks.push({
      text: text,
      completed: false,
    });
    input.value = "";
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

addButton.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

renderTasks();
