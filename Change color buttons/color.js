var all_button=document.getElementsByTagName("button");
var copyall_button=[];
for(let i=0;i<all_button.length;i++){
    copyall_button.push(all_button[i].classList[1]);
}
function buttoncolorChange(buttonThing){
if(buttonThing.value==="red"){
    buttonRed();
}
else if(buttonThing.value==="green"){
    buttonGreen();
}
else if(buttonThing.value==="reset"){
    buttonReset();
}
else if(buttonThing.value==="random"){
    buttonRandom();
}
else if(buttonThing.value==="blue"){
    buttonBlue();
}
}
function buttonRed(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add("btn-danger");
    }
}
function buttonGreen(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add("btn-success");
    }
}
function buttonReset(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyall_button[i]);
    }
}
function buttonRandom(){
    let choices=["btn-primary","btn-danger","btn-success","btn-warning"];
    
    
    for(let i=0;i<all_button.length;i++){
        var randomnumber=Math.floor(Math.random()*4);
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(choices[randomnumber]);
    }
}
function buttonBlue(){
    for(let i=0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add("btn-primary");
    }
}