const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task) => {

        const li = document.createElement("li");
        li.className = "task";

        if (task.completed) {
            li.classList.add("completed");
        }


        li.innerHTML = `
            <button class="check-btn"></button>

            <span class="task-text">
                ${task.text}
            </span>

            <button class="delete-btn">🗑️</button>
        `;


        // Complete task
        li.querySelector(".check-btn").addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });


        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });


        taskList.appendChild(li);
    });
    

    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;

    taskCount.textContent =
        `${total} task${total !== 1 ? "s" : ""} • ${completed} completed`;

    emptyMessage.style.display =
        total === 0 ? "block" : "none";
}

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

clearBtn.addEventListener("click", () => {

    if (tasks.length === 0) {
        return;
    }

    const confirmClear = confirm(
        "Are you sure you want to delete all tasks?"
    );

    if (confirmClear) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
});

renderTasks();
