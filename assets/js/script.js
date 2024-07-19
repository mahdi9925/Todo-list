const tasks_counter = document.getElementById("tasks-counter");

function add_buttonClicked() {
  const tasks_table = document.getElementById("tasks-table");
  const input_text = document.getElementById("input-text");
  const span_tag = document.createElement("span");
  const check_done = document.createElement("input");

  span_tag.setAttribute("id", "span-task");
  check_done.setAttribute("type", "checkbox");

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
    "<i class='fa fa-times' aria-hidden='true' onclick = remove_task(this)></i>";
}

function remove_task(parentEle) {
  parentEle.parentElement.remove();
  tasks_counter.innerText = Number(tasks_counter.textContent) - 1;
}

// todo -> add action for complete tasks list
// todo -> decrease task counter and increase completed counter when tasks is completed
