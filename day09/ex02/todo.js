var todoArr = [];

document.addEventListener("DOMContentLoaded", function() {
    try {
        todoArr = document.cookie.split("array=")[1].split(";")[0].split(",");
        if(todoArr[0] === '')
            todoArr = [];
    } catch {
        todoArr = [];
    }

    rendering();
});

function newTodo() {
    var text = prompt("What do you have to do?");
    
    if(text !== null && text !== '') {
        todoArr.push(text);
    }

    rendering();
}

function deleteTodo(obj) {
    if(confirm("Are you sure?")) {
        todoArr.splice(obj.dataset.index, 1);
        rendering();
    }
}

function rendering() {
    document.getElementById("ft_list").innerHTML = "<button class=\"ft_list_btn\" onclick=\"newTodo()\">New</button>";
    
    for(var i = todoArr.length - 1; i >= 0; i--) {
        document.getElementById("ft_list").innerHTML += "<div class=\"ft_list_element\" onclick=\"deleteTodo(this)\" data-index=\"" + i + "\">" + todoArr[i] + "</div>";
    }

    document.cookie = "array=" + todoArr + ";";
}