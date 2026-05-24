document.getElementById("internshipForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let domain = document.getElementById("domain").value;
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");
    error.innerHTML = "";
    
    if(name === ""){
        error.innerHTML = "Please enter your full name";
        return;
    }

    if(email === ""){
        error.innerHTML = "Please enter your email address";
        return;
    }

    if(phone === ""){
        error.innerHTML = "Please enter your phone number";
        return;
    }

    if(domain === ""){
        error.innerHTML = "Please select internship domain";
        return;
    }

    if(message === ""){
        error.innerHTML = "Please enter your message";
        return;
    }


    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        error.innerHTML = "Please enter a valid email address";
        return;
    }

    alert("Internship Application Submitted Successfully!");

    document.getElementById("internshipForm").reset();

});
function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    if(taskValue === ""){
        alert("Please enter a preparation task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = `
        ${taskValue}
        <button class="delete-btn" onclick="removeTask(this)">
            Delete
        </button>
    `;
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}