const inputElem = document.querySelector("#note-input");
const colorElems = document.querySelectorAll(".color");
const noteContainerElem = document.querySelector(".note__Container");

const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#remove");

colorElems.forEach(function (item) {
  item.addEventListener("click", function (e) {
    let itemColor = e.target.style.backgroundColor;

    inputElem.style.backgroundColor = itemColor;
  });
});

function getValue(e) {
  let keyCode = e.keyCode;
  let value = e.target.value;

  if (keyCode === 13) {
    addNewNote();
  }
}

function addNewNote() {
  let value = inputElem.value;

  if (value) {
    let newTodo = document.createElement("div");
    newTodo.innerHTML = value;

    let backgroundColor = inputElem.style.backgroundColor;
    newTodo.style.backgroundColor = backgroundColor;
    newTodo.style.padding = "8px";

    noteContainerElem.append(newTodo);
    inputElem.value = "";

    newTodo.addEventListener("click", function (e) {
      e.target.remove();
    });
  } else {
    alert("please enter note");
  }
}

function removeValue() {
  inputElem.value = "";
  inputElem.style.backgroundColor = "white";
}

inputElem.addEventListener("keyup", getValue);
addButton.addEventListener("click", addNewNote);
removeButton.addEventListener("click", removeValue);
