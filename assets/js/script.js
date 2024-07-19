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
  check_done.setAttribute("onclick", "checkboxDone(this)");

  if (input_text.value == "") {
    alert(`Please enter your task.
This field is required.`);
  } else {
    tasks_table.appendChild(span_tag);
    span_tag.innerText = input_text.value;

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

function checkboxDone(check_done) {
  const completed_table = document.getElementById("completed-table");
  const span_tag_completed = document.createElement("span");

  span_tag_completed.setAttribute("id", "span-completed");
  check_done.setAttribute("checked", "true");

  span_tag_completed.innerHTML += check_done.parentElement.innerHTML;

  completed_table.appendChild(span_tag_completed);
  const i_tag_completed = document.querySelector("#span-completed i");
  i_tag_completed.setAttribute("onclick", "remove_completed(this)");

  tasks_counter.innerText = Number(tasks_counter.textContent) - 1;
  completed_counter.innerText = Number(completed_counter.textContent) + 1;
  check_done.parentElement.remove();
}

// todo -> add action for complete tasks list
// todo -> decrease task counter and increase completed counter when tasks is completed
