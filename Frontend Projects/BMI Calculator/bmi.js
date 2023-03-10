const btnEl=document.getElementById("btn");
const bmiInputEl=document.getElementById("bmi-result")
const weightcondition=document.getElementById("weight-condition")

function calculateBMI(){
   const heightvalue=document.getElementById("height").value/100
   const weightvalue=document.getElementById("weight").value
    const bmivalue=weightvalue/(heightvalue*heightvalue)
   bmiInputEl.value=bmivalue;

   if(bmivalue<18){
     weightcondition.innerText="Under weight"
   }else if(bmivalue>=18.5 && bmivalue<=24.9)
   {
     weightcondition.innerText="Normal Weight"
   }else if (bmivalue>=25 && bmivalue<=29.9)
   {
     weightcondition.innerText="Overweight"
   }else if(bmivalue >= 30)
   {
    weightcondition.innerText="Obesity"
   }
}
btnEl.addEventListener("click",calculateBMI);