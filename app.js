init();
const heroes = document.getElementsByClassName('heroes')[0];
const toMain = document.getElementsByClassName('to-main');
const content = document.getElementById('content');
const book = document.getElementById('book');




heroes.addEventListener('click', setActiveHeroes);

book.addEventListener('click', setActiveBook);



for (let index = 0; index < toMain.length; index++) {
    const element = toMain[index];
    element.addEventListener('click', toMainPage);
}

function init() {
    $.get(getActivePage(), function(data) {
        content.innerHTML = data;
        let startReading = document.querySelector('#start-reading');
        if (startReading) {
            startReading.addEventListener('click', setActiveBook);
        }
        addActive();
    });
    // setTimeout(() => {
    //     let startReading = document.querySelector('#start-reading');

    // console.log(startReading);
    // }, 1000);
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
        // console.log(true);
        activeElement.classList.add('active');
    }
}

function removeActive() {
    const activeElement = getActiveElement();
    if (activeElement) {
        // console.log(true);
        activeElement.classList.remove('active');
    }
}

function setActiveHeroes() { 
    removeActive();
    localStorage.setItem('ACTIVE_PAGE', 'heroes.html');
    
    heroes.classList.add('active');
    init();
}

function setActiveBook() {
    removeActive();
    localStorage.setItem('ACTIVE_PAGE', 'book.html');

    book.classList.add('active');
    init();
}

function toMainPage() {
    removeActive();
    localStorage.setItem('ACTIVE_PAGE', '');
    init();
}