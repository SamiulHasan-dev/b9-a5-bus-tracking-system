
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
    seat.addEventListener('click',function(){
    seat.style.backgroundColor = '#1DD100';
    seat.style.color = 'white';

    const available = document.getElementById('seat-available');
    const availableIndex = available.innerText;
    const availableNum = parseInt(availableIndex);

    const availableLast = availableNum - 1;
    console.log(availableLast);

    });

    

    
}



// for (let seat of givenSeat) {
    
//     seat.addEventListener("click", function(){
//         btn.style.backgroundColor = 'red';
//       })
//     }





// function getShowElement(){
//     const hideElement = document.getElementById('success-screen');
//     hideElement.classList.remove('hidden');
// }