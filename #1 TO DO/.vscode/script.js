// UI vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ['item1','item2','item3'];

//load Items
loadItems();


// call event listeners
eventListeners();

function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);

  //delete an item
  taskList.addEventListener("click", deleteItem);

  //delete all Items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}


function loadItems(){
    items.forEach(function(item){
        CreateItem(item);
    })
}

function CreateItem(text){
     // create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  //create a
  const a = document.createElement("a");

  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = ' <i class="fas fa-times"></i>';

  // add a to li
  li.appendChild(a);

  //add li to ul
  taskList.appendChild(li);
}



// add new item
function addNewItem(e) {
  if (input.value == "") {
    alert("add new item");
  }

//create item
CreateItem(input.value); 



//clear input(placeholder)
  input.value = "";

  console.log(li);

  e.preventDefault();
}

//delete an item
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.parentElement.remove();
  }

  e.preventDefault();
}

//delete all Items
function deleteAllItems(e) {
  // 1. Yöntem!!!
  if(confirm('Are you sure?')){
      taskList.innerHTML='';
      }

  //2.Yöntem
  // if('click')
  // {
  //     taskList.innerHTML='';
  // }

  //3.Yöntem
//   if (confirm("Are you sure!")) {
//     taskList.childNodes.forEach(function (item) {
//       if (item.nodeType === 1) {
//         item.remove();
//       }
//     });
//   }

  e.preventDefault();
}
