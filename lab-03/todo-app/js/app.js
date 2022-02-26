console.log("Hey, I'm JavaScript!");

const addItemBtn = document.getElementById("add-item-btn");
const noItemsText = document.getElementById("no-items-text");
const todoItemsSection = document.getElementById('todo-items');
const inputField = document.getElementById('input-field')

addItemBtn.onclick = () => {
  console.log("Add Item button was clicked");
  
  noItemsText.style.visibility = "hidden";

  const newTodo = document.createElement("div")
  newTodo.innerHTML = `
    <div class="item false container-fluid">
    <div class="row">
        <div class="text-center col-1">
        <button
            aria-label="Mark item as complete"
            type="button"
            class="toggles btn btn-link btn-sm"
        >
            <i class="far fa-square"></i>
        </button>
        </div>

        <div class="name col-10">${inputField.value}</div>

        <div class="text-center remove col-1">
        <button
            aria-label="Remove Item"
            type="button"
            class="btn btn-link btn-sm"
        >
            <i class="fa fa-trash text-danger"></i>
        </button>
        </div>
    </div>
    </div>
`;

  todoItemsSection.appendChild(newTodo);
};
