init();
const toHeroes = document.getElementsByClassName('to-heroes');
const heroes = document.getElementById('heroes');
const toMain = document.getElementsByClassName('to-main-page');
const content = document.getElementById('content');
const book = document.getElementById('book');




book.addEventListener('click', setActiveBook);



for (let index = 0; index < toMain.length; index++) {
    const element = toMain[index];
    element.addEventListener('click', toMainPage);
}

for (let index = 0; index < toHeroes.length; index++) {
    const element = toHeroes[index];
    element.addEventListener('click', toHeroesPage);
}

function init() {
    $.get(getActivePage(), function (data) {

        content.innerHTML = data;
        let startReading = document.querySelector('#start-reading');
        if (startReading) {
            startReading.addEventListener('click', setActiveBook);
        }
        addActive();

    });

}

function getActivePage() {
    const page = localStorage.getItem('ACTIVE_PAGE');

    return page ? page : "main-page.html";
}

function getActiveElement() {

    const activePage = getActivePage();

    console.log(activePage);
    const id = activePage.replace('.html', '');
    return id === "main-page" ? "" : document.getElementById(id);
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
        // console.log(activeElement);
        activeElement.classList.remove('active');
    }
}

function toHeroesPage() {
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

