const square=document.querySelector(".square")
const bgclr=document.querySelector(".bg-color")
const step =20;
document.body.addEventListener("keydown",e=>{
if(e.key=="ArrowRight"){
    goRight();
}
 else if (e.key == "ArrowLeft") {
    goLeft();
}
else if (e.key == "ArrowUp") {
    goUp();
}
})


function goRight(){
    let marLeft=square.style.marginLeft ? parseInt(square.style.marginLeft):0
    if(marLeft+step<=bgclr.clientWidth -square.clientWidth){
        square.style.marginLeft=marLeft+step+"px";
        console.log("Right "+square.style.marginLeft)
    }
    else{
        square.style.marginLeft=bgclr.clientWidth - square.clientWidth+"px";
        console.log("Right "+square.style.marginLeft)

    }

}
function goLeft() {
    let marLeft = square.style.marginLeft ? parseInt(square.style.marginLeft):0 
    if(marLeft-step<=bgclr.clientWidth - square.clientWidth){
        square.style.marginLeft=marLeft-step+"px";
        console.log("Left "+square.style.marginLeft)

    }
    else{
        square.style.marginLeft>0 bgclr.clientWidth - square.clientWidth+"px";
        console.log("Left "+square.style.marginLeft)
    }
}



function goUp(){
    let marLeft=square.style.marginLeft ? parseInt(square.style.marginLeft):0
    if(marLeft+step<=bgclr.clientWidth -square.clientWidth){
        square.style.marginLeft=marLeft+step+"px";
    }
    else{
        square.style.marginLeft=bgclr.clientWidth - square.clientWidth+"px";
    }

}



