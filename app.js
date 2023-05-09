
const heroes = document.getElementsByClassName('heroes')[0];
const logo = document.getElementsByClassName('logo')[0];
const content = document.getElementById('content');



heroes.addEventListener('click', setActiveHeroes);
logo.addEventListener('click', setActiveLog);

function init() {
    $.get(getActivePage(), function(data) {
        content.innerHTML = data;
        addActive();
    });
}

function getActivePage() {
    const page = localStorage.getItem('ACTIVE_PAGE');

    return page ? page : "content.html";
}

function getActiveElement() {

    const pageName = getActivePage();

    // console.log();
    const elementClassName = pageName.replace('.html', '');
    return  elementClassName === "content" ? "" : document.getElementsByClassName(elementClassName)[0];
}

function addActive() {
    const activeElement = getActiveElement();
    if (activeElement) {
        console.log(true);
        activeElement.classList.add('active');
    }
}

function removeActive() {
    const activeElement = getActiveElement();
    if (activeElement) {
        console.log(true);
        activeElement.classList.remove('active');
    }
}

function setActiveHeroes() { 
    removeActive();
    localStorage.setItem('ACTIVE_PAGE', 'heroes.html');
    
    heroes.classList.add('active');
    init();
}

function setActiveLog() {
    removeActive();
    localStorage.setItem('ACTIVE_PAGE', '');
    init();
}

init();