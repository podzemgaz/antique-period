function setNavHeight() {
  var nav = document.getElementById('myNav');
  var navWidth = nav.offsetWidth;
  var navHeight = (navWidth * 0.12) - 72;
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

  var test = document.querySelector('.test');
  var titleHeight = title.offsetHeight;
  var difference = navHeight - titleHeight;

 

  var testHeight = (difference > 15) ? 100 - difference : 85;

  test.style.height = testHeight + '%';

  title.style.left = logoWidth + 10 + 'px';

  var left = titleWidth + logoWidth + 10;

  var mid = left + (navWidth - authorWidth - left) / 2;

  var heroesLeft = mid - heroesWidth - 10;
  
  heroesLeft = (left < heroesLeft) ? heroesLeft : left;

  var bookLeft = mid + 10;

  bookLeft = (left + heroesWidth + 10 < bookLeft) ? bookLeft : left + heroesWidth + 10;

  heroes.style.left = heroesLeft + 'px';
  book.style.left = bookLeft + 'px';


}

function getWidth(element) {
  return element.getBoundingClientRect().right - element.getBoundingClientRect().left;
}

// Вызываем функцию setNavHeight() при загрузке страницы и изменении размеров окна
window.addEventListener('load', setNavHeight);
window.addEventListener('resize', setNavHeight);

