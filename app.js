let addBtn = document.querySelector(".addBtn");
let addTask = document.querySelector(".addTask");
let tasks = document.querySelector(".task");
let i = 1 ;

addBtn.addEventListener("click" , function(){
    if(addTask.value == ''){
        alert("Please Enter the Task") ;
    }else{
        let newTask = document.createElement("li");
        let Btn = document.createElement("button");
        Btn.innerHTML = "X";
        newTask.innerHTML = `${i}. ${addTask.value}` ;
        tasks.appendChild(newTask);
        newTask.appendChild(Btn);
        addTask.value = null ;
        i++;
        Btn.addEventListener("click" , function(){
            this.parentElement.remove();
            i--;
        });
        newTask.addEventListener("click" , function(){
            newTask.style.backgroundColor = 'rgb(55, 227, 255)';
            newTask.innerHTML = "Comlepted !";
            newTask.appendChild(Btn);
            Btn.style.background = "#0026f2";
        })
    }
});

