 function handleKey(event){
                if(event.key == 'Enter'){
                const input = document.getElementById('todo-input');
                const text = input.value.trim();
                if(text==""){
                    alert("Vui long nhap cong viec!");
                    return;
                };
                const li = document.createElement('li');
                li.textContent = text;
                li.onclick = () => li.classList.toggle('done');
                li.ondblclick = function () {
                     editTodo(li);
               };
               li.addEventListener("contextmenu", function (e) {
                    e.preventDefault();
                    if (confirm("Ban co muon xoa cong viec nay?")) {
                        li.remove();
                    }

               });
                document.getElementById('todo-list').appendChild(li);
                input.value = '';
            }
        }
        function editTodo(li) {
            const newText = prompt("Chinh sua cong viec:", li.textContent);
            if (newText !== null && newText.trim() !== "") {
                li.textContent = newText.trim();
                li.onclick = () => li.classList.toggle('done');
                li.ondblclick = function () {
                     editTodo(li);
               };
            }
        }