
function hideElementById(elementId) {
    const elements = document.getElementById(elementId);
    elements.classList.add('hidden');
}

function showElementById(elementId) {
    const elements = document.getElementById(elementId);
    elements.classList.remove('hidden');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

document.getElementById("someId").onclick = function () {
    const location = getElementTextById('bus-screen');
    window.location.hash = location;
};





