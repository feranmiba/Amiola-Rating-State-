'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const button = document.querySelector('.close-modal');
const btnsactiveState = document.querySelector('.melt');
const choose = document.querySelectorAll('.two');

console.log(choose);

const btncloseit = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const btnopenit = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsactiveState.addEventListener('click', btnopenit);

button.addEventListener('click', btncloseit);

overlay.addEventListener('click', btncloseit);

modal.addEventListener('click', btncloseit);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Enter' && modal.classList.contains('hidden')) {
    btnopenit();
  }
});

for (let i = 0; i < choose.length; i++) {
  console.log(choose[i].textContent);
  choose[i].addEventListener('click', function () {
    console.log(`clicked`);
    document.querySelector(
      '.select'
    ).textContent = `You selected ${choose[i].textContent} out of 5`;
  });
}
