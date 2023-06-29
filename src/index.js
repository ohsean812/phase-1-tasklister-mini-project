document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form")

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = event.target["new-task-description"].value + " "
        
        const li = document.createElement("li")
        li.innerText = taskText
        li.setAttribute("id", "textContainer")

        const editButton = document.createElement("button")
        editButton.setAttribute("id", "editButton")
        editButton.innerText = "Edit"
        li.appendChild(editButton)

        const button = document.createElement("button")
        button.innerText = "X"
        li.appendChild(button)

        button.addEventListener("click", function(event) {
            event.target.parentNode.remove()
        })

        const taskList = document.getElementById("tasks")
        taskList.appendChild(li)

        const grabEditButton = document.getElementById("editButton")
        grabEditButton.addEventListener("click", function() {
            const textContainer = document.getElementById("textContainer")
            const currentText = textContainer.innerHTML;

            const inputElement = document.createElement("input")
            inputElement.type = "text"
            inputElement.value = currentText

            textContainer.innerHTML = "";
            textContainer.appendChild(inputElement)
        })


        form.reset()
        
    })

});
