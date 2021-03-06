var vm = this;

var todo = {
    title: '',
    description: ''
}

vm.todos = [];

function windowLoadEventHandler() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var data = JSON.parse(this.responseText);
            vm.todos = data.result;
            localStorage.setItem('todos', JSON.stringify(vm.todos));

            var todoListDiv = document.getElementById('todo-list');
            for (var i = 0; i < vm.todos.length; i++) {

                var todoItem = document.createElement('div');
                var titleSpan = document.createElement('span');
                titleSpan.innerText = vm.todos[i]["title"];
                todoItem.appendChild(titleSpan);

                var x = document.createElement("INPUT");
                x.setAttribute("type", "checkbox");
                todoItem.appendChild(x);

                var todoContent = document.createElement('div');
                var description = document.createElement('span');
                description.innerText = vm.todos[i]["description"];
                todoContent.appendChild(description);

                var operation = document.createElement('span');
                var editBtn = document.createElement("INPUT");
                editBtn.setAttribute("type", "button");
                editBtn.value = 'Edit';
                operation.appendChild(editBtn);

                var deleteBtn = document.createElement("INPUT");
                deleteBtn.setAttribute("type", "button");
                deleteBtn.value = 'Delete';
                operation.appendChild(deleteBtn);

                todoContent.appendChild(operation);
                todoItem.appendChild(todoContent);

                todoListDiv.appendChild(todoItem);

                var hr = document.createElement('hr');
                todoListDiv.appendChild(hr);

            }

        }
    };
    xhttp.open("GET", "src/assets/data.json", true);
    xhttp.send();
}

function test() {
    var newTodo = {};
    newTodo["title"] = document.getElementById('title').value;
    newTodo["description"] = document.getElementById('description').value;

    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    console.log(todos);

    localStorage.setItem('todos', JSON.stringify(todos));

    
    var todoListDiv = document.getElementById('todo-list');

    var todoItem = document.createElement('div');
    var titleSpan = document.createElement('span');
    titleSpan.innerText = document.getElementById('title').value;
    todoItem.appendChild(titleSpan);

    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    todoItem.appendChild(x);

    var todoContent = document.createElement('div');
    var description = document.createElement('span');
    description.innerText = document.getElementById('description').value;
    todoContent.appendChild(description);

    var operation = document.createElement('span');
    var editBtn = document.createElement("INPUT");
    editBtn.setAttribute("type", "button");
    editBtn.value = 'Edit';
    operation.appendChild(editBtn);

    var deleteBtn = document.createElement("INPUT");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.value = 'Delete';
    operation.appendChild(deleteBtn);

    todoContent.appendChild(operation);
    todoItem.appendChild(todoContent);

    todoListDiv.appendChild(todoItem);

    var hr = document.createElement('hr');
    todoListDiv.appendChild(hr);

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';    
}