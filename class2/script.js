// let para= document.getElementById("mypara");
// let text= para.getAttribute("class");
// document.getElementById("head").innerHTML=text;


// function change(){
//     document.getElementById("head").setAttribute("class","hi");
//     document.getElementById("head").innerHTML="Class is changed";
// }
// document.getElementById("head").style.color="red";
// const heading=document.createElement("h2");
// const bodytag=document.querySelector("body");
// bodytag.prepend(heading);
// bodytag.remove(heading);
// heading.innerHTML="This is heading 2";/
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