// const add=document.querySelector('#button');
function addTodo(event) {
    if (event.code === "Enter") {
        let toDo = document.getElementById("todo").value;
        if (toDo) {
            let listItem = ` <li>
      <span><button type="button" id="remove">REMOVE</button></span>
     ${toDo}
          
  </li>`


            let container = document.getElementById("to-container");
            container.innerHTML += listItem;
        }
        else {
            alert("Enter the Correct value")
        }

    }

}
document.querySelector("ul").addEventListener('click',function(event){
    event.target.classList.toggle('completed');
    
    console.log(event.target.tagName);
    // if(event.target.tagName==="BUTTON")
    // {
    // console.log(event.target.parentElement.part)
    // }
    if(event.target.tagName==="LI")
    {
        event.target.remove();
    }
});
document.querySelector 

// function todo(){
//     // console.log("hey");
//     let toDo= document.getElementById("todo").value;

//     let listItem=` <li>
//     <span><button type="button" id="remove">REMOVE</button></span>
//    ${toDo}

// </li>`


//   let container=document.getElementById("to-container");
//     container.innerHTML +=listItem;
// }