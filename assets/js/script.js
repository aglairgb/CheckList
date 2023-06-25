   //Adicionar Nota
   function adicionarNota() {
    let notaInput = document.getElementById('notaInput');
    let nota = notaInput.value;

        if (nota !== '') {
             
        let novoItem = document.createElement('div');
        novoItem.className = 'item';

         novoItem.style.marginTop = '30px';

       let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = nota;

         checkbox.onmouseover = function() {
         this.style.cursor = 'pointer';
      };

        let label = document.createElement('label');
        label.textContent = nota;

        novoItem.appendChild(checkbox);
        novoItem.appendChild(label);

        let checkList = document.getElementById('checkListV.A');
        checkList.appendChild(novoItem);

        notaInput.value = '';
    }
}
// adicionar nota ao clicar "enter"
document.getElementById('notaInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      adicionarNota();
    }
  });

// Adicionar Categoria
