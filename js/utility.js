
function hideElementById(elementId){
    const elements = document.getElementById(elementId);
    elements.classList.add('hidden');
}

function showElementById(elementId){
    const elements = document.getElementById(elementId);
    elements.classList.remove('hidden');
}