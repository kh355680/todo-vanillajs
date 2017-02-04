var todo = {
    title: '',
    description: ''
}

var todos = [{
        title: 'Todo Task',
        description: 'blah blah blah blah blah blah blah blah blah.............',
        status: true
    },
    {
        title: 'Todo Task',
        description: 'blah blah blah blah blah blah blah blah blah.............',
        status: true
    },
    {
        title: 'Todo Task',
        description: 'blah blah blah blah blah blah blah blah blah.............',
        status: true
    }
];

function windowLoadEventHandler() {
    var todoListDiv = document.getElementById('todo-list');

    var todoItem = document.createElement('div');
    var titleSpan = document.createElement('span');
    titleSpan.innerText = 'Title';
    todoItem.appendChild(titleSpan);

    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    todoItem.appendChild(x);

    var todoContent = document.createElement('div');
    var description = document.createElement('span');
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
}