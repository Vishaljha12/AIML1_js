function change(){
document.open();
document.write("<h1>Document is changed</h1>");
document.close();
}
function color()
{
    document.getElementById("head").style.color="blue";
}
function backcolor()
{
    document.getElementById("head").style.color="red";
}
function cha(){
    document.getElementById("head").innerHTML="Double click is done";
}

let x=document.getElementById("oo");
x.addEventListener("click",chan)
function chan(){
    document.getElementById("head").innerHTML="Event is added";
}

function bg(){
    alert("Welcome to my website");
    x.style.backgroundColor="green";
}