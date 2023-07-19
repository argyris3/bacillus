const buttons = document.querySelectorAll('.button');
const tabs = document.querySelectorAll('.tabcontents');
let currentTab = 'tab-one';

buttons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
  currentTab = event.currentTarget.getAttribute('target-tab');
  updateTabsUI();
}

function updateTabsUI() {
  tabs.forEach((tab) => {
    tab.getAttribute('id') === currentTab ? tab.classList.add('tab--visible') : tab.classList.remove('tab--visible');
  });
}

const header = document.querySelector('.header');
const links = header.getElementsByClassName('tablink');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
updateTabsUI();

// function searchFilter() {
//   let input = document.getElementById('search-item').value;
//   input = input.toLowerCase();
//   let x = document.getElementsByTagName('button');
//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = 'none';
//     } else {
//       x[i].style.display = 'button-list';
//     }
//   }
// }

function Search(item) {
  var collection = document.getElementsByClassName('tablink');
  for (i = 0; i < collection.length; i++) {
    if (collection[i].innerHTML.toLowerCase().indexOf(item) > -1) {
      collection[i].style.display = 'grid';
    } else {
      collection[i].style.display = 'none';
    }
  }
}
