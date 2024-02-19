const colorButtons = document.getElementsByClassName('add-btn');

let count = 0 ;
let ticketPrice = 550 ;

for(const btn of colorButtons){
  btn.addEventListener('click', function(e){
    btn.style.backgroundColor = "green";
    btn.classList.add('text-yellow-400');
    btn.disabled = true;
    btn.style.color = 'white'

    count = count + 1;

    if(count == 4){
        for(const button of colorButtons){
            button.setAttribute('disabled', true)
        } 
    }

    const countedSeat = document.getElementById('seat-amount').innerText;
    const convertedtotalSeat =parseInt(countedSeat);
    document.getElementById('seat-amount').innerText = convertedtotalSeat-1;

    const finalPrice = document.getElementById('final-price').innerText;
    const convertedFinalPrice = parseInt(finalPrice)
    const mainPrice =  document.getElementById('final-price').innerText= convertedFinalPrice + ticketPrice

    const setBackground = e.target;
    const seatNumber = e.target.innerText;
    const p = document.createElement('p')
        p.innerText = seatNumber
    const p2 = document.createElement('p')
        p2.innerText = 'Economy'
    const p3 = document.createElement('p')
        p3.innerText = '550'

        pushChildAndSet('list-seat',p)
        pushChildAndSet('title-class',p2 )
        pushChildAndSet('prices',p3) 

        setInnerText('grand-total', mainPrice)
        setInnerText('total-price', mainPrice)
        setInnerText('counted-seat', count)

        



  })
}


function popupBtn(){
  const completeBtn = document.getElementById('popup-section');
  completeBtn.classList.remove('hidden')

  document.getElementById('header').classList.add('hidden')
}


document.getElementById('copone').addEventListener('keyup', function(e){
  const text = e.target.value;
  const coponeBtn = document.getElementById('copone-btn')
  if(text === 'NEW15' || text === 'Couple 20'){
      coponeBtn.removeAttribute('disabled')
  }
  else{
      coponeBtn.setAttribute('disabled',true)
  }
})

function discount(){
    
  const grandTotalButton = document.getElementById('grand-total').innerText
  const convertedGrandTotal = parseInt(grandTotalButton) 
      
 const discount1 =  convertedGrandTotal * 15 /100;
 const finalGrandTotal = convertedGrandTotal - discount1
 setInnerText('grand-total', finalGrandTotal)

  
  const coponeContainer = document.getElementById('copone-container')
  coponeContainer.classList.add('hidden')
}