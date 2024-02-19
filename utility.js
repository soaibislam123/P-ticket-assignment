function setInnerText(id, value){
    document.getElementById(id).innerText = value

}

function pushChildAndSet(id, value){
    const push = document.getElementById(id);
    push.appendChild(value)
}