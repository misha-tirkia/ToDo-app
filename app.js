document.getElementsByClassName('addbtn')[0].addEventListener('click', function() {
    const todoInput = document.querySelector('.input');
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const li = document.createElement('li');
        li.textContent = todoText;

        // წაშლის ღილაკი
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'წაშლა';
        deleteBtn.addEventListener('click', function() {
            li.remove(); // სწორად გამოძახება
        });

        // დასრულებული ღილაკი
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'მორჩა';
        completeBtn.addEventListener('click', function() {
            li.style.color = 'green';
        });

        // დავამატოთ ღილაკები li-ში
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        // ჩავამატოთ todo list-ში
        document.getElementById('todolist').appendChild(li);

        // input გავასუფთაოთ
        todoInput.value = "";
    }
});
