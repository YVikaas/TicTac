// 

let flagDraw=0;
const cross=document.querySelector("#crossHolder").innerHTML;
const circle=document.querySelector("#circleHolder").innerHTML;

let turn="cross";
const arr=document.getElementsByClassName("cells");
for(let item of arr)
{
    item.addEventListener("click",Add);
}
function Add(e){
    const targetCell=e.target;
   
      if(turn=="cross")
        {
            targetCell.innerHTML=cross;
            turn="cirlce"
            targetCell.title="cross"
            targetCell.removeEventListener("click",Add);
            turnChanger(circle);
        }
        else{
            targetCell.innerHTML=circle;
            turn="cross";
            targetCell.title="circle"
            targetCell.removeEventListener("click",Add);
            turnChanger(cross);
        }
        
        const flag=checkWin();
        if(flag==1){
            const a=document.querySelector("#popUp1");
            a.style.zIndex="100";
            a.style.opacity="1"
        }
        else if(flag==2)
        {
            const a=document.querySelector("#popUp2");
            a.style.zIndex="100";
            a.style.opacity="1"
        }
    else if(flag==9){
        const a=document.querySelector("#popUp3");
            a.style.zIndex="100";
            a.style.opacity="1"
    }
        
}

function checkWin(){
     flagDraw=flagDraw+1;
    const checkArr=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

    for(let item of checkArr)
    {
        
        const a =document.querySelector(`#cell${item[0]}`).title;
        const b =document.querySelector(`#cell${item[1]}`).title;
        const c =document.querySelector(`#cell${item[2]}`).title;

        if(a=="cross"&&b=="cross"&&c=="cross"){
            return 1;
        }
        else if(a=="circle"&&b=="circle"&&c=="circle"){
            return 2;
        }
        else if(flagDraw==9){
            return 9;
        }

    }
    
    return 0;
}

function reset(){
    location.reload();
}

function turnChanger(holder){
    const holderParent=document.querySelector("#turnHolder");
    holderParent.innerHTML=holder;
}
