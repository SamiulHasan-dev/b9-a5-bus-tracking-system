
function getHideElement() {
    hideElementById('header-screen');
    hideElementById('home-screen');
    hideElementById('bus-screen');
    hideElementById('footer-screen');
    showElementById('success-screen');
}

function getShowElement() {
    hideElementById('success-screen');
    showElementById('header-screen');
    showElementById('home-screen');
    showElementById('bus-screen');
    showElementById('footer-screen');
}



const givenSeat = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
//const seats = document.querySelectorAll('.color');


for (let i = 0; i < givenSeat.length; i++) {
    const sitId = givenSeat[i];
    const seat = document.getElementById(sitId);
    seat.addEventListener('click', function () {

        const chooseSeats = document.querySelectorAll('.selected').length;
        if (chooseSeats < 4) {

            seat.classList.remove('available');
            seat.classList.add('selected');
            seat.classList.add('bg-[#1DD100]');
            seat.classList.add('text-white');

            const seatAvailable = getTextElementValueById('seat-available');
            const seatNumber = seatAvailable - 1;
            setTextElementValueById('seat-available', seatNumber);

            const seatInfo = document.createElement('p');
            seatInfo.innerText = sitId;
            const seatClass = document.createElement('p');
            seatClass.innerText = 'Economy';
            const seatPrice = document.createElement('p');
            seatPrice.innerText = '550';

            document.getElementById('seat-info').appendChild(seatInfo);
            document.getElementById('seat-info').appendChild(seatClass);
            document.getElementById('seat-info').appendChild(seatPrice);

            const totalPrice = getTextElementValueById('total-price');
            const price = (totalPrice + 550).toFixed(2);
            setTextElementValueById('total-price', price);

            // const coupon = getCoupon('coupon-input');
            
            
            if (chooseSeats === 3) {
                const grandTotal = document.getElementById('grand-price');
                const grandPrice = price - (price * 0.15);
                grandTotal.innerText = grandPrice;
            }
            else {
                const grandTotal = document.getElementById('grand-price');
                grandTotal.innerText = price;
            }


        }
        else {
            alert("You Can't Select More Than 4 Seats");
        }
    });
}


// document.getElementById('coupon-input').addEventListener('keyup',function(event){
//     const text = event.target.value;
//     const deleteButton = document.getElementById('apply-button');
//     if (text === 'NEW15' || text === 'Couple20') {
//         deleteButton.removeAttribute('disabled');

//     }
//     else {
//         deleteButton.setAttribute('disabled', true);
//     }
// });

document.getElementById('input-field').addEventListener('keyup', function(event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-apply');
    if (text === 'NEW15' || text === 'Couple20') {
        deleteButton.removeAttribute('disabled');

    } else {
        deleteButton.setAttribute('disabled', true);
    }
})




function apply() {
    hideElementById('input-container');
    showElementById('discount-container');
}