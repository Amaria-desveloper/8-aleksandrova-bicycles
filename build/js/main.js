'use strict';

(function () {
  const headerMenu = document.querySelector(`.header__menu`);
  const headerToggle = document.querySelector(`.header__toggle`);


  /**
   * Инициализирует внешний вид меню при работающем сценарии
   * @returns void
   */
  function setInitialMenu() {
    headerToggle.classList.remove(`header__toggle--nojs`);
    headerMenu.classList.remove(`menu--nojs`);
  }


  /**
   * Ловит событие click на меню-гамбургере
   * @param {event} evt
   * @returns void
   */
  function toggleClickHandler(evt) {
    evt.preventDefault();
    headerMenu.classList.toggle(`menu--open`);
    headerToggle.classList.toggle(`header__toggle--open`);

    let menuLinks = headerMenu.querySelectorAll(`.menu__link`);

    if (menuLinks) {
      for (let link of menuLinks) {
        link.addEventListener(`click`, function() {
          headerMenu.classList.remove(`menu--open`);
          headerToggle.classList.remove(`header__toggle--open`);
        });
      }
    }
  }

  if (headerMenu && headerToggle) {
    setInitialMenu();
    headerToggle.addEventListener(`click`, toggleClickHandler);
  }
})();
