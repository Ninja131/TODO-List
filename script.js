

const input_Field = document.querySelector("#input-Field");
const todo_list_Wrap = document.querySelector(".todo_list-Wrap");
const addButton = document.querySelector("#add-button");

let taskText = "";
addButton.onclick= function(){
    taskText = input_Field.value.trim();

    if(taskText === ""){
    alert("please write something");
    return;
   }
   else{
    create_list();

 

   

    







   


   }

   input_Field.value = "";
   
};












//create list
function create_list(){

    const todo_list_content_wrap = document.createElement("div");
    todo_list_content_wrap.classList.add("todo_list_content-wrap");

    const text_wrap = document.createElement("div");
    text_wrap.classList.add("text-wrap");

    const front_icon = document.createElement("img");
    front_icon.src = "./assets/radio.svg";

    const list = document.createElement("li");
    list.textContent= taskText;
    
    const back_icon = document.createElement("img");
    back_icon.src = "./assets/close super dark.svg";
    back_icon.classList.add("back_icon");


    todo_list_Wrap.append(todo_list_content_wrap);
    todo_list_content_wrap.append(text_wrap);
    todo_list_content_wrap.append(back_icon);
    text_wrap.append(front_icon);
    text_wrap.append(list);




//event for check uncheck and delete
todo_list_content_wrap.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        console.log("clicked");
         list.classList.toggle("checked");
         if(list.classList.contains("checked")){
            front_icon.src = "./assets/circle checked .svg";
    
        }
        else{
            front_icon.src = "./assets/radio.svg";
    
        }

    }

    else if (e.target.classList.contains("back_icon") ){
        console.log("back icon Clicked")
         todo_list_content_wrap.remove();
    }
});












 
};

    






 













    



//store data in browser
// function storeTask(){
//     localStorage.setItem("data",todo_list_Wrap.innerHTML);
// }

// function getData(){
//     todo_list_Wrap.innerHTML = localStorage.getItem('data');
// }


// getData();