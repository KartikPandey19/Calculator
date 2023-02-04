const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const keys = document.querySelector(".keys");


keys.addEventListener('click',e=>{
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        
        if(!action){
            if(displayNum==="0"){
                display.textContent=keyContent;
            }else{
                display.textContent=displayNum+keyContent;
            }
            console.log("number key!");
        }
        if(
            action ==="add"||
            action ==="subtract"||
            action ==="multiply"||
            action ==="divide"
            ){
                key.classList.add("is-depressed");
            }
        if(action ==="decimal"){
            display.textContent = displayNum +'.';
        }
        if(action ==="clear"){
            console.log("clear key!");
        }
        if(action ==="equal"){
            console.log("equal key!");
        }
        



    }
})

