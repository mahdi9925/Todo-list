function add_buttonClicked() {
  let tasks_counter = document.getElementById("tasks-counter");
  tasks_counter.innerText = Number(tasks_counter.textContent) + 1;
  console.log(tasks_counter.textContent)
  
}
