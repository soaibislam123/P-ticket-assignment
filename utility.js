function setInnerText(id, value){
    document.getElementById(id).innerText = value

}

function pushChildAndSet(id, value){
    const push = document.getElementById(id);
    push.appendChild(value)
}


const nameInput = document.getElementById('name-input')
const numberInput = document.getElementById('phone-number-input')

const enableButton = document.getElementById('next-btn')

nameInput.addEventListener('input', function(){
    if (nameInput.value.trim() !== '' || numberInput.value.trim() !== '') {
        enableButton.removeAttribute('disabled');
      } else {
        enableButton.setAttribute('disabled',true);
      }
})