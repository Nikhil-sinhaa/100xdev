const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    // FIX: Don't add an empty task
    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

// Allow pressing Enter to add task
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});