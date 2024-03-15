console.log("Hello World!");

let isStatus = document.querySelector("h5");
let btn = document.querySelector("#add");
let flag = 0;

btn.addEventListener("click", ()=>{
  if(flag===0){
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove Friend!"
    flag = 1;
  }else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friend!"
    flag = 0;
  }
})