function setNavHeight() {
  var nav = document.getElementById('myNav');
  var navWidth = nav.offsetWidth;
  var navHeight = (navWidth * 0.12) - 72;
  navHeight = (navHeight > 48) ? navHeight : 48;
  nav.style.height = navHeight + 'px';


  var logo = document.getElementById('logo');
  var logoWidth = getWidth(logo);
  var title = document.getElementById('title');
  var titleWidth = getWidth(title);
  var heroes = document.getElementById('heroes');
  var heroesWidth = getWidth(heroes);
  
  var author = document.getElementById('author');
  var authorWidth = getWidth(author);
  var book = document.getElementById('book');

  var textButtons = document.getElementById('nav-text-buttons');

  var titleHeight = title.offsetHeight;
  var difference = navHeight - titleHeight;

  var textButtonsHeight = (difference > 15) ? 100 - difference : 85;

  textButtons.style.height = textButtonsHeight + '%';

  var spaceBetweenButtons = Math.max(3, navWidth / 100); 

  title.style.left = logoWidth + spaceBetweenButtons + 'px';

  var left = titleWidth + logoWidth + spaceBetweenButtons;

  var mid = left + (navWidth - authorWidth - left) / 2;

  var heroesLeft = mid - heroesWidth - spaceBetweenButtons;

  heroesLeft = (left < heroesLeft) ? heroesLeft : left + spaceBetweenButtons;

  var bookLeft = mid + 10;

  bookLeft = (left + heroesWidth + spaceBetweenButtons < bookLeft) ? bookLeft : left + heroesWidth + spaceBetweenButtons;

  heroes.style.left = heroesLeft + 'px';
  book.style.left = bookLeft + 'px';


}

function getWidth(element) {
  return element.getBoundingClientRect().right - element.getBoundingClientRect().left;
}


// Вызываем функцию setNavHeight() при загрузке страницы и изменении размеров окна
window.addEventListener('load', setNavHeight);
window.addEventListener('resize', setNavHeight);

