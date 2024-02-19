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