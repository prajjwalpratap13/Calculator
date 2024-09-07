let string="";
let buttons=document.querySelectorAll("button");
let input=document.querySelector(".input");

Array.from(buttons).forEach(val=>{
    val.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerText=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerText=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string=string+e.target.innerText;
            input.value=string;
        }
    })
})