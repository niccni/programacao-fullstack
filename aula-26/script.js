document.addEventListener("DOMContentLoaded", () => {

    //Fazendo conexão com o DOM 

    const addTaskButton = document.getElementById('addTask');
    const taskText = document.getElementById("taskText");
    const taskList = document.getElementById("taskList");

    //Array de tarefas

    const tasks = [];

    //READ

    function renderTasks() {
        taskList.innerHTML = ""
        tasks.forEach((task, index) => {
            const taskItem = createTaskItem(task, index);
            taskList.appendChild(taskItem);
        });
    }

    //CREATE

    function createTaskItem(task, index) {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.text;

        //Creando o botão de editar

        const editButton = createButton('Editar');
        editButton.addEventListener("click", () => {
            editTask(index);
        });
        const deletetButton = createButton('Deletar');
        deletetButton.addEventListener("click", () => {
            deleteTask(index);
        });
        taskItem.appendChild(editButton);
        taskItem.appendChild(deletetButton);

        return taskItem;
    };

    // Creando o botão dinamicamente.

    function createButton(label) {
        const button = document.createElement("button");
        button.textContent = label;

        return button;

    }

    //Update 

    function editTask(index) {
        const newText = prompt('Editar tarefa:', tasks[index].text);

        if (newText !== null) {
            tasks[index].text = newText;
            renderTasks();
        }

    }

    //Deletar

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    addTaskButton.addEventListener('click', () => {
        const taskTextValue = taskText.value;
        if (taskTextValue) {
            tasks.push({ text: taskTextValue });
            taskText.value = "";
            renderTasks();

        }
    })

});