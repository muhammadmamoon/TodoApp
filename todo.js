let inp=document.querySelector("input");
let add=document.querySelector(".add");
let ul=document.querySelector("ul");

add.addEventListener("click",function(){
    let item=document.createElement("li")
    let btns=document.createElement("button")
    btns.innerHTML="Delete"; 
    btns.classList.add("delete")
   
    item.innerHTML=inp.value;
   ul.appendChild(item)
   item.appendChild(btns)
})

ul.addEventListener("click",function(event){
    console.dir(event.target.nodeName)
    if(event.target.nodeName=="BUTTON"){
        let itemname=event.target.parentElement;
        itemname.remove();
    }
})