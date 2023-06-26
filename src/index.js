document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form")

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = event.target["new-task-description"].value + " "
        
        const li = document.createElement("li")
        li.innerText = taskText

        const button = document.createElement("button")
        button.innerText = "X"
        li.appendChild(button)

        button.addEventListener("click", function(event) {
            event.target.parentNode.remove()
        })

        const taskList = document.getElementById("tasks")
        taskList.appendChild(li)
        
    })

});
