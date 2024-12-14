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
//  Show who is logged in
//  Give a button for logging out
//  Show all tasks and signify which are marked as complete

// Logout functionality
logoutButton.addEventListener("click", () => {
  // Perform logout actions here, such as:
  // - Clear user session data
  // - Redirect to login page
  // - Send a logout request to the server

  // Example:
  localStorage.removeItem("userToken"); // Clear user token
  window.location.href = "/login"; // Redirect to login
});

//Tasks
//  Allow users to add new tasks to the list
//  Allow users to mark a task as complete
//  Allow users to remove a task from the list
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
