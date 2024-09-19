//My variables
let taskArray = [];
let taskCount = 0;

const addBtn = document.querySelector("#addBtn"); //add button
const inputText = document.querySelector("#inputText"); //user input text
const listItem = document.querySelector("#listItem"); //unordered list
const completed = document.querySelector("#completed"); //tasks completed text
const message = document.querySelector("#message"); //message to user if no text input

addBtn.addEventListener("click", addTask); //eventlistner for the add button.

// My functions

function addTask() {
  const userText = inputText.value.trim();

  if (userText.length == 0) {
    message.innerText = "Please add text to input-field.";
  } else {
    const taskObject = {
      text: userText,
      complete: false,
    };
    //Push object to array
    taskArray.push(taskObject);
    inputText.value = "";
    message.innertext = "";
    addToList(userText);
  }
};

//Function for adding li element to ul.
function addToList(taskItem) {
  const li = document.createElement("li");
  const checkMark = document.createElement("i");
  checkMark.classList.add("fas", "fa-check", "checkmark");

  const itemText = document.createElement("span");
  itemText.innerText = taskItem;

  li.appendChild(checkMark);
  li.appendChild(itemText);

  //Adding delete button to li.
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash");
  deleteButton.appendChild(deleteIcon);
  listItem.appendChild(deleteButton);
  li.appendChild(deleteButton);
  listItem.appendChild(li);

  //Eventlistener from delete button
  deleteButton.addEventListener("click", function(){
    deleteTask(li);
  });

  //eventlistener for checkbox
  checkMark.addEventListener("click", function(){
    taskComplete(li);
  });

  //Update taskcounter
  taskCount++;
  updateTaskCount();
};

//Function for delete task
function deleteTask(li) {
const index = Array.from(listItem.children).indexOf(li);
listItem.removeChild(li);
taskArray.splice(index, 1);
taskCount--;
updateTaskCount();
};


//Function for checking a task as complete
function taskComplete(li){
    if (li.classList.contains("taskCompleted")){
        li.classList.remove("taskCompleted");
        taskCount++;
    } else {
        li.classList.add("taskCompleted");
        taskCount--;
    }
    updateTaskCount();

}
//update task counter
function updateTaskCount() {
  completed.innerText = `remaining tasks: ${taskCount}`;
}
