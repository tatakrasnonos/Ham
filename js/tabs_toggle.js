'use strict';

const tabsList = document.querySelector('.services-tabs');
const tabsTitles = document.querySelectorAll('.service-tab');
const paragraphs = document.querySelectorAll('.service-description');
const className = 'service-tab-active';

const tabsTitlesArr = Array.from(tabsTitles);
const paragraphsArr = Array.from(paragraphs);

showCurrentTab();
tabsList.addEventListener('click', changeClass);

function changeClass(event) {
  event.preventDefault();
  const tab = event.target.closest('li');

  for (const elem of tabsTitles) {
    elem.classList.remove(className);
  }

  tab.classList.add(className);
  showCurrentTab();
}

function showCurrentTab() {
  for (const tab of tabsTitles) {
    if (tab.classList.contains(className)) {
      for (const el of paragraphs) {
        el.style.display = 'none';
      }
      const index = tabsTitlesArr.findIndex(element => element.classList.contains(className));
      paragraphsArr[index].style.display = 'flex';
    }
  }
}