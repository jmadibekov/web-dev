console.log("Hey, I'm JavaScript!");

const addItemBtn = document.getElementById("add-item-btn");
const noItemsText = document.getElementById("no-items-text");
const todoItemsSection = document.getElementById("todo-items");
const inputField = document.getElementById("input-field");

const items = {};

function toggleItem(button) {
  console.log("Toggle the todo item");
  // rootElement -- the main div for this todo item
  rootElement = button.parentElement.parentElement.parentElement;

  itemId = rootElement.parentElement.id;

  if (items[itemId].completed === false) {
    items[itemId].completed = true;

    rootElement.classList.remove("false");
    rootElement.classList.add("completed");

    checkbox = button.childNodes[1];
    checkbox.classList.remove("fa-square");
    checkbox.classList.add("fa-check-square");
  } else {
    items[itemId].completed = false;

    rootElement.classList.add("false");
    rootElement.classList.remove("completed");

    checkbox = button.childNodes[1];
    checkbox.classList.add("fa-square");
    checkbox.classList.remove("fa-check-square");
  }
}

function deleteItem(button) {
  console.log("Delete the todo item");
  // rootElement -- the main div for this todo item
  rootElement = button.parentElement.parentElement.parentElement;

  itemId = rootElement.parentElement.id;
  delete items[itemId];
  rootElement.parentElement.remove();

  if (Object.keys(items).length === 0) {
    noItemsText.style.visibility = "visible";
  }
}

let itemCount = 0;

addItemBtn.onclick = () => {
  console.log("Add Item button was clicked");

  noItemsText.style.visibility = "hidden";

  itemCount++;
  const newItem = {
    id: itemCount,
    name: inputField.value,
    completed: false,
  };
  items[itemCount] = newItem;

  const newTodo = document.createElement("div");
  newTodo.id = itemCount;
  newTodo.innerHTML = `
    <div class="item false container-fluid">
        <div class="row">
            <div class="text-center col-1">
            <button
                aria-label="Mark item as complete"
                type="button"
                class="toggles btn btn-link btn-sm"
                onclick="toggleItem(this)"
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
                onclick="deleteItem(this)"
            >
                <i class="fa fa-trash text-danger"></i>
            </button>
            </div>
        </div>
    </div>
`;

  todoItemsSection.appendChild(newTodo);
};
