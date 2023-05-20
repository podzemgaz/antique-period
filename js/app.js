loadCSS('main-page.css');
init();
const toHeroes = document.getElementsByClassName('to-heroes');
const heroes = document.getElementById('heroes');
const toMain = document.getElementsByClassName('to-main-page');
const content = document.querySelector('main');
const book = document.getElementById('book');




book.addEventListener('click', toBookPage);



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
            startReading.addEventListener('click', toBookPage);
        }
        colorActiveNavButton();

    });

}

function getActivePage() {
    const page = localStorage.getItem('ACTIVE_PAGE');

    return page ? page : "main-page.html";
}

function getActiveCss() {
    return getActivePage().replace('.html', '.css');
}

function getActiveElement() {

    const activePage = getActivePage();

    const id = activePage.replace('.html', '');
    return id === "main-page" ? "" : document.getElementById(id);
}

function colorActiveNavButton() {
    const activeElement = getActiveElement();
    if (activeElement) {
        // console.log(true);
        activeElement.classList.add('active');
    }
}

function removeColorActiveNavButton() {
    const activeElement = getActiveElement();
    if (activeElement) {
        // console.log(activeElement);
        activeElement.classList.remove('active');
    }
}

function toHeroesPage() {
    setActivePage('heroes.html');
}

function toBookPage() {
    setActivePage('book.html');
}

function toMainPage() {
    setActivePage('main-page.html');
}

function setActivePage(page) {
    removeColorActiveNavButton();
    reloadCss(page);
    localStorage.setItem('ACTIVE_PAGE', page);
    init();
}

function reloadCss(fileName) {
    var css = fileName.replace(".html", '.css');
    var activeCss = getActiveCss();
    
    if (activeCss !== css) {
        unloadCSS(activeCss);
        loadCSS(css);
    } 
}

function loadCSS(filename) {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'css/' + filename);
    document.head.appendChild(link);
}

function unloadCSS(filename) {
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.getAttribute('href') === 'css/' + filename) {
        link.parentNode.removeChild(link);
        break;
      }
    }
  }