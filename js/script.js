
function getHideElement(){ 
    hideElementById('header-screen');
    hideElementById('home-screen');
    hideElementById('bus-screen');
    hideElementById('footer-screen');
    showElementById('success-screen');
}

function getShowElement(){
    hideElementById('success-screen');
    showElementById('header-screen');
    showElementById('home-screen');
    showElementById('bus-screen');
    showElementById('footer-screen');
}



// function getShowElement(){
//     const hideElement = document.getElementById('success-screen');
//     hideElement.classList.remove('hidden');
// }