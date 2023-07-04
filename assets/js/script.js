//Adicionar Nota
function adicionarNota() {
  let notaInput = document.getElementById("notaInput");
  let nota = notaInput.value;

  if (nota !== "") {
    let novoItem = document.createElement("div");
    novoItem.className = "item";

    novoItem.style.marginTop = "30px";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = nota;

    checkbox.onmouseover = function () {
      this.style.cursor = "pointer";
    };

    let label = document.createElement("label");
    label.textContent = nota;

    novoItem.appendChild(checkbox);
    novoItem.appendChild(label);

    let checkList = document.getElementById("checkListV.A");
    checkList.appendChild(novoItem);

    notaInput.value = "";
  }
}
// adicionar nota ao clicar "enter"
document
  .getElementById("notaInput")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      adicionarNota();
    }
  });

// Ocultar button
const toggleButton = document.getElementById("toggleButton");
const menuItems = document.getElementById("menuItems");

toggleButton.addEventListener("click", () => {
  if (toggleButton.textContent === "Faça-me uma visita :)") {
    menuItems.style.display = "block";
    toggleButton.textContent = "Ocultar";
  } else {
    menuItems.style.display = "none";
    toggleButton.textContent = "Faça-me uma visita :)";
  }
});


// edição
function adicionarNota() {
  let notaInput = document.getElementById("notaInput");
  let nota = notaInput.value;

  if (nota !== "") {
    let novoItem = document.createElement("div");
    novoItem.className = "item";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = nota;
    checkbox.onmouseover = function () {
      this.style.cursor = "pointer";
    };

    let label = document.createElement("label");
    label.textContent = nota;
    label.spellcheck = false;

    label.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        let novaNota = this.textContent;
        nota = novaNota;
      }
    });

    let editButton = document.createElement("button");
    editButton.className = "editButton";
    editButton.onclick = function () {
      label.contentEditable = true;
      label.focus();
    };

    // Ícone lápis para edição
    let pencilIcon = document.createElement("img");
    pencilIcon.src = "../img/lapis.png";
    editButton.appendChild(pencilIcon);

    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function () {
      novoItem.remove();
    };

    // Ícone "X" para exclusão
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "../img/X.png";
    deleteButton.appendChild(deleteIcon);

    novoItem.appendChild(checkbox);
    novoItem.appendChild(label);
    novoItem.appendChild(editButton);
    novoItem.appendChild(deleteButton);

    let checkList = document.getElementById("checkListV.A");
    checkList.appendChild(novoItem);

    notaInput.value = "";
  }
}
