const tasks_counter = document.getElementById("tasks-counter");
const completed_counter = document.getElementById("completed-counter");

function add_buttonClicked() {
  const tasks_table = document.getElementById("tasks-table");
  const input_text = document.getElementById("input-text");
  const span_tag = document.createElement("span");
  const check_done = document.createElement("input");

  span_tag.setAttribute("id", "span-task");
  check_done.setAttribute("type", "checkbox");
  check_done.setAttribute("id", "checkbox-done");
  check_done.setAttribute("onclick", "checkboxDone(this.parentElement)");

  if (input_text.value == "") {
    alert(`Please enter your task.
This field is required.`);
  } else {
    tasks_table.appendChild(span_tag);
    span_tag.innerText = span_tag.value = input_text.value;

    tasks_counter.innerText = Number(tasks_counter.textContent) + 1;
  }

  input_text.value = "";

  span_tag.appendChild(check_done);
  span_tag.innerHTML +=
    "<i class='fa fa-times' aria-hidden='true' onclick = remove_task(this)></i> <br>";
}

function remove_task(element) {
  element.parentElement.remove();
  tasks_counter.innerText = Number(tasks_counter.textContent) - 1;
}

function remove_completed(element) {
  element.parentElement.remove();
  completed_counter.innerText = Number(completed_counter.textContent) - 1;
}

function checkboxDone(parent) {
  const completed_table = document.getElementById("completed-table");
  const span_tag_completed = document.createElement("span");

  span_tag_completed.setAttribute("id", "span-completed");

  span_tag_completed.innerHTML +=
    parent.value +
    "<i class='fa fa-times' aria-hidden='true' onclick = remove_completed(this)></i> <br>";

  completed_table.appendChild(span_tag_completed);

  tasks_counter.innerText = Number(tasks_counter.textContent) - 1;
  completed_counter.innerText = Number(completed_counter.textContent) + 1;

  parent.remove();
}
