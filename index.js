// To be secure always use id to manipulate your elements inside the js script. Classes are for CSS :)

const todoInput = document.querySelector('#todo-input')
const errorMessage = document.querySelector('#error-message')
const todoButton = document.querySelector('#todo-button')
const todoList = document.querySelector('#todo-list')
const removeAll = document.querySelector('#remove-all')

// event
todoButton.addEventListener('click', addTodo)
// todoList.addEventListener('click', deleteCheck)
removeAll.addEventListener('click', removeAllTodos)

// functions
function addTodo(event) {
    //now because you have correct path to your js file inside of html both stop and prevent would work without removing the form.
    event.stopImmediatePropagation()
    // event.preventDefault();

    /* What we want to do here?
    1. Read value from input and save it in some variable
    2. Create list item with text saved in point 1 and remove button
    3. Add list item to list 
    4. Cleaning */


    //1 Read and save
    const todoMessage = todoInput.value
    // EXTRA STEP: Wrap it all in if to check if you have anything to add :D
    if (todoMessage) {
        errorMessage.classList.add('hidden')

        //2 Create list item
        //a) create delate btn
        const delBtn = `<span onclick="removeTodo(this)">delete</span>`
        // Now we need to create removeTodo function after we finish adding li.

        //b) create list item template
        const todoLi = `<li onclick="toggleDone(this)">${todoMessage} ${delBtn}</li>`
        // Now we need to create toggle function as well

        //3 Add to list
        todoList.innerHTML += todoLi

        //4 Cleaning
        todoInput.value = ''
    }
    // and if your input was empty your error will be visible: 
    else {
        errorMessage.classList.remove('hidden')
    }

    // Your old code:
    // //create check
    // const check = document.createElement('span')
    // check.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    // check.classList.add('check-icon')
    // doDiv.appendChild(check)

    // //do li
    // const newTodo = document.createElement('li')
    // newTodo.innerText = todoInput.value
    // newTodo.classList.add('delete-btn')
    // deleteButton.name = "delete-btn"
    // doDiv.appendChild('deleteButton')

    // //join list
    // if (todoInput.value === '') {
    //     errorMessage.classList.add('show-error-message')
    // } else {
    //     errorMessage.classList.remove('show-error-message')
    //     todoList.appendChild(doDiv)
    // }

    // // create div
    // const doDiv = document.createElement('div')
    // doDiv.classList.add('todo')

    // //clear input
    // todoInput.value = ''

}

//So we now need extra function to remove one todo
function removeTodo(e) {
    /*
    We have structure like this:
    <li> <--li is a parent of span because span is inside of it.
        bla bla bla
        <span> <--here we click to remove li
            delete
        </span>
    </li>
    */
    e.parentElement.remove()
}

function toggleDone(e) {
    e.classList.toggle('done')
}

// remove all
function removeAllTodos(event) {
    document.querySelector('ul').innerHtml = ""
}

// You do not need it any more :)
// function deleteCheck(event) {
//     const item = event.target
//     const todo = item.parentElement
//     const checkIcon = item.previousSibling
//     const deleteBtn = item.nextSibling

//     //completed
//     if (item.name === 'todo-item') {
//         todo.classList.toggle('completed')
//         checkIcon.classList.toggle('show-check-icon')
//         deleteBtn.classList.toggle('checked-delete-button')
//     }

//     //delete to do
//     if (item.name === 'delete-btn') {
//         const todo = item.parentElement
//         todo.remove()
//     }

// }
