// var button = document.getElementById("add");
// var ul = document.getElementById("list");
// var input = document.getElementById("item");

// function addEvents(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// input.addEventListener("keydown",function(){

//     if(event.keyCode===13)
//     {
//         addEvents();
//     }
// })


// button.addEventListener("click",function(){
//         if(input.value.length > 0)
//         {
//             addEvents();
//         }
// })

//color changer..

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");

function changeColor()
{
    body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
}

color1.addEventListener("input",function(){
    changeColor()
})

color2.addEventListener("input",function(){
    changeColor();
})

// template use
var input = document.getElementById("item");
var place = document.getElementById("word");

input.addEventListener("keydown",function(){
    if(event.keyCode === 13)
    {
        place.appendChild(document.createTextNode("This is working " + `${input.value}`));
    }
})