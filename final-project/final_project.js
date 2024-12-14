//Login Form
//  Password must be an input type password √
//  Password must be at least 8 characters long  √
//  Password must contain at least 1 number  √
//  Password must contain at least 1 capital letter √
//  Username and password must NOT be empty √
//  Inform users if the username or password is invalid based on criteria above √
//  They should only be informed for what needs corrected
function validatePassword() {
  const passwordRef = document.getElementById("password");

  let containsNumber = false;
  let containsUppercase = false;

  console.log("Password: ", passwordRef.value);

  for (let i = 0; i < passwordRef.value.length; i++) {
    const currentCharacter = passwordRef.value[i];
    // Is there at least 1 number
    if (isNaN(currentCharacter) === false) {
      containsNumber = true;
    }

    // Is there at least 1 capital letter
    if (
      currentCharacter == currentCharacter.toUpperCase() &&
      isNaN(currentCharacter)
    ) {
      containsUppercase = true;
    }
  }

  const validPassword =
    passwordRef.value.length > 8 && containsNumber && containsUppercase;

  if (validPassword) {
    alert("Password accepted!");
  } else if (passwordRef.value.length < 8) {
    // Alert if the Password is less than 8 characters long.
    alert("Password is too short! Must be 8 characters long.");
  } else if ((containsUppercase = false)) {
    alert("Password must contain at least one capital letter.");
  } else if ((containsNumber = false)) {
    alert("Password must contain at least a number.");
  } else {
    alert(
      "Enter a valid password containing at least 8 characters, a number, and a capital letter."
    );
  }

  console.log(validPassword);
}

const newBtn = document.createElement("button");
newBtn.innerHTML = "Login";
newBtn.onclick = validatePassword;
document.body.appendChild(newBtn);

//Dashboard
function login(form) {
  if (form((validatePassword = true))) {
    $(".login").fadeOut(1000);
    $(".website").fadeIn(1000);

    var user = document.getElementById("userName").value;
    //  Show who is logged in
    document.getElementById("userName").innerHTML = "Welcome " + userName;
  } else {
    alert("Invalid Login");
  }
}
//  Give a button for logging out
$(".logOut").click(function () {
  $(".login").fadeIn(1000);
  $(".website").fadeOut(1000);
});

//  Show all tasks and signify which are marked as complete

//Tasks
//  Allow users to add new tasks to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create a new list item element
    const newTask = document.createElement("li");

    // Apply styles to the new task
    newTask.classList.add("task"); // Add a class for basic styling

    // Create a span for the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Add the task text and buttons to the list item
    newTask.appendChild(taskSpan);
    newTask.appendChild(createEditButton());
    newTask.appendChild(createDeleteButton());

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  }
}
//  Allow users to mark a task as complete

//  Allow users to remove a task from the list
function removeTask() {
  const button = document.querySelector(".button.red");
}
//  Allow users to change the text of the task
//  Allow users to assign an additional property of the task

console.log(addTask);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear input field
  }
});

//Additional Features
//  Allow users to manage options for the additional property
//  Tie tasks to the user signed in
//  Allow users to see only tasks that they have created
