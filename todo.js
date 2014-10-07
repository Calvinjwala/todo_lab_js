var form = document.getElementById("toDoForm");
// we look for the form id
var list = document.getElementById("toDoList");



var itemAdd = function(event){
  console.log("we've just added this list item:", this.thing.value);
  event.preventDefault();
  var title = this.thing.value;
  var listItem= document.createElement("li");
  var text= document.createTextNode(title);
  listItem.appendChild(text);
  list.appendChild(listItem);
  this.thing.value="";

  var doneButtonTxt = document.createTextNode("Done");
  var doneButton = document.createElement("button");
  doneButton.appendChild(doneButtonTxt);
  doneButton.addEventListener("click", finished); 
  listItem.appendChild(doneButton);
  list.appendChild(listItem);
  // this.listItem.setAttribute()


  var deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", deletion);
  deleteButton.classList.add("hello");
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);
};


var finished = function(event){
  // this.parentElement.toggle();
  this.parentElement.classList.toggle("done");
  if (this.innerHTML === "Done") {
    this.innerHTML = "Undo";
  } else if (this.innerHTML === "Undo") {
    this.innerHTML = "Done";
  }
  console.log("finished");
};

var deletion = function(event){
  this.parentElement.remove();
};

form.addEventListener("submit", itemAdd); 


  // use the variable name and specify which event listener. 
  // in this case, the input type "submit" and  generic function for an event
  // catch the event when the user clicks "Save"
  // the whole form is submitted and that's the input we are waiting for.




// <li>
//   <btn>
//   <btn>
// </li>


// var li = document.createElement("li")
// var btn = document.createElement("button")

// btn.setAttribute("")
// btn.classList.add("")
// btn.addEventListener("click", function)
// this===btn
