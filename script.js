const gacha = document.getElementById('gacha');
const btn = document.getElementById('spinBtn');

btn.addEventListener('click', () => {
  if (gacha.classList.contains('spin')) return;

  gacha.classList.add('spin');

  setTimeout(() => {
    gacha.classList.remove('spin');
  }, 1200);
});
