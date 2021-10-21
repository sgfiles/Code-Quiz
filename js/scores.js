var button = document.querySelector("#out")

function AddLi(str)
{
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(str))
    li.innerHTML += ' <button onclick="this.parentNode.remove()">-</button>';
    document.getElementById("out").appendChild(li);
}

button.addEventListener("click",function(event){
    event.preventDefault();
})

var userinput = document.querySelector("#userinput").value;

localStorage.setItem('userinput', userinput);
document.getElementById("userinput").innerHTML = localStorage.getItem('userinput');
