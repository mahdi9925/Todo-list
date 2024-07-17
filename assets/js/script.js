function add_buttonClicked() {
  const tasks_counter = document.getElementById("tasks-counter");
  const tasks_table = document.getElementById("tasks-table");
  const input_text = document.getElementById("input-text");
  const add_button = document.getElementById("add-button");
  const li_tag = document.createElement("li");

  if (input_text.value == "") {
    alert("Please enter a text");
  } else {
    tasks_table.appendChild(li_tag);
    li_tag.innerText = input_text.value;
    tasks_counter.innerText = Number(tasks_counter.textContent) + 1;
  }
  input_text.value = "";
}
