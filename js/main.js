const $cardRank = document.getElementById('card-rank'),
  $cardThank = document.getElementById('card-thank'),
  $btnValue = document.querySelectorAll('.containerBtn__btn'),
  $submit = document.getElementById('submit'),
  $back = document.getElementById('back'),
  $rank = document.getElementById('rank');

$submit.addEventListener('click', () => {
  $cardRank.classList.add('hidden');
  $cardThank.classList.remove('hidden');
});

$back.addEventListener('click', () => {
  $cardThank.classList.add('hidden');
  $cardRank.classList.remove('hidden');
});

$btnValue.forEach((btn) => {
  btn.addEventListener('click', () => {
    rank.innerHTML = btn.innerHTML;
  });
});
