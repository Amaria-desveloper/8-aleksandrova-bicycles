'use strict';

(function () {
  const headerMenu = document.querySelector('.header__menu');
  const headerToggle = document.querySelector('.header__toggle');
  const root = document.querySelector('.root');


  /**
   * Инициализирует внешний вид меню при работающем сценарии
   * @return {void}
   */
  function setInitialMenu() {
    headerToggle.classList.remove('header__toggle--nojs');
    headerMenu.classList.remove('menu--nojs');
  }


  /**
   * Ловит событие click на меню-гамбургере
   * @param {event} evt
   * @return {void}
   */
  function toggleClickHandler(evt) {
    evt.preventDefault();
    headerMenu.classList.toggle('menu--open');
    headerToggle.classList.toggle('header__toggle--open');
    root.classList.add('root--overflow');

    const menuLinks = headerMenu.querySelectorAll('.menu__link');

    if (menuLinks) {
      for (const link of menuLinks) {
        link.addEventListener('click', () => {
          headerMenu.classList.remove('menu--open');
          headerToggle.classList.remove('header__toggle--open');
          root.classList.remove('root--overflow');
        });
      }
    }
  }

  if (headerMenu && headerToggle) {
    setInitialMenu();
    headerToggle.addEventListener('click', toggleClickHandler);
  }


})();
