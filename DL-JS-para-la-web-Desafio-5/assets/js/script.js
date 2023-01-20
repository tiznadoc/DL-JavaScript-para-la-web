array = []

const buttonAdd = document.getElementById("add")
const inputTask = document.getElementById("input-task")
const tasks = document.getElementById("tasks")
const inputTotal = document.getElementById("total")
const inputComplete = document.getElementById("complete")

function updateStatus(){
    var tasksHTML = ""
    if(array.length === 0){
        tasks.innerHTML = ""
        return
    }
    array.forEach((task, index) => {
        tasksHTML += `
        <tr>
            <td>${index}</td>
            <td>${task.description}</td>
            <td><a class="btn btn-danger" onclick="deleteTask(${index})">eliminar</a></td>
        </tr>
        `
        tasks.innerHTML = tasksHTML
        console.log(array)
    });
}

function deleteTask(id){
    array.splice(id, 1)
    updateStatus()
}

function addTask(){
    message = inputTask.value
    array.push ({
        description: message,
        condition: false
    })
    updateStatus()
}

buttonAdd.addEventListener('click',addTask)