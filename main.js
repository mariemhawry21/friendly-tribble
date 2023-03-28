let btn=document.querySelector("button");
let error=document.querySelector("#error");
let msg=document.querySelector("#show-msg");

let pattern=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/ig;
btn.addEventListener("click",check);
function check(event){
let input=document.querySelector("#inp").value;
if(pattern.test(input)===true){
console.log("yes");
}else{
    event.preventDefault();
    msg.style.display="block";
    error.style.display="block";
    console.log(input);
}
}

