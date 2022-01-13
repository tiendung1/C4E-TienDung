

// const Litags = document.getElementsByClassName("li")
// for (let i = 0; i < Litags.length; i++) {
//     Litags[i].style.color = "red";
// }
const list = document.getElementById("listUl")
const btnAdd = document.getElementById("btnAdd")
const btnRemoveAll = document.getElementById("btnRmove")
const btnColor = document.querySelector("btn-Color")
const color = ["red", "blue" , "yellow", "green" , "white"]
const div = document.getElementById("content")
// btnColor.onclick = changecolor()
function changecolor()
   { const randomColor = color[Math.floor(Math.random() * color.length)]
    div.style.backgroundColor = randomColor}

function add(){
    const input = document.getElementById("input").value
    console.log(input)
    const li = document.createElement("li")
    const inputvalue = document.createElement("inputvalue")
    inputvalue.innerHTML = input + " "
    const btnRemove = document.createElement("button")
    btnRemove.innerHTML = "Remove"
    
    li.appendChild(inputvalue)
    li.appendChild(btnRemove)
    list.appendChild(li)

    btnRemove.onclick = removeE
    function removeE(){
        btnRemove.parentNode.remove()
    }
}
function removeALL(){
    console.log("RemoveAll")
    list.innerHTML = " "
}
