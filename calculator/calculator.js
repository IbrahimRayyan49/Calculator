document.addEventListener("DOMContentLoaded",function()
{
const operands=document.querySelectorAll(".buttons");
const output=document.getElementById("output");
let result="";
operands.forEach(button=>{
button.addEventListener("click",function()
{
let expression=this.dataset.choice;
if(expression=='=')
{
   result=result.replace("=","");
   result=eval(result);
   output.textContent=result;

}
else if(expression=="AC")
{
    output.textContent="";
    result="";
}
else
{
    console.log(output);
output.textContent+=expression;
result+=expression;
}




})
})



})