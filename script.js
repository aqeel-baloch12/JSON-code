
function dogreating(aqeelbaloch){

let date =new Date();
    
let hours=date.getHours();
// let hours=6;

let heading=document.querySelector('#aqeel');


if(hours>5 && hours<12){

heading.innerText=`GOOD MORNING ${aqeelbaloch}`;

}
else if( hours>12 && hours<18){

heading.innerText=`good afternoon ${aqeelbaloch}`;
}
else{
heading.innerText=`good night ${aqeelbaloch}`;
}
}
dogreating('aqeel');










let NOofpressed=localStorage.getItem('NOofpressed') || 0;

function buttonpressed(){
    NOofpressed++;
    localStorage.setItem('NOofpressed', NOofpressed);
     update();


}


function update(){

    let button =document.querySelector('#text-button');
   
    if(NOofpressed % 2 === 0){
        button.classList.remove('js-odd');
        button.classList.add('js-even');
    }
    else{
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    
    button.innerText=NOofpressed;
}
update();
